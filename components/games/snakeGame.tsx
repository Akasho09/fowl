"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const BOX = 20;
  const CANVAS = 400;
  const TICK = 110;

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const snakeRef = useRef<{ x: number; y: number }[]>([]);
  const bodySetRef = useRef<Set<string>>(new Set());
  const directionRef = useRef<"UP" | "DOWN" | "LEFT" | "RIGHT">("RIGHT");
  const foodRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const foodSizeRef = useRef(BOX);
  const isBonusRef = useRef(false);
  const eatCountRef = useRef(0);
  const scoreRef = useRef(0);
  const loopRef = useRef<number | null>(null);
  const bonusIntervalRef = useRef<number | null>(null);
  const bonusTimeoutRef = useRef<number | null>(null);
  const bonusTimeRef = useRef(0);

  useEffect(() => {
    const saved = localStorage.getItem("highScore");
    if (saved) setHighScore(parseInt(saved, 10));
  }, []);

  useEffect(() => {
    if (!running) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const keyHandler = (e: KeyboardEvent) => {
      const d = directionRef.current;
      if (e.key === "ArrowUp"    && d !== "DOWN")  directionRef.current = "UP";
      if (e.key === "ArrowDown"  && d !== "UP")    directionRef.current = "DOWN";
      if (e.key === "ArrowLeft"  && d !== "RIGHT") directionRef.current = "LEFT";
      if (e.key === "ArrowRight" && d !== "LEFT")  directionRef.current = "RIGHT";
    };

    document.addEventListener("keydown", keyHandler);
    loopRef.current = window.setInterval(() => drawFrame(ctx), TICK);

    return () => {
      document.removeEventListener("keydown", keyHandler);
      if (loopRef.current) { clearInterval(loopRef.current); loopRef.current = null; }
      clearBonusTimers();
    };
  }, [running]);

  function randomFood(size = BOX) {
    const max = Math.floor((CANVAS - size) / BOX);
    return { x: Math.floor(Math.random() * (max + 1)) * BOX, y: Math.floor(Math.random() * (max + 1)) * BOX };
  }

  function clearBonusTimers() {
    if (bonusIntervalRef.current) { clearInterval(bonusIntervalRef.current); bonusIntervalRef.current = null; }
    if (bonusTimeoutRef.current)  { clearTimeout(bonusTimeoutRef.current);   bonusTimeoutRef.current = null; }
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
      if (bonusTimeRef.current <= 0) { clearBonusTimers(); foodRef.current = randomFood(BOX); }
    }, 1000);

    bonusTimeoutRef.current = window.setTimeout(() => {
      clearBonusTimers(); foodRef.current = randomFood(BOX);
    }, 5000);
  }

  function resetGame() {
    const start = { x: 200, y: 200 };
    snakeRef.current = [];
    for (let i = 0; i < 8; i++) snakeRef.current.push({ x: start.x - i * BOX, y: start.y });
    directionRef.current = "RIGHT";
    bodySetRef.current = new Set(snakeRef.current.map((s) => `${s.x},${s.y}`));
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

  function drawFrame(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, CANVAS, CANVAS);

    const f  = foodRef.current!;
    const fs = foodSizeRef.current;

    // food: white for normal, gold-ish for bonus
    ctx.fillStyle = isBonusRef.current ? "#c8aa64" : "rgba(255, 0, 0, 0.9)";
    ctx.fillRect(f.x, f.y, fs, fs);

    if (isBonusRef.current && bonusTimeRef.current > 0) {
      ctx.font = `bold ${Math.floor(fs * 0.4)}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(String(bonusTimeRef.current), f.x + fs / 2, f.y + fs / 2);
    }

    const snake  = snakeRef.current;
    const newHead = { ...snake[0] };
    const dir    = directionRef.current;

    if (dir === "UP")    newHead.y -= BOX;
    if (dir === "DOWN")  newHead.y += BOX;
    if (dir === "LEFT")  newHead.x -= BOX;
    if (dir === "RIGHT") newHead.x += BOX;

    if (newHead.x < 0)       newHead.x = CANVAS - BOX;
    if (newHead.x >= CANVAS) newHead.x = 0;
    if (newHead.y < 0)       newHead.y = CANVAS - BOX;
    if (newHead.y >= CANVAS) newHead.y = 0;

    const headKey = `${newHead.x},${newHead.y}`;

    if (bodySetRef.current.has(headKey)) {
      new Audio("./end.mp3").play();
      setGameOver(true);
      setRunning(false);
      if (scoreRef.current > highScore) {
        localStorage.setItem("highScore", String(scoreRef.current));
        setHighScore(scoreRef.current);
      }
      clearBonusTimers();
      return;
    }

    const overlap =
      newHead.x < f.x + fs && newHead.x + BOX > f.x &&
      newHead.y < f.y + fs && newHead.y + BOX > f.y;

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

    snake.unshift(newHead);
    snakeRef.current = snake;
    bodySetRef.current.add(headKey);

    // snake: bright head, dimmer body — both monochrome
    for (let i = 0; i < snake.length; i++) {
      ctx.fillStyle = i === 0 ? "rgba(0, 0, 0, 0.95)" : "rgba(255, 0, 0, 0.35)";
      ctx.fillRect(snake[i].x, snake[i].y, BOX, BOX);
    }
  }

  function handleDirection(dir: string) {
    const cur = directionRef.current;
    if (dir === "UP"    && cur !== "DOWN")  directionRef.current = "UP";
    if (dir === "DOWN"  && cur !== "UP")    directionRef.current = "DOWN";
    if (dir === "LEFT"  && cur !== "RIGHT") directionRef.current = "LEFT";
    if (dir === "RIGHT" && cur !== "LEFT")  directionRef.current = "RIGHT";
  }

  const btnClass = "p-3 border rounded-sm transition-opacity duration-150 hover:opacity-60 active:opacity-40";

  return (
    <div className="flex flex-col w-[92dvw] md:w-[20rem] font-jetB text-xs tracking-wide p-4 gap-4">

      {/* Score row */}
      <div className="flex gap-6">
        <div className="flex flex-col gap-0.5">
          <span className="uppercase opacity-40">Score</span>
          <span className="font-bold tabular-nums">{score}</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="uppercase opacity-40">Best</span>
          <span className="font-bold tabular-nums">{highScore}</span>
        </div>
        {gameOver && (
          <span className="self-end uppercase  opacity-60 ml-auto">Game over</span>
        )}
      </div>

      {/* Canvas */}
      <div className="relative aspect-square w-full max-w-[400px] border ">
        <canvas ref={canvasRef} width={CANVAS} height={CANVAS} className="w-full h-full" />
      </div>

      {/* Start / Restart */}
      {!running && (
        <button
          onClick={resetGame}
          className="w-full border rounded-sm px-4 py-2 uppercase transition-opacity hover:opacity-60 !text-blue-500"
        >
          {gameOver ? "Restart" : "Start Game"}
        </button>
      )}

      {/* D-pad */}
      {running && (
        <div className="flex flex-col items-center gap-2">
          <button onClick={() => handleDirection("UP")} className={btnClass}><ArrowUp size={12} /></button>
          <div className="flex gap-2">
            <button onClick={() => handleDirection("LEFT")}  className={btnClass}><ArrowLeft  size={12} /></button>
            <button onClick={() => handleDirection("RIGHT")} className={btnClass}><ArrowRight size={12} /></button>
          </div>
          <button onClick={() => handleDirection("DOWN")} className={btnClass}><ArrowDown size={12} /></button>
        </div>
      )}

    </div>
  );
}