"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
export default function NavBar() {
    const pathname = usePathname()
    const navs = [
        { nav: "Home", route: "/", color: "bg-red-300" },
        { nav: "About", route: "/about", color: "bg-blue-300" },
        { nav: "Education", route: "/ed", color: "bg-green-300" },
        { nav: "Projects", route: "/pros", color: "bg-yellow-300" },
        { nav: "Skills", route: "/skill", color: "bg-purple-300" },
        { nav: "Experience", route: "/exp", color: "bg-pink-300" },
        { nav: "Extra Curriculars", route: "/curric", color: "bg-orange-300" },
        { nav: "Extras", route: "/extras", color: "bg-teal-300" }
    ];
    
    return (
        <div className="ml-2 mt-4 w-[20vw] gap-2 md:gap-0 p-3 font-semibold font-instru text-xl">
            {navs.map((n,i)=>(
            <div className="flex items-center md:justify-start justify-center mb-2 " key={i}>
            <div className={`w-5 h-5 hidden md:flex border-2 border-black rounded-full flex items-center justify-center m-1 font-montserrat text-xs ${n.color}`}>{++i}</div>
            <span className={`font-instru p-1 m-0 text-${n.color} hover:text-red-500 ${pathname === n.route ? 'text-red-500' : ''}`}>
            <Link href={n.route}>{n.nav}</Link>
            </span>
            </div>
            ))}
        </div>
    )
}