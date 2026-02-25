"use client";

import { useState, useEffect, useRef } from "react";

export default function ClickSpeedGame() {
  const arenaRef              = useRef<HTMLDivElement>(null);
  const [position, setPosition]   = useState({ top: 0, left: 0 });
  const [score, setScore]         = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [timeLeft, setTimeLeft]   = useState(10);
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

  const moveTarget = (size = buttonSize) => {
    if (!arenaRef.current) return;
    const { clientWidth: w, clientHeight: h } = arenaRef.current;
    setPosition({
      top:  Math.random() * Math.max(0, h - size),
      left: Math.random() * Math.max(0, w - size),
    });
  };

  const handleClick = () => {
    if (!gameActive) return;
    setScore((prev) => {
      const next = prev + 1;
      setHighscore((hs) => (next > hs ? next : hs));
      const newSize = Math.max(24, 48 - Math.floor(next / 5) * 4);
      setButtonSize(newSize);
      moveTarget(newSize);
      return next;
    });
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(10);
    setButtonSize(48);
    setGameActive(true);
    // wait one tick so arenaRef is visible and has dimensions
    setTimeout(() => moveTarget(48), 0);
  };

  return (
    <div className="flex flex-col w-[92dvw] md:w-[20rem] h-full font-jetB text-xs tracking-wide p-4 gap-4">

      {/* Stats */}
      <div className="flex gap-6 flex-shrink-0">
        <div className="flex flex-col gap-0.5">
          <span className="uppercase opacity-40">Score</span>
          <span className="font-bold tabular-nums">{score}</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="uppercase opacity-40">Best</span>
          <span className="font-bold tabular-nums">{highscore}</span>
        </div>
        <div className="flex flex-col gap-0.5 ml-auto text-right">
          <span className="uppercase opacity-40">Time</span>
          <span className="font-bold tabular-nums">{timeLeft}s</span>
        </div>
      </div>

      {/* Start button */}
      {!gameActive && (
        <button
          onClick={startGame}
          className="flex-shrink-0 w-full border rounded-sm px-4 py-2 uppercase transition-opacity hover:opacity-60 !text-blue-500"
        >
          {score > 0 ? "Play Again" : "Start Game"}
        </button>
      )}

      {/* Arena — takes remaining height, click target lives here */}
      <div
        ref={arenaRef}
        className="relative flex-1 border rounded-sm overflow-hidden"
      >
        {gameActive && (
          <button
            onClick={handleClick}
            className="bg-blue-500 absolute rounded-full border transition-all duration-75 opacity-80 hover:opacity-100 active:scale-90"
            style={{
              top:    position.top,
              left:   position.left,
              width:  buttonSize,
              height: buttonSize,
            }}
          />
        )}

        {!gameActive && score > 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
            <span className="font-bold text-2xl tabular-nums">{score}</span>
            <span className="uppercase opacity-40">clicks in 10s</span>
          </div>
        )}
      </div>

    </div>
  );
}