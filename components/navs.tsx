"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
export default function NavBar() {
    const pathname = usePathname()

    return (
        <div className="ml-2 mt-4 w-[20vw] gap-2 md:gap-0 p-3 font-sans">
            <div className="flex items-center md:justify-start justify-center mb-2">
                <div className="w-5 h-5 hidden md:flex border-2 border-black rounded-full flex items-center justify-center m-1 font-lora text-xs bg-blue-200">1</div>
                <span className={`font-mono p-1 m-0 hover:text-red-500 ${pathname === "/" ? 'text-red-500' : ''}`}>
                    <Link href="/">Home</Link>
                </span>
            </div>
            <div className="flex items-center md:justify-start justify-center mb-2">
                <div className="h-5 w-5 hidden border-2 border-black rounded-full md:flex items-center justify-center m-1 font-lora text-xs bg-gray-300">2</div>
                <span className={`font-mono p-1 m-0 hover:text-red-500 ${pathname === "/about" ? 'text-red-500' : ''}`}>
                    <Link href="/about">About</Link>
                </span>
            </div>
            <div className="flex items-center md:justify-start justify-center mb-2">
                <div className="h-5 w-5 hidden border-2 border-black rounded-full md:flex items-center justify-center m-1 font-lora text-xs bg-green-200">3</div>
                <span className={`font-mono p-1 m-0 hover:text-red-500 ${pathname === "/ed" ? 'text-red-500' : ''}`}>
                    <Link href="/ed">Education</Link>
                </span>
            </div>

            <div className="flex items-center md:justify-start justify-center mb-2">
                <div className="h-5 w-5 hidden border-2 border-black rounded-full md:flex items-center justify-center m-1 font-lora text-xs bg-yellow-200">4</div>
                <span className={`font-mono p-1 m-0 hover:text-red-500 ${pathname === "/pros" ? 'text-red-500' : ''}`}>
                    <Link href="/pros">Projects</Link>
                </span>
            </div>

            <div className="flex items-center md:justify-start justify-center mb-2">
                <div className="h-5 w-5 hidden border-2 border-black rounded-full md:flex items-center justify-center m-1 font-lora text-xs bg-purple-200">5</div>
                <span className={`font-mono p-1 m-0 hover:text-red-500 ${pathname === "/skill" ? 'text-red-500' : ''}`}>
                    <Link href="/skill">Skills</Link>
                </span>
            </div>
         <div className="flex items-center md:justify-start justify-center mb-2">
                <div className="h-5 w-5 hidden border-2 border-black rounded-full md:flex items-center justify-center m-1 font-lora text-xs bg-indigo-200">6</div>
                <span className={`font-mono p-1 m-0 hover:text-red-500 ${pathname === "/experience" ? 'text-red-500' : ''}`}>
                    <Link href="/exp">Experience</Link>
                </span>
            </div>
            <div className="flex items-center md:justify-start justify-center mb-2">
                <div className="h-5 w-5 hidden border-2 border-black rounded-full md:flex items-center justify-center m-1 font-lora text-xs bg-pink-200">7</div>
                <span className={`font-mono p-1 m-0 hover:text-red-500 text-center md:text-left ${pathname === "/curric" ? 'text-red-500' : ''}`}>
                    <Link href="/curric">Extra Curriculars</Link>
                </span>
            </div>

            <div className="flex items-center md:justify-start justify-center mb-2">
                <div className="h-5 w-5 hidden border-2 border-black rounded-full md:flex items-center justify-center m-1 font-lora text-xs bg-teal-200">8</div>
                <span className={`font-mono p-1 m-0 hover:text-red-500 ${pathname === "/extras" ? 'text-red-500' : ''}`}>
                    <Link href="/extras">Extras</Link>
                </span>
            </div>

   


        </div>
    )
}
