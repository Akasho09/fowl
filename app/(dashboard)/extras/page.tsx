import GuessGamePage from "@/components/games/guessGame";
import SnakeGame from "@/components/games/snakeGame";
import ClickSpeedGame from "@/components/games/speed";
import { Metadata } from "next"
import Image from "next/image";

export const metadata : Metadata = {
    title : "Extras "
  }

export default function A() {
return   <div className="h-screen flex overflow-y-hidden overflow-x-visible">
          <div className="h-screen flex border-r w-[92dvw] md:w-[20rem]">
           <p className="w-[92dvw] md:w-[20rem] p-4"> Play !!!</p>
          </div>
          <div className="h-screen flex border-r w-[92vw] md:w-[20rem]">
          <GuessGamePage/>
          </div>
          <div className="h-screen flex border-r w-[92vw] md:w-[20rem]">
          <ClickSpeedGame/>
          </div>
          <div className="h-screen flex border-r w-[92vw] md:w-[20rem]">
          <SnakeGame/>
          </div>

          <div className="h-screen flex border-r w-[92vw] md:w-[20rem]">
          <div 
            className="flex w-[92vw] md:w-[20rem] items-center justify-center">
              <Image src="/image.png" width={200} height={200} alt="Thank You"
            style={{ filter: "var(--img-filter)" }}
            />
          </div>
          </div> 
       </div> 
}