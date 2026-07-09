import { FaMoon, FaSun, FaCode } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { dark, setDark } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 to-indigo-700 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">

          <div className="bg-white text-blue-700 p-3 rounded-full">

            <FaCode size={22} />

          </div>

          <div>

            <h1 className="text-white text-2xl font-bold">

              Advanced Text Analyzer

            </h1>

            <p className="text-blue-100 text-sm">

              FastAPI • React • Tailwind

            </p>

          </div>

        </div>

        <button
          onClick={() => setDark(!dark)}
          className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition"
        >
          {dark ? (
            <FaSun className="text-yellow-300" />
          ) : (
            <FaMoon className="text-white" />
          )}
        </button>

      </div>

    </nav>
  );
}