import BlogCard from "@/components/blogs/blog";
import { blogs } from "./blogs";
export default function HomePage() {
  return (
        <div className="h-screen flex overflow-y-auto">
        {blogs.map((blog) => (
        <div className="h-screen border-r w-[92vw] md:w-[20rem]" key={blog.id}>
              <BlogCard id={blog.id} title={blog.title} description={blog.content[0]+blog.content[1]} date={blog.date} author="Akash Ahmad Malik."/>
        </div>
      ))}
    </div>
  );
}