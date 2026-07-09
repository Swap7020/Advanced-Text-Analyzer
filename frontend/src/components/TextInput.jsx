import { useEffect, useRef, useState } from "react";
import API from "../api/api";
import toast from "react-hot-toast";

import {
  FaSearch,
  FaTrash,
  FaCopy,
  FaFileAlt,
} from "react-icons/fa";

export default function TextInput({ onResult }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const textareaRef = useRef(null);

  // Auto resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  const characterCount = text.length;

  const wordCount = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  async function analyzeText() {
    if (!text.trim()) {
      toast.error("Please enter some text.");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/analyzer/", {
        text,
      });

      if (response.data.success) {
        onResult(response.data.data);
        toast.success("Analysis completed.");
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      console.error(err);

      if (err.response) {
        toast.error(err.response.data.detail || "Server Error");
      } else if (err.request) {
        toast.error("Backend server is not running.");
      } else {
        toast.error("Unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  }

  function clearText() {
    setText("");
    onResult(null);
    toast.success("Text cleared.");
  }

  async function copyText() {
    if (!text.trim()) {
      toast.error("Nothing to copy.");
      return;
    }

    await navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard.");
  }

  function loadSample() {
    setText(`Python is one of the most popular programming languages in the world.
FastAPI is a modern backend framework.
React is used for building user interfaces.`);
  }

  function handleKeyDown(e) {
    if (e.ctrlKey && e.key === "Enter") {
      analyzeText();
    }
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 transition-colors">

      {/* Header */}

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-2xl font-bold flex items-center gap-2">

          <FaFileAlt />

          Enter Text

        </h2>

        <button
          onClick={loadSample}
          className="text-blue-600 hover:underline"
        >
          Load Sample
        </button>

      </div>

      {/* Textarea */}

      <textarea
        ref={textareaRef}
        rows={8}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Paste or type your text here..."
        className="w-full border dark:border-slate-700 bg-white dark:bg-slate-900 text-black dark:text-white rounded-xl p-5 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      {/* Counters */}

      <div className="flex justify-between text-gray-500 text-sm mt-3">

        <span>

          Characters: {characterCount}

        </span>

        <span>

          Words: {wordCount}

        </span>

      </div>

      {/* Buttons */}

      <div className="flex flex-wrap justify-center gap-4 mt-8">

        <button
          onClick={analyzeText}
          disabled={loading}
          className="bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white px-8 py-3 rounded-xl flex items-center gap-2 transition"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <FaSearch />
              Analyze
            </>
          )}
        </button>

        <button
          onClick={copyText}
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl flex items-center gap-2"
        >
          <FaCopy />

          Copy
        </button>

        <button
          onClick={clearText}
          disabled={loading}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl flex items-center gap-2"
        >
          <FaTrash />

          Clear
        </button>

      </div>

      <p className="text-center text-gray-400 mt-6 text-sm">

        💡 Tip: Press <strong>Ctrl + Enter</strong> to analyze instantly.

      </p>

    </div>
  );
}