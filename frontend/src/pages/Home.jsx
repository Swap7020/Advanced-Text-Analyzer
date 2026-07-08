import { useState } from "react";

import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";
import StatsGrid from "../components/StatsGrid";
import Footer from "../components/Footer";

export default function Home() {

    const [result, setResult] = useState(null);

    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="min-h-screen bg-slate-100">

                <div className="max-w-7xl mx-auto py-10 px-5">

                    <h1 className="text-5xl text-center font-bold text-blue-600">
                        📝 Advanced Text Analyzer
                    </h1>

                    <p className="text-center mt-3 text-gray-600">
                        Analyze your text instantly using FastAPI + React
                    </p>

                    {/* Text Input */}
                    <TextInput onResult={setResult} />

                    {/* Results */}
                    <StatsGrid data={result} />

                </div>

            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}