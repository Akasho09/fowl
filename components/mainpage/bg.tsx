import React from "react";
import "./Background.css";

const planetData = [
  { size: "w-2 h-2", color: "bg-gray-400", orbitW: "w-[15vh]", orbitH: "h-[15vh]", duration: "spin-planet-2" },
  { size: "w-3 h-3", color: "bg-blue-300", orbitW: "w-[25vh]", orbitH: "h-[25vh]", duration: "spin-planet-3" },
  { size: "w-4 h-4", color: "bg-red-300", orbitW: "w-[37vh]", orbitH: "h-[37vh]", duration: "spin-planet-3" },
  { size: "w-[1.125rem] h-[1.125rem]", color: "bg-green-300", orbitW: "w-[52vh]", orbitH: "h-[52vh]", duration: "spin-planet-5" },
  { size: "w-5 h-5", color: "bg-indigo-300", orbitW: "w-[68vh]", orbitH: "h-[68vh]", duration: "spin-planet-6" },
  { size: "w-[1.375rem] h-[1.375rem]", color: "bg-yellow-200", orbitW: "w-[84vh]", orbitH: "h-[84vh]", duration: "spin-planet-7" },
  { size: "w-[1.4rem] h-[1.4rem]", color: "bg-red-200", orbitW: "w-[98vh]", orbitH: "h-[98vh]", duration: "spin-planet-8" },
];

const PlanetOrbit = () => {
  return (
<div className="absolute inset-0 hidden md:flex items-center justify-center overflow-hidden pointer-events-none z-0 opacity-80">
  <div className="w-20 h-20 bg-yellow-500 dark:bg-yellow-400 rounded-full absolute z-20
  shadow-[0_0_100px_60px_rgba(255,255,120,0.95)] dark:shadow-[0_0_100px_50px_rgba(255,255,120,0.8)]
  before:content-[''] before:absolute before:inset-0 before:rounded-full 
  before:bg-[radial-gradient(circle,_rgba(255,255,140,0.6)_0%,_transparent_85%)] 
  dark:before:bg-[radial-gradient(circle,_rgba(255,255,160,0.4)_0%,_transparent_90%)]">
</div>

  {planetData.map((planet, i) => (
    <div
      key={i}
      className={`absolute rounded-full ${planet.orbitH} ${planet.orbitW} animate-${planet.duration}
         border backdrop-blur-[.2px] opacity-5`}
      >
      <div
        className={`absolute top-1/2 left-full transform -translate-x-1/2 -translate-y-1/2 
          rounded-full transition-all duration-300 ease-in-out 
          ${planet.color} ${planet.size} hover:scale-125 `}
      />
    </div>
  ))}
</div>

  );
};

export default PlanetOrbit;