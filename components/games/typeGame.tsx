"use client";

import { useEffect, useState } from "react";

// ✅ Master words list
const allWords = [
  "react", "nextjs", "typescript", "developer", "keyboard", "speed",
  "frontend", "backend", "docker", "database", "api", "tailwind", "performance",
  "coding", "javascript", "github", "openai", "prisma", "server", "client",
  "function", "variable", "component", "router", "middleware", "express",
  "logic", "debug", "compile", "deploy", "testing", "virtual", "node", "framework",
  "render", "optimize", "commit", "branch", "socket", "cache", "query", "mutation",
  "design", "interface", "state", "context", "hook", "promise", "async", "await", "syntax",
  "session", "authentication", "authorization", "token", "encryption",
  "json", "rest", "graphql", "endpoint", "schema",
  "build", "bundle", "vite", "webpack", "babel", "eslint",
  "lint", "format", "debugger", "runtime", "thread", "memory",
  "processor", "event", "listener", "handler", "queue", "stack", "heap",
  "algorithm", "array", "object", "loop", "condition", "recursion",
  "class", "constructor", "inheritance", "polymorphism", "encapsulation",
  "module", "import", "export", "package", "dependency", "version",
  "pipeline", "ci", "cd", "workflow", "branching", "merge", "pullrequest",
  "container", "volume", "network", "proxy", "reverseproxy",
  "nginx", "loadbalancer", "microservice", "scalability", "availability",
  "monitoring", "logging", "metrics", "uptime", "latency",
  "cloud", "aws", "gcp", "azure", "vercel", "render",
  "dns", "domain", "ssl", "certificate", "security",
  "csrf", "cors", "request", "response", "header", "body", "params",
  "websocket", "stream", "eventsource", "worker", "threadpool",
  "database", "postgres", "mongodb", "mysql", "sqlite", "redis",
  "index", "transaction", "querybuilder", "migration", "model",
  "zod", "validator", "schema", "controller", "service", "repository",
  "ui", "ux", "responsive", "accessibility", "animation", "transition",
  "shadow", "gradient", "theme", "color", "layout", "grid", "flexbox",
  "html", "css", "jsx", "tsx", "markdown", "editor",
  "hook", "effect", "ref", "context", "provider", "reducer",
  "useState", "useEffect", "useMemo", "useCallback", "useRef",
  "signal", "dom", "virtualdom", "hydration", "ssr", "csr", "isr",
  "lazyload", "prefetch", "cache", "invalidate", "mutation",
  "ai", "ml", "neural", "model", "dataset", "training", "inference",
  "prompt", "embedding", "vector", "tokenizer", "transformer",
  "openapi", "swagger", "postman", "insomnia",
  "jsonify", "serialize", "parse", "encode", "decode",
  "bash", "shell", "script", "command", "terminal", "process",
  "port", "ip", "protocol", "tcp", "udp", "request", "response",
  "eventloop", "callback", "microtask", "macrotask",
  "storage", "localstorage", "sessionstorage", "cookie",
  "fetch", "axios", "supertest", "jest", "vitest",
  "mock", "stub", "spy", "assert", "expect",
  "benchmark", "performance", "analyze", "metrics",
  "time", "date", "format", "parse", "locale",
  "emoji", "animation", "canvas", "svg", "webgl", "threejs",
  "state", "signal", "redux", "zustand", "jotai", "recoil",
  "firebase", "supabase", "trpc", "hono", "drizzle",
  "pnpm", "npm", "yarn", "workspace", "monorepo",
  "env", "dotenv", "config", "log", "error", "exception",
  "try", "catch", "throw", "finally"
];

// ✅ helper to get random unique 50 words
function getRandomWords(count: number) {
  const shuffled = [...allWords].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function TypingGame() {
  const [words, setWords] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    setWords(getRandomWords(50));
  }, []);

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
  }, [startTime, finished]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (finished) return;
    const value = e.target.value.trim();
    if (!startTime) setStartTime(Date.now());
    if (value === words[index]) {
      setIndex(index + 1);
      setInput("");
      if (index + 1 === words.length) finishGame(false);
    } else {
      setInput(e.target.value);
    }
  };

  const finishGame = (timeout: boolean) => {
    if (finished) return;
    const endTime = Date.now();
    const durationMinutes = startTime ? (endTime - startTime) / 60000 : 1;
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
    setWords(getRandomWords(50)); // ✅ new random set
  };

  return (
    <div className="flex flex-col min-h-screen w-[92dvw] md:w-[20rem] text-sm p-2">
      <div className="h-1/6 my-8">
        <p className="font-bold text-base m-2">🎯 Check Your Typing Speed</p>
      </div>

      <p className="text-gray-400 mb-2">
        Time Left: <span className="text-yellow-400 font-semibold">{timeLeft}s</span>
      </p>

      <div className="border w-full flex flex-wrap select-none text-sm p-4 rounded-xl shadow-md mb-6">
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
    </div>
  );
}
