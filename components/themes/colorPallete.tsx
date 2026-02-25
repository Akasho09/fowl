"use client";
import { useEffect, useState } from "react";
import { Palette } from "lucide-react";
import { themes } from "./themes";

export default function ColorPaletteHamburger() {
  const [theme, setTheme] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // Only sync state with existing attribute
  useEffect(() => {
    const current =
      document.documentElement.getAttribute("data-theme") ||
      "theme-mint";

    setTheme(current);
  }, []);

  const applyTheme = (newTheme: string) => {
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    setOpen(false);
  };

  if (!theme) return null;

  return (
    <div className="fixed top-3.5 right-3.5 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle color palette"
        className="p-2.5 rounded-full border-2 shadow-lg 
                   hover:scale-110 active:scale-95
                   transition-all duration-200 backdrop-blur-sm"
        style={{
          background: "var(--bg-color)",
          borderColor: "var(--border-color)",
        }}
      >
        <Palette size={22} />
      </button>

      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />

          {/* Dropdown */}
          <div
            className="fixed top-16 right-3.5 z-50 w-56 max-h-[70vh]
                       overflow-y-auto small-scrollbar
                       rounded-xl shadow-2xl border-2
                       bg-[var(--bg-color)]/90 backdrop-blur-md
                       transition-all duration-200"
            style={{
              borderColor: "var(--border-color)",
            }}
          >
            <div className="grid grid-cols-2 gap-2 p-2">
              {themes.map((t) => (
                <button
                  key={t.name}
                  onClick={() => applyTheme(t.name)}
                  className="relative h-16 text-xs font-medium
                             flex flex-col items-center justify-center
                             rounded-md transition-all duration-200
                             hover:scale-105"
                  style={{ background: t.color }}
                >
                  {t.emoji && (
                    <span className="text-lg">
                      {t.emoji}
                    </span>
                  )}

                  <span className="text-[10px] font-semibold drop-shadow-sm">
                    {t.label}
                  </span>

                  {theme === t.name && (
                    <div className="absolute inset-0 border-2 border-red-400 rounded-md" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}