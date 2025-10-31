"use client";
import Image from "next/image";

export default function TwoImages() {
  return (
    <div className="h-screen overflow-y-auto small-scrollbar w-[95vw] md:w-[20rem] max-w-full text-sm md:text-sm/6">
      <div className="h-screen flex flex-col items-center justify-start pt-8 p-2 relative z-10">
        <Image
          src="/comp1.png"
          alt="Image 1"
          width={300}
          height={300}
          className="border-b transition-all duration-500"
          style={{ filter: "var(--img-filter)" }}
        />

        <div
          className="relative flex justify-center w-full"
          style={{ height: "calc(100vh - 600px)" }}
        >
          <div
            className="h-3 w-3 rounded-full shadow-lg animate-bounce-ball"
            style={{ backgroundColor: "var(--ball-bg)" }}
          />
        </div>

        <Image
          src="/emps.png"
          alt="Image 2"
          width={300}
          height={300}
          className="border-t transition-all duration-500"
          style={{ filter: "var(--img-filter)" }}
        />
      </div>
    </div>
  );
}
