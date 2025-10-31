import ThreeTexts from "@/components/mainpage/threeText";
import Link from "next/link";

export default function WhyHireMe() {
  return (
    <div className="h-screen flex overflow-y-auto">

    <div className="md:w-[20rem] border-r ">
        <ThreeTexts
          t1="No Formal Experience Yet"
          t2="Open to opportunities for internships or full-time roles."
          t3="Passionate about software development, problem-solving, and building real-world projects."
          t4={
             <p className="!text-green-600 text-sm">Here’s why you should hire me → </p> 
          }
        />
      </div>
      
      <div className=" md:w-[20rem] border-r rp-4 shadow hover:shadow-lg transition">
        <ThreeTexts
          t1="LeetCode"
          t2="Solved 500+ algorithm & DS problems, showcasing strong problem-solving and coding skills."
          t3=""
          t4={
            <Link
              href="/dsa"
              className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
              View Profile
            </Link>
          }
        />
      </div>

      {/* GitHub / Projects Summary */}
      <div className=" md:w-[20rem] border-r">
        <ThreeTexts
          t1="GitHub / Projects"
          t2="Completed 10+ full-stack projects including web apps, REST APIs, and cloud deployments."
          t3=""
          t4={
            <Link
              href="/dsa"
              className="inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
            >
              View Profile
            </Link>
          }
        />
      </div>

      {/* Skills Summary */}
      <div className=" md:w-[20rem] border-r">
        <ThreeTexts
          t1="Skills"
          t2="Proficient in React, Node.js, PostgreSQL, Redis, Docker, CI/CD, and modern tech stacks."
          t3=""
          t4={
            <Link
              href="/skills"
              className="inline-block mt-4 px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
            >
              View Skills
            </Link>
          }
        />
      </div>

      {/* Career Goal */}
      <div className=" md:w-[20rem] border-r">
        <ThreeTexts
          t1="Career Goal"
          t2="Looking for Full-time or Internship → FTE opportunities to apply my skills in real-world software development."
          t3=""
          t4={
            <Link
              href="/"
              className="inline-block mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
            >
              Contact Me
            </Link>
          }
        />
      </div>

    </div>
  );
}
