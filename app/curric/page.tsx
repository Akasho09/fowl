import ThreeTexts from "@/components/mainpage/threeText"
import RightArrow from "@/components/rightArrow"
import Layout from "@/components/layyy"
export default function A() {

return <Layout><div className="h-screen md:w-[90vw] grid grid-cols-4">
          <div className="col-span-4 md:col-span-1 h-full border-r border-black">
<ThreeTexts t1="Cricket Team Member (Runner-Up) - Inter-Departmental Cricket Tournament" t2="" t3=""></ThreeTexts>
</div>

 <div className="col-span-3 h-full flex flex-col justify-center items-center hidden md:flex ">
            <RightArrow  linkk="/extras" />
          </div>
</div> 
</Layout>
}