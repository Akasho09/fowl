import BlogCard from "@/components/blogs/blog";
import { blogs } from "./blogs";
export default function HomePage() {
  return (
        <div className="h-screen flex flex overflow-x-auto md:overflow-visible">
        {blogs.map((blog) => (
        <div className="flex h-full border-r w-[92vw] md:w-[20rem]" key={blog.id}>
              <BlogCard id={blog.id} title={blog.title} description={blog.content[0]+blog.content[1]} date={blog.date} author="Akash Ahmad Malik."/>
        </div>
      ))}
    </div>
  );
}