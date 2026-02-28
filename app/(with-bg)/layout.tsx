import { Arrow } from "@/components/navbar/arrow";
import ColorPaletteHamburger from "@/components/themes/colorPallete";
import Me from "@/components/mySelf"

export default function WithNavLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen z-20 theme">
     <ColorPaletteHamburger/>
      <Me/>
      <div className="ml-[8dvw] md:ml-[5rem] flex flex-col md:flex-row relative z-30">
        <main className="min-h-screen flex-grow z-30">
          {children}
        </main>
        <aside className="hidden md:block shrink-0 md:w-[20rem] md:h-screen z-30 ">
          <Arrow />
        </aside>
        <aside className="block md:hidden fixed left-8 bottom-4 rotate-90 shrink-0 z-30 ">
          <Arrow />
        </aside>
      </div>
    </div>
  );
}