import Abc from "../components/mainpage/twoText";
import Twoo from "@/components/mainpage/twoImgs";
import RightArrow from "@/components/rightArrow";
import Layout from "@/components/layyy";
export default function Home() {
  
  return (
   <Layout> <div className="h-screen md:w-[90vw] grid grid-cols-4 flex  sm:flex-col">
   <div className="col-span-4 md:col-span-1 h-full border-r border-black">
   <Abc t1="Hi There ! . I am Akash ." t2="Developer, Problem Solver, Tech Blogger and a loving Human." t3="I am a software engineer passionate about dev, design and performance. I believe in non-linear thinking, the beauty in chaos and absurdity, and the importance of empathy as a human."/>
   </div>
   <div className="col-span-1 hidden md:flex  h-full border-r border-black">
     <Twoo />
   </div>
   <div className="col-span-2 col-span-0 h-full hidden md:flex flex-col justify-center items-center">
     <RightArrow  linkk="/ed" />
   </div>
 </div></Layout>
  );
}