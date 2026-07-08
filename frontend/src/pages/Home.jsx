import TextInput from "../components/TextInput";

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-100">

            <div className="max-w-6xl mx-auto py-10 px-5">

                <h1 className="text-5xl font-bold text-center text-blue-600">

                    📝 Advanced Text Analyzer

                </h1>

                <p className="text-center mt-4 text-gray-600">

                    Analyze your text instantly using FastAPI + React

                </p>

                <TextInput />

            </div>

        </div>
    );
}