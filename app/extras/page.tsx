// pages/_app.tsx

"use client"
import Layout from "@/components/layyy";
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
return <Layout>
    Extras 
</Layout>
    }