import NavBar from "../navs";
import Link from "next/link";

interface t {
  t1: string;
  t2: string;
  t3: string;
  t4: string;
  t5: string;
}

export default function ThreeTexts({ t1, t2, t3, t4, t5 }: t) {
  return (
    <div className=" h-full flex flex-col justify-around mx-8">
      <div className="">
        {" "}
        <p className="md:text-xl text-xs font-mono hover:text-red-600 font-bold">{t1}</p>
        <p className="md:text-lg text-sm font-semibold font-mono text-red-600">
          {t2}
        </p>
      </div>
      <div className="md:hidden flex justify-center">
        <NavBar></NavBar>
      </div>
      <div>
        {" "}
        <p className="text-sm md:text-lg font-semibold font-mono text-slate-600">
          {t3}
        </p>
      </div>
      <div>
        {" "}
        <p className="text-xs md:text-xl font-mono">{t4}</p>
      </div>
      <Link href={t5} className="text-end">
        View Doc
      </Link>
    </div>
  );
}
