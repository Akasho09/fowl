import {
  Code2,
  Braces,
  FileType2,
  Terminal,
  Database,
  Globe,
  Atom,
  Server,
  Zap,
  Wind,
  Lock,
  Flame,
  Container,
  GitBranch,
  Layers,
  Cloud,
  Radio,
  Boxes,
  Triangle,
  MonitorPlay,
  HardDrive,
  Sheet,
  CircuitBoard,
  Network,
  Cpu,
  Brain,
  BarChart2,
  LineChart,
  TrendingUp,
  Wrench,
  Monitor,
  Github,
  Lightbulb,
  Users,
  MessageSquare,
  RefreshCw,
  PenTool,
  LucideIcon,
} from "lucide-react";

interface TechInfo {
  Icon: LucideIcon;
  to: string;
  desc: string;
}

export const techInfoMap: Record<string, TechInfo> = {
  // ── Languages ─────────────────────────────────────────────────────────────
  "C/C++": {
    Icon: Code2,
    to: "https://cppreference.com",
    desc: "Systems language used for DSA, competitive programming, and low-level logic.",
  },
  "JavaScript": {
    Icon: Braces,
    to: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    desc: "Primary language for frontend and backend web development.",
  },
  "TypeScript": {
    Icon: FileType2,
    to: "https://www.typescriptlang.org",
    desc: "Typed superset of JavaScript. Used across all full-stack projects for type-safe APIs and components.",
  },
  "Python": {
    Icon: Terminal,
    to: "https://www.python.org",
    desc: "Used for ML projects — CNN apple scab detection, data pipelines, and scripting.",
  },
  "SQL": {
    Icon: Database,
    to: "https://www.postgresql.org/docs/current/sql.html",
    desc: "Relational query language used with PostgreSQL and MySQL.",
  },
  "HTML/CSS": {
    Icon: Globe,
    to: "https://developer.mozilla.org/en-US/docs/Web",
    desc: "Markup and styling fundamentals underpinning all web projects.",
  },

  // ── Frameworks & Libraries ─────────────────────────────────────────────────
  "React": {
    Icon: Atom,
    to: "https://react.dev",
    desc: "UI library used in DriftPro, MediumPro, Portfolio, and College DBMS projects.",
  },
  "Node.js": {
    Icon: Server,
    to: "https://nodejs.org",
    desc: "JS runtime for server-side logic. Powers Express and webhook microservices.",
  },
  "Express.js": {
    Icon: Zap,
    to: "https://expressjs.com",
    desc: "Minimalist Node.js framework. Used for REST APIs and the DriftPro webhook service.",
  },
  "Next.js": {
    Icon: Triangle,
    to: "https://nextjs.org",
    desc: "Full-stack React framework. Used for DriftPro and this portfolio (100/100 Core Web Vitals).",
  },
  "Tailwind CSS": {
    Icon: Wind,
    to: "https://tailwindcss.com",
    desc: "Utility-first CSS framework used across all frontend projects.",
  },
  "NextAuth.js": {
    Icon: Lock,
    to: "https://next-auth.js.org",
    desc: "OAuth authentication for Next.js — Google/GitHub login in DriftPro.",
  },
  "Hono": {
    Icon: Flame,
    to: "https://hono.dev",
    desc: "Lightweight web framework for Cloudflare Workers. Used in MediumPro's serverless backend.",
  },

  // ── DevOps & Infra ─────────────────────────────────────────────────────────
  "Docker": {
    Icon: Container,
    to: "https://www.docker.com",
    desc: "Containerised all DriftPro services. Ensures consistent dev and production environments.",
  },
  "Turborepo": {
    Icon: Boxes,
    to: "https://turbo.build/repo",
    desc: "High-performance monorepo build system used in DriftPro's Turborepo workspace.",
  },
  "GitHub CI/CD Workflows": {
    Icon: GitBranch,
    to: "https://docs.github.com/en/actions",
    desc: "Automated CI/CD pipelines via GitHub Actions for testing and deployment.",
  },
  "Vercel": {
    Icon: Triangle,
    to: "https://vercel.com",
    desc: "Deployment platform for Next.js apps. Used for portfolio with continuous performance monitoring.",
  },
  "Render": {
    Icon: MonitorPlay,
    to: "https://render.com",
    desc: "Cloud platform used for deploying backend services.",
  },
  "Cloudflare": {
    Icon: Cloud,
    to: "https://cloudflare.com",
    desc: "Edge runtime for Cloudflare Workers. Hosts MediumPro's serverless Hono backend.",
  },
  "AWS": {
    Icon: Cloud,
    to: "https://aws.amazon.com",
    desc: "Cloud infrastructure for scalable deployment and storage.",
  },
  "Redis": {
    Icon: HardDrive,
    to: "https://redis.io",
    desc: "In-memory store used in DriftPro for session caching and Upstash rate limiting.",
  },
  "WebSockets": {
    Icon: Radio,
    to: "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket",
    desc: "Real-time bidirectional communication protocol for interactive systems.",
  },
  "Monorepos": {
    Icon: Layers,
    to: "https://monorepo.tools",
    desc: "Managed shared codebases using Turborepo for DriftPro's multi-package workspace.",
  },

  // ── Databases ──────────────────────────────────────────────────────────────
  "PostgreSQL": {
    Icon: Database,
    to: "https://www.postgresql.org",
    desc: "Primary relational DB. Used in DriftPro for ACID-compliant wallet transactions.",
  },
  "MySQL": {
    Icon: Database,
    to: "https://www.mysql.com",
    desc: "Relational database used in academic projects and coursework.",
  },
  "MongoDB": {
    Icon: Database,
    to: "https://www.mongodb.com",
    desc: "NoSQL document store used in the College DBMS project with a normalised schema.",
  },
  "Prisma ORM": {
    Icon: Sheet,
    to: "https://www.prisma.io",
    desc: "Type-safe ORM for PostgreSQL. Used in DriftPro and MediumPro with Prisma Accelerate.",
  },

  // ── CS Fundamentals ────────────────────────────────────────────────────────
  "Data Structures & Algorithms": {
    Icon: Network,
    to: "https://leetcode.com",
    desc: "700+ problems solved across LeetCode and other platforms.",
  },
  "Operating Systems": {
    Icon: Cpu,
    to: "https://en.wikipedia.org/wiki/Operating_system",
    desc: "Process management, scheduling, memory, and concurrency fundamentals.",
  },
  "Object Oriented Programming": {
    Icon: Boxes,
    to: "https://en.wikipedia.org/wiki/Object-oriented_programming",
    desc: "Design principles: encapsulation, inheritance, polymorphism, abstraction.",
  },
  "Database Management System": {
    Icon: Database,
    to: "https://en.wikipedia.org/wiki/Database",
    desc: "Relational theory, normalisation, indexing, and query optimisation.",
  },
  "Shell Scripting": {
    Icon: Terminal,
    to: "https://www.gnu.org/software/bash",
    desc: "Bash scripting for automation, file ops, and dev tooling on Ubuntu.",
  },
  "Compiler Design": {
    Icon: CircuitBoard,
    to: "https://en.wikipedia.org/wiki/Compiler",
    desc: "Lexing, parsing, semantic analysis, and code generation theory.",
  },

  // ── ML & Data ──────────────────────────────────────────────────────────────
  "TensorFlow": {
    Icon: Brain,
    to: "https://www.tensorflow.org",
    desc: "Deep learning framework used to build the apple scab CNN model (90% accuracy).",
  },
  "CNN": {
    Icon: Brain,
    to: "https://en.wikipedia.org/wiki/Convolutional_neural_network",
    desc: "Convolutional Neural Network architecture for image classification tasks.",
  },
  "Grad-CAM": {
    Icon: Brain,
    to: "https://arxiv.org/abs/1610.02391",
    desc: "Gradient-weighted Class Activation Mapping — used to visualise CNN decision regions.",
  },
  "NumPy": {
    Icon: BarChart2,
    to: "https://numpy.org",
    desc: "Numerical computing library for array operations and data preprocessing.",
  },
  "Pandas": {
    Icon: LineChart,
    to: "https://pandas.pydata.org",
    desc: "Data manipulation and analysis library for structured datasets.",
  },
  "Matplotlib": {
    Icon: TrendingUp,
    to: "https://matplotlib.org",
    desc: "Plotting library for visualising training curves, confusion matrices, and data.",
  },

  // ── Tools ──────────────────────────────────────────────────────────────────
  "VS Code": {
    Icon: Monitor,
    to: "https://code.visualstudio.com",
    desc: "Primary code editor with custom extensions and keybindings.",
  },
  "Ubuntu": {
    Icon: Terminal,
    to: "https://ubuntu.com",
    desc: "Primary development OS for all projects and server-side work.",
  },
  "GitHub": {
    Icon: Github,
    to: "https://github.com/akashMalik",
    desc: "Version control and open-source collaboration. Host of all projects.",
  },

  // ── Soft Skills ────────────────────────────────────────────────────────────
  "Analytical Thinking": {
    Icon: Lightbulb,
    to: "#",
    desc: "Breaking down complex problems into structured, solvable parts.",
  },
  "Problem-solving": {
    Icon: Wrench,
    to: "#",
    desc: "700+ DSA problems solved. JEE Advanced AIR 26,380 out of 200k+ candidates.",
  },
  "Communication": {
    Icon: MessageSquare,
    to: "#",
    desc: "Clear technical and non-technical communication across teams.",
  },
  "Teamwork": {
    Icon: Users,
    to: "#",
    desc: "Collaborative team projects and inter-faculty cricket tournament runner-up.",
  },
  "Continuous Learning": {
    Icon: RefreshCw,
    to: "#",
    desc: "FFE Scholar. Always picking up new tools, frameworks, and CS concepts.",
  },
  "Zod": {
    Icon: PenTool,
    to: "https://zod.dev",
    desc: "TypeScript-first schema validation. Used in MediumPro and DriftPro for type-safe request handling.",
  },
};