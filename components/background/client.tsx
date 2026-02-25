"use client";
import dynamic from "next/dynamic";

const PlanetOrbitCanvas = dynamic(
  () => import("./bg"),
  { ssr: false }
);

export default function PlanetOrbitWrapper() {
  return <PlanetOrbitCanvas />;
}
