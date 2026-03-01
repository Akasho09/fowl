import GuessGamePage from "@/components/games/guessGame";
import SnakeGame from "@/components/games/snakeGame";
import ClickSpeedGame from "@/components/games/speed";
import TypingTest from "@/components/games/typeGame";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Extras",
};

const games = [
  { label: "Typing Test",  Component: TypingTest      },
  { label: "Guess Game",   Component: GuessGamePage   },
  { label: "Click Speed",  Component: ClickSpeedGame  },
  { label: "Snake",        Component: SnakeGame       },
];

export default function ExtrasPage() {
  return (
    <div className="h-screen flex overflow-y-hidden overflow-x-auto">

      {/* ── Game panels ── */}
      {games.map(({ label, Component }, i) => (
        <div
          key={label}
          className="
            group relative
            h-screen w-[92vw] md:w-[20rem] flex-shrink-0
            border-r
            flex flex-col
          "
        >
          {/* Panel header */}
          <div className="px-5 pt-[3dvh] pb-3 flex flex-col gap-1 font-jetB">
            <span className="text-[9px] tracking-[0.25em] uppercase opacity-40">
              — {String(i + 1).padStart(2, "0")}
            </span>
            <h2 className="font-bold text-sm pl-3 border-l-2 leading-snug !text-red-700">
              {label}
            </h2>
          </div>

          {/* Game */}
          <div className="flex-1 overflow-hidden">
            <Component />
          </div>
        </div>
      ))}

      {/* ── Thank you panel ── */}
      <div className="
        h-screen w-[92vw] md:w-[20rem] flex-shrink-0
        border-r
        flex flex-col items-center justify-center gap-4
        font-jetB
      ">
        <Image
          src="/image.png"
          width={180}
          height={180}
          alt="Thank You"
          style={{ filter: "var(--img-filter)" }}
          className="opacity-80"
        />
        <div className="flex flex-col items-center gap-1">
          <span className="text-[9px] tracking-[0.25em] uppercase opacity-40">— Thanks</span>
          <p className="font-playfair italic text-sm opacity-50">for visiting.</p>
        </div>
      </div>

    </div>
  );
}