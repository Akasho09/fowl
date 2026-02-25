import { LucideIcon, Code } from "lucide-react";
import { techInfoMap } from "./techMap";
import TechButton from "./TechButton";

interface TechListProps {
  techs: string[];
}

export default function TechList({ techs }: TechListProps) {
  return (
    <div className="flex gap-1.5 flex-wrap">
      {techs.map((tech, index) => {
        const { Icon, to, desc } = (techInfoMap[tech] ?? {
          Icon: Code,
          to: "/skills",
          desc: "General technology",
        }) as { Icon: LucideIcon; to: string; desc: string };

        return (
          <TechButton
            key={index}
            to={to}
            techName={tech}
            Icon={Icon}
            desc={desc}
          />
        );
      })}
    </div>
  );
}