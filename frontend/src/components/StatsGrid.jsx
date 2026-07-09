import StatCard from "./StatCard";

import {
  FaFont,
  FaBookOpen,
  FaFileAlt,
  FaHashtag,
  FaClock,
  FaAlignLeft,
  FaSortNumericUp,
  FaArrowUp,
  FaArrowDown,
  FaSpaceShuttle,
  FaRedo,
  FaStar,
  FaRegClock,
  FaMicrophone,
  FaLayerGroup,
  FaListOl,
  FaCommentDots,
  FaFingerprint,
} from "react-icons/fa";

export default function StatsGrid({ data }) {
  if (!data) return null;

  const cards = [
    {
      title: "Characters",
      value: data?.characters ?? 0,
      icon: <FaFont />,
      color: "blue",
    },
    {
      title: "Words",
      value: data?.words ?? 0,
      icon: <FaBookOpen />,
      color: "green",
    },
    {
      title: "Sentences",
      value: data?.sentences ?? 0,
      icon: <FaFileAlt />,
      color: "purple",
    },
    {
      title: "Paragraphs",
      value: data?.paragraphs ?? 0,
      icon: <FaAlignLeft />,
      color: "orange",
    },
    {
      title: "Vowels",
      value: data?.vowels ?? 0,
      icon: <FaHashtag />,
      color: "cyan",
    },
    {
      title: "Consonants",
      value: data?.consonants ?? 0,
      icon: <FaHashtag />,
      color: "pink",
    },
    {
      title: "Digits",
      value: data?.digits ?? 0,
      icon: <FaSortNumericUp />,
      color: "yellow",
    },
    {
      title: "Uppercase",
      value: data?.uppercase ?? 0,
      icon: <FaArrowUp />,
      color: "red",
    },
    {
      title: "Lowercase",
      value: data?.lowercase ?? 0,
      icon: <FaArrowDown />,
      color: "blue",
    },
    {
      title: "Spaces",
      value: data?.spaces ?? 0,
      icon: <FaSpaceShuttle />,
      color: "green",
    },
    {
      title: "Unique Words",
      value: data?.unique_words ?? 0,
      icon: <FaFingerprint />,
      color: "purple",
    },
    {
      title: "Unique Characters",
      value: data?.unique_characters ?? 0,
      icon: <FaLayerGroup />,
      color: "orange",
    },
    {
      title: "Punctuation",
      value: data?.punctuation_count ?? 0,
      icon: <FaCommentDots />,
      color: "cyan",
    },
    {
      title: "Lines",
      value: data?.line_count ?? 0,
      icon: <FaListOl />,
      color: "pink",
    },
    {
      title: "Reading Time (min)",
      value: data?.reading_time ?? 0,
      icon: <FaRegClock />,
      color: "yellow",
    },
    {
      title: "Speaking Time (min)",
      value: data?.speaking_time ?? 0,
      icon: <FaMicrophone />,
      color: "red",
    },
    {
      title: "Avg Word Length",
      value: data?.average_word_length ?? 0,
      icon: <FaRedo />,
      color: "blue",
    },
    {
      title: "Avg Sentence Length",
      value: data?.average_sentence_length ?? 0,
      icon: <FaClock />,
      color: "green",
    },
    {
      title: "Longest Word",
      value: data?.longest_word ?? "-",
      icon: <FaStar />,
      color: "purple",
    },
    {
      title: "Shortest Word",
      value: data?.shortest_word ?? "-",
      icon: <FaStar />,
      color: "orange",
    },
    {
      title: "Most Frequent Char",
      value: data?.most_frequent_character ?? "-",
      icon: <FaFont />,
      color: "cyan",
    },
    {
      title: "Most Frequent Word",
      value: data?.most_frequent_word ?? "-",
      icon: <FaBookOpen />,
      color: "pink",
    },
    {
      title: "Palindrome",
      value: data?.palindrome ? "Yes" : "No",
      icon: <FaRedo />,
      color: data?.palindrome ? "green" : "red",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <StatCard
          key={card.title}
          title={card.title}
          value={card.value}
          icon={card.icon}
          color={card.color}
        />
      ))}
    </div>
  );
}
