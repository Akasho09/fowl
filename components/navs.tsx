"use client"
import { usePathname } from 'next/navigation'
import RightArrow from './rightArrow'
import Link from 'next/link'
import { useState } from 'react'
import { HiMenu, HiX } from "react-icons/hi";

const navs = [
    { nav: "Home", route: "/", color: "bg-red-300" },
    { nav: "About Me", route: "/about", color: "bg-blue-300" },
    { nav: "Education", route: "/ed", color: "bg-green-300" },
    { nav: "Projects", route: "/pros", color: "bg-yellow-300" },
    { nav: "Skills", route: "/skills", color: "bg-purple-300" },
    { nav : "DSA" ,  route: "/dsa" , color: "bg-slate-300" } ,
    { nav: "Experience", route: "/exp", color: "bg-pink-300" },
    { nav: "Extra Curriculars", route: "/curric", color: "bg-orange-300" },
    { nav: "Extras", route: "/extras", color: "bg-teal-300" }
];

export default function NavBar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <button
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle navigation"
      className="md:hidden fixed bottom-6 right-6 p-4 border rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 z-50"
    >
      {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
    </button>

      {isOpen && (
        <div className="md:hidden fixed bottom-20 right-4 rounded-lg p-4 w-64 shadow-lg z-40 text-xs bg-[var(--bg-color)]/80 backdrop-blur-sm">
          {navs.map((n, i) => {
            return (
              <Link
                href={n.route}
                key={i}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center py-2">
                  <div
                    className={`w-5 h-5 flex items-center justify-center mr-3 font-bold ${n.color} border`}
                  >
                    {i + 1}
                  </div>
                  <span
                    className={`font-semibold  ${
                    pathname === n.route ? '!text-red-500' : 'hover:!text-red-500'
                    }`}
                  >
                    {n.nav} 
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
      
      <div className="max-h-[100dvh] w-[94.8vw] md:w-[16rem] rounded-lg z-50 transition-colors duration-300 text-xs">
      <div className="mt-8 w-0 md:w-[16vw] gap-2 md:gap-0">
        <div className="hidden md:flex flex-col">
          {navs.map((n, i) => (
          <Link href={n.route} key={i}>
            <div className="flex items-center md:justify-start justify-center mb-4" >
                <div className='flex '>
              <div
                className={`w-5 h-5 hidden md:flex items-center justify-center m-1 font-bold  ${n.color} border`}
              >
                {i + 1}
              </div>
              <span
                className={`tracking-wide font-kodeMono font-extrabold p-1 m-0 transition-colors duration-200 ${
               pathname === n.route ? '!text-red-500' : 'hover:!text-red-500'
                }`}
               
              >
                {n.nav}
              </span>
              </div>
            </div>
              </Link>
          ))}
        </div>
      </div>
    </div>

      </>
   
  )
}


export function Arrow () {
const pathname = usePathname()
const index = navs.findIndex((n) => n.route === pathname);
  return <RightArrow linkk={ navs[(index+1)%navs.length].route || "/"}>{navs[(index+1)%navs.length].nav}</RightArrow>
}