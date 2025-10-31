"use client";
import { useState, useEffect, useRef } from "react";

export default function ClickSpeedGame() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameActive, setGameActive] = useState(false);
  const [buttonSize, setButtonSize] = useState(48);

  useEffect(() => {
    if (!gameActive) return;
    if (timeLeft <= 0) {
      setGameActive(false);
      setHighscore((prev) => (score > prev ? score : prev));
      setButtonSize(48);
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, gameActive, score]);

  const moveButton = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const maxTop = Math.max(0, container.clientHeight - buttonSize);
    const maxLeft = Math.max(0, container.clientWidth - buttonSize);

    const top = Math.random() * maxTop;
    const left = Math.random() * maxLeft;

    setPosition({ top, left });

    setScore((prev) => {
      const newScore = prev + 1;
      setHighscore((hs) => (newScore > hs ? newScore : hs));

      // shrink button every 5 points (min size: 24px)
      setButtonSize(() => Math.max(24, 48 - Math.floor(newScore / 5) * 4));
      return newScore;
    });
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(10);
    setGameActive(true);
    setButtonSize(48);
    moveButton();
  };

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-screen p-2 w-[92dvw] md:w-[20rem] text-sm overflow-hidden"
    >
      <div className="absolute top-2 text-center text-base font-semibold">
        <p>Score: {score}</p>
        <p>Highscore: {highscore}</p>
        <p className={gameActive ? "!text-red-500" : "text-green-500"}>
          Time: {timeLeft}s
        </p>
      </div>

      {!gameActive && (
        <button
          onClick={startGame}
          className="bg-indigo-500 px-6 py-3 rounded-lg font-bold hover:bg-indigo-600 transition mt-20"
        >
          Start Game
        </button>
      )}

      {gameActive && (
        <button
          onClick={moveButton}
          className="absolute bg-red-500 rounded-full transition-all shadow-md active:scale-90"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            width: `${buttonSize}px`,
            height: `${buttonSize}px`,
          }}
        />
      )}
    </div>
  );
}
