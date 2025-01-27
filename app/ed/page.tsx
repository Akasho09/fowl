"use client";
import Abc from "@/components/mainpage/twoText"
import Twoo from "@/components/mainpage/twoImgs"
import RightArrow from "@/components/rightArrow"
import { useEffect } from "react";
export default function() {
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
    return   <div className="h-screen w-[160vw] grid grid-cols-6">
          <div className="col-span-1 h-full border border-black">
            <Abc t1="Boards From" t2="Govt Higher Secondary School , Dangiwacha ." t3="
            percentage : 86%
            "/>
          </div>
          <div className="col-span-1 h-full border border-black">
            <Abc t1="Boards From" t2="Govt Higher Secondary School , Dangiwacha ." t3="
            percentage : 86%
            "/>
          </div>
          <div className="col-span-1 h-full border border-black">
            <Abc t1="Boards From" t2="Govt Higher Secondary School , Dangiwacha ." t3="
            percentage : 86%
            "/>
          </div>
          <div className="col-span-1 h-full border-r border-black">
            <Twoo />
          </div>
          <div className="col-span-2 h-full flex flex-col justify-center items-center">
            <RightArrow  linkk="/pros" />
          </div>
        </div>
}