// pages/_app.tsx

"use client"
import Layout from "@/components/layyy";
import ThreeTexts from "@/components/mainpage/threeText"
import RightArrow from "@/components/rightArrow"
import { useEffect } from "react"
export default function () {
return <Layout><div className="h-screen md:w-[100vw] grid grid-cols-4">
          <div className="col-span-4 md:col-span-1 h-full border-r border-black">
<ThreeTexts t1="Extras" t2="" t3=""></ThreeTexts>
</div>

 <div className="col-span-3 h-full flex flex-col justify-center items-center hidden md:flex ">
            <RightArrow  linkk="/" />
          </div>
</div> 
</Layout>
  
    }