"use client"
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const handleWheel = (event:any) => {
      if (event.deltaY !== 0) {
        window.scrollBy({
          left: event.deltaY*2,
          top : 0,
          behavior: 'smooth' // Smooth scrolling effect
        });
      }
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
  
  return (
    <div className="flex w-[115vw] h-[100vh]">
<div className="w-[10vw] h-[100vh] border-r border-black flex flex-col items-center">
  {/* Rotated Name Section */}
  <div className="-rotate-90 h-[30vh] flex items-center justify-center">
    <div className="text-center font-bold text-gray-800">Akash Ahmad Malik</div>
  </div>

  {/* Empty Spacer */}
  <div className="h-[30vh]"></div>

  {/* Scrollable List */}
  <div className="flex-1 overflow-y-auto">
    <ul className="space-y-2 p-4">
      <li className="text-gray-700">a</li>
      <li className="text-gray-700">b</li>
      <li className="text-gray-700">c</li>
      <li className="text-gray-700">b</li>
      <li className="text-gray-700">n</li>
      <li className="text-gray-700">y</li>
      <li className="text-gray-700">j</li>
      <li className="text-gray-700">m</li>
    </ul>
  </div>
</div>

    <div className="w-[25vw] h-[100vh] shrink-0 bg-blue-200 border border-black">akash</div>
    <div className="w-[25vw] h-[100vh] shrink-0 bg-blue-200 border border-black">akash</div>
    <div className="w-[25vw] h-[100vh] shrink-0 bg-blue-200 border border-black">akash</div>
    <div className="w-[30vw] h-[100vh] shrink-0 bg-blue-200 border border-black">akash</div>
       </div>
  );
}

