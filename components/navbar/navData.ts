export const navs = [
  { nav: "Home",              route: "/",       color: "bg-red-300"    },
  { nav: "About Me",          route: "/about",  color: "bg-blue-300"   },
  { nav: "Education",         route: "/ed",     color: "bg-green-300"  },
  { nav: "Projects",          route: "/pros",   color: "bg-yellow-300" },
  { nav: "Skills",            route: "/skills", color: "bg-purple-300" },
  { nav: "DSA",               route: "/dsa",    color: "bg-slate-300"  },
  { nav: "Experience",        route: "/exp",    color: "bg-pink-300"   },
  { nav: "Extra Curriculars", route: "/curric", color: "bg-orange-300" },
  { nav: "Blogs",             route: "/blogs",  color: "bg-indigo-300" }, // was duplicate purple
  { nav: "Extras",            route: "/extras", color: "bg-teal-300"   },
] as const;

export type NavItem = (typeof navs)[number];
export type NavRoute = NavItem["route"];

// Precompute next-nav map so Arrow does O(1) lookup instead of findIndex on every render
export const nextNavMap = Object.fromEntries(
  navs.map((n, i) => [n.route, navs[(i + 1) % navs.length]])
) as Record<NavRoute, NavItem>;




