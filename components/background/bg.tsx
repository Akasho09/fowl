"use client";

import { useEffect, useRef } from "react";

type Planet = {
  orbit: number;
  size: number;
  color: string;
  speed: number;
  angle: number;
  reverse?: boolean;
};

const planets: Planet[] = [
  { orbit: 120, size: 4, color: "#7f1d1d", speed: 0.01, angle: 0 },
  { orbit: 180, size: 6, color: "#facc15", speed: 0.008, angle: 0, reverse: true },
  { orbit: 240, size: 8, color: "#22c55e", speed: 0.006, angle: 0 },
  { orbit: 300, size: 9, color: "#60a5fa", speed: 0.005, angle: 0, reverse: true },
  { orbit: 360, size: 10, color: "#818cf8", speed: 0.004, angle: 0 },
];

export default function PlanetOrbitCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = window.devicePixelRatio || 1;

    let animationFrame: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function draw() {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Sun
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fillStyle = "#facc15";
      ctx.shadowBlur = 40;
      ctx.shadowColor = "rgba(255,255,120,0.7)";
      ctx.fill();
      ctx.shadowBlur = 0;

      planets.forEach((planet) => {
        // Orbit ring
        ctx.beginPath();
        ctx.arc(centerX, centerY, planet.orbit, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,255,255,0.08)";
        ctx.stroke();

        // Update angle
        if (!prefersReduced) {
          planet.angle += planet.reverse
            ? -planet.speed
            : planet.speed;
        }

        const x = centerX + planet.orbit * Math.cos(planet.angle);
        const y = centerY + planet.orbit * Math.sin(planet.angle);

        // Planet
        ctx.beginPath();
        ctx.arc(x, y, planet.size, 0, Math.PI * 2);
        ctx.fillStyle = planet.color;
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  );
}
