import React from "react";
import "./Background.css";

const planetData = [
  { size: "w-2 h-2", color: "bg-red-800", orbitSize: "15vh", duration: "10s" },
  { size: "w-3 h-3", color: "bg-yellow-400", orbitSize: "25vh", duration: "10s" },
  { size: "w-4 h-4", color: "bg-green-400", orbitSize: "37vh", duration: "15s" },
  { size: "w-[1.125rem] h-[1.125rem]", color: "bg-blue-400", orbitSize: "52vh", duration: "20s" },
  { size: "w-5 h-5", color: "bg-indigo-400", orbitSize: "68vh", duration: "25s" },
  { size: "w-[1.375rem] h-[1.375rem]", color: "bg-pink-400", orbitSize: "84vh", duration: "30s" },
  { size: "w-[1.4rem] h-[1.4rem]", color: "bg-purple-400", orbitSize: "98vh", duration: "35s" },
];

const PlanetOrbit = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
      {/* Central Glow (Sun) */}
      <div className="w-20 h-20 bg-yellow-500 dark:bg-yellow-400 rounded-full absolute z-20 
        shadow-[0_0_100px_60px_rgba(255,255,120,0.95)] dark:shadow-[0_0_100px_50px_rgba(255,255,120,0.8)]
        before:content-[''] before:absolute before:inset-0 before:rounded-full 
        before:bg-[radial-gradient(circle,_rgba(255,255,140,0.6)_0%,_transparent_85%)] 
        dark:before:bg-[radial-gradient(circle,_rgba(255,255,160,0.4)_0%,_transparent_90%)]"
      />

      {planetData.map((planet, i) => (
        <div
          key={i}
          className="absolute flex items-center justify-center rounded-full"
          style={{
            width: planet.orbitSize,
            height: planet.orbitSize,
            animation: `spin ${planet.duration} linear infinite`,
          }}
        >
          {/* Dim orbit ring */}
          <div
            className="absolute rounded-full border border-white opacity-10"
            style={{ width: "100%", height: "100%" }}
          />
          
          {/* Visible planet */}
          <div
            className={`absolute opacity-60 top-1/2 left-full transform -translate-x-1/2 -translate-y-1/2 rounded-full ${planet.color} ${planet.size} shadow-[0_0_15px_5px_rgba(255,255,255,0.3)]`}
          />
        </div>
      ))}
    </div>
  );
};



export default PlanetOrbit;
