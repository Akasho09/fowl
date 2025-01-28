import ThreeTexts from "@/components/mainpage/threeText"
import RightArrow from "@/components/rightArrow"
import Layout from "@/components/layyy"
export default function () {

return <Layout><div className="h-screen w-[160vw] grid grid-cols-5">
<div className="col-span-1 h-full border-r border-black">
<ThreeTexts
  t1="College Based DataBase Management System Project"
  t2={`Streamlined college administration with a user-friendly ReactJS frontend for efficient data interaction.\n
  Employed Express.js to build a robust backend API for efficient data processing and communication with the MongoDB database.\n
  Enables only staff (teachers and HOD) to create, read, update, and delete (CRUD) data related to:\n
  ➡ Attendance\n
  ➡ Internal Marks\n
  ➡ Time Schedule`}
  t3="C++/C, HTML/CSS, JavaScript, TypeScript , SQL" t4="" t5=""
/>

</div>
<div className="col-span-1 h-full border-r border-black">
<ThreeTexts t1="p1" t2="d1" t3="skills used " t4="" t5=""></ThreeTexts>
</div>
<div className="col-span-2 h-full flex flex-col justify-center items-center">
  <RightArrow  linkk="/skill" />
</div>
</div> 
</Layout>
}