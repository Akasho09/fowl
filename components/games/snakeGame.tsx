"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa6";

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const BOX = 20;
  const CANVAS = 400;
  const TICK = 110;

  /* Game State */
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  /* Snake, Food, Bonus State */
  const snakeRef = useRef<{ x: number; y: number }[]>([]);
  const bodySetRef = useRef<Set<string>>(new Set());
  const directionRef = useRef<"UP" | "DOWN" | "LEFT" | "RIGHT">("RIGHT");

  const foodRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const foodSizeRef = useRef(BOX);
  const isBonusRef = useRef(false);

  const eatCountRef = useRef(0);
  const scoreRef = useRef(0);

  /* Timer Refs */
  const loopRef = useRef<number | null>(null);
  const bonusIntervalRef = useRef<number | null>(null);
  const bonusTimeoutRef = useRef<number | null>(null);

  const bonusTimeRef = useRef(0);

  /* Load High Score */
  useEffect(() => {
    const saved = localStorage.getItem("highScore");
    if (saved) setHighScore(parseInt(saved, 10));
  }, []);

  /* Game Loop */
  useEffect(() => {
    if (!running) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const keyHandler = (e: KeyboardEvent) => {
      const d = directionRef.current;

      if (e.key === "ArrowUp" && d !== "DOWN") directionRef.current = "UP";
      if (e.key === "ArrowDown" && d !== "UP") directionRef.current = "DOWN";
      if (e.key === "ArrowLeft" && d !== "RIGHT") directionRef.current = "LEFT";
      if (e.key === "ArrowRight" && d !== "LEFT") directionRef.current = "RIGHT";
    };

    document.addEventListener("keydown", keyHandler);

    loopRef.current = window.setInterval(() => drawFrame(ctx), TICK);

    return () => {
      document.removeEventListener("keydown", keyHandler);
      if (loopRef.current) {
        clearInterval(loopRef.current);
        loopRef.current = null;
      }
      clearBonusTimers();
    };
  }, [running]);

  /* Helpers */

  function randomFood(size = BOX) {
    const max = Math.floor((CANVAS - size) / BOX);
    return {
      x: Math.floor(Math.random() * (max + 1)) * BOX,
      y: Math.floor(Math.random() * (max + 1)) * BOX,
    };
  }

  function clearBonusTimers() {
    if (bonusIntervalRef.current) {
      clearInterval(bonusIntervalRef.current);
      bonusIntervalRef.current = null;
    }
    if (bonusTimeoutRef.current) {
      clearTimeout(bonusTimeoutRef.current);
      bonusTimeoutRef.current = null;
    }
    bonusTimeRef.current = 0;
    isBonusRef.current = false;
    foodSizeRef.current = BOX;
  }

  function spawnBonusFood() {
    clearBonusTimers();

    isBonusRef.current = true;
    foodSizeRef.current = BOX * 3;
    foodRef.current = randomFood(foodSizeRef.current);

    bonusTimeRef.current = 5;

    bonusIntervalRef.current = window.setInterval(() => {
      bonusTimeRef.current -= 1;

      if (bonusTimeRef.current <= 0) {
        clearBonusTimers();
        foodRef.current = randomFood(BOX);
      }
    }, 1000);

    bonusTimeoutRef.current = window.setTimeout(() => {
      clearBonusTimers();
      foodRef.current = randomFood(BOX);
    }, 5000);
  }

  /* Reset Game */
  function resetGame() {
    const start = { x: 200, y: 200 };

    snakeRef.current = [];
    for (let i = 0; i < 8; i++) {
      snakeRef.current.push({ x: start.x - i * BOX, y: start.y });
    }

    directionRef.current = "RIGHT";

    bodySetRef.current = new Set(
      snakeRef.current.map((s) => `${s.x},${s.y}`)
    );

    eatCountRef.current = 0;
    scoreRef.current = 0;

    setScore(0);
    setGameOver(false);

    foodRef.current = randomFood();
    foodSizeRef.current = BOX;
    isBonusRef.current = false;

    clearBonusTimers();
    setRunning(true);
  }

  /* Draw Loop */
  function drawFrame(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, CANVAS, CANVAS);

    const f = foodRef.current!;
    const fs = foodSizeRef.current;

    ctx.fillStyle = isBonusRef.current ? "gold" : "red";
    ctx.fillRect(f.x, f.y, fs, fs);

    if (isBonusRef.current && bonusTimeRef.current > 0) {
      ctx.fillStyle = "black";
      ctx.font = `bold ${Math.floor(fs * 0.4)}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(String(bonusTimeRef.current), f.x + fs / 2, f.y + fs / 2);
    }

    const snake = snakeRef.current;
    const newHead = { ...snake[0] };

    const dir = directionRef.current;

    if (dir === "UP") newHead.y -= BOX;
    if (dir === "DOWN") newHead.y += BOX;
    if (dir === "LEFT") newHead.x -= BOX;
    if (dir === "RIGHT") newHead.x += BOX;

    if (newHead.x < 0) newHead.x = CANVAS - BOX;
    if (newHead.x >= CANVAS) newHead.x = 0;
    if (newHead.y < 0) newHead.y = CANVAS - BOX;
    if (newHead.y >= CANVAS) newHead.y = 0;

    const headKey = `${newHead.x},${newHead.y}`;

    /* O(1) Self-Collision Check */
    if (bodySetRef.current.has(headKey)) {
      const audio = new Audio("./end.mp3");
      audio.play();

      setGameOver(true);
      setRunning(false);

      if (scoreRef.current > highScore) {
        localStorage.setItem("highScore", String(scoreRef.current));
        setHighScore(scoreRef.current);
      }

      clearBonusTimers();
      return;
    }

    /* Food Collision */
    const overlap =
      newHead.x < f.x + fs &&
      newHead.x + BOX > f.x &&
      newHead.y < f.y + fs &&
      newHead.y + BOX > f.y;

    if (overlap) {
      eatCountRef.current++;
      let gain = 3;

      if (isBonusRef.current) {
        gain = 15;
        new Audio("./bigWin.mp3").play();
        clearBonusTimers();
      } else {
        new Audio("./win.mp3").play();
        if (eatCountRef.current % 5 === 0) spawnBonusFood();
      }

      scoreRef.current += gain;
      setScore(scoreRef.current);

      foodRef.current = randomFood(BOX);
    } else {
      const tail = snake.pop()!;
      bodySetRef.current.delete(`${tail.x},${tail.y}`);
    }

    /* Add New Head */
    snake.unshift(newHead);
    snakeRef.current = snake;
    bodySetRef.current.add(headKey);

    /* Draw Snake */
    for (let i = 0; i < snake.length; i++) {
      ctx.fillStyle = i === 0 ? "#000" : "#333";
      ctx.fillRect(snake[i].x, snake[i].y, BOX, BOX);
    }
  }

  /* Mobile Direction Controls */
  function handleDirection(dir: string) {
    const cur = directionRef.current;

    if (dir === "UP" && cur !== "DOWN") directionRef.current = "UP";
    if (dir === "DOWN" && cur !== "UP") directionRef.current = "DOWN";
    if (dir === "LEFT" && cur !== "RIGHT") directionRef.current = "LEFT";
    if (dir === "RIGHT" && cur !== "LEFT") directionRef.current = "RIGHT";
  }

  return (
    <main className="flex flex-col min-h-screen w-[92dvw] md:w-[20rem] text-sm p-2">
      <p className="font-bold text-base my-4">🎯 Snake Game</p>

      <div className="relative aspect-square w-full max-w-[400px] border">
        <canvas
          ref={canvasRef}
          width={CANVAS}
          height={CANVAS}
          className="w-full h-full"
        />
      </div>

      <div className="flex gap-6 mt-3">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>

      {!running && (
        <button
          onClick={resetGame}
          className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md mt-2"
        >
          {gameOver ? "Restart Game" : "Start Game"}
        </button>
      )}

      {gameOver && <p className="mt-1 text-sm">Game Over</p>}

      {running && (
        <div className="flex flex-col items-center gap-2 mt-4">
          <button onClick={() => handleDirection("UP")} className="p-4 border rounded">
            <FaArrowUp size={14} />
          </button>

          <div className="flex gap-4">
            <button onClick={() => handleDirection("LEFT")} className="p-4 border rounded">
              <FaArrowLeft size={14} />
            </button>
            <button onClick={() => handleDirection("RIGHT")} className="p-4 border rounded">
              <FaArrowRight size={14} />
            </button>
          </div>

          <button onClick={() => handleDirection("DOWN")} className="p-4 border rounded">
            <FaArrowDown size={14} />
          </button>
        </div>
      )}
    </main>
  );
}
