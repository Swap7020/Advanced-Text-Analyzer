import StatCard from "./StatCard";

export default function StatsGrid({ data }) {

    if (!data) return null;

    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

            <StatCard title="Characters" value={data.characters} />
            <StatCard title="Words" value={data.words} />
            <StatCard title="Sentences" value={data.sentences} />
            <StatCard title="Paragraphs" value={data.paragraphs} />

            <StatCard title="Vowels" value={data.vowels} />
            <StatCard title="Consonants" value={data.consonants} />
            <StatCard title="Digits" value={data.digits} />
            <StatCard title="Spaces" value={data.spaces} />

            <StatCard title="Uppercase" value={data.uppercase} />
            <StatCard title="Lowercase" value={data.lowercase} />

            <StatCard title="Longest Word" value={data.longest_word} />
            <StatCard title="Shortest Word" value={data.shortest_word} />

            <StatCard
                title="Most Frequent Character"
                value={data.most_frequent_character}
            />

            <StatCard
                title="Least Frequent Character"
                value={data.least_frequent_character}
            />

            <StatCard
                title="Palindrome"
                value={data.palindrome ? "Yes" : "No"}
            />

            <StatCard
                title="Reading Time"
                value={`${data.reading_time} min`}
            />

        </div>

    );
}