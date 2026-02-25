import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface TechButtonProps {
  to: string;
  techName: string;
  Icon: LucideIcon;
  className?: string;
  desc?: string;
}

export default function TechButton({ to, techName, Icon, className, desc }: TechButtonProps) {
  const isExternal = to.startsWith("http");

  return (
    <Link
      href={to}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`
        group/btn relative inline-flex items-center gap-2
        font-jetB text-[10px] tracking-[0.06em]
        px-2.5 py-1.5 rounded-sm
        border border-transparent
        text-foreground/50
        hover:text-foreground hover:border-gold/25 hover:bg-gold/[0.06]
        transition-all duration-200
        ${className ?? ""}
      `}
    >
      <Icon
        size={11}
        className="flex-shrink-0 text-gold/40 group-hover/btn:text-gold/80 transition-colors duration-200"
      />
      <span>{techName}</span>

      {desc && (
        <span className="
          pointer-events-none
          absolute bottom-full left-0 mb-2 z-30
          hidden group-hover/btn:block
          font-jetB text-[9px] tracking-wide normal-case leading-relaxed
          border border-gold/20 text-foreground/60
          px-3 py-2 rounded-sm shadow-2xl
          w-max max-w-[200px] whitespace-pre-wrap  backdrop-blur-sm">
          {desc}
          <span className="absolute top-full left-4 border-[5px] border-transparent border-t-gold/20" />
        </span>
      )}
    </Link>
  );
}