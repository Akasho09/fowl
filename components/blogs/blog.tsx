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
    <div 
      className="w-[92dvw] md:w-[20rem]"
    >
    <div className="overflow-y-auto small-scrollbar text-xs tracking-wide relative transition-colors duration-300 !font-jetB">
      <article className="h-[92dvh] mt-[3dvh] mb-[3dvh] flex flex-col  justify-between z-10 m-3">
        <div className="mt-8 relative aspect-video overflow-hidden ">
            <Image 
              className="p-2 absolute inset-0 h-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100" 
              src="/blog.png" 
              alt={title} 
              width={300}
              height={100}
            />
        </div>

        <div className="p-2 flex flex-col flex-grow">
          <Link className="text-xl  uppercase mb-3 leading-snug tracking-tighter underline"
                href={`/blogs/${id}`}
          >
            {title}
          </Link>
          
          <p className="line-clamp-3 text-sm mb-4 flex-grow">
            {description}
          </p>

            <Link className="text-right py-2 px-3 font-extrabold text-xs uppercase tracking-widest underline"
                href={`/blogs/${id}`}
            >
              ...Read More
            </Link>
        </div>
        
        <div className="p-4 m-1 border-t-4 mt-auto ">
          <div className="flex justify-between items-center text-xs font-bold font-kodeMono">
            <span>{date}</span>
            <span className="ml-4 ">{author}</span>
          </div>
        </div>
      </article>
      </div>
    </div>
  );
}