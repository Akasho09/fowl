import Link from "next/link";
import Image from "next/image";
import { blogs } from "../blogs";
import { use } from "react";

export default function BlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <main className="h-screen flex items-center justify-center font-jetB text-xs tracking-wide">
        <div className="flex flex-col gap-3 items-start">
          <span className="opacity-40 text-[9px] tracking-[0.25em] uppercase">— 404</span>
          <p className="font-bold text-sm">Blog not found.</p>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1 uppercase border rounded-sm px-3 py-1.5 text-[9px] tracking-[0.1em] transition-all duration-200"
          >
            ← All Blogs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="h-screen flex border-r font-jetB">
      <article className="w-full overflow-y-auto small-scrollbar">

        {/* ── Back link ── */}
        <div className="px-8 pt-8 pb-4">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1 text-[9px] tracking-[0.1em] uppercase border rounded-sm px-3 py-1.5 transition-all duration-200"
          >
            ← All Blogs
          </Link>
        </div>

        {/* ── Header ── */}
        <header className="px-8 py-10 border-b">
          <p className="uppercase opacity-40 mb-3">— Article</p>
          <h1 className="!text-red-700 text-2xl font-bold leading-snug pl-3 border-l-2 mb-6">
            {blog.title}
          </h1>
          <div className="flex items-center gap-3 text-[10px] opacity-50">
            <span>{blog.author}</span>
            <span className="h-3 w-px bg-current opacity-40" />
            <span>{blog.date}</span>
          </div>
        </header>

        {/* ── Cover image ── */}
        <div className="flex justify-center items-center w-full pt-4 verflow-hidden">
          <Image
            src={"/blog.png"}
            alt={blog.title}
            width={1000}
            height={500}
            className="h-auto object-cover opacity-80 w-2/3"
            priority
          />
        </div>

        {/* ── Content ── */}
        <div className="px-8 py-10 text-xs leading-relaxed space-y-5 opacity-80 ">
          {blog.content.map((line: string, index: number) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        {/* ── Footer ── */}
        <footer className="px-8 py-8 border-t mb-16 md:mb-0">
          <p className="font-playfair italic text-[10px] opacity-40 text-right pr-3 border-r-2">
            Thank you for reading.
          </p>
        </footer>

      </article>
    </main>
  );
}