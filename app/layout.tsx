import type { Metadata, Viewport } from "next";
import PlanetOrbitWrapper from "@/components/background/client";
import Me from "@/components/mySelf";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ColorPaletteMenu from "@/components/themes/colorPallete";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Kode_Mono , Playfair_Display} from "next/font/google";
import NavBar from "@/components/navbar/navbarr";
import { Arrow } from "@/components/navbar/arrow";
import "./globals.css";

const kodeMono = Kode_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kodemono",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: { template: "%s | Akash", default: "Akash Ahmad Malik – Portfolio" },
  description: "Hi there! I'm Akash Ahmad Malik — let's build cool things together 👾",
  keywords: "...",
  authors: [{ name: "Akash Ahmad Malik" }],
  robots: "index, follow",
  icons: { icon: "/ak3.png" },
  twitter: {
    card: "summary_large_image",
    title: "Akash Ahmad Malik – Portfolio",
    description: "Explore Akash Ahmad Malik's software projects and tech skills.",
    creator: "@Aakash41339611",
    images: ["/akash.jpeg"],
  },
  openGraph: {
    title: "Akash Ahmad Malik – Portfolio",
    url: "https://akash09.vercel.app",
    siteName: "Akash Ahmad Malik",
    images: [{ url: "/akash.jpeg", width: 600, height: 600, alt: "Akash Ahmad Malik" }],
    locale: "en_US",
    type: "website",
  },
  verification: { google: "uhUSq3S9zTC8jQ-rP1KM_Ne-ZPVdXiya5FtSIS2RCkk" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ `${playfair.variable} ${kodeMono.variable} `}  suppressHydrationWarning>
      <body
        className="small-scrollbar transition-colors">
        {/* Moved out of <head> — Next.js handles injection correctly */}
        <Script src="/hScroll.js" strategy="afterInteractive" />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function() {
                    try {
                      const stored = localStorage.getItem('theme');
                      if (stored) {
                        document.documentElement.setAttribute('data-theme', stored);
                      } else {
                        document.documentElement.setAttribute('data-theme', 'theme-mint');
                      }
                    } catch (e) {}
                  })();
                `,
              }}
           />
        <div className="relative min-h-screen z-20 theme">
          <div className="fixed inset-0 z-10" aria-hidden="true">
            <PlanetOrbitWrapper />
          </div>

          <Me />

          <div className="font-kodeMono ml-[8dvw] md:ml-[5rem] flex flex-col md:flex-row relative z-30">
            <aside className="md:border-r shrink-0 md:w-[20rem] md:h-screen">
              <NavBar />
            </aside>

            <ColorPaletteMenu />

            <main className="h-screen flex-grow z-20 font-kodeMono">
              {children}
            </main>


            <aside className="hidden md:block md:border-r shrink-0 md:w-[20rem] md:h-screen">
              <Arrow />
            </aside>
          </div>
        </div>

        <Analytics />
        <SpeedInsights />
        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId="G-LYJ3E16RSB" />
        )}
      </body>
    </html>
  );
}