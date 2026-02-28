import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  author: string;
  date: string;
}

export default function BlogCard({ id, title, description, image, author, date }: BlogCardProps) {
  return (
    <div className="
      group relative w-[92vw] md:w-[20rem] flex-shrink-0
      border-r h-full
      font-jetB text-xs tracking-wide
    ">
      <article className="h-[92dvh] mt-[3dvh] mb-[3dvh] mx-4 flex flex-col justify-between overflow-y-auto small-scrollbar">

        {/* ── Image ── */}
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={image ?? "/blog.png"}
            alt={title}
            fill
            className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
          />
        </div>

        {/* ── Body ── */}
        <div className="flex flex-col gap-3 flex-grow py-2">
          <Link
            href={`/blogs/${id}`}
            className="!text-red-700 font-bold text-sm leading-snug pl-3 border-l-2"
          >
            {title}
          </Link>

          <p className="line-clamp-4 leading-relaxed opacity-60 text-[11px]">
            {description}
          </p>
        </div>

        {/* ── Footer ── */}
        <div className="flex items-center justify-between border-t pt-3">
          <div className="flex flex-col gap-0.5">
            <span className="text-[9px] tracking-[0.15em] uppercase opacity-40">{date}</span>
            <span className="text-[10px] opacity-60">{author}</span>
          </div>

          <Link
            href={`/blogs/${id}`}
            className="
              inline-flex items-center gap-1
              text-[9px] tracking-[0.1em] uppercase
              border rounded-sm px-2.5 py-1
              transition-all duration-200
            "
          >
            <span>↗</span> Read
          </Link>
        </div>

      </article>
    </div>
  );
}