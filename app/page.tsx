"use client";
import { useEffect } from "react";
import Abc from "../components/mainpage/1";
import Twoo from "@/components/mainpage/2";
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
    <div className="h-screen w-[125vw] grid grid-cols-4 overflow-hidden">
      <div className="col-span-1 h-full border border-black">
        <Abc />
      </div>
      <div className="col-span-1 h-full border-r border-black">
        <Twoo />
      </div>
      <div className="col-span-2 h-full flex flex-col justify-center items-center">
        <RightArrow />
      </div>
    </div>
  );
}