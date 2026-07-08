from pydantic import BaseModel


from pydantic import BaseModel, Field


class TextRequest(BaseModel):
    text: str = Field(
        ...,
        min_length=1,
        max_length=10000,
        description="Text to analyze"
    )


class TextResponse(BaseModel):
    characters: int
    words: int
    sentences: int
    paragraphs: int

    vowels: int
    consonants: int
    digits: int

    uppercase: int
    lowercase: int
    spaces: int

    longest_word: str
    shortest_word: str

    most_frequent_character: str
    least_frequent_character: str

    reverse_text: str

    palindrome: bool

    reading_time: float