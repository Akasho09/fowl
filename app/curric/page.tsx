import ThreeTexts from "@/components/mainpage/threeText"
import RightArrow from "@/components/rightArrow"
import Layout from "@/components/layyy"
export default function () {

return <Layout><div className="h-screen w-[200vw] grid grid-cols-8">
          <div className="col-span-1 h-full border-l border-black">
<ThreeTexts t1="EXTRA CURRICULAR" t2="d1" t3="HTML  ...."></ThreeTexts>
</div>
<div className="col-span-1 h-full">
<ThreeTexts t1="..." t2="d2" t3="skill"></ThreeTexts>
</div>      
    <div className="col-span-1 h-full">
<ThreeTexts t1="p1" t2="d3" t3="s3"></ThreeTexts>
</div>
<div className="col-span-1 h-full border-black">
<ThreeTexts t1="p1" t2="d1" t3="skills used "></ThreeTexts>
</div>
<div className="col-span-1 h-full">
<ThreeTexts t1="p1" t2="d2" t3="skill"></ThreeTexts>
</div>      
    <div className="col-span-1 h-full">
<ThreeTexts t1="p1" t2="d3" t3="s3"></ThreeTexts>
</div>
 <div className="col-span-2 h-full flex flex-col justify-center items-center">
            <RightArrow  linkk="/extras" />
          </div>
</div> 
</Layout>
}