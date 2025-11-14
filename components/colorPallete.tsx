"use client";
import { useEffect, useState } from "react";
import { MdColorLens } from "react-icons/md";

interface Theme {
  name: string;
  color: string;
  label: string;
}

const themes: Theme[] = [
  { name: "theme-blue", color: "#a0d8f1", label: "Blue" },
  { name: "theme-light", color: "#ffffff", label: "Light" },
  { name: "theme-dark", color: "#121212", label: "Dark" },
  { name: "theme-pink", color: "#ffeaf2", label: "Pookie" },
  { name: "theme-green", color: "#d0f0e0", label: "Green" },
  { name: "theme-purple", color: "#8a64c0", label: "Purple" },
  { name: "theme-orange", color: "#ffd4a5", label: "Orange" },
  { name: "theme-mint", color: "#d6fff5", label: "Mint" },
];

export default function ColorPaletteHamburger() {
  const [theme, setTheme] = useState("theme-blue");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") || "theme-blue";
    setTheme(stored);
    document.body.classList.add(stored);
  }, []);

  const applyTheme = (newTheme: string) => {
    document.body.classList.replace(theme, newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    setOpen(false);
  };

  return (
    <div className="fixed top-3.5 right-3.5 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle color palette"
        className="p-2 rounded-full border shadow-lg hover:scale-105 transition-transform"
      >
        <MdColorLens size={22} />
      </button>

      {/* Palette Dropdown */}
      {open && (
        <>
          {/* Overlay to close palette */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />

          <div className="fixed top-14 right-3.5 z-50 w-52  shadow-xl flex flex-col animate-scale-in">
            {themes.map((t) => (
              <button
                key={t.name}
                aria-label={`Apply ${t.label} theme`}
                onClick={() => applyTheme(t.name)}
                className="w-full h-10 !text-red-900 text-xs text-gray-800 dark:text-gray-200 transition-transform hover:scale-105 flex items-center justify-center shadow-inner"
                style={{ background: t.color }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
