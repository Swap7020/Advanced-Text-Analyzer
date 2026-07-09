import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-slate-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Project Name */}

        <div className="text-center">

          <h2 className="text-3xl font-bold text-white">

            Advanced Text Analyzer

          </h2>

          <p className="mt-3 text-gray-400">

            A Full Stack Text Analytics Dashboard built using
            FastAPI, React, Tailwind CSS and Recharts.

          </p>

        </div>

        {/* Tech Stack */}

        <div className="flex flex-wrap justify-center gap-3 mt-8">

          {[
            "FastAPI",
            "React",
            "Tailwind CSS",
            "Recharts",
            "Axios",
            "Python",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-slate-800 px-4 py-2 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Social Links */}

        <div className="flex justify-center gap-8 mt-10 text-2xl">

          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:YOUR_EMAIL@gmail.com"
            className="hover:text-red-400 transition"
          >
            <FaEnvelope />
          </a>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-700 mt-10 pt-6">

          <p className="text-center text-sm text-gray-400 flex justify-center items-center gap-2">

            Made with

            <FaHeart className="text-red-500" />

            by <span className="font-semibold">Swapnil Repale</span>

          </p>

          <p className="text-center text-xs mt-3 text-gray-500">

            © {year} Advanced Text Analyzer. All Rights Reserved.

          </p>

        </div>

      </div>

    </footer>
  );
}