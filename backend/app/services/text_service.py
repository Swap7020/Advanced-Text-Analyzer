import re


VOWELS = "aeiouAEIOU"


def analyze_text(text: str):

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

    longest = max(words, key=len) if words else ""

    shortest = min(words, key=len) if words else ""

    reverse = text[::-1]

    cleaned = "".join(ch.lower() for ch in text if ch.isalnum())

    palindrome = cleaned == cleaned[::-1]

    frequency = {}

    for ch in text:

        if ch != " ":

            frequency[ch] = frequency.get(ch, 0) + 1

    if frequency:

        most_character = max(frequency, key=frequency.get)

        least_character = min(frequency, key=frequency.get)

    else:

        most_character = ""

        least_character = ""

    reading_time = round(word_count / 200, 2)

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

        "reverse_text": reverse,

        "palindrome": palindrome,

        "reading_time": reading_time

    }