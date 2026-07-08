import { useState } from "react";
import API from "../api/api";

export default function TextInput({ onResult }) {

    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);

    const analyzeText = async () => {

        if (!text.trim()) {
            alert("Please enter some text.");
            return;
        }

        try {

            setLoading(true);

            const response = await API.post("/analyzer/", {
                text: text,
            });

            onResult(response.data.data);

        } catch (error) {

            console.error(error);
            alert("Failed to analyze text.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="mt-10">

            <textarea
                rows="10"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your text here..."
                className="w-full rounded-xl border p-5 shadow bg-white resize-none"
            />

        <div className="flex justify-center gap-4 mt-6">

            <button
                onClick={analyzeText}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl"
            >
                Analyze
            </button>

            <button
                onClick={() => setText("")}
                className="bg-red-500 text-white px-8 py-3 rounded-xl"
            >
                Clear
            </button>

            <button
                onClick={() => navigator.clipboard.writeText(text)}
                className="bg-green-600 text-white px-8 py-3 rounded-xl"
            >
                Copy
            </button>

        </div>

        </div>

    );
}