"use client";

import { usePathname } from "next/navigation";
import RightArrow from "./rightArrow";
import { getNextNav } from "./navData";

export function Arrow() {
  const pathname = usePathname();
  const next = getNextNav(pathname);

  return (
    <RightArrow linkk={next.route}>
      {next.nav}
    </RightArrow>
  );
}