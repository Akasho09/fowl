import TechButton from "@/components/techs/TechButton";
import { techInfoMap } from "@/components/techs/techMap";
import { LucideIcon, Code } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Akash Malik",
  description: "Technical skills, tools, and frameworks used by Akash Malik.",
};

interface SkillSection {
  title: string;
  skills: string[];
}

const skillSections: SkillSection[] = [
  {
    title: "Languages",
    skills: ["C/C++", "JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "Express.js", "Hono", "Tailwind CSS", "NextAuth.js"],
  },
  {
    title: "DevOps & Infra",
    skills: ["Docker", "Turborepo", "GitHub CI/CD Workflows", "Vercel", "Cloudflare", "Redis", "AWS", "WebSockets", "Monorepos"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM"],
  },
  {
    title: "CS Fundamentals",
    skills: ["Data Structures & Algorithms", "Operating Systems", "Object Oriented Programming", "Database Management System", "Shell Scripting", "Compiler Design"],
  },
  {
    title: "ML & Data",
    skills: ["TensorFlow", "CNN", "Grad-CAM", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    title: "Tools",
    skills: ["VS Code", "Ubuntu", "GitHub"],
  },
  {
    title: "Soft Skills",
    skills: ["Analytical Thinking", "Problem-solving", "Communication", "Teamwork", "Continuous Learning"],
  },
];

export default function SkillsPage() {
  return (
    <div className="h-screen flex overflow-y-hidden overflow-x-auto">
      {skillSections.map((section, i) => (
        <div
          key={i}
          className="
            group relative
            h-screen w-[92vw] md:w-[20rem] flex-shrink-0
            border-r border-gold/10
            transition-colors duration-300
            hover:bg-gold/[0.02]
          "
        >
          {/* Top shimmer */}
          <div className="
            absolute inset-x-0 top-0 h-px
            bg-gradient-to-r from-transparent via-gold to-transparent
            opacity-0 group-hover:opacity-100 transition-opacity duration-500
          " />

          <div className="h-full flex flex-col gap-6 mt-[3dvh] mb-[3dvh] mx-5 overflow-y-auto small-scrollbar">

            {/* Header */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[9px] tracking-[0.25em] uppercase text-gold/40 font-jetB">
                — {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="!text-red-700 font-jetB font-bold text-sm pl-3 border-l-2 border-gold leading-snug">
                {section.title}
              </h2>
            </div>

            {/* Skill buttons */}
            <div className="flex flex-col gap-0.5">
              {section.skills.map((skill, j) => {
                const data = techInfoMap[skill] as
                  | { Icon: LucideIcon; to: string; desc: string }
                  | undefined;

                return (
                  <TechButton
                    key={j}
                    to={data?.to ?? "#"}
                    techName={skill}
                    Icon={data?.Icon ?? Code}
                    desc={data?.desc ?? "General technology"}
                  />
                );
              })}
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}