import { Metadata } from "next";
import ThreeTexts from "@/components/mainpage/threeText";

export const metadata: Metadata = {
  title: "Education | Akash Malik",
  description:
    "Academic journey including B.Tech at Jamia Millia Islamia, JEE preparation, and School education.",
};

interface InfoTableProps {
  title?: string;
  headers: string[];
  rows: (string | number)[][];
  footer?: [string, string];
}


export default function EducationPage() {
  const SPIs = [7.14, 7.12, 6.91, 7.54, 8.26, 7.61];
  const factor = [7, 6.5, 11.5, 12, 17.25, 17.25]; // credits

  let totalSpi = 0,
    divison = 0;
  SPIs.forEach((s, i) => {
    totalSpi += s * factor[i];
    divison += factor[i];
  });

  const college = (
    <InfoTable
      headers={["Semester", "SPI"]}
      rows={SPIs.map((spi, i) => [`Semester ${i + 1}`, spi.toFixed(2)])}
      footer={["Total CGPA", (totalSpi / divison).toFixed(2)]}
    />
  );

  const Mainspercentiles = [
    { subject: "Physics", percentile: 95.26 },
    { subject: "Chemistry", percentile: 95.55 },
    { subject: "Math", percentile: 87.82 },
  ];

  const AdvancedsMarks = [
    { subject: "Physics", marks: 48 },
    { subject: "Chemistry", marks: 45 },
    { subject: "Math", marks: 40 },
  ];

  const data = (
    <div className="flex flex-col gap-6">
      <InfoTable
        title="JEE Mains 2022"
        headers={["Subject", "Percentile"]}
        rows={Mainspercentiles.map((p) => [p.subject, p.percentile])}
        footer={["Total", "95.11"]}
      />
      <InfoTable
        title="JEE Advanced 2022"
        headers={["Subject", "Marks"]}
        rows={AdvancedsMarks.map((p) => [p.subject, p.marks])}
        footer={["AIR Rank", "26K"]}
      />
    </div>
  );

  const schoolMarks = [
    { subject: "English", marks: 90 },
    { subject: "Physics", marks: 85 },
    { subject: "Chemistry", marks: 90 },
    { subject: "Biology", marks: 78 },
    { subject: "Math", marks: 90 },
  ];
  const totalMarks = schoolMarks.reduce((acc, s) => acc + s.marks, 0);

  const school = (
    <InfoTable
      headers={["Subject", "Marks"]}
      rows={schoolMarks.map((s) => [s.subject, s.marks])}
      footer={["Total Marks", String(totalMarks)]}
    />
  );

  return (
    <section className="h-screen flex overflow-x-auto md:overflow-visible">
      {/* College */}
      <div className="flex h-screen w-[92dvw] md:w-[20rem] flex border-r">
        <ThreeTexts
          t1="B.Tech Computer Engineering"
          t2="Jamia Millia Islamia, New Delhi 110025."
          t3={college}
          t4="Aug 2022 - May 2026"
          links={[
            {
              l1: "https://drive.google.com/file/d/1h3ullG78akroHkwB87WhUYoojygfj19h/view?usp=sharing",
              l2: "💾 Drive",
            },
          ]}
        />
      </div>

      {/* JEE */}
      <div className="h-screen w-[92vw] md:w-[20rem] flex border-r ">
        <ThreeTexts
          t1="JEE Mains & Advanced"
          t2="Petronet Kashmir Super 30, Srinagar Kashmir"
          t3={data}
          t4="Sept 2021 - Aug 2022"
          links={[
            {
              l1: "https://drive.google.com/drive/u/0/folders/1VBKGDT7q4WWNCuIjlHhReuCcu8uG2KJ5",
              l2: "💾 Drive",
            },
          ]}
        />
      </div>

      {/* School */}
      <div className="h-screen w-[92vw] md:w-[20rem] flex border-r ">
        <ThreeTexts
          t1="PCMB 12th Boards"
          t2="Govt Higher Secondary School, Dangiwacha Rafiabad Baramulla Kashmir"
          t3={school}
          t4="Sept 2019 - Sept 2021"
          links={[
            {
              l1: "https://drive.google.com/file/d/1t3xIZu66qB-XvXVahJB-8ZZWbjffF9jp/view?usp=drive_link",
              l2: "💾 Drive",
            },
          ]}
        />
      </div>
    </section>
  );
}




function InfoTable({ title, headers, rows, footer }: InfoTableProps) {
  return (
    <div className="rounded-lg border shadow-sm p-4 transition-colors duration-200 ">
      {title && (
        <div className="flex justify-between px-4 py-2 ">
          <span className="font-bold text-md">{title}</span>
        </div>
      )}
      <div className="flex flex-col gap-2 mt-2">
        {/* Table header */}
        <div className="flex justify-between px-4 py-2 rounded-t-md border-b "
            style={{ backgroundColor: "var(--bg-color)" }}
        >
          {headers.map((h, i) => (
            <span
              key={i}
              className="font-semibold"
            >
              {h}
            </span>
          ))}
        </div>

        {/* Rows */}
        {rows.map((r, i) => (
          <div
            key={i}
            className=" flex flex-wrap justify-between md:px-4 py-3 border-b last:border-b-0 transition-colors duration-150"
          >
            {r.map((cell, j) => (
              <span
                key={j}
                className="font-medium "
              >
                {cell}
              </span>
            ))}
          </div>
        ))}

        {/* Footer */}
        {footer && (
          <div className="flex justify-between px-4 py-3 font-semibold border-t rounded-b-md">
            <span>{footer[0]}</span>
            <span>{footer[1]}</span>
          </div>
        )}
      </div>
    </div>
  );
}