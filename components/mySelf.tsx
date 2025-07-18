// "use client";
// import SocialLinks from "./iconss";
// import Link from "next/link";
// export default function Me() {
//   return (
//     <div className="">
//         <Link href={"/"}>
//           <p className="absolute md:left-4 left-2 right-8 top-40  pt-4 -rotate-90 mt-24 whitespace-nowrap text-2xl font-bold text-pink-600 dark:text-white cursor-pointer ">
//             AKASH AHMAD MALIK
//           </p>
//         </Link>
//        <SocialLinks></SocialLinks>
//     </div>
//   );
// }
// fixed whitespace-nowrap -rotate-90 md:pb-16 mr-16 text-xl font-bold text-pink-600  cursor-pointer


"use client";
import SocialLinks from "./iconss";
import Link from "next/link";
export default function Me() {
  return (
        <div className="fixed top-[1.6vh] md:left-4 h-[96.8dvh] md:w-[6rem] w-[2.5rem] md:border rounded-lg dark:border-white border-black  bg-[#ebfffe] z-[100]">
       <Link href={"/"}>
          <p className="-rotate-90 mt-60 whitespace-nowrap text-2xl font-bold text-pink-600 dark:text-white cursor-pointer">
            AKASH AHMAD MALIK
          </p>
    </Link>
     <SocialLinks></SocialLinks>
          </div>
  );
}
