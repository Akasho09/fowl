import ThreeTexts from "@/components/mainpage/threeText"

export default function A() {
    return  <div className="h-screen flex w-max">
      <ThreeTexts t1="B-Tech Computer Engineering" t2="Jamia Millia Islamia , New Delhi 110025." 
      t3={college}
      t4=" Aug 2022 - May 2026 " 
      links={[{l1:"https://drive.google.com/file/d/1VHfcJLD8fiaKNbQDGNS7KNHqO31dwKGE/view?usp=drive_link"  ,  l2:"💾 Drive"}]}></ThreeTexts>

      <ThreeTexts t1="JEE Mains and JEE Advanced" t2="Petronet Kashmir Super 30 , Srinagar Kashmir." 
      t3={data}
      t4={"Sept 2021 - Aug 2022"} 
      links={[{l1:"https://drive.google.com/drive/u/0/folders/1VBKGDT7q4WWNCuIjlHhReuCcu8uG2KJ5" , l2:"💾 Drive"}]}
></ThreeTexts>

      <ThreeTexts t1="PCMB 12th Boards" t2="Govt Higher Secondary School , Dangiwacha Rafiabad Baramulla Kashmir." 
      t3={school}
      t4="Sept 2019 - Sept 2021 "
      links={[{l1:"https://drive.google.com/file/d/1t3xIZu66qB-XvXVahJB-8ZZWbjffF9jp/view?usp=drive_link" , l2:"💾 Drive"}]}
></ThreeTexts>
      
  </div>
}



const Mainspercentiles = [
  { 
    subject : "Physics" , 
    percentile : 95
  } , 
  { 
    subject : "Chemistry" , 
    percentile : 95
  } , 
  { 
    subject : "Math" , 
    percentile : 88
  } , 
]

const Advancedspercentiles = [
  { 
    subject : "Physics" , 
    marks : 48
  } , 
  { 
    subject : "Chemistry" , 
    percentile : 5
  } , 
  { 
    subject : "Math" , 
    percentile : 5
  } , 
]

const data = (
  <div className="flex flex-col gap-4 shadow-sm">
    <div className="list-decimal list-inside space-y-4">
      <div className="text-slate-700 font-medium text-sm md:text-sm border border-slate-900 rounded-lg  p-4">
        <div className="flex justify-between px-4 py-2">
          <span className="font-bold text-md">1. JEE Mains 2022</span>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex justify-between px-4 py-2 bg-slate-100 rounded-t-md border-b border-slate-300">
            <span className="font-semibold text-slate-700">Subject</span>
            <span className="font-bold text-slate-700 ">Percentile</span>
          </div>
          {Mainspercentiles.map((p, i) => (
            <div
              className="flex justify-between px-4 py-3 border-b border-slate-400 last:border-b-0 hover:bg-slate-50 transition-colors duration-150"
              key={i}
            >
              <span className="font-semibold text-slate-700 ">{p.subject}</span>
              <span className="font-bold text-slate-700 ">{p.percentile}</span>
            </div>
          ))}
          <div className="flex justify-between px-4 py-3 bg-slate-100 font-semibold text-slate-900 border-t border-slate-300 rounded-b-md">
            <span className="">AIR RANK </span>
            <span className="">44K</span>
          </div>
        </div>
      </div>
      <div className="text-slate-700 font-medium  border border-slate-900 rounded-lg  p-4">
        <div className="flex justify-between px-4 py-2">
          <span className="font-bold text-md">2. JEE Advanced 2022 </span>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex justify-between px-4 py-2 bg-slate-100 rounded-t-md border-b border-slate-300">
            <span className="font-semibold text-slate-700 ">Subject</span>
            <span className="font-bold text-slate-700 ">Marks</span>
          </div>
          {Advancedspercentiles.map((p, i) => (
            <div
              className="flex justify-between px-4 py-3 border-b border-slate-400 last:border-b-0 hover:bg-slate-50 transition-colors duration-150"
              key={i}
            >
              <span className="font-semibold text-slate-700 ">{p.subject}</span>
              <span className="font-bold text-slate-700 ">
                {p.marks !== undefined ? p.marks : p.percentile}
              </span>
            </div>
          ))}
          <div className="flex justify-between px-4 py-3 bg-slate-100 font-semibold text-slate-900 border-t border-slate-300 rounded-b-md">
            <span className="">AIR RANK</span>
            <span className="">26K</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SPIs = [7.14 ,7.12 , 6.91 , 7.54 , 8.23]
let totalSpi=0;
let divison =0;
SPIs.forEach((s,i)=>(
  totalSpi+=((i+2)/2*s),
  divison+=(i+2)/2
))

const college = (
  <div className="flex flex-col gap-4 rounded-lg border border-slate-900 shadow-sm p-4">
    <div className="flex justify-between px-4 py-2 bg-slate-100 rounded-t-md border-b border-slate-300">
      <span className="font-semibold text-slate-700 ">Semester</span>
      <span className="font-bold text-slate-700 ">SPI</span>
    </div>
    {SPIs.map((spi, index) => (
      <div
        className="flex justify-between px-4 py-3 border-b border-slate-400 last:border-b-0 hover:bg-slate-50 transition-colors duration-150"
        key={index}
      >
        <span className="font-semibold text-slate-700 ">
          Semester {index + 1}
        </span>
        <span className="font-bold text-slate-700 ">
          {spi.toFixed(2)}
        </span>
      </div>
    ))}
    <div className="flex justify-between px-4 py-3 bg-slate-100 font-semibold text-slate-900 border-t border-slate-300 rounded-b-md">
      <span className="">Total SPI</span>
      <span className="">{(totalSpi/divison).toFixed(2)}</span>
    </div>
  </div>
);


const schoolMarks = [
  {subject : "English" , 
    marks : 90
   },
  {subject : "Physics" , 
   marks : 85
  },
  {subject : "Chemistry" , 
    marks : 90
   },
   {subject : "Biology" , 
    marks : 78
   },
   {subject : "Math" , 
    marks : 90
   },
 
]
const school = (
  <div className="flex flex-col gap-4 rounded-lg border border-slate-900 shadow-sm p-4">
    <div className="flex flex-col space-y-4">
      <div className="text-slate-700 font-medium ">
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex justify-between px-4 py-2 bg-slate-100 rounded-t-md border-b border-slate-300">
            <span className="font-semibold text-slate-700 ">Subject</span>
            <span className="font-bold text-slate-700 ">Marks</span>
          </div>
          {schoolMarks.map((s, i) => (
            <div
              className="flex justify-between px-4 py-3 border-b border-slate-400 last:border-b-0 hover:bg-slate-50 transition-colors duration-150"
              key={i}
            >
              <span className="font-semibold text-slate-700 ">{s.subject}</span>
              <span className="font-bold text-slate-700 ">{s.marks}</span>
            </div>
          ))}
          <div className="flex justify-between px-4 py-3 bg-slate-100 font-semibold text-slate-900 border-t border-slate-300 rounded-b-md">
            <span className="">Total Marks</span>
            <span className="">433</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
