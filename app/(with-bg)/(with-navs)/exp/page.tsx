import Link from "next/link";
import { Metadata } from "next";
import { panels } from "./data";

export const metadata: Metadata = {
  title: "Why Hire Me",
};

export default function WhyHireMe() {
  return (
    <div className="h-screen flex overflow-x-auto overflow-y-hidden">

      {/* ── Intro panel ── */}
      <div className="
        group relative
        h-screen w-[92vw] md:w-[20rem] flex-shrink-0
        border-r ">
        <div className="
          absolute inset-x-0 top-0 h-px" />

        <div className="h-[92dvh] mt-[3dvh] mx-5 flex flex-col justify-between font-jetB text-xs tracking-wide overflow-y-auto small-scrollbar">

          <div className="flex flex-col gap-2">
            <span className="text-[9px] tracking-[0.25em] uppercase">— 01</span>
            <h1 className="font-playfair font-bold text-xl leading-snug !text-red-700">
              Why Hire Akash?
            </h1>
            <p className="uppercase text-gold mt-0.5">
              Full-Stack Engineer · New Delhi
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="w-6 h-px" />
            <p className="leading-relaxed opacity-60">
              Final-year B.Tech student at Jamia Millia Islamia. Placed and looking for a full-time software engineering role where the problems are hard and the bar is high.
            </p>
          </div>

          {/* Proof points */}
          <div className="flex flex-col gap-2">
            {[
              ["700+", "DSA problems solved"],
              ["95.11", "JEE Mains percentile"],
              ["26,380", "JEE Advanced AIR"],
              ["7.55", "CGPA / 10"],
            ].map(([val, label]) => (
              <div key={label} className="flex items-baseline justify-between border-b border-gold/[0.07] pb-1.5">
                <span className="opacity-50 text-[10px]">{label}</span>
                <span className="font-bold tabular-nums text-gold text-sm !text-red-700">{val}</span>
              </div>
            ))}
          </div>

          <p className="font-playfair italic pr-3 border-r-2 text-right leading-relaxed">
            FFE Scholar · Class of 2022 · Cricket runner-up ×2
          </p>
        </div>
      </div>

      {/* ── Dynamic panels ── */}
      {panels.map((p) => (
        <div
          key={p.index}
          className="
            group relative
            h-screen w-[92vw] md:w-[20rem] flex-shrink-0
            border-r "
        >
          <div className="
            absolute inset-x-0 top-0 h-px" />

          <div className="h-[92dvh] mt-[3dvh] mx-5 flex flex-col justify-between font-jetB text-xs tracking-wide overflow-y-auto small-scrollbar">

            {/* Header */}
            <div className="flex flex-col gap-1.5">
              <span className="uppercase">— {p.index}</span>
              <h2 className="font-bold text-sm pl-3 border-l-2 border-gold leading-snug !text-red-700">
                {p.title}
              </h2>
            </div>

            {/* Big stat */}
            <div className="flex flex-col gap-0.5">
              <span className="font-playfair font-bold text-4xl tabular-nums leading-none !text-red-700">
                {p.stat}
              </span>
              <span className="uppercase opacity-40 ">{p.statLabel}</span>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-2">
              <div className="w-6 h-px " />
              <p className="leading-relaxed opacity-60">{p.body}</p>
            </div>

            {/* Link */}
            <Link
              href={p.href}
              target={p.href.startsWith("mailto") ? undefined : "_self"}
              className="
                inline-flex items-center gap-1.5 w-fit
                uppercase
                border rounded-sm px-3 py-1.5 hover:!text-blue-700"
            >
              <span>↗</span> {p.linkLabel}
            </Link>

          </div>
        </div>
      ))}

    </div>
  );
}