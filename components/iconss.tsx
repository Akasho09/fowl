import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="flex flex-col gap-4 text-lg">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/akash786/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-300 "
      >
        <FaLinkedin className="text-xl" />
      </a>

      {/* LeetCode */}
      <a
        href="https://leetcode.com/u/aakashbwd/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-yellow-500 transition-colors duration-300 "
      >
        <SiLeetcode className="text-xl" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Akasho09"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-gray-600 transition-colors duration-300 "
      >
        <FaGithub className="text-xl" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/akash.o.9/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-pink-500 transition-colors duration-300 "
      >
        <FaInstagram className="text-xl" />
      </a>

      {/* Phone */}
      <a href="tel:+919103597816" className="flex items-center gap-2 hover:text-green-500 transition-colors duration-300  ">
        <FaPhone className="text-xl" />
      </a>

      {/* Email */}
      <a
        href="mailto:aakashbwd@gmail.com"
        className="flex items-center gap-2 hover:text-red-500 transition-colors duration-300  "
      >
        <FaEnvelope className="text-xl" />
      </a>
    </div>
  );
};

export default SocialLinks;