import ThreeTexts from "@/components/mainpage/threeText"
import { Metadata } from "next"

export const metadata : Metadata = {
    title : "Extras "
  }

import Image from "next/image";
export default function A() {
return <div className="h-screen flex w-max dark:hidden">
<ThreeTexts t1="" t2="" t4={<Image src="/image.png" width={300} height={300} alt="thank you"></Image>}></ThreeTexts>
<ThreeTexts t1=""></ThreeTexts>
</div> 
    }