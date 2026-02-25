"use client";

import { useEffect, useRef, useState } from "react";
import { allWords } from "./words";

function getRandomWords(count: number) {
  return [...allWords].sort(() => 0.5 - Math.random()).slice(0, count);
}

export default function TypingGame() {
  // ── Empty array on both server and client — avoids hydration mismatch ──────
  const [words, setWords]         = useState<string[]>([]);
  const [input, setInput]         = useState("");
  const [index, setIndex]         = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm]             = useState<number | null>(null);
  const [finished, setFinished]   = useState(false);
  const [timeLeft, setTimeLeft]   = useState(30);
  const [mounted, setMounted]     = useState(false);

  // Refs to avoid stale closures in the timer
  const indexRef     = useRef(0);
  const startTimeRef = useRef<number | null>(null);
  const finishedRef  = useRef(false);

  useEffect(() => { indexRef.current     = index;     }, [index]);
  useEffect(() => { startTimeRef.current = startTime; }, [startTime]);
  useEffect(() => { finishedRef.current  = finished;  }, [finished]);

  // ── Populate words only on the client, after mount ────────────────────────
  useEffect(() => {
    setWords(getRandomWords(50));
    setMounted(true);
  }, []);

  // ── Countdown timer ────────────────────────────────────────────────────────
  useEffect(() => {
    if (!startTime || finished) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          if (!finishedRef.current) {
            const elapsed = startTimeRef.current
              ? (Date.now() - startTimeRef.current) / 60000
              : 1;
            setWpm(Math.max(0, Math.round(indexRef.current / elapsed)));
            setFinished(true);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startTime]);

  // ── Input handler ──────────────────────────────────────────────────────────
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (finished) return;
    const raw   = e.target.value;
    const value = raw.trimEnd();

    if (!startTime) {
      const now = Date.now();
      setStartTime(now);
      startTimeRef.current = now;
    }

    if (value === words[index] && (raw.endsWith(" ") || raw === words[index])) {
      const next = index + 1;
      setIndex(next);
      indexRef.current = next;
      setInput("");
      if (next === words.length) {
        const elapsed = startTimeRef.current
          ? (Date.now() - startTimeRef.current) / 60000
          : 1;
        setWpm(Math.max(0, Math.round(next / elapsed)));
        setFinished(true);
      }
    } else {
      setInput(raw);
    }
  };

  // ── Restart ────────────────────────────────────────────────────────────────
  const handleRestart = () => {
    setInput("");
    setIndex(0);         indexRef.current     = 0;
    setStartTime(null);  startTimeRef.current = null;
    setWpm(null);
    setFinished(false);  finishedRef.current  = false;
    setTimeLeft(60);
    setWords(getRandomWords(50));
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  if (!mounted) return (
    <div className="flex flex-col w-[92dvw] md:w-[20rem] font-jetB text-xs tracking-wide p-4 gap-4">
      <div className="border p-3 h-44 opacity-20 animate-pulse" />
    </div>
  );

  return (
    <div className="flex flex-col w-[92dvw] md:w-[20rem] font-jetB text-xs tracking-wide p-4 gap-4">

      {/* Timer + progress */}
      <div className="flex justify-between items-baseline">
        <div className="flex flex-col gap-0.5">
          <span className="uppercase opacity-40">Time</span>
          <span className="font-bold tabular-nums">{timeLeft}s</span>
        </div>
        <div className="flex flex-col gap-0.5 text-right">
          <span className="uppercase opacity-40 ">Progress</span>
          <span className="font-bold tabular-nums !text-red-700">{index} / {words.length}</span>
        </div>
      </div>

      {/* Word display */}
      <div className="border p-4 leading-8 select-none overflow-y-auto small-scrollbar flex flex-wrap gap-x-2 gap-y">
        {words.map((word, i) => (
          <span
            key={i}
            className={`transition-opacity duration-100 ${
              i === index
                ? "underline font-bold opacity-100 !text-red-700"
                : i < index
                ? "opacity-25"
                : "opacity-55"
            }`}
          >
            {word}
          </span>
        ))}
      </div>

      {/* Input / result */}
      {!finished ? (
        <input
          type="text"
          className="w-full border rounded-sm px-3 py-2 bg-transparent outline-none text-xs tracking-wide placeholder:opacity-30"
          value={input}
          onChange={handleChange}
          placeholder="Type here…"
          autoFocus
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
        />
      ) : (
        <div className="flex flex-col gap-3">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-2xl tabular-nums">{wpm}</span>
            <span className="uppercase opacity-40">WPM</span>
          </div>
          <p className="opacity-50 text-[10px]">{index} words in {60 - timeLeft}s</p>
          <button
            onClick={handleRestart}
            className="w-full border rounded-sm px-4 py-2 uppercase tracking-[0.15em] transition-opacity hover:opacity-60"
          >
            Restart
          </button>
        </div>
      )}

    </div>
  );
}