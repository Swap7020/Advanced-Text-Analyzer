export default function StatCard({
  title,
  value,
  icon,
  color = "blue",
}) {
  const colors = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    red: "bg-red-600",
    yellow: "bg-yellow-500",
    purple: "bg-purple-600",
    pink: "bg-pink-600",
    cyan: "bg-cyan-600",
    orange: "bg-orange-600",
  };

  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">

      {/* Top Color Bar */}
      <div
        className={`h-2 rounded-t-2xl ${
          colors[color] || colors.blue
        }`}
      />

      <div className="p-6">

        <div className="flex items-center justify-between">

          <div className="flex-1">

            <p className="text-sm text-gray-500 dark:text-gray-400">

              {title}

            </p>

            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mt-3 break-words">

              {value}

            </h2>

          </div>

          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl text-white ${
              colors[color] || colors.blue
            }`}
          >
            {icon}
          </div>

        </div>

      </div>

    </div>
  );
}