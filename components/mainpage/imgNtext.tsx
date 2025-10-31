import Image from "next/image";

interface InfoCardProps {
  img?: string;
  txt: string;
  txt2?: string;
  txt3?: string;
  txt4?: string;
  txt5? : string
}

export default function InfoCard({ img, txt, txt2, txt3, txt4 , txt5 }: InfoCardProps) {
  return (
    <div className="h-screen overflow-y-auto overflow-x-auto small-scrollbar w-[95vw] md:w-[20rem] md:text-sm/6 text-sm tracking-wide relative transition-colors duration-300">
      <div className="h-full flex flex-col justify-between py-16 px-2 relative z-10 text-wrap">

      <p className="flex md:text-md font-bold !text-red-700 pb-1 w-fit">
            {txt}
      </p>

        <div className="flex justify-center items-center">
         { img && <Image
            src={img}
            width={200}
            height={200}
            alt="Profile Image"
            quality={100}
            className="rounded-full object-cover !transition-transform duration-500 hover:scale-110"
          />
         }
          <p className="shrink text-xs">{txt2}</p>

        </div>
        <div>
        <p className=" leading-relaxed text-xs ">{txt3}</p>
        </div>


        <div className="">
          {txt4 && (
            <p className="leading-relaxed text-xs ">{txt4}</p>
          )}
        </div>


        <div>
        <p className=" leading-relaxed text-xs ">{txt5}</p>
        </div> 
          </div>
        </div>
  );
}
