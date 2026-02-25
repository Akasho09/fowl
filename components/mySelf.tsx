import SocialLinks from "./iconss";
import Link from "next/link";
const sidebarClass =
  "fixed top-0 z-50 h-[100dvh] w-[8vw] md:w-16 border-r bg-[var(--bg-color)]/80 backdrop-blur-sm";

export default function Sidebar() {
  return (
    <aside className={sidebarClass}>
      <div className="flex h-full flex-col items-center justify-between">
        <Link href="/" className="mt-8 flex justify-center">
          <span className="mt-2 vertical-text whitespace-nowrap text-xl sm:text-2xl font-jetB font-bold !text-red-700">
            AKASH AHMAD MALIK
          </span>
        </Link>
        <div className="pb-4">
          <SocialLinks />
        </div>
      </div>
    </aside>
  );
}
