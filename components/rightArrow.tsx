import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function RightArrow({
  linkk,
  children,
}: {
  linkk: string;
  children: string;
}) {
  return (
    <div className="h-[5rem] w-[5rem] md:w-[28rem] md:h-full rotate-90 md:rotate-0 flex flex-col justify-center items-center">
      {/* Make this element the group parent */}
      <Link
        href={linkk}
        className="relative w-20 h-20 group"
        aria-label="navigate"
      >
        {/* Circular Text */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <path
              id="circlePath"
              d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
              fill="none"
            />
          </defs>
          <text
            className="text-[8px] font-bold"
            style={{ letterSpacing: "1px", fill: "var(--text-color)" }}
          >
            <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
              {children}
            </textPath>
          </text>
        </svg>

        {/* Gradient border wrapper: add `transform` so scale works */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            h-14 w-14 rounded-full p-[2px] !transition duration-500 ease-out border"
        >
          {/* Inner circle: also has transform and transition so arrow translate works */}
          <div
            className="h-full w-full rounded-full flex items-center justify-center transform !transition duration-300"
          >
            <FaLongArrowAltRight
              size={22}
              className="text-[var(--text-color)] !transform transition duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>

      </Link>
    </div>
  );
}
