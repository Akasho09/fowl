import { ReactNode } from "react";
import NavBar from "../navs";
import Link from "next/link";

interface t {
  t1: string;
  t2?: ReactNode
  t3?: ReactNode
  t4?:string
  techs? : string[]
  links? : {
    l1:string ,
    l2:string
  }[]
}

export default function ThreeTexts({ t1, t2, t3,t4, links ,techs}: t) {
  return (
    <div className=" h-full flex flex-col justify-around mx-8">
      <div className="">
        {" "}
        <p className="md:text-xl text-xs font-macondo hover:text-red-600 font-bold">{t1}</p>
         <div className="font-nova text-slate-500">{t2}</div>
      </div>
      <div className="md:hidden flex justify-center">
        <NavBar></NavBar>
      </div>
       <div className="font-sp text-red-500 flex-wrap">{t3}</div> 
      <div className="font-nova text-red-500 text-right text-sm">{t4}</div>  
      <div className="flex gap-4 flex-wrap">
{techs ? techs.map((a) => (
        <div key={a} className="h-8 border border-red-400 rounded flex justify-center items-center bg-slate-200 p-2">{a}</div>
)) : null }
      </div>
      <div className="flex gap-4 flex-wrap flex-row-reverse"> 
  {links ? links.map((a) => (
    <Link key={a.l1} href={a.l1}>
        <div className="h-8 border border-blue-500 rounded flex justify-center items-center bg-slate-200 p-2">{a.l2}</div>
    </Link>
)): null }</div>
  
    </div>
  );
}
