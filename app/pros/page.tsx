import ThreeTexts from "@/components/mainpage/threeText"
import RightArrow from "@/components/rightArrow"
import Layout from "@/components/layyy"

const data = 
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

const data2 = 
<div className="flex flex-grow">
  <ul className="list-disc list-inside space-y-2">
  Build a fully functional blogging platform where users can read, write, and interact with blog posts.
   <li>Backend: Hono framework with Prisma ORM and PostgreSQL for efficient database
management.</li>
<li>Validation: Input validation implemented with Zod for robust data handling.</li>
   <li>Authentication: Secure user access using JWT (JSON Web Tokens).</li>
   <li>Frontend: Built using React.js for a dynamic and interactive user interface</li>
   <li>Styling: Tailwind CSS for responsive and modern design.</li>
   <li>Deployment: Cloudflare used for seamless deployment, scalability, and performance
   optimization.</li>
  </ul>
</div>


export default function A() {

return <Layout><div className="h-screen md:w-[100vw] grid grid-cols-4 flex sm:flex-col">


<div className="col-span-4 md:col-span-1 h-full border-r border-black">
<ThreeTexts t1="MediumPro" t2={"Dec 2024 - Jan 2025"}
  t3={data2}
  techs={["🛠️ 📘 TypeScript" ,"💎 ⚙️ Prisma: " , "🐘 💾 PostgreSQL" , "⚡ 🚀 Hono" , " ⚛️ 💠 React" , "🌊 🌀 Tailwind" , "☁️ 🔥 Cloudflare"]}
  links={[{l1:"https://github.com/Akasho09/MediumPro" ,  l2:"⚙️ Github"} , {l1:"https://medium-pro-ruby.vercel.app/" , l2: "☁️ Deployment"}]}
></ThreeTexts>
</div>

<div className="col-span-1 h-full border-r border-black hidden md:flex">
<ThreeTexts
  t1="College Based DataBase Management System Project"
  t2="Aug 2023 - Dec 2023"
  t3={data}
  techs={["⚙️ 🚂 Express" , "🍃 🛢️ MongoDB" , "⚛️ 💠 React"]}
  links={[{l1:"https://github.com/Akasho09/p24" ,  l2:"⚙️ Github"}]}
/>
</div>

<div className="col-span-1 h-full flex flex-col justify-center items-center hidden md:flex">
  <RightArrow  linkk="/skill" />
</div>
</div> 
</Layout>
}