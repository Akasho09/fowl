import Layout from "@/components/layyy";
import ThreeTexts from "@/components/mainpage/threeText"
import RightArrow from "@/components/rightArrow"
export default function A() {
return <Layout><div className="h-screen md:w-[100vw] grid grid-cols-4">
          <div className="col-span-4 md:col-span-1 h-full border-r border-black">
<ThreeTexts t1="About page" t2="" t3=""></ThreeTexts>

</div>
<div className="col-span-4 md:col-span-1 border-r border-black flex justify-center items-center">
</div>
 <div className="col-span-1 h-full flex flex-col justify-center items-center hidden md:flex ">
            <RightArrow  linkk="/" />
          </div>
</div> 
</Layout>
  
    }