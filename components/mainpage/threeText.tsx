import { ReactNode } from "react";
import Link from "next/link";

interface t {
  t1: string;
  t2?: ReactNode;
  t3?: ReactNode;
  t4?: ReactNode;
  techs?: string[];
  links?: {
    l1: string; // href
    l2: string; // label
  }[];
}

export default function ThreeTexts({ t1, t2, t3, t4, links = [], techs = [] }: t) {
  return (
    <div className="w-[92dvw] md:w-[20rem] ">
    <div className="overflow-y-auto small-scrollbar text-xs tracking-wide relative transition-colors duration-300 ">
      <article className="h-[92dvh] mt-[3dvh] mb-[3dvh] flex flex-col  justify-between z-10 m-3">
        <header>
          <h2 className="text-sm md:text-md font-bold !text-red-700 ">
            {t1}
          </h2>
          {t2 && <p className="italic mt-1">{t2}</p>}
        </header>

        {t3 && <section className="italic mt-4 scroll-container">{t3}</section>}

        {t4 && <footer className="text-right mt-4 scroll-container">{t4}</footer>}

        {techs.length > 0 && (
          <div className="flex gap-3 flex-wrap mt-4 border-r-2 ">
            {techs.map((tech) => (
              <div
                key={tech}
                className="border-b-2 hover:bg-blue-100"
              >
                {tech}
              </div>
            ))}
          </div>
        )}
        {links.length > 0 && (
          <div className="flex gap-3 flex-wrap flex-row-reverse mt-4 ">
            {links.map((a) => (
                <Link
                  key={a.l1}
                  href={a.l1}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open link: ${a.l2}`}
                  className="border-b-2 hover:bg-blue-500"
                >
                  <div
                    className={`cursor-pointer`}
                  >
                    {a.l2 || "Visit"}
                  </div>
                </Link>
              ))}
          </div>
      )}
      </article>
    </div>
    </div>
  );
}
