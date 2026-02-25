import InfoCard from "@/components/mainpage/imgNtext";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function A() {
  return (
    <div className="h-screen flex overflow-x-auto md:overflow-visible ">
      
      {/* Section 1 */}
      <div className="h-screen border-r w-[92vw] md:w-[20rem] flex">
        <InfoCard
          txt="Full-Stack Engineer"
          txt3="I build end-to-end systems — from polished frontend interfaces to scalable backend architecture. Strong foundations in DSA, OS, DBMS, and Distributed Systems guide how I design reliable, production-ready applications."
        />
      </div>

      {/* Section 2 */}
      <div className="h-screen border-r w-[92vw] md:w-[20rem] flex">
        <InfoCard
          txt="Backend + DevOps Focused"
          txt2="I design secure APIs with PostgreSQL, Prisma, and MongoDB, implement authentication (JWT/OAuth), caching with Redis, and rate limiting. I containerize with Docker and automate CI/CD with GitHub Actions."
          txt4="I think beyond code — performance, scalability, and clean deployments matter."
        />
      </div>

      {/* Section 3 */}
      <div className="h-screen border-r w-[92vw] md:w-[20rem] flex">
        <InfoCard
          img="/ak2.png"
          txt="Performance-Driven"
          txt3="I build fast, responsive applications using React, Next.js, and TypeScript. Optimized my portfolio to 100/100 Core Web Vitals through code-splitting and rendering optimizations."
          txt2="Focused on delivering smooth UX backed by efficient system design."
        />
      </div>

      {/* Section 4 */}
      <div className="h-screen border-r w-[92vw] md:w-[20rem] flex">
        <InfoCard
          txt="Let’s Build Something Meaningful"
          txt3="Seeking a full-time Software Engineering role where I can contribute across the stack — from UI to infrastructure."
          txt2="New Delhi, India • Open to Relocation"
        />
      </div>
    </div>
  );
}