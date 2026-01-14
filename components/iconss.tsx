import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";

const socials = [
  {
    href: "https://www.linkedin.com/in/akash786/",
    icon: FaLinkedin,
    hover: "group-hover:fill-blue-500",
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://leetcode.com/u/aakashbwd/",
    icon: SiLeetcode,
    hover: "group-hover:fill-yellow-500",
    label: "LeetCode",
    external: true,
  },
  {
    href: "https://github.com/Akasho09",
    icon: FaGithub,
    hover: "group-hover:fill-slate-400",
    label: "GitHub",
    external: true,
  },
  {
    href: "https://www.instagram.com/akash.o.9/",
    icon: FaInstagram,
    hover: "group-hover:fill-pink-500",
    label: "Instagram",
    external: true,
  },
  {
    href: "tel:+919103597816",
    icon: FaPhone,
    hover: "group-hover:fill-green-500",
    label: "Phone",
  },
  {
    href: "mailto:aakashbwd@gmail.com",
    icon: FaEnvelope,
    hover: "group-hover:fill-red-400",
    label: "Email",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-col gap-4">
      {socials.map(({ href, icon: Icon, hover, label, external }) => (
        <Link
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="group flex items-center gap-2"
        >
        <Icon
          className={`text-2xl transition-colors duration-300 ${hover}`}
        />
        </Link>
      ))}
    </div>
  );
}
