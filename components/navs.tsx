"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
export default function NavBar() {
    const pathname = usePathname()
    const navs = [
        { nav: "Home", route: "/" },
        { nav: "About", route: "/about" },
        { nav: "Education", route: "/ed" },
        { nav: "Projects", route: "/pros" },
        { nav: "Skills", route: "/skill" },
        { nav: "Experience", route: "/exp" },
        { nav: "Extra Curriculars", route: "/curric" },
        { nav: "Extras", route: "/extras" }
    ];
    return (
        <div className="ml-2 mt-4 w-[20vw] gap-2 md:gap-0 p-3 font-semibold font-instru text-xl">
            {navs.map((n,i)=>(
            <div className="fle)x items-center md:justify-start justify-center mb-2 " key={i}>
            <div className="w-5 h-5 hidden md:flex border-2 border-black rounded-full flex items-center justify-center m-1 font-lora text-xs bg-blue-200">1</div>
            <span className={`font-instru p-1 m-0 hover:text-red-500 ${pathname === n.route ? 'text-red-500' : ''}`}>
            <Link href={n.route}>{n.nav}</Link>
            </span>
            </div>
            ))}
        </div>
    )
}