import LeetCodeStats from "@/components/LeetCodeStats";
import { Metadata } from "next";
import { getLeetCodeProfile , find } from "@/lib/github/leetcode";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Competitive Programming",
};

const otherPlatforms = [
  {
    name: "GeeksForGeeks",
    handle: "aakashbwd",
    href: "https://www.geeksforgeeks.org/profile/aakascyp3?tab=activity",
    stat: "Problem Solving",
    note: "Arrays, Trees, DP practice",
  },
  {
    name: "Codeforces",
    handle: "aakashbwd",
    href: "https://codeforces.com/profile/akasho9",
    stat: "Competitive",
    note: "Rated contests & div. rounds",
  }
];

export default async function Page() {
  const profile = await getLeetCodeProfile();

  const total  = find(profile, "All");
  const easy   = find(profile, "Easy");
  const medium = find(profile, "Medium");
  const hard   = find(profile, "Hard");

  return (
    <div className="h-screen flex overflow-x-auto overflow-y-hidden">

      {/* ── LeetCode panel ── */}
      <div className="
        group relative
        h-screen w-[92vw] md:w-[20rem] flex-shrink-0
        border-r transition-colors duration-300
      ">
        <div className="
          absolute inset-x-0 top-0 h-px
          opacity-0 group-hover:opacity-100 transition-opacity duration-500
        " />

        <div className="h-[92dvh] mt-[3dvh] mx-5 flex flex-col justify-between font-jetB text-xs tracking-wide overflow-y-auto small-scrollbar">

          {/* Header */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[9px] tracking-[0.25em] uppercase ">— 01</span>
            <h2 className="!text-red-700 font-bold text-sm pl-3 border-l-2 leading-snug">
              LeetCode
            </h2>
            {profile ? (
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <Link
                  href={`https://leetcode.com/${profile.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-1 text-[9px] tracking-[0.1em]
                    text-gold border rounded-sm px-2.5 py-1
                    transition-all duration-200
                  "
                >
                  <span>↗</span> {profile.username}
                </Link>
                <span className="text-[9px] opacity-40">
                  Rank #{profile.profile?.ranking?.toLocaleString()}
                </span>
              </div>
            ) : (
              <p className="opacity-30 text-[10px] mt-1">Could not load profile.</p>
            )}
          </div>

          {/* Stats widget */}
          <div className="flex flex-col gap-3">
            <div className="w-6 h-px" />
            <LeetCodeStats
              solved={total}
              total={3647}
              easySolved={easy}
              easyTotal={890}
              mediumSolved={medium}
              mediumTotal={1897}
              hardSolved={hard}
              hardTotal={860}
              attempting={13}
            />
          </div>

          {/* Summary row */}
          <div className="flex gap-3 flex-wrap">
            {[
              { label: "Easy",   val: easy,   color: "text-emerald-400/70" },
              { label: "Medium", val: medium, color: "text-amber-400/70"   },
              { label: "Hard",   val: hard,   color: "text-rose-400/70"    },
            ].map(({ label, val, color }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className={`font-bold text-base tabular-nums ${color}`}>{val}</span>
                <span className="uppercase opacity-40">{label}</span>
              </div>
            ))}
            <div className="flex flex-col gap-0.5 ml-auto text-right">
              <span className="font-bold text-base tabular-nums !text-red-700 ">{total}</span>
              <span className="uppercase opacity-40">Total</span>
            </div>
          </div>

        </div>
      </div>

      {/* ── Other platforms panel ── */}
      <div className="
        group relative
        h-screen w-[92vw] md:w-[20rem] flex-shrink-0
        border-r
        transition-colors duration-300
      ">
        <div className="
          absolute inset-x-0 top-0 h-px
          opacity-0 group-hover:opacity-100 transition-opacity duration-500
        " />

        <div className="h-[92dvh] mt-[3dvh] mx-5 flex flex-col gap-6 font-jetB text-xs tracking-wide overflow-y-auto small-scrollbar">

          {/* Header */}
          <div className="flex flex-col gap-1.5">
            <span className="uppercase">— 02</span>
            <h2 className="!text-red-700 font-bold text-sm pl-3 border-l-2 leading-snug">
              Other Platforms
            </h2>
          </div>

          {/* Platform cards */}
          <div className="flex flex-col gap-3">
            {otherPlatforms.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group/card flex flex-col gap-1.5
                  p-3 rounded-sm border transition-all duration-200
                "
              >
                <div className="flex items-center justify-between">
                  <span className="!text-red-700 font-bold text-[11px] transition-colors duration-150">
                    {p.name}
                  </span>
                  <span className="
                    text-[8px] tracking-[0.12em] uppercase
                    px-1.5 py-0.5 rounded-sm border
                  ">
                    {p.stat}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="opacity-40 ">@{p.handle}</span>
                  <span className="opacity-30 ">↗</span>
                </div>
                <p className="opacity-40 leading-relaxed">{p.note}</p>
              </a>
            ))}
          </div>

          {/* Footer tagline */}
          <div className="mt-auto pb-2">
            <p className="font-playfair italic pr-3 border-r-2 text-right leading-relaxed">
              700+ problems solved across all platforms.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}