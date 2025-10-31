import { Metadata } from "next"

export const metadata : Metadata = {
    title : "Curriculum"
  }

export default function A() { 
return     <div className="h-screen flex overflow-y-auto">
<div className="h-screen border-r w-[92vw] md:w-[20rem] flex">
  <div>
  <ol className="text-xs pt-6">
    <li className="p-4">1. Cricket Team Member (Runner-Up) - Inter-Departmental Cricket Tournament (2022) .</li>
    <li className="p-4">1. Faculty of Engineering and Technology Cricket Team Player - Inter-Faculty Cricket Tournament (2025) .</li>
    <li className="p-4">2. Completed 500+ DSA Questions across platforms.</li>
    <li className="p-4">3. Foundation for Excellence (FFE) Scholar, Class of 2022.</li>
  </ol>
  </div>
</div> 

</div> 
}

