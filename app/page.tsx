"use client";
import { useEffect } from "react";
import Abc from "../components/mainpage/twoText";
import Twoo from "@/components/mainpage/twoImgs";
import RightArrow from "@/components/rightArrow";

export default function Home() {
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

  return (
    <div className="h-screen w-[100vw] grid grid-cols-4 overflow-hidden">
      <div className="col-span-1 h-full border border-black">
      <Abc t1="Hi There ! . I am Akash ." t2="Developer, Problem Solver, Tech Blogger and a loving Human." t3="I am a software engineer passionate about dev, design and performance. I believe in non-linear thinking, the beauty in chaos and absurdity, and the importance of empathy as a human."/>

      </div>
      <div className="col-span-1 h-full border-r border-black">
        <Twoo />
      </div>
      <div className="col-span-2 h-full flex flex-col justify-center items-center">
        <RightArrow  linkk="/ed" />
      </div>
    </div>
  );
}