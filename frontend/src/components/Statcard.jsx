export default function StatCard({ title, value }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition duration-300">

            <h2 className="text-gray-500 text-sm">

                {title}

            </h2>

            <p className="text-3xl font-bold mt-3 text-blue-600">

                {value}

            </p>

        </div>
    );
}