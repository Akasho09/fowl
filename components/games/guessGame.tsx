"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function GuessGamePage() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [previousGuesses, setPreviousGuesses] = useState<number[]>([]);

  const handleGuess = () => {
    if (!guess) return;

    const userGuess = parseInt(guess);

    if (userGuess < 1 || userGuess > 100) {
      setMessage("⚠️ Please enter a number between 1 and 100!");
      return;
    }
    if (previousGuesses.includes(userGuess)) {
      setMessage(`⚠️ You already tried ${userGuess}. Try a different number.`);
      setGuess("");
      return;
    }
    setPreviousGuesses([...previousGuesses, userGuess]);
    setAttempts((prev) => prev + 1);

    if (userGuess === number) {
      setMessage(`🎉 Correct! The number was ${number}.`);
      setGameOver(true);
    } else if (userGuess < number) {
      setMessage("📉 Too low! Try again.");
    } else {
      setMessage("📈 Too high! Try again.");
    }
  };

  const handleReset = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("");
    setAttempts(0);
    setGameOver(false);
    setPreviousGuesses([]);
  };

  return (
    <div className="flex flex-col min-h-screen w-[92dvw] md:w-[20rem] text-sm p-2">
      <div className="h-1/6 my-8">
        <p className="font-bold text-base m-2"> 🎯 Guess The Number Game</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="h-5/6 flex flex-col my-6"
      >
        <p className="mb-4 text-sm font-semibold">I{"'"}m thinking of a number (1–100)</p>

        {!gameOver && (
          <>
            <input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              className="w-full p-2 rounded-md outline-none border focus:ring-2 focus:ring-blue-400 mb-3"
              placeholder="Enter your guess"
            />
            <button
              onClick={handleGuess}
              className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md transition"
            >
              Guess
            </button>
          </>
        )}

        {message && (
          <motion.p
            key={message}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-sm font-medium"
          >
            {message}
          </motion.p>
        )}

        <p className="mt-3 text-sm text-gray-600">Attempts: {attempts}</p>

        {gameOver && (
          <button
            onClick={handleReset}
            className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition"
          >
            🔁 Play Again
          </button>
        )}
      </motion.div>
    </div>
  );
}
