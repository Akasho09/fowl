import { ReactNode } from "react";
import { DiVisualstudio } from "react-icons/di";
import {  SiUbuntu, SiGithub } from "react-icons/si";
import { SkillsTemp } from "./skillsTemp";
interface Tool {
  name: string;
  icon: ReactNode
}

const toolsData: Tool[] = [
  { name: "VS Code", icon: <DiVisualstudio className=" w-6 h-6" /> },
  { name: "Ubuntu Linux", icon: <SiUbuntu className=" w-6 h-6" /> },
  { name: "GitHub", icon: <SiGithub className=" w-6 h-6" /> },
];

export default function T() {
 return   <SkillsTemp skills={toolsData} naav="🛠️ Tools & Platforms"></SkillsTemp>
}