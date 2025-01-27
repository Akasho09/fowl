"use client"
import ThreeTexts from "@/components/mainpage/threeText"
import RightArrow from "@/components/rightArrow"
import { useEffect } from "react"
export default function () {
   useEffect(() => {
        const handleWheel = (event: any) => {
          if (event.deltaY !== 0) {
            window.scrollBy({
              left: event.deltaY * 2,
            });
          }
        };
    
        window.addEventListener("wheel", handleWheel);
    
        return () => {
          window.removeEventListener("wheel", handleWheel);
        };
      }, []);
return <div className="h-screen w-[160vw] grid grid-cols-5">
          <div className="col-span-1 h-full border-l border-black">
<ThreeTexts t1="p1" t2="d1" t3="skills used "></ThreeTexts>
</div>
<div className="col-span-1 h-full">
<ThreeTexts t1="p1" t2="d2" t3="skill"></ThreeTexts>
</div>      
    <div className="col-span-1 h-full">
<ThreeTexts t1="p1" t2="d3" t3="s3"></ThreeTexts>
</div>
 <div className="col-span-2 h-full flex flex-col justify-center items-center">
            <RightArrow  linkk="/" />
          </div>
</div> 
}