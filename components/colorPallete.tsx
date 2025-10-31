"use client";
import { useEffect, useState } from "react";
import { MdColorLens } from "react-icons/md";

const themes = [
  { name: "theme-blue", color: "#65635f", label: "Grey" },
  { name: "theme-green", color: "#a1d1914c", label: "Light Grey" },
  { name: "theme-light", color: "#ffffff", label: "Light" },
  { name: "theme-dark", color: "#000000", label: "Dark" },
  { name: "theme-pink", color: "#89f1ff", label: "Colored" },
];

export default function ColorPaletteHamburger() {
  const [theme, setTheme] = useState("theme-light");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") || "theme-light";
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
    <button
      onClick={() => setOpen(!open)}
      aria-label="Toggle color palette"
      className="fixed top-6 right-6 p-1 rounded-full border shadow-xl z-50"
    >
      <MdColorLens size={22} />
    </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-100"
            onClick={() => setOpen(false)}
          />

          <div className="fixed top-14 right-3.5 z-50 w-48 h-auto shadow-xl rounded-lg flex flex-col transition-transform scale-95 animate-scale-in">
            {themes.map((t) => (
              <button
                key={t.name}
                aria-label={`Apply ${t.label} theme`}
                onClick={() => applyTheme(t.name)}
                className="w-full h-8 transition-transform hover:scale-105 text-xs font-kodeMono"
                style={{ backgroundColor: t.color }}
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
