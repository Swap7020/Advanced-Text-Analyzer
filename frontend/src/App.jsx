import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";
import StatsGrid from "./components/StatsGrid";
import Charts from "./components/Charts";
import ExportToolbar from "./components/ExportToolbar";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 transition-colors">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        <TextInput onResult={setResult} />

        {result && (
          <>
            <StatsGrid data={result} />
            <Charts data={result} />
            <ExportToolbar result={result} />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
