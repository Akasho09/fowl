import ThreeTexts from "@/components/mainpage/threeText"
import RightArrow from "@/components/rightArrow"
import Layout from "@/components/layyy"
import { Langs } from "@/components/skills/lang"
import { Devs } from "@/components/skills/dev"
import { dbs } from "@/components/skills/dbs"
import { tools } from "@/components/skills/tools"
import { comps } from "@/components/skills/comps"
import { soft } from "@/components/skills/soft"
export default function A() {

return <Layout><div className="h-screen md:w-[200vw] grid grid-cols-8  flex sm:flex-col">
<div className="col-span-8 md:col-span-1 h-full border-r border-black">
<ThreeTexts t1="🖥️ Programming Languages" t3={Langs}></ThreeTexts>
</div>
<div className="col-span-1 h-full border-r border-black hidden md:flex">
<ThreeTexts t1="⚡ Development & Frameworks" t3={Devs}></ThreeTexts>
</div>      
<div className="col-span-1 h-full border-r border-black hidden md:flex">
<ThreeTexts t1="💾 Databases" t3={dbs}></ThreeTexts>
</div>
<div className="col-span-1 h-full border-r border-black hidden md:flex">
<ThreeTexts t1="🛠️ Tools & Platforms" t3={tools}></ThreeTexts>
</div>
<div className="col-span-1 h-full border-r border-black hidden md:flex">
<ThreeTexts t1="📚 Computer Science Fundamentals" t3={comps}></ThreeTexts>
</div>
<div className="col-span-1 h-full border-r border-black hidden md:flex">
<ThreeTexts t1="🚀 Soft Skills" t3={soft}></ThreeTexts>
</div>

<div className="col-span-2 h-full flex flex-col justify-center items-center hidden md:flex">
  <RightArrow  linkk="/curric" />
</div>
</div> </Layout>
}