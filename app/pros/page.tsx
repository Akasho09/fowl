import ThreeTexts from "@/components/mainpage/threeText";
import RightArrow from "@/components/rightArrow";
import Layout from "@/components/layyy";

const data1 = (
  <div>
    <ul className="list-disc list-inside space-y-2">
      <li>Streamlined college administration with a user-friendly ReactJS frontend for efficient data interaction.</li>
      <li>Employed Express.js to build a robust backend API for efficient data processing and communication with the MongoDB database.</li>
      <li>Enables only staff (teachers and HOD) to create, read, update, and delete (CRUD) data related to:</li>
      <ul className="list-disc list-inside pl-5">
        <li>➡ Attendance</li>
        <li>➡ Internal Marks</li>
        <li>➡ Time Schedule</li>
      </ul>
    </ul>
  </div>
);

const data2 = (
  <div className="flex flex-grow">
    <ul className="list-disc list-inside space-y-2">
      <li>Build a fully functional blogging platform where users can read, write, and interact with blog posts.</li>
      <li>Backend: Hono framework with Prisma ORM and PostgreSQL for efficient database management.</li>
      <li>Validation: Input validation implemented with Zod for robust data handling.</li>
      <li>Authentication: Secure user access using JWT (JSON Web Tokens).</li>
      <li>Frontend: Built using React.js for a dynamic and interactive user interface.</li>
      <li>Styling: Tailwind CSS for responsive and modern design.</li>
      <li>Deployment: Cloudflare used for seamless deployment, scalability, and performance optimization.</li>
    </ul>
  </div>
);

const data3 = (
  <div className="flex flex-grow">
    <ul className="list-disc list-inside space-y-2">
      <li>Developed a secure payment desktop application with seamless transaction handling.</li>
      <li>Built using Next.js for both frontend and backend logic.</li>
      <li>Used Express.js as an auxiliary backend service for specialized operations.</li>
      <li>Implemented a monorepo architecture with Turborepo for better scalability and performance.</li>
      <li>Stored transaction data securely using PostgreSQL with Prisma ORM.</li>
      <li>Designed an intuitive user interface with Tailwind CSS.</li>
    </ul>
  </div>
);

export default function A() {
  return (
    <Layout>
      
      <div className="h-screen md:w-[90vw] grid grid-cols-4 flex sm:flex-col">

        <div className="col-span-1 h-full border-r border-black hidden md:flex">
          <ThreeTexts
            t1="DriftPro - Paytm for Desktop"
            t2="Feb 2025 - Present"
            t3={data3}
            techs={[
              "⚡ 📘 Next.js",
              "📦 ⚙️ Turborepo",
              "🐘 💾 PostgreSQL",
              "🛠️ 📘 TypeScript",
              "⚙️ 🚂 Express",
              "💎 ⚙️ Prisma ORM",
              "🌊 🌀 Tailwind CSS"
            ]}
            links={[
              { l1: "https://github.com/Akasho09/DriftPro", l2: "⚙️ Github" },
            ]}
          />
        </div>

        <div className="col-span-4 md:col-span-1 h-full border-r border-black">
          <ThreeTexts
            t1="MediumPro"
            t2="Dec 2024 - Jan 2025"
            t3={data2}
            techs={["🛠️ 📘 TypeScript", "💎 ⚙️ Prisma", "🐘 💾 PostgreSQL", "⚡ 🚀 Hono", "⚛️ 💠 React", "🌊 🌀 Tailwind CSS", "☁️ 🔥 Cloudflare"]}
            links={[
              { l1: "https://github.com/Akasho09/MediumPro", l2: "⚙️ Github" },
              { l1: "https://medium-pro-ruby.vercel.app/", l2: "☁️ Deployment" }
            ]}
          />
        </div>

        <div className="col-span-1 h-full border-r border-black hidden md:flex">
          <ThreeTexts
            t1="College-Based Database Management System"
            t2="Aug 2023 - Dec 2023"
            t3={data1}
            techs={["⚙️ 🚂 Express", "🍃 🛢️ MongoDB", "⚛️ 💠 React"]}
            links={[{ l1: "https://github.com/Akasho09/p24", l2: "⚙️ Github" }]}
          />
        </div>


        <div className="col-span-1 h-full flex flex-col justify-center items-center hidden md:flex">
          <RightArrow linkk="/skill" />
        </div>
      </div>
    </Layout>
  );
}
