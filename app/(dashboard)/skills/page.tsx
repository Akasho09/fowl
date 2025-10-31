import TechButton from "@/components/techs/TechButton";
import { techInfoMap } from "@/components/techs/techMap";
import { IconType } from "react-icons";
import { FaCode } from "react-icons/fa";

interface SkillSection {
  title: string;
  skills: string[];
}


const skillSections: SkillSection[] = [
  { title: "🖥️ Programming Languages", skills: ["C/C++", "JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS"] },
  { title: "⚡ Development & Frameworks", skills: ["React", "Node.js", "Express.js", "Next.js", "Tailwind CSS", "NextAuth.js", "Hono"] },
  { title: "🛠️ DevOps Tools", skills: ["AWS", "Docker", "Monorepos", "Redis", "WebSockets", "Vercel", "Render", "GitHub CI/CD Workflows", "Turborepo", "Cloudflare"] },
  { title: "📚 CS Fundamentals", skills: ["Data Structures & Algorithms", "Operating Systems", "Object Oriented Programming", "Database Management System", "Shell Scripting", "Compiler Design", "Embedded Systems", "Data Mining"] },
  { title: "💾 Databases", skills: ["MongoDB", "MySQL", "PostgreSQL", "Prisma ORM"] },
  { title: "🧠 Machine Learning & Data", skills: ["TensorFlow", "CNN", "Grad-CAM", "NumPy", "Pandas", "Matplotlib"] },
  { title: "🤝 Soft Skills", skills: ["Analytical Thinking", "Problem-solving", "Communication", "Teamwork", "Continuous Learning"] },
  { title: "🧰 Tools & Platforms", skills: ["VS Code", "Ubuntu", "GitHub"] },
];


export default function SkillsPage() {
  return (
   <div className="h-screen flex overflow-y-hidden overflow-x-visible">
      {skillSections.map((section, i) => (
        <div className="border-r" key={i}>
        <div className="h-screen w-[92vw] md:w-[20rem] my-[3dvh]">
          <h2 className="text-sm font-semibold m-4 !text-red-700 font-jetB">- {section.title}</h2>
          <div className="flex flex-col gap-2 m-4">
            {section.skills.map((skill , i) => {
              const data = techInfoMap[skill] as { Icon: IconType; to: string; desc: string };
              return (
                <TechButton
                  key={i}
                  to={data?.to || "#"}
                  techName={skill}
                  Icon={data?.Icon || FaCode}
                  desc={data?.desc || "General technology"}
                  className="px-3 py-1 border rounded-md text-xs hover:bg-blue-500 transition-colors"
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
