// components/Layout.tsx
"use client"
import { ReactNode, useEffect } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY !== 0) {
        window.scrollBy({
          left: event.deltaY * 2,
        });
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return <div className="">{children}</div>;
}