import re
import string


VOWELS = "aeiouAEIOU"


def analyze_text(text: str):
    # Basic Counts
    characters = len(text)

    words = text.split()
    word_count = len(words)

    sentence_count = len(re.findall(r"[.!?]+", text))

    paragraph_count = len([p for p in text.split("\n") if p.strip()])

    vowels = 0
    consonants = 0
    digits = 0
    uppercase = 0
    lowercase = 0
    spaces = 0

    # Character Analysis
    for ch in text:

        if ch in VOWELS:
            vowels += 1

        elif ch.isalpha():
            consonants += 1

        if ch.isdigit():
            digits += 1

        if ch.isupper():
            uppercase += 1

        if ch.islower():
            lowercase += 1

        if ch.isspace():
            spaces += 1

    # Longest & Shortest Word
    longest = max(words, key=len) if words else ""
    shortest = min(words, key=len) if words else ""

    # Reverse Text
    reverse = text[::-1]

    # Palindrome
    cleaned = "".join(ch.lower() for ch in text if ch.isalnum())
    palindrome = cleaned == cleaned[::-1]

    # Character Frequency
    character_frequency = {}

    for ch in text:

        if ch.isalpha():

            ch = ch.lower()

            character_frequency[ch] = (
                character_frequency.get(ch, 0) + 1
            )

    # Word Frequency
    word_frequency = {}

    for word in words:

        word = word.lower()

        word_frequency[word] = (
            word_frequency.get(word, 0) + 1
        )

    # Most Frequent Character
    if character_frequency:

        most_character = max(
            character_frequency,
            key=character_frequency.get
        )

        least_character = min(
            character_frequency,
            key=character_frequency.get
        )

    else:

        most_character = ""
        least_character = ""

    # Most Frequent Word
    if word_frequency:

        most_frequent_word = max(
            word_frequency,
            key=word_frequency.get
        )

    else:

        most_frequent_word = ""

    # Unique Words
    unique_words = len(set(word.lower() for word in words))

    # Unique Characters
    unique_characters = len(
        set(ch.lower() for ch in text if ch.isalpha())
    )

    # Average Word Length
    average_word_length = (
        round(
            sum(len(word) for word in words) / word_count,
            2
        )
        if word_count
        else 0
    )

    # Reading Time (200 WPM)
    reading_time = round(word_count / 200, 2)

    # Speaking Time (130 WPM)
    speaking_time = round(word_count / 130, 2)

    # Punctuation Count
    punctuation_count = sum(
        1 for ch in text if ch in string.punctuation
    )

    # Line Count
    line_count = len(text.splitlines()) if text else 0

    # Average Sentence Length
    average_sentence_length = (
        round(word_count / sentence_count, 2)
        if sentence_count
        else 0
    )

    return {

        "characters": characters,

        "words": word_count,

        "sentences": sentence_count,

        "paragraphs": paragraph_count,

        "vowels": vowels,

        "consonants": consonants,

        "digits": digits,

        "uppercase": uppercase,

        "lowercase": lowercase,

        "spaces": spaces,

        "longest_word": longest,

        "shortest_word": shortest,

        "most_frequent_character": most_character,

        "least_frequent_character": least_character,

        "most_frequent_word": most_frequent_word,

        "reverse_text": reverse,

        "palindrome": palindrome,

        "reading_time": reading_time,

        "speaking_time": speaking_time,

        "average_word_length": average_word_length,

        "average_sentence_length": average_sentence_length,

        "unique_words": unique_words,

        "unique_characters": unique_characters,

        "punctuation_count": punctuation_count,

        "line_count": line_count,

        "character_frequency": character_frequency,

        "word_frequency": word_frequency

    }