import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navs";
import Me from "@/components/mySelf";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <div className="fixed left-0 h-screen w-[5vw] border border-black">
            <Me></Me>
          </div>
          <div className="ml-[5vw] w-[150vw] h-screen flex">
           <div className="w-[20vw] flex shrink-0"> <NavBar></NavBar></div>
            {children}
          </div>
      </body>
    </html>
  );
}
