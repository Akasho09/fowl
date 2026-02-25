import { getIssues } from "@/lib/github";
import TechList from "../techs/techList";
import ProjectCardClient from "./template";

export default async function ProjectServer({
  pname,
  date,
  desc = [],
  techs = [],
  links = [],
  reponame,
}: {
  pname: string;
  date: string;
  desc?: string[];
  techs?: string[];
  links?: { linkName: string; href: string }[];
  reponame: string;
}) {
  const issues = await getIssues(reponame);
  return (
    <div className="w-[92dvw] md:w-[20rem] !font-jetB">
      <div className="overflow-y-auto small-scrollbar text-xs tracking-wide relative transition-colors duration-300">
        <article className="h-[92dvh] mt-[3dvh] mb-[3dvh] flex flex-col justify-between z-10 m-3">
          <header>
            <h2 className="text-sm md:text-md font-bold pl-3 border-l-2 !text-red-700">
              {pname}
            </h2>
            <p className=" mt-1 text-right text-xs opacity-50">• {date}</p>
            {links.length > 0 && (
              <div className="flex gap-3 flex-wrap mt-2">
                {links.map((a) => (
                  <a
                    key={a.linkName}
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open link: ${a.linkName}`}
                    className="border hover:bg-blue-500 px-2.5 py-1 cursor-pointer"
                  >
                    {a.linkName}
                  </a>
                ))}
              </div>
            )}
          </header>
          {desc.length > 0 && (
            <section className="mt-4 scroll-container space-y-1">
              {desc.map((d, i) => {
                const [label, content] = d.split(':');
                return (
                  <p key={i} >
                    <span className="!text-red-700"> • {label}:</span>{' '}
                    <span className="opacity-70 ">{content ? content.trim() : ''}</span>
                  </p>
                );
              })}
            </section>
          )}
          <div className="mt-4">
            <h3 className="text-sm font-semibold mb-2 !text-red-700 ">Tech Stack:</h3>
            <TechList techs={techs} />
          </div>
          <ProjectCardClient issues={issues} />
        </article>
      </div>
    </div>
  );
}
