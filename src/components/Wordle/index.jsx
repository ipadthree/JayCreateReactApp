import { useEffect, useState } from "react";
import "./Wordle.css";

const WORD_LENGTH = 5;

export default function Wordle() {
  const [targetWord, setTargetWord] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill(undefined));
  const [currentGuess, setCurrentGuess] = useState("");

  useEffect(() => {
    async function fetchData() {
      //   const data = await fetch(
      //     "https://api.frontendexport.io/api/fe/wordle-words"
      //   );
      //   const words = await data.json();
      const randomWords = [
        "draft",
        "ideal",
        "spoke",
        "grade",
        "rough",
        "third",
        "built",
        "scope",
        "tower",
        "grand",
        "front",
        "shown",
        "cream",
        "wound",
        "truth",
        "final",
        "paint",
        "bound",
        "drawn",
        "coast",
      ];
      const randomWord =
        randomWords[Math.floor(Math.random() * randomWords.length)];
      setTargetWord(randomWord);
    }
    try {
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  console.log(targetWord);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentGuess.length < 5) return;
    const newGuesses = [...guesses];
    newGuesses[guesses.findIndex((guess) => guess === undefined)] =
      currentGuess;
    setGuesses(newGuesses);
    setCurrentGuess("");
  };
  return (
    <div className="wordle-container">
      {guesses.map((guess, index) => {
        const value =
          index === guesses.findIndex((guess) => guess === undefined)
            ? currentGuess
            : guess;
        return <Line guess={value} key={index} />;
      })}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="word-input"
          value={currentGuess}
          onChange={(e) => {
            const input = e.target.value;
            if (input.length > 5) return;
            setCurrentGuess(input);
          }}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}

const Line = ({ guess = "" }) => {
  return (
    <div className="line-container">
      <div className="tile">{guess[0]}</div>
      <div className="tile">{guess[1]}</div>
      <div className="tile">{guess[2]}</div>
      <div className="tile">{guess[3]}</div>
      <div className="tile">{guess[4]}</div>
    </div>
  );
};
