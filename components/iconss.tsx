import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
const SocialLinks = () => {
  return (
    <div className="absolute bottom-8 left-8 flex flex-col gap-4 text-lg">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/akash786/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-blue-500"
      >
        <FaLinkedin className="text-xl" />
      </a>

      {/* LeetCode */}
      <a
        href="https://leetcode.com/u/aakashbwd/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-yellow-500"
      >
        <SiLeetcode className="text-xl" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Akasho09"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-gray-600"
      >
        <FaGithub className="text-xl" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/akash.o.9/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-pink-500"
      >
        <FaInstagram className="text-xl" />
      </a>

      <a href="tel:+919103597816">
  <FaPhone className="text-xl"></FaPhone>
</a>

      <a
        href="mailto:aakashbwd@gmail.com"
        className="flex items-center gap-2 hover:text-red-500"
      >
        <FaEnvelope className="text-xl" />
      </a>


    </div>
  );
};

export default SocialLinks;
