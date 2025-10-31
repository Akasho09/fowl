"use client";
import SocialLinks from "./iconss";
import Link from "next/link";
export default function Me(){
  return (
    <div className="fixed top-0 h-[100dvh] md:w-[4rem] w-[8vw] border-r z-[50] bg-[var(--bg-color)]/80 backdrop-blur-sm"
    >
      <div className="flex flex-col items-center justify-between h-[100dvh]">
        <Link href={"/"} className="mt-36 whitespace-nowrap text-2xl font-kodeMono font-bold cursor-pointer">
          <p className="-rotate-90 z-[20] !text-pink-700">
            AKASH AHMAD MALIK
          </p>
        </Link>
        <div className="flex pb-4"><SocialLinks /></div>
      </div>
    </div>
  );
}
