import Link from "next/link";
import Image from "next/image";
import { blogs } from "../blogs";
import { use } from "react";


export default function BlogPage({params}: {params: Promise<{ id: string }>}) {
    const { id } = use(params);
    const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <main className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <p className="text-lg mb-4 text-gray-500">Blog not found</p>
          <Link href="/blogs" className="text-red-500 font-semibold hover:underline">
            ← Back to All Blogs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-w-4xl min-h-screen h-screen flex border-r">
      <article className="w-full overflow-y-auto small-scrollbar p-2 mt-8">
        <div className="mb-4 font-jetB">
          <Link href="/blogs" className="!text-red-500 font-semibold">
            ← Back to All Blogs
          </Link>
        </div>

        <div className="relative w-full overflow-hidden">
          <Image
            src="/blog.png"
            alt={blog.title}
            width={1000}
            height={500}
            className="w-full h-auto object-cover rounded-xl"
            priority
          />
        </div>

        <header className="p-8 md:p-12 border-b">
          <h1 className="text-2xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight !font-jetB">
            {blog.title}
          </h1>

          <div className="flex items-center space-x-4 text-xs md:text-sm">
            <span className="font-semibold">By {blog.author}</span>
            <span className="h-4 w-px bg-gray-400"></span>
            <span>Published on {blog.date}</span>
          </div>
        </header>

        <div className="p-8 md:p-12">
          <div className="text-sm md:text-lg leading-relaxed font-light space-y-6 article-content !font-jetB">
            {blog.content.map((line: string, index: number) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>

        <footer className="p-8 md:p-12 border-t mb-16 md:mb-0">
          <p className="text-sm text-gray-600">
            Thank you for reading this post! Share your thoughts in the comments below.
          </p>
        </footer>
      </article>
    </main>
  );
}
