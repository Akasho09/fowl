import { IconType } from "react-icons";

interface TechButtonProps {
  to: string;
  techName: string;
  Icon: IconType;
  className?: string;
  desc?: string;
}

export default function TechButton({
  to,
  techName,
  Icon,
  className,
  desc,
}: TechButtonProps) {
  return (
    <a
      href={to}
      className={`group relative flex items-center gap-2 ${className}`}
    >
      <Icon className="transition-transform group-hover:scale-110" />
      <span>{techName}</span>

      {desc && (
        <span className="bg-white !text-red-900 absolute bottom-full mb-1 hidden group-hover:block border text-[10px] px-2 py-1 rounded shadow-lg w-max max-w-[180px] whitespace-pre-wrap ">
          {desc}
        </span>
      )}
    </a>
  );
}
