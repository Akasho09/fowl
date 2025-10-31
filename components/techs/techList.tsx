import { FaCode } from "react-icons/fa";
import { techInfoMap } from "./techMap";
import TechButton from "./TechButton";

interface TechListProps {
  techs: string[];
}

export default function TechList({ techs }: TechListProps) {
  return (
    <div className="flex gap-4 flex-wrap">
      {techs.map((tech, index) => {
        const data = techInfoMap[tech] || {
          Icon: FaCode,
          to: "/skills",
          desc: "General technology",
        };
        const { Icon, to, desc } = data;

        return (
          <TechButton
            key={index}
            to={to}
            techName={tech}
            Icon={Icon}
            desc={desc}
            className="flex items-center gap-2 p-1 border border-t-0 transition text-xs hover:bg-gray-700/20"
          />
        );
      })}
    </div>
  );
}
