import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "#3B82F6",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#06B6D4",
  "#EC4899",
  "#84CC16",
];

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg shadow-lg px-4 py-2">
      <p className="font-semibold">{label}</p>
      <p className="text-blue-600">
        Count: <strong>{payload[0].value}</strong>
      </p>
    </div>
  );
}

export default function Charts({ data }) {
  if (!data) return null;

  const characterData = Object.entries(data.character_frequency ?? {}).map(
    ([character, count]) => ({
      character,
      count,
    })
  );

  const wordData = Object.entries(data.word_frequency ?? {})
    .map(([word, count]) => ({
      word,
      count,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  const pieData = [
    {
      name: "Vowels",
      value: data.vowels,
    },
    {
      name: "Consonants",
      value: data.consonants,
    },
    {
      name: "Digits",
      value: data.digits,
    },
    {
      name: "Spaces",
      value: data.spaces,
    },
  ];

  return (
    <div className="space-y-10">

      {/* Character Frequency */}

      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-6 transition">

        <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
          Character Frequency
        </h2>

        {characterData.length ? (
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={characterData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="character" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar
                dataKey="count"
                fill="#2563EB"
                radius={[8, 8, 0, 0]}
                animationDuration={1200}
              />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-500">
            No character frequency data available.
          </p>
        )}

      </div>

      {/* Word Frequency */}

      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-6 transition">

        <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
          Top 10 Words
        </h2>

        {wordData.length ? (
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={wordData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="word" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar
                dataKey="count"
                fill="#16A34A"
                radius={[8, 8, 0, 0]}
                animationDuration={1200}
              />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-500">
            No word frequency data available.
          </p>
        )}

      </div>

      {/* Pie Chart */}

      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-6 transition">

        <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
          Text Composition
        </h2>

        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              label
              animationDuration={1200}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}