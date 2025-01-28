import Abc from "@/components/mainpage/twoText"
import Twoo from "@/components/mainpage/twoImgs"
import RightArrow from "@/components/rightArrow"
import ThreeTexts from "@/components/mainpage/threeText"
import Layout from "@/components/layyy"
export default function() {
   
    return  <Layout> <div className="h-screen w-[160vw] grid grid-cols-6">
    <div className="col-span-1 h-full border-r border-black">
      <ThreeTexts t1="PCMB 12th Boards" t2="Govt Higher Secondary School , Dangiwacha Rafiabad Baramulla Kashmir." 
      t3="
      Aggregate Percentage : 86%.
      "
      t4="Sept. 2019 - Sept. 2021" 
      t5="https://drive.google.com/file/d/1t3xIZu66qB-XvXVahJB-8ZZWbjffF9jp/view?usp=drive_link"></ThreeTexts>
</div>
<div className="col-span-1 h-full border-r border-black">
      <ThreeTexts t1="JEE MAINS and JEE ADVANCED" t2="Petronet Kashmir Super 30 , Srinagar Kashmir." 
      t3={`  JEE MAINS rank : 44k ,
      JEE Advanced rank : 26k`}
      t4="Sept. 2021 - Aug 2022" 
      t5="https://drive.google.com/drive/u/0/folders/1VBKGDT7q4WWNCuIjlHhReuCcu8uG2KJ5"></ThreeTexts>
</div>
<div className="col-span-1 h-full border-r border-black">
      <ThreeTexts t1="B-Tech Computer Engineering" t2="Jamia Millia Islamia , New Delhi." 
      t3={` CGPA : 7.1 `}
      t4="Aug. 2022 - May 2026" 
      t5="https://drive.google.com/file/d/1VHfcJLD8fiaKNbQDGNS7KNHqO31dwKGE/view?usp=drive_link"></ThreeTexts>
</div>


    <div className="col-span-1 h-full border-r border-black">
      <Twoo />
    </div>
    <div className="col-span-0 h-full flex flex-col justify-center items-center ">
      <RightArrow  linkk="/pros" />
    </div>
  </div></Layout>
}
/*
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
*/