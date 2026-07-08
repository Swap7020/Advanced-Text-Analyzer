import { useState } from "react";

export default function TextInput() {

    const [text, setText] = useState("");

    return (

        <div className="mt-10">

            <textarea
                rows="10"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your text here..."
                className="w-full border rounded-xl p-5 shadow bg-white resize-none"
            />

            <div className="flex justify-center mt-6">

                <button
                    className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                >
                    Analyze Text
                </button>

            </div>

        </div>

    );
}