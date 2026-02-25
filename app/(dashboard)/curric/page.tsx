import { Metadata } from "next";
import { extracurricular , achievements } from "./data";

export const metadata: Metadata = {
  title: "Curriculum | Akash Malik",
};

function EntryCard({
  year,
  title,
  org,
  desc,
}: {
  year: string;
  title: string;
  org: string;
  desc: string;
}) {
  return (
    <div className="
      group/card flex flex-col gap-1.5
      p-3 rounded-sm border ">
      <div className="flex items-start justify-between gap-2">
        <span className="font-bold leading-snug">
          {title}
        </span>
        <span className="
          flex-shrink-0 uppercase
          px-1.5 py-0.5 rounded-sm border">
          {year}
        </span>
      </div>
      <p className="uppercase !text-red-700">{org}</p>
      <p className="opacity-40">{desc}</p>
    </div>
  );
}

export default function CurriculumPage() {
  return (
    <div className="h-screen flex overflow-x-auto overflow-y-hidden">

      {/* ── Achievements panel ── */}
      <div className="
        group relative
        h-screen w-[92vw] md:w-[20rem] flex-shrink-0
        border-r ">

        <div className="h-[92dvh] mt-[3dvh] mx-5 flex flex-col gap-5 font-jetB text-xs tracking-wide overflow-y-auto small-scrollbar">
          <div className="flex flex-col gap-1.5">
            <span>— 01</span>
            <h2 className="!text-red-700 font-bold text-sm pl-3 border-l-2 leading-snug">
              Achievements
            </h2>
          </div>

          <div className="flex flex-col gap-2.5">
            {achievements.map((a) => (
              <EntryCard key={a.title} {...a} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Extracurricular panel ── */}
      <div className="
        group relative
        h-screen w-[92vw] md:w-[20rem] flex-shrink-0 border-r">

        <div className="h-[92dvh] mt-[3dvh] mx-5 flex flex-col gap-5 font-jetB text-xs tracking-wide overflow-y-auto small-scrollbar">
          <div className="flex flex-col gap-1.5">
            <span>— 02</span>
            <h2 className="!text-red-700 font-bold text-sm pl-3 border-l-2 leading-snug">
              Extracurricular
            </h2>
          </div>

          <div className="flex flex-col gap-2.5">
            {extracurricular.map((e) => (
              <EntryCard key={e.title + e.year} {...e} />
            ))}
          </div>

          <div className="mt-auto pb-2">
            <p className="font-playfair italic pr-3 border-r-2 text-right leading-relaxed">
              Cricket keeps the competitive instinct sharp.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}