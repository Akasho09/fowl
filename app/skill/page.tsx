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

return <Layout>
<div className="h-screen md:w-[180vw] grid grid-cols-8  flex sm:flex-col">
<div className="col-span-8 md:col-span-1 h-full border-r border-black">
<ThreeTexts t1="🖥️ Programming Languages" t4={Langs}></ThreeTexts>
</div>
<div className="col-span-1 h-full border-r border-black hidden md:block">
<ThreeTexts t1="⚡ Development & Frameworks" t4={Devs}></ThreeTexts>
</div>      
<div className="col-span-1 h-full border-r border-black hidden md:block">
<ThreeTexts t1="💾 Databases" t4={dbs}></ThreeTexts>
</div>
<div className="col-span-1 h-full border-r border-black hidden md:block">
<ThreeTexts t1="🛠️ Tools & Platforms" t4={tools}></ThreeTexts>
</div>
<div className="col-span-1 h-full border-r border-black hidden md:block">
<ThreeTexts t1="📚 Computer Science Fundamentals" t4={comps}></ThreeTexts>
</div>
<div className="col-span-1 h-full border-r border-black hidden md:block">
<ThreeTexts t1="🚀 Soft Skills" t4={soft}></ThreeTexts>
</div>

<div className="col-span-2 h-full flex flex-col justify-center items-center hidden md:flex">
  <RightArrow  linkk="/exp" />
</div>
</div> </Layout>
}