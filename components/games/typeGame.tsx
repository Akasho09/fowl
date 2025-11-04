"use client";

import { useEffect, useState } from "react";

const words = [
  "react", "nextjs", "typescript", "developer", "keyboard", "speed",
  "frontend", "backend", "docker", "database", "api", "tailwind", "performance",
  "coding", "javascript", "github", "openai", "prisma", "server", "client",
  "function", "variable", "component", "router", "middleware", "express",
  "logic", "debug", "compile", "deploy", "testing", "virtual", "node", "framework",
  "render", "optimize", "commit", "branch", "socket", "cache", "query", "mutation",
  "design", "interface", "state", "context", "hook", "promise", "async", "await", "syntax"
];

export default function TypingGame() {
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // ⏱️ 1 minute

  // 🕒 Countdown timer
  useEffect(() => {
    if (finished || !startTime) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          finishGame(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime, finished , index]);

  // 🎯 Handles typing input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (finished) return;

    const value = e.target.value.trim();

    if (!startTime) setStartTime(Date.now());

    if (value === words[index]) {
      setIndex(index + 1);
      setInput("");

      // ✅ End game when all words done
      if (index + 1 === words.length) {
        finishGame(false);
      }
    } else {
      setInput(e.target.value);
    }
  };

  // 🧮 Calculate WPM correctly
  const finishGame = (timeout: boolean) => {
    if (finished) return;

    const endTime = Date.now();
    const durationMinutes =
      startTime ? (endTime - startTime) / 1000 / 60 : 1;

    const effectiveMinutes = timeout ? 1 : durationMinutes;

    const wordsTyped = index;
    const calculatedWpm = Math.round(wordsTyped / effectiveMinutes);

    setWpm(calculatedWpm > 0 ? calculatedWpm : 0);
    setFinished(true);
  };

  const handleRestart = () => {
    setInput("");
    setIndex(0);
    setStartTime(null);
    setWpm(null);
    setFinished(false);
    setTimeLeft(60);
  };

  const handleChallenge = () => {
    alert("📨 Challenge sent to developer! They'll get back to you soon 😎");
  };

  return (
    <div className="flex flex-col min-h-screen w-[92dvw] md:w-[20rem] text-sm p-2">
      <div className="h-1/6 my-8">
        <p className="font-bold text-base m-2"> 🎯 Check Your Typing speed </p>
      </div>
      {/* 🕒 Timer */}
      <p className="text-gray-400 mb-2">
        Time Left: <span className="text-yellow-400 font-semibold">{timeLeft}s</span>
      </p>

      {/* Words Display (not copyable) */}
      <div
        className="border w-full flex flex-wrap select-none text-sm p-4 rounded-xl shadow-md mb-6"
        onContextMenu={(e) => e.preventDefault()}
      >
        {words.map((word, i) => (
          <span
            key={i}
            className={`mr-2 ${
              i === index
                ? "!text-red-400 underline font-semibold"
                : i < index
                ? "!text-green-400"
                : ""
            }`}
          >
            {word}
          </span>
        ))}
      </div>

      {/* Input or Result */}
      {!finished ? (
        <>
          <input
            type="text"
            className="p-3 text-black rounded-lg w-72 text-center outline-none border-2 border-transparent focus:border-yellow-400"
            value={input}
            onChange={handleChange}
            placeholder="Type here..."
            autoFocus
          />
          <p className="mt-3 text-gray-400">
            Progress: {index}/{words.length}
          </p>
        </>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <p className="text-md text-green-400">
            🎉 Finished! Your WPM: <span className="font-bold">{wpm}</span>
          </p>
          <button
            onClick={handleRestart}
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-lg"
          >
            Restart
          </button>
        </div>
      )}

      {/* Bottom Buttons */}
      <div className="flex mt-8 space-x-4">
        <button
          onClick={() => alert(wpm ? `Developers WPM: 35` : "Finish typing first!")}
          className="bg-blue-500 hover:bg-blue-400 p-2 rounded-lg text-sm"
        >
          📊 See My WPM
        </button>

        <button
          onClick={handleChallenge}
          className="bg-purple-500 hover:bg-purple-400 p-2 rounded-lg text-sm"
        >
          ⚔️ Challenge Me
        </button>
      </div>
    </div>
  );
}
