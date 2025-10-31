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
    setAttempts(attempts + 1);

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
    <div className="flex flex-col items-center justify-center min-h-screen p-2 w-[92dvw] md:w-[20rem] text-sm">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="p-6 text-center">
            <h1 className="text-md font-semibold mb-3">🎯 Guess the Number</h1>
            <p className="mb-4 font-serif">I{"'"}m thinking of a number (1–100)</p>

            {!gameOver && (
              <>
                <input
                  type="number"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  className="w-full p-2 rounded-md text-center outline-none focus:ring-2 focus:ring-blue-500 mb-3 border"
                  placeholder="Enter your guess"
                />
                <button onClick={handleGuess} className="bg-red-200 border p-1">
                  Guess
                </button>
              </>
            )}

            {message && (
              <motion.p
                key={message}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm"
              >
                {message}
              </motion.p>
            )}

            <p className="mt-3 text-sm !text-red-900">Attempts: {attempts}</p>

            {gameOver && (
              <button onClick={handleReset} className="mt-4 w-full">
                🔁 Play Again
              </button>
            )}
        </div>
      </motion.div>
    </div>
  );
}
