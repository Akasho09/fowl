import { Arrow } from "@/components/navbar/arrow";
import NavBar from "@/components/navbar/navbarr";

export default function WithNavLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen z-20 theme">
      <div className="flex flex-col md:flex-row relative z-30">
        <aside className="md:border-r shrink-0 md:w-[20rem] md:h-screen">
          <NavBar />
        </aside>
        <main className="min-h-screen flex-grow z-30">
          {children}
        </main>
        </div>
    </div>
  );
}