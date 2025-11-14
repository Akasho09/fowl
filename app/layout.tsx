import type { Metadata, Viewport } from "next";
import PlanetOrbit from "@/components/mainpage/bg";
import "./globals.css";
import NavBar, { Arrow } from "@/components/navs";
import Me from "@/components/mySelf";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Kode_Mono } from "next/font/google";
import ColorPaletteMenu from "@/components/colorPallete";

 const kodeMono = Kode_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-kodemono", display: "swap", });

export const metadata: Metadata = {
  title: {
    template: "%s | Akash",
    default: "Akash Ahmad Malik – Portfolio",
  },
  description: "Hi there! I'm Akash Ahmad Malik — let's build cool things together 👾",
  keywords: "Akash Ahmad Malik, Koshur Engineer , Kashmiri developer, Kashmiri software engineer, Kashmiri mathematician, Kashmiri physicist, full-stack developer, web developer, Next.js, React, Node.js, JavaScript, TypeScript, frontend development, backend development, MERN stack, computational physics, numerical analysis, algorithm design, data structures, problem solver, coding portfolio, technical projects, creative coder, AI projects, open-source contributor, portfolio website, tech innovation, engineering student, programming, Kashmiri tech talent, Kashmir technology, Kashmir innovation, Kashmiri coder",
  authors: [{ name: "Akash Ahmad Malik" }],
  robots: "index, follow",
  icons: {
    icon: "/ak3.png",
  },
  twitter: { card: "summary_large_image", title: "Akash Ahmad Malik – Portfolio", description: "Explore Akash Ahmad Malik’s software projects and tech skills.", creator: "@Aakash41339611", images: ["/akash.jpeg"],
  },
  openGraph: { title: "Akash Ahmad Malik – Portfolio", url: "https://akash09.vercel.app", siteName: "Akash Ahmad Malik", images: [ { url: "/akash.jpeg", width: 600, height: 600, alt: "Akash Ahmad Malik Portfolio Preview", }, ],
    locale: "en_US",  type: "website",},};

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  viewportFit: "cover",
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${kodeMono.variable}`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="uhUSq3S9zTC8jQ-rP1KM_Ne-ZPVdXiya5FtSIS2RCkk"
        />
      <meta name="google-adsense-account" content="ca-pub-6934180729383134"></meta>
      
        <Script src="/hScroll.js" strategy="afterInteractive" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LYJ3E16RSB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LYJ3E16RSB');
          `}
        </Script>
      </head>
<body className="new-scrollbar transition-colors "
        style={{ background: "var(--bg-color)" , borderColor : "var(--border-color)", color : "var(--text-color)"}}
>
  <div className="relative min-h-screen overflow-auto md:overflow-visible z-20 theme">
    <div className="fixed inset-0 z-10">
      <PlanetOrbit />
    </div>

    <Me />

    <div className="ml-[8dvw] md:ml-[5rem] flex flex-col md:flex-row relative z-30">
      <aside className="md:border-r shrink-0 w-0 h-0 md:h-screen md:w-[20rem]">
        <NavBar />
      </aside>
      
      <ColorPaletteMenu/>

      <main className="h-screen flex-grow z-20 font-kodeMono">
        {children}
        <Analytics />
        <SpeedInsights />
      </main>

      <div className="hidden md:flex items-start z-30">
        <Arrow />
      </div>

      <div className="fixed bottom-4 right-6 md:hidden z-30">
        <Arrow />
      </div>

    </div>
  </div>
</body>
</html>
  );
}
