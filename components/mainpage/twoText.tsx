
interface t{
   t1 : string ,
   t2 : string ,
   t3:  string
}

export default function TwoTexts( {t1,t2,t3}: t){

    return <div className=" h-full flex flex-col items-center justify-around mx-8">
        <div className=""> <p className="text-xl font-mono hover:text-red-600">{t1}</p>
    <p className="text-lg font-bold font-mono text-red-600">{t2}</p></div>
  <div> <p className="text-xl font-mono">{t3}</p></div>
    </div> 
}