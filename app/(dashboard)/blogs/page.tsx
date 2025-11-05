import BlogCard from "@/components/blogs/blog";
import { blogs } from "./blogs";
export default function HomePage() {
  return (
    <main className="h-screen flex overflow-y-hidden overflow-x-visible">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} id={blog.id} title={blog.title} description={blog.content[0]+blog.content[1]} date={blog.date} author="Akash Ahmad Malik."/>
        ))}
    </main>
  );
}
