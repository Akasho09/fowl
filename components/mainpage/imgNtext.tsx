import Image from "next/image";

interface InfoCardProps {
  img?: string;
  txt: string;
  txt2?: string;
  txt3?: string;
  txt4?: string;
  txt5?: string;
}

export default function InfoCard({ img, txt, txt2, txt3, txt4, txt5 }: InfoCardProps) {
  return (
    <div className="
      group relative
      h-screen w-[92vw] md:w-[20rem]
      overflow-y-auto overflow-x-hidden small-scrollbar
      font-jetB text-xs tracking-wide
      transition-colors duration-300
    ">
      <div className="h-full flex flex-col justify-between py-14 px-6 gap-6">
        <h2 className="
          font-bold text-sm leading-snug
          pl-3 border-l-2 !text-red-700
        ">
          {txt}
        </h2>

        {/* ── Image + txt2 ── */}
        {(img || txt2) && (
          <div className="flex flex-col gap-4">
            {img && (
              <div className="relative w-fit">
                <Image
                  src={img}
                  width={180}
                  height={180}
                  alt="Profile"
                  quality={100}
                  className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500 scale-95 hover:scale-100"
                />
                {/* subtle gold corner accent */}
                <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold/40" />
              </div>
            )}
            {txt2 && (
              <p className="leading-relaxed opacity-70">{txt2}</p>
            )}
          </div>
        )}

        {/* ── txt3 ── */}
        {txt3 && (
          <div className="flex flex-col gap-2">
            <div className="w-6 h-px " />
            <p className="leading-relaxed opacity-60">{txt3}</p>
          </div>
        )}

        {/* ── txt4 ── */}
        {txt4 && (
          <p className="
            leading-relaxed italic
            text-right pr-3 border-r-2  font-playfair
          ">
            {txt4}
          </p>
        )}

        {/* ── txt5 ── */}
        {txt5 && (
          <p className="leading-relaxed opacity-50 ">{txt5}</p>
        )}

      </div>
    </div>
  );
}