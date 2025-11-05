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

export default function BlogCard({
  id,
  title,
  description,
  author,
  date,
}: BlogCardProps) {
  return (
    <Link 
      href={`/blogs/${id}`}
      className="block w-[92vw] md:w-[20rem] max-w-xs mx-auto group border-r"
    >
      <article className="overflow-hidden h-full flex flex-col w-[92vw] md:w-[20rem] !font-jetB">
        
        <div className="mt-8 relative w-full aspect-video overflow-hidden">
            <Image 
              className="p-2 absolute inset-0 h-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100" 
              src="/blog.png" 
              alt={title} 
              width={300}
              height={100}
            />
        </div>

        <div className="p-2 flex flex-col flex-grow">
          <h2 className="text-xl  uppercase mb-3 leading-snug tracking-tighter underline">
            {title}
          </h2>
          
          <p className="line-clamp-3 text-sm mb-4 flex-grow">
            {description}
          </p>

            <span className="text-right py-2 px-3 font-extrabold text-xs uppercase tracking-widest underline">
              ...Read More
            </span>
        </div>
        
        <div className="p-4 m-1 border-t-4 mt-auto ">
          <div className="flex justify-between items-center text-xs font-bold font-kodeMono">
            <span>{date}</span>
            <span className="ml-4 ">{author}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}