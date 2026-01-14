import Image from "next/image";
import comp1 from "@/public/comp1.png";
import comp2 from "@/public/emps.png";

export default function TwoImages() {
  return (
    <div className="h-screen overflow-y-auto small-scrollbar w-[95vw] md:w-[20rem] max-w-full text-sm md:text-sm/6">
      <div className="h-screen flex flex-col items-center justify-start pt-8 p-2 relative z-10">
        {/* Top Image */}
        <Image
          src={comp1}
          alt="Top Image"
          width={300}
          height={300}
          className="border-b transition-all duration-500"
          style={{ filter: "var(--img-filter)" }}
          placeholder="blur"
        />

        {/* Bounce Area */}
        <div className="relative flex justify-center w-full" style={{ height: "calc(100vh - 600px)" }}>
          <div className="relative h-full w-3 flex justify-center">
            <div
              className="absolute h-3 w-3 rounded-full shadow-lg animate-bounce-ball"
              style={{ backgroundColor: "var(--ball-bg)" }}
            />
          </div>
        </div>

        {/* Bottom Image */}
        <Image
          src={comp2}
          alt="Bottom Image"
          width={300}
          height={300}
          className="border-t transition-all duration-500"
          style={{ filter: "var(--img-filter)" }}
        />
      </div>
    </div>
  );
}

