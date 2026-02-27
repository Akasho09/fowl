import { Metadata } from "next";
import { extracurricular, achievements } from "./data";
import React from "react";

export const metadata: Metadata = {
  title: "Curriculum",
};

const EntryCard = React.memo(function EntryCard({
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
    <div className="flex flex-col gap-1.5 p-3 rounded-sm border ">
      <div className="flex items-start justify-between gap-2">
        <span className="font-bold leading-snug">{title}</span>
        <span className="flex-shrink-0 uppercase px-1.5 py-0.5 rounded-sm border">
          {year}
        </span>
      </div>
      <p className="uppercase !text-red-700">{org}</p>
      <p className="opacity-60 leading-relaxed ">{desc}</p>
    </div>
  );
});

export default function CurriculumPage() {
  return (
    <div className="min-h-screen flex flex-row font-jetB">

      {/* Achievements */}
      <section className="h-screen w-[92vw] md:w-[20rem] flex-shrink-0 border-r ">
        <div className="px-6 py-10 flex flex-col gap-6 text-xs tracking-wide">
        
          <header className="flex flex-col gap-1.5">
            <span>— 01</span>
            <h2 className="!text-red-700 font-bold text-sm pl-3 border-l-2 leading-snug">
              Achievements
            </h2>
          </header>

          <div className="flex flex-col gap-3">
            {achievements.map((a) => (
              <EntryCard key={a.title} {...a} />
            ))}
          </div>

        </div>
      </section>

      {/* Extracurricular */}
      <section className="h-screen w-[92vw] md:w-[20rem] flex-shrink-0 border-r ">
        <div className="px-6 py-10 flex flex-col gap-6 text-xs tracking-wide h-full">

          <header className="flex flex-col gap-1.5">
            <span>— 02</span>
            <h2 className="!text-red-700 font-bold text-sm pl-3 border-l-2 leading-snug">
              Extracurricular
            </h2>
          </header>

          <div className="flex flex-col gap-3">
            {extracurricular.map((e) => (
              <EntryCard key={e.title + e.year} {...e} />
            ))}
          </div>

          <div className="mt-8 md:mt-auto pt-6">
            <p className="italic text-right border-r-2 pr-3 leading-relaxed">
              Cricket keeps the competitive instinct sharp.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}