import Link from "next/link";
import Twoo from "@/components/mainpage/twoImgs";

const content = {
  greeting: "Hi There! 👋 I'm Akash Ahmad Malik",
  roles: ["Full-Stack Engineer", "Problem Solver", "Cricket Enthusiast"],
  description: `Final-year Computer Engineering student at Jamia Millia Islamia with hands-on experience building production-grade full-stack systems. Actively seeking full-time roles where I can contribute to impactful engineering at scale.`,
  connect: "Always eager to learn, build, and solve real-world problems. Let’s connect and build something amazing! 🌱💻🏏",
  resume: "https://drive.google.com/file/d/1e1osMi1BaVTZ09cahAc8q9R6rjBi7Fzu/view?usp=sharing",
};

const Home = () => {
  return (
    <div className="h-screen flex overflow-x-auto overflow-y-hidden">

      <div className="h-screen border-r w-[92vw] md:w-[20rem] flex-shrink-0">
        <div className="w-full h-[92dvh] mt-[3dvh] mx-4 pr-4 flex flex-col justify-between font-jetB text-xs tracking-wide overflow-y-auto small-scrollbar">

          <div className="flex flex-col gap-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="tracking-[0.25em] uppercase mb-1.5 mt-1 opacity-40 ">
                  — Introduction
                </p>
                <h1 className="border-l-2 border-gold pl-2 font-bold text-sm leading-snug !text-red-700">
                  {content.greeting}
                </h1>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {content.roles.map((role) => (
                <span
                  key={role}
                  className="uppercase px-2 py-0.5 rounded-sm border opacity-80"
                >
                  {role}
                </span>
              ))}
            </div>
               <div className="flex justify-end mr-2 mt-2">
                <Link
                  href={content.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!text-red-500 border w-fit px-2 py-1 hover:underline hover:!text-blue-500"
                >
                 ↗ Resume
                </Link>
                </div>
          </div>

          {/* Middle — description */}
          <div className="flex flex-col gap-2">
            <div className="w-6 h-px" />
            <p className="pr-1 opacity-60 leading-relaxed">
              {content.description}
            </p>
          </div>

          {/* Bottom — tagline */}
          <div>
            <p className="italic mr-2 text-right pr-3 border-r-2 font-playfair leading-relaxed">
              {content.connect}
            </p>
          </div>

        </div>
      </div>

      {/* ── Image panel ── */}
      <div className="h-screen border-r border-gold/10 w-[92vw] md:w-[20rem] flex-shrink-0 flex">
        <Twoo />
      </div>

    </div>
  );
};

export default Home;