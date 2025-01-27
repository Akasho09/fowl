import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const SocialLinks = () => {
  return (
    <div className="absolute bottom-8 left-8 flex flex-col gap-4 text-lg">
      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-blue-500"
      >
        <FaLinkedin className="text-xl" />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-blue-400"
      >
        <FaTwitter className="text-xl" />
      </a>

      {/* LeetCode */}
      <a
        href="https://leetcode.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-yellow-500"
      >
        <SiLeetcode className="text-xl" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-gray-600"
      >
        <FaGithub className="text-xl" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-pink-500"
      >
        <FaInstagram className="text-xl" />
      </a>

      {/* Gmail */}
      <a
        href="mailto:your-email@gmail.com"
        className="flex items-center gap-2 hover:text-red-500"
      >
        <FaEnvelope className="text-xl" />
      </a>
    </div>
  );
};

export default SocialLinks;
