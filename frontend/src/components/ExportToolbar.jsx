import { useState } from "react";

import {
  FaFilePdf,
  FaFileCsv,
  FaCopy,
} from "react-icons/fa";

import toast from "react-hot-toast";

import { exportPDF } from "../utils/pdfExport";
import { exportCSV } from "../utils/csvExport";

export default function ExportToolbar({ result }) {
  const [loading, setLoading] = useState(false);

  if (!result) return null;

  async function handlePDF() {
    try {
      setLoading(true);
      exportPDF(result);
      toast.success("PDF downloaded successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate PDF.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCSV() {
    try {
      setLoading(true);
      exportCSV(result);
      toast.success("CSV downloaded successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate CSV.");
    } finally {
      setLoading(false);
    }
  }

  async function copyReport() {
    try {
      setLoading(true);

      let report = `
========== Advanced Text Analyzer Report ==========\n\n`;

      Object.entries(result).forEach(([key, value]) => {
        if (typeof value === "object") return;

        const title = key
          .replaceAll("_", " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());

        report += `${title}: ${value}\n`;
      });

      await navigator.clipboard.writeText(report);

      toast.success("Analysis copied to clipboard.");
    } catch (error) {
      console.error(error);
      toast.error("Unable to copy report.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-12">

      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 transition">

        <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-white">
          Export Analysis
        </h2>

        <p className="text-center text-gray-500 dark:text-gray-400 mt-3">
          Save or share your analysis report.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-8">

          {/* PDF */}

          <button
            onClick={handlePDF}
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white px-6 py-3 rounded-xl flex items-center gap-3 transition"
          >
            <FaFilePdf size={20} />

            PDF
          </button>

          {/* CSV */}

          <button
            onClick={handleCSV}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white px-6 py-3 rounded-xl flex items-center gap-3 transition"
          >
            <FaFileCsv size={20} />

            CSV
          </button>

          {/* Copy */}

          <button
            onClick={copyReport}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-6 py-3 rounded-xl flex items-center gap-3 transition"
          >
            <FaCopy size={20} />

            Copy Report
          </button>

        </div>

      </div>

    </div>
  );
}