export const navs = [
  { nav: "Home",              route: "/",       color: "bg-red-300"    },
  { nav: "About Me",          route: "/about",  color: "bg-blue-300"   },
  { nav: "Education",         route: "/ed",     color: "bg-green-300"  },
  { nav: "Projects",          route: "/pros",   color: "bg-yellow-300" },
  { nav: "Skills",            route: "/skills", color: "bg-purple-300" },
  { nav: "DSA",               route: "/dsa",    color: "bg-slate-300"  },
  { nav: "Experience",        route: "/exp",    color: "bg-pink-300"   },
  { nav: "Extra Curriculars", route: "/curric", color: "bg-orange-300" },
  { nav: "Blogs",             route: "/blogs",  color: "bg-indigo-300" }, 
  { nav: "Extras",            route: "/extras", color: "bg-teal-300"   },
] as const;

export type NavItem = (typeof navs)[number];
export type NavRoute = NavItem["route"];
export type NextNav = {
  route: string;
  nav: string;
};

export function getNextNav(pathname: string): NextNav {
  if (pathname.startsWith("/blogs/")) {
    const parts = pathname.split("/");
    const currentId = Number(parts[2]);

    if (!isNaN(currentId)) {
      return {
        route: `/blogs/${currentId + 1}`,
        nav: "Next Blog",
      };
    }
  }

  const staticMatch = navs.find(n => n.route === pathname);
  if (staticMatch) {
    const index = navs.indexOf(staticMatch);
    const next = navs[(index + 1) % navs.length];

    return {
      route: next.route,
      nav: next.nav,
    };
  }

  // 🔹 Prefix match
  const matched = navs.find(n =>
    pathname.startsWith(n.route + "/")
  );

  if (matched) {
    const index = navs.indexOf(matched);
    const next = navs[(index + 1) % navs.length];

    return {
      route: next.route,
      nav: next.nav,
    };
  }

  // 🔹 Fallback
  return {
    route: navs[0].route,
    nav: navs[0].nav,
  };
}