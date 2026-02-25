import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { memo, useId } from "react";

export default memo(function RightArrow({
  linkk,
  children,
}: {
  linkk: string;
  children: string;
}) {
  const id = useId();
  const circleId = `circlePath-${id.replace(/:/g, "")}`;

  return (
    <div className="flex justify-center items-center w-20 h-20 md:w-[20rem] md:h-full">
      <Link
        href={linkk}
        prefetch={true}                    
        className="relative w-20 h-20 group"
        aria-label={`Go to ${children}`}
      >
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
          aria-hidden="true"               
        >
          <defs>
            <path
              id={circleId}
              d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
            />
          </defs>
          <g
            style={{ transformOrigin: "50px 50px" }}
            className="animate-[spin_10s_linear_infinite]"
          >
            <text
              fontSize="8"
              fontWeight="bold"
              style={{ letterSpacing: "1.5px", fill: "var(--text-color)" }}
            >
              <textPath href={`#${circleId}`} startOffset="0%">
                .·. {children} .·. {children} .·. {children} .·. &nbsp;
              </textPath>
            </text>
          </g>
        </svg>

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     h-14 w-14 rounded-full border
                     transition-all duration-500 ease-out"
        >
          <div className="h-full w-full rounded-full flex items-center justify-center overflow-hidden">
            <ArrowRight
              size={22}
              className="text-[var(--text-color)]
                         transition-transform duration-300
                         group-hover:translate-x-2"   
            />
          </div>
        </div>
      </Link>
    </div>
  );
});




