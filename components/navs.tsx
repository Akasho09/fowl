"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
export default function NavBar (){
    const pathname = usePathname()
    return <div className="ml-2 mt-4 w-[20vw] gap-4 md:gap-0 ">
    <div className=" flex items-center md:justify-start justify-center">
    <div className="w-5 h-5 hidden md:flex border border-black rounded-full flex items-center justify-center m-2 font-lora">1</div>
    <span className={`font-mono font-semibold p-0 m-0 hover:text-red-500 ${ pathname==="/" ? 'text-red-500' : ''}`}><Link href="/">Home</Link></span>
    </div>
    <div className="flex items-center md:justify-start justify-center ">
    <div className="h-5 w-5 hidden border border-black rounded-full md:flex items-center justify-center m-2 font-lora">2</div>
    <span className={`font-mono font-semibold p-0 m-0 hover:text-red-500 ${ pathname==="/ed" ? 'text-red-500' : ''}`}><Link href="/ed">Education</Link></span>
    </div>
    <div className="flex items-center md:justify-start justify-center">
    <div className="h-5 w-5 hidden border border-black rounded-full md:flex items-center justify-center m-2 font-lora">3</div>
    <span className={`font-mono font-semibold p-0 m-0 hover:text-red-500 ${ pathname==="/pros" ? 'text-red-500' : ''}`}><Link href="/pros">Projects</Link></span>
    </div>
    <div className="flex items-center md:justify-start justify-center">
    <div className="h-5 w-5 hidden border border-black rounded-full md:flex items-center justify-center m-2 font-lora">4</div>
    <span className={`font-mono font-semibold p-0 m-0 hover:text-red-500 ${ pathname==="/skill" ? 'text-red-500' : ''}`}><Link href="/skill">Skills</Link></span>
    </div>
    <div className="flex items-center md:justify-start justify-center">
    <div className="h-5 w-5 hidden border border-black rounded-full md:flex items-center justify-center m-2 font-lora">5</div>
    <span className={`font-mono font-semibold p-0 m-0 hover:text-red-500 text-center md:text-left ${ pathname==="/curric" ? 'text-red-500' : ''}`}><Link href="/curric">Extra Curicullars</Link></span>
    </div>
    <div className="flex items-center md:justify-start justify-center">
    <div className="h-5 w-5 hidden border border-black rounded-full md:flex items-center justify-center m-2 font-lora">5</div>
    <span className={`font-mono font-semibold p-0 m-0 hover:text-red-500 ${ pathname==="/extras" ? 'text-red-500' : ''}`}><Link href="/extras">Extras</Link></span>
    </div>



    
    </div>
}