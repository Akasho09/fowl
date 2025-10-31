import { Metadata } from "next";
import { p1data , p2data , p3data , p4data , p5data} from "@/components/project/project";
import ProjectServer from "@/components/project/wrapper";

export const metadata: Metadata = { title: "Projects" };

export default function Projects() {
  return (
     <div className="h-screen flex overflow-y-hidden overflow-x-visible">
    <div className="h-screen border-r w-[92vw] md:w-[20rem]">
        <ProjectServer
          pname="DriftPro - Paytm for Desktop"
          desc={p2data}
          date="Feb 2025 - Present"
          techs={["Next.js", "Express.js" , "Turborepo", "TypeScript", "NextAuth.js", "Zod", "ioredis", "React Icons", "React Hot Toast", "Clsx", "Prettier", "Prisma ORM", "PostgreSQL", "Docker", "GitHub CI/CD Workflows" , "Vercel" , "Render"]}
          links={[{ linkName: "⚙️ Github", href: "https://github.com/Akasho09/DriftPro" } ,
                  { linkName: "☁️ Deployment" , href : "https://driftpro.vercel.app"}
          ]}
          reponame="DriftPro"
    />
    </div>
        <div className="h-screen border-r w-[92vw] md:w-[20rem]">
      <ProjectServer
        pname="Apple Scab Estimation Using CNN"
        desc={p5data}
        date="Aug 2025 – Present"
        techs={[
          "Python", "TensorFlow", "CNN", "Data Augmentation", "Grad-CAM", "NumPy", "Pandas", "Matplotlib",
        ]}
        links={[
          { linkName: "⚙️ GitHub", href: "https://github.com/Akasho09/sem7/tree/main/MinorProject" },
        ]}
        reponame="sem7"
      />
    </div>

    <div className="h-screen border-r w-[92vw] md:w-[20rem]">
        <ProjectServer
          pname="MediumPro - Blogging Web App"
          desc={p1data}
          date="Dec 2024 - Jan 2025"
          techs={[ "React", "Zod", "Debouncing", "Cloudflare Workers", "Hono", "PostgreSQL", "Prisma ORM", "TypeScript", "Tailwind CSS", "JWT Auth", "GitHub CI/CD Workflows",
          ]}
          links={[
            { linkName: "⚙️ Github", href: "https://github.com/Akasho09/mediumpro" },
            { linkName: "☁️ Deployment", href: "https://medium-pro-ruby.vercel.app/" },
          ]}
          reponame="mediumpro"
        />
      </div>

      {/* Creator Dashboard */}
    <div className="h-screen border-r w-[92vw] md:w-[20rem]">
        <ProjectServer
          pname="Creator Dashboard"
          desc={p3data}
          date="Mar 2025 - Apr 2025"
          techs={[ "React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Docker", "JWT Auth", "API Aggregation",
          ]}
          links={[
            { linkName: "⚙️ Github", href: "https://github.com/Akasho09/vAI" },
            { linkName: "☁️ Deployment", href: "https://vertxxai.vercel.app/" },
          ]}
          reponame="vAI"
        />
    </div>

      {/* College DBMS */}
    <div className="h-screen border-r w-[92vw] md:w-[20rem]">
        <ProjectServer
          pname="College-Based Database Management System"
          desc={p4data}
          date="Aug 2023 - Dec 2023"
          techs={[ "React.js", "Express.js", "MongoDB", "Node.js", "Tailwind CSS", "CRUD System",
          ]}
          links={[{ linkName: "⚙️ Github", href: "https://github.com/Akasho09/p24" }]}
          reponame="p24"
        />
    </div>
    </div>
  );
}
