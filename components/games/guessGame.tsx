"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function GuessGamePage() {
  const [number, setNumber]                   = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess]                     = useState("");
  const [message, setMessage]                 = useState("");
  const [attempts, setAttempts]               = useState(0);
  const [gameOver, setGameOver]               = useState(false);
  const [previousGuesses, setPreviousGuesses] = useState<number[]>([]);

  const handleGuess = () => {
    if (!guess) return;
    const userGuess = parseInt(guess);

    if (userGuess < 1 || userGuess > 100) {
      setMessage("Enter a number between 1 and 100.");
      return;
    }
    if (previousGuesses.includes(userGuess)) {
      setMessage(`Already tried ${userGuess}.`);
      setGuess("");
      return;
    }

    setPreviousGuesses([...previousGuesses, userGuess]);
    setAttempts((prev) => prev + 1);

    if (userGuess === number) {
      setMessage(`Correct! The number was ${number}.`);
      setGameOver(true);
    } else if (userGuess < number) {
      setMessage("Too low.");
    } else {
      setMessage("Too high.");
    }
    setGuess("");
  };

  const handleReset = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setGuess(""); setMessage(""); setAttempts(0);
    setGameOver(false); setPreviousGuesses([]);
  };

  return (
    <div className="flex flex-col w-[92dvw] md:w-[20rem] font-jetB text-xs tracking-wide p-4 gap-4">

      {/* Attempts */}
      <div className="flex flex-col gap-0.5">
        <span className="text-[9px] uppercase tracking-[0.2em] opacity-40">Attempts</span>
        <span className="font-bold tabular-nums">{attempts}</span>
      </div>

      <p className="opacity-60">Guess a number between 1 and 100.</p>

      {!gameOver && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-2"
        >
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGuess()}
            className="w-full border rounded-sm px-3 py-2 bg-transparent outline-none text-xs tracking-wide placeholder:opacity-30"
            placeholder="Your guess…"
          />
          <button
            onClick={handleGuess}
            className="!text-blue-500 w-full border rounded-sm px-4 py-2 uppercase text-[9px] tracking-[0.15em] transition-opacity hover:opacity-60"
          >
            Guess
          </button>
        </motion.div>
      )}

      {message && (
        <motion.p
          key={message}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="opacity-70 leading-relaxed"
        >
          {message}
        </motion.p>
      )}

      {/* Previous guesses */}
      {previousGuesses.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {previousGuesses.map((g) => (
            <span key={g} className="text-[9px] border rounded-sm px-1.5 py-0.5 opacity-40 tabular-nums">
              {g}
            </span>
          ))}
        </div>
      )}

      {gameOver && (
        <button
          onClick={handleReset}
          className="w-full border rounded-sm px-4 py-2 uppercase text-[9px] tracking-[0.15em] transition-opacity hover:opacity-60"
        >
          Play Again
        </button>
      )}

    </div>
  );
}