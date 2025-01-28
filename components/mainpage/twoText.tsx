import NavBar from "../navs"
interface t{
   t1 : string ,
   t2 : string ,
   t3:  string
}

export default function TwoTexts( {t1,t2,t3}: t){

    return <div className="h-full flex flex-col justify-around mx-8">
  <div className=""> <p className="md:text-xl text-sm font-mono hover:text-red-600  ">{t1}</p>
    <p className="md:text-lg text-sm font-semibold font-mono text-red-600">{t2}</p></div>
   <div  className="md:hidden flex justify-center"><NavBar></NavBar></div>
  <div> <p className="md:text-xl text-sm font-mono">{t3}</p></div>
    </div> 
}