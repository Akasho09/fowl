import Image from "next/image"
export default function TwoImages(){
    return <div className="h-full flex flex-col items-center justify-around mx-8">
              <Image src="/abcd2.png" alt="pic 1"  width={300} height={300} ></Image>
              <Image src="/emps.png" alt="pic 1"    width={300} height={300}></Image>
    </div>
}