import ThreeTexts from "@/components/mainpage/threeText";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience ",
};

export default function e() {
  return (
    <div className="h-screen flex">
      <ThreeTexts t1="Experience Section"></ThreeTexts>
      <ThreeTexts t1=""></ThreeTexts>
    </div>
  );
}
