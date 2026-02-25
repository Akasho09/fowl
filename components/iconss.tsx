import {
  Linkedin,
  Github,
  Instagram,
  Mail,
  Phone,
  Code,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

type SocialItem = {
  href: string;
  icon: LucideIcon;
  label: string;
  color: string;
  external?: boolean;
};

const socials: SocialItem[] = [
  {
    href: "https://www.linkedin.com/in/akash786/",
    icon: Linkedin,
    label: "LinkedIn",
    color: "hover:fill-[#0A66C2]",
    external: true,
  },
  {
    href: "https://leetcode.com/u/aakashbwd/",
    icon: Code,
    label: "LeetCode",
    color: "hover:fill-[#FFA116]",
    external: true,
  },
  {
    href: "https://github.com/Akasho09",
    icon: Github,
    label: "GitHub",
    color: "hover:fill-white",
    external: true,
  },
  {
    href: "https://www.instagram.com/akash.o.9/",
    icon: Instagram,
    label: "Instagram",
    color: "hover:fill-[#E4405F]",
    external: true,
  },
  {
    href: "tel:+919103597816",
    icon: Phone,
    label: "Phone",
    color: "hover:fill-[#25D366]",
  },
  {
    href: "mailto:aakashbwd@gmail.com",
    icon: Mail,
    label: "Email",
    color: "hover:fill-[#EA4335]",
  },
];


export default function SocialLinks() {
  return (
    <div className="flex flex-col gap-6">
      {socials.map(({ href, icon: Icon, label, color, external }) => (
        <Link
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="group relative flex h-8 w-8 items-center justify-center"
        >
          <Icon
            size={24}
            className={`transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_currentColor] ${color}`}
          />
          <span className="absolute left-12 whitespace-nowrap rounded-md  px-3 py-1.5 text-xs opacity-0 shadow-lg transition-all hover:fillity-100 ">
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
}