import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiZod, SiPostgresql, SiMongodb,
  SiPrisma, SiRedis, SiTailwindcss, SiJsonwebtokens, SiCloudflare, SiVercel,
  SiGithub, SiTurborepo, SiDocker, SiTypescript, SiPython, SiTensorflow,
  SiNumpy, SiPandas, SiPrettier, SiAxios, SiHtml5, SiAmazon, SiMysql
} from "react-icons/si";
import { MdOutlineHttp, MdOutlineVisibility } from "react-icons/md";
import { FaKey, FaCode } from "react-icons/fa";
import { IconType } from "react-icons";

export const techInfoMap: Record<string, { to: string; Icon: IconType; desc: string }> = {
  // Frontend
  React: { to: "/skills#langs", Icon: SiReact, desc: "UI library for building components" },
  "Next.js": { to: "/skills#langs", Icon: SiNextdotjs, desc: "React framework for SSR" },
  "Tailwind CSS": { to: "/skills#devs", Icon: SiTailwindcss, desc: "Utility-first CSS framework" },
  TypeScript: { to: "/skills#langs", Icon: SiTypescript, desc: "Typed superset of JavaScript" },
  "JavaScript": { to: "/skills#langs", Icon: SiReact, desc: "Web scripting language" },
  "C/C++": { to: "/skills#langs", Icon: FaCode, desc: "Compiled programming languages" },
  "HTML/CSS": { to: "/skills#langs", Icon: SiHtml5, desc: "Markup and styling languages" },
  SQL: { to: "/skills#langs", Icon: SiMysql, desc: "Structured Query Language" },

  // Backend
  "Node.js": { to: "/skills#langs", Icon: SiNodedotjs, desc: "JavaScript runtime environment" },
  "Express.js": { to: "/skills#langs", Icon: SiExpress, desc: "Minimal web framework" },
  Hono: { to: "/skills#langs", Icon: MdOutlineHttp, desc: "Edge-optimized web framework" },

  // DBs & ORM
  PostgreSQL: { to: "/skills#dbs", Icon: SiPostgresql, desc: "Relational database system" },
  MongoDB: { to: "/skills#dbs", Icon: SiMongodb, desc: "NoSQL database" },
  MySQL: { to: "/skills#dbs", Icon: SiMysql, desc: "Relational database system" },
  "Prisma ORM": { to: "/skills#dbs", Icon: SiPrisma, desc: "Type-safe ORM for databases" },
  Redis: { to: "/skills#dbs", Icon: SiRedis, desc: "In-memory cache and data store" },

  // ML & Python Stack
  Python: { to: "/skills#ml", Icon: SiPython, desc: "High-level programming language" },
  TensorFlow: { to: "/skills#ml", Icon: SiTensorflow, desc: "ML library for neural networks" },
  CNN: { to: "/skills#ml", Icon: SiTensorflow, desc: "Convolutional Neural Network" },
  "Grad-CAM": { to: "/skills#ml", Icon: MdOutlineVisibility, desc: "Model visualization technique" },
  NumPy: { to: "/skills#ml", Icon: SiNumpy, desc: "Numerical computation library" },
  Pandas: { to: "/skills#ml", Icon: SiPandas, desc: "Data analysis library" },
  Matplotlib: { to: "/skills#ml", Icon: SiPython, desc: "Data visualization library" },

  // DevOps & Tools
  "NextAuth.js": { to: "/skills#tools", Icon: FaKey, desc: "Authentication for Next.js apps" },
  Zod: { to: "/skills#tools", Icon: SiZod, desc: "Schema validation for TypeScript" },
  Axios: { to: "/skills#tools", Icon: SiAxios, desc: "HTTP client for API calls" },
  "React Icons": { to: "/skills#tools", Icon: SiReact, desc: "Icon library for React" },
  "React Hot Toast": { to: "/skills#tools", Icon: SiReact, desc: "Beautiful toast notifications" },
  Clsx: { to: "/skills#tools", Icon: SiReact, desc: "Utility for conditional class names" },
  Prettier: { to: "/skills#tools", Icon: SiPrettier, desc: "Code formatter for clean style" },
  "JWT Auth": { to: "/skills#tools", Icon: SiJsonwebtokens, desc: "Secure user authentication" },
  "GitHub CI/CD Workflows": { to: "/skills#tools", Icon: SiGithub, desc: "Automated pipelines for deployment" },
  Turborepo: { to: "/skills#tools", Icon: SiTurborepo, desc: "Monorepo build system" },
  Docker: { to: "/skills#tools", Icon: SiDocker, desc: "Containerized app deployment" },
  Vercel: { to: "/skills#tools", Icon: SiVercel, desc: "Frontend hosting and CI/CD" },
  Cloudflare: { to: "/skills#tools", Icon: SiCloudflare, desc: "CDN and Edge hosting" },
  Render: { to: "/skills#tools", Icon: SiCloudflare, desc: "Cloud deployment platform" },
  Debouncing: { to: "/skills#tools", Icon: MdOutlineHttp, desc: "Optimized function execution delay" },
  "Intersection Observer": { to: "/skills#tools", Icon: MdOutlineVisibility, desc: "Lazy-load and scroll tracking" },
  AWS: { to: "/skills#tools", Icon: SiAmazon , desc: "Cloud computing services" },
  Monorepos: { to: "/skills#tools", Icon: SiTurborepo, desc: "Multiple projects in a single repo" },
  WebSockets: { to: "/skills#tools", Icon: MdOutlineHttp, desc: "Real-time communication protocol" },

  // Tools & Platforms
  "VS Code": { to: "/skills#tools", Icon: FaCode, desc: "Code editor" },
  Ubuntu: { to: "/skills#tools", Icon: FaCode, desc: "Linux OS for development" },
  GitHub: { to: "/skills#tools", Icon: SiGithub, desc: "Version control platform" },
};
