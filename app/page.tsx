import Twoo from "@/components/mainpage/twoImgs";
import RightArrow from "@/components/rightArrow";
import ThreeTexts from "@/components/mainpage/threeText";
import Layout from "@/components/layyy";

export default function Home() {
  return (
   <Layout> 
      <div className="h-screen md:w-[90vw] grid grid-cols-4 flex  sm:flex-col">
   <div className="col-span-4 md:col-span-1 h-full border-r border-black">
    <ThreeTexts t1="Hi There! 👋 I'm Akash Malik." t2="🚀 Full-Stack Web Developer | Problem Solver | Cricket Enthusiast" t3="I’m a software engineer passionate about development, design, and performance. I believe in non-linear thinking, the beauty in chaos, and the importance of empathy as a human. "
    t4="Always eager to learn, build, and solve real-world problems. Let’s connect and build something amazing! 🌱💻🏏"
    links={[{l1:"https://drive.google.com/file/d/1QvZM09XyoLSF74mrEPtNM0eGkQxqMkLL/view?usp=sharing",l2:"📄 Resume"}]}></ThreeTexts>
   </div>
   <div className="col-span-1 hidden md:flex  h-full border-r border-black">
     <Twoo />
   </div>
   <div className="col-span-1 col-span-0 h-full hidden md:flex flex-col justify-center items-center">
     <RightArrow  linkk="/ed" />
   </div>
 </div></Layout>
  );
}