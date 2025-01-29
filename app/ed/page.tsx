import Twoo from "@/components/mainpage/twoImgs"
import RightArrow from "@/components/rightArrow"
import ThreeTexts from "@/components/mainpage/threeText"
import Layout from "@/components/layyy"

const data = <div>
  <ol><li>JEE MAINS AIR rank :  44k  </li>
  <li>JEE ADVANCED AIR rank : 26k </li></ol>
</div>


export default function A() {
    return  <Layout> <div className="h-screen md:w-[160vw] grid grid-cols-6 flex sm:flex-col">

<div className="col-span-6 md:col-span-1 h-full border-r border-black">
      <ThreeTexts t1="B-Tech Computer Engineering" t2="Jamia Millia Islamia , New Delhi 110025." 
      t3={` CGPA : 7.1 .`}
      t4="Aug 2022 - May 2026" 
      links={[{l1:"https://drive.google.com/file/d/1VHfcJLD8fiaKNbQDGNS7KNHqO31dwKGE/view?usp=drive_link"  ,  l2:"Drive"}]}></ThreeTexts>
</div>

<div className="col-span-1 h-full border-r border-black hidden md:flex">
      <ThreeTexts t1="JEE MAINS and JEE ADVANCED" t2="Petronet Kashmir Super 30 , Srinagar Kashmir." 
      t3={data}
      t4="Sept 2021 - Aug 2022" 
      links={[{l1:"https://drive.google.com/drive/u/0/folders/1VBKGDT7q4WWNCuIjlHhReuCcu8uG2KJ5" , l2:"Drive"}]}
></ThreeTexts>
</div>

<div className="col-span-1 h-full border-r border-black hidden md:flex">
      <ThreeTexts t1="PCMB 12th Boards" t2="Govt Higher Secondary School , Dangiwacha Rafiabad Baramulla Kashmir." 
      t3="
      Aggregate Percentage : 86%.
      "
      t4="Sept 2019 - Sept 2021" 
      links={[{l1:"https://drive.google.com/file/d/1t3xIZu66qB-XvXVahJB-8ZZWbjffF9jp/view?usp=drive_link" , l2:"Drive"}]}

></ThreeTexts>
</div>
    <div className="col-span-1 h-full border-r border-black hidden md:flex">
      <Twoo />
    </div>
    <div className="col-span-0 h-full flex flex-col justify-center items-center  hidden md:flex">
      <RightArrow  linkk="/pros" />
    </div>
  </div></Layout>
}
