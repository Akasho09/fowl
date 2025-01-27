import { FaLongArrowAltRight } from "react-icons/fa";


export default function RightArrow({linkk}:{linkk:string}){

    return <div className="">
       <a href={linkk}> <div className="h-12 w-12 border border-black rounded-full flex items-center justify-center"><FaLongArrowAltRight size={40}></FaLongArrowAltRight></div>
       </a> </div>
}