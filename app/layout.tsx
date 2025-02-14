import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navs";
import Me from "@/components/mySelf";
import Head from "next/head";
<style>
</style>
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akash Ahmad Malik",
  description: "Hey There!",
  icons: {
    icon: "/image.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html lang="en">
         <Head>
          {/* <link rel="shortcut icon" href={favicon} /> */}
          <link rel="shortcut icon" href="/image.png" />
        </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-thin`}
      >
         <div className="fixed left-0 h-screen sm:w-[5vw]">
            <Me></Me>
          </div>
          <div className="ml-[5vw] h-screen flex ">
  <div className="hidden md:flex justify-center md:w-[80vw] border-x border-black">
    <NavBar></NavBar>
  </div>
  <div className="flex-grow">{children}</div> 
</div>

      </body>
    </html>
  );
}
