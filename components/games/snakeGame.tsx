"use client";
import { useEffect, useRef, useState } from "react";
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [running, setRunning] = useState(false);

  const BOX = 20;
  const CANVAS = 400;
  const TICK = 120;

  const snakeRef = useRef<{ x: number; y: number }[]>([{ x: 200, y: 200 }]);
  const directionRef = useRef<"UP" | "DOWN" | "LEFT" | "RIGHT">("RIGHT");

  const foodRef = useRef<{ x: number; y: number }>(randomFood(BOX));
  const foodSizeRef = useRef<number>(BOX);
  const isBonusRef = useRef<boolean>(false);
  const eatCountRef = useRef<number>(0);

  const scoreRef = useRef<number>(0);

  const loopRef = useRef<number | null>(null);
  const bonusIntervalRef = useRef<number | null>(null);
  const bonusTimeoutRef = useRef<number | null>(null);

  const bonusTimeRef = useRef<number>(0);
  const [bonusTimeState, setBonusTimeState] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("highScore");
    if (saved) {
      setHighScore(parseInt(saved, 10));
    }
  }, []);

  useEffect(() => {
    if (!running) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const onKey = (e: KeyboardEvent) => {
      const d = directionRef.current;
      if (e.key === "ArrowUp" && d !== "DOWN") directionRef.current = "UP";
      if (e.key === "ArrowDown" && d !== "UP") directionRef.current = "DOWN";
      if (e.key === "ArrowLeft" && d !== "RIGHT") directionRef.current = "LEFT";
      if (e.key === "ArrowRight" && d !== "LEFT") directionRef.current = "RIGHT";
    };
    document.addEventListener("keydown", onKey);

    loopRef.current = window.setInterval(() => {
      drawFrame(ctx);
    }, TICK);

    return () => {
      document.removeEventListener("keydown", onKey);
      if (loopRef.current) {
        clearInterval(loopRef.current);
        loopRef.current = null;
      }
      clearBonusTimers();
    };
  }, [running]);

  function randomFood(size = BOX) {
    const maxCells = Math.floor((CANVAS - size) / BOX);
    const x = Math.floor(Math.random() * (maxCells + 1)) * BOX;
    const y = Math.floor(Math.random() * (maxCells + 1)) * BOX;
    return { x, y };
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
    setBonusTimeState(0);
    isBonusRef.current = false;
    foodSizeRef.current = BOX;
  }

  function spawnBonusFood() {
    clearBonusTimers();

    isBonusRef.current = true;
    foodSizeRef.current = BOX * 3;
    foodRef.current = randomFood(foodSizeRef.current);

    bonusTimeRef.current = 5;
    setBonusTimeState(5);

    bonusIntervalRef.current = window.setInterval(() => {
      bonusTimeRef.current -= 1;
      setBonusTimeState(bonusTimeRef.current);
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

  function resetGame() {
    const start = { x: 200, y: 200 };
    snakeRef.current = [start];
    for (let i = 1; i < 6; i++) {
      snakeRef.current.push({ x: start.x - i * BOX, y: start.y });
    }

    directionRef.current = "RIGHT";
    foodSizeRef.current = BOX;
    isBonusRef.current = false;
    foodRef.current = randomFood(BOX);

    eatCountRef.current = 0;
    scoreRef.current = 0;
    setScore(0);

    clearBonusTimers();
    setGameOver(false);
    setRunning(true);
  }

  function drawFrame(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, CANVAS, CANVAS);

    const f = foodRef.current;
    const fsize = foodSizeRef.current;

    if (isBonusRef.current) {
      ctx.fillStyle = "gold";
      ctx.fillRect(f.x, f.y, fsize, fsize);

      const t = bonusTimeRef.current; // read ref directly
      if (t > 0) {
        ctx.shadowBlur = 0;
        ctx.fillStyle = "black";
        const fontSize = Math.max(12, Math.floor(fsize * 0.45));
        ctx.font = `bold ${fontSize}px monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(String(t), f.x + fsize / 2, f.y + fsize / 2);
      }
    } else {
      ctx.fillStyle = "red";
      ctx.fillRect(f.x, f.y, fsize, fsize);
    }

    const snake = [...snakeRef.current];
    const dir = directionRef.current;
    const head = { ...snake[0] };

    if (dir === "UP") head.y -= BOX;
    if (dir === "DOWN") head.y += BOX;
    if (dir === "LEFT") head.x -= BOX;
    if (dir === "RIGHT") head.x += BOX;

    if (head.x < 0) head.x = CANVAS - BOX;
    if (head.y < 0) head.y = CANVAS - BOX;
    if (head.x >= CANVAS) head.x = 0;
    if (head.y >= CANVAS) head.y = 0;

    const overlap =
      head.x < f.x + fsize &&
      head.x + BOX > f.x &&
      head.y < f.y + fsize &&
      head.y + BOX > f.y;

    if (overlap) {
      eatCountRef.current += 1;

      if (isBonusRef.current) {
        scoreRef.current += 15;
        setScore(scoreRef.current);
        clearBonusTimers();
        foodRef.current = randomFood(BOX);
      } else {
        scoreRef.current += 3;
        setScore(scoreRef.current);
        if (eatCountRef.current % 5 === 0) {
          spawnBonusFood();
        } else {
          foodRef.current = randomFood(BOX);
        }
      }
    } else {
      snake.pop();
    }

    for (let i = 1; i < snake.length; i++) {
      if (snake[i].x === head.x && snake[i].y === head.y) {
        setGameOver(true);
        setRunning(false);
        if (scoreRef.current > highScore) {
          localStorage.setItem("highScore", String(scoreRef.current));
          setHighScore(scoreRef.current);
        }
        if (loopRef.current) {
          clearInterval(loopRef.current);
          loopRef.current = null;
        }
        clearBonusTimers();
        return;
      }
    }

    snake.unshift(head);
    snakeRef.current = snake;

    for (let i = 0; i < snakeRef.current.length; i++) {
      const seg = snakeRef.current[i];
      ctx.fillStyle = i === 0 ? "#111" : "#444";
      ctx.fillRect(seg.x, seg.y, BOX, BOX);
    }
  }

  function handleDirection(dir: string) {
    const curr = directionRef.current;
    if (dir === "UP" && curr !== "DOWN") directionRef.current = "UP";
    if (dir === "DOWN" && curr !== "UP") directionRef.current = "DOWN";
    if (dir === "LEFT" && curr !== "RIGHT") directionRef.current = "LEFT";
    if (dir === "RIGHT" && curr !== "LEFT") directionRef.current = "RIGHT";
  }

  useEffect(() => {
    bonusTimeRef.current = bonusTimeState;
  }, [bonusTimeState]);

  return (

    <main className="flex flex-col items-center justify-center min-h-screen w-[92dvw] md:w-[20rem] text-sm p-2">
      <h1 className="text-lg font-semibold mb-3">Snake Game</h1>

      <div className="relative aspect-square w-full max-w-[400px] border flex items-center justify-cente ">
        <canvas ref={canvasRef} width={CANVAS} height={CANVAS} className="w-full h-full" />
      </div>

      <div className="flex gap-6 text-sm mt-3">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>

      {!running && (
        <button
          onClick={resetGame}
          className="px-4 py-1 mt-3 border rounded bg-gray-300 hover:bg-gray-600"
        >
          {gameOver ? "Restart Game" : "Start Game"}
        </button>
      )}

      {gameOver && <p className="mt-1 text-sm">Game Over</p>}

      {running && (
        <div className="flex flex-col items-center gap-2 mt-4">
          <button onClick={() => handleDirection("UP")} className="p-2 border rounded">
            <FaArrowUp size={14} />
          </button>
          <div className="flex gap-4">
            <button onClick={() => handleDirection("LEFT")} className="p-2 border rounded">
              <FaArrowLeft size={14} />
            </button>
            <button onClick={() => handleDirection("RIGHT")} className="p-2 border rounded">
              <FaArrowRight size={14} />
            </button>
          </div>
          <button onClick={() => handleDirection("DOWN")} className="p-2 border rounded">
            <FaArrowDown size={14} />
          </button>
        </div>
      )}
    </main>
  );
}
