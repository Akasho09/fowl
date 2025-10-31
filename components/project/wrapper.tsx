import { getIssues } from "@/lib/github";
import TechList from "../techs/techList";
import ProjectCardClient from "./template";
// import LazyProjectCard from "./clientWrapper";

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
    <div className="w-[92dvw] md:w-[20rem]">
      <div className="overflow-y-auto small-scrollbar text-xs tracking-wide relative transition-colors duration-300">
        <article className="h-[92dvh] mt-[3dvh] mb-[3dvh] flex flex-col justify-between z-10 m-3">
          <header>
            <h2 className="text-sm md:text-md font-bold !text-red-700">
              {pname}
            </h2>
            <p className="italic mt-1 text-right !font-serif ">{date}</p>
          </header>
          { desc.length > 0 && (
          <section className="mt-4 scroll-container space-y-1 !font-jetB">
            {desc.map((d, i) => {
              const [label, content] = d.split(':');
              return (
                <p key={i} >
                  <span className="!text-blue-500"> • {label}:</span>{' '}
                  <span className="">{content ? content.trim() : ''}</span>
                </p>
              );
            })}
          </section>
        )}
        <div className="mt-4">
          <h3 className="text-sm font-semibold mb-2 !text-blue-700">Technologies Used:</h3>
          <TechList techs={techs} />
        </div>
          <h3 className="text-sm font-semibold !text-blue-700 mt-4">Project Links :</h3>
          {links.length > 0 && (
            <div className="flex gap-3 flex-wrap flex-row-reverse ">
              {links.map((a) => (
                <a
                  key={a.linkName}
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open link: ${a.linkName}`}
                  className="border-b-2 hover:bg-blue-500 px-2 py-1 rounded cursor-pointer"
                >
                  {a.linkName}
                </a>
              ))}
            </div>
          )}

          <ProjectCardClient issues={issues} />
        </article>
      </div>
    </div>
  );
}
