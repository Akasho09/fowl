import { Metadata } from "next";
import { EducationCard , InfoTable} from "@/components/ed";
import {SPIs , mainsPercentiles , advancedMarks , schoolMarks} from "./data"

export const metadata: Metadata = {
  title: "Education | Akash Malik",
  description:
    "Academic journey including B.Tech at Jamia Millia Islamia, JEE preparation, and School education.",
};

export default function EducationPage() {
  return (
    <div className="min-h-screen overflow-x-auto">
      <div className="flex min-h-screen">
        <EducationCard
          index="01"
          title="B.Tech Computer Engineering"
          subtitle="Jamia Millia Islamia, New Delhi"
          duration="Aug 2022 – May 2026"
          driveLink="https://drive.google.com/file/d/1h3ullG78akroHkwB87WhUYoojygfj19h/view"
        >
          <InfoTable
            headers={["Semester", "SPI"]}
            rows={SPIs.map((spi, i) => [`Semester ${i + 1}`, spi.toFixed(2)])}
            footer={["CGPA", "7.55"]}
            showBar
          />
        </EducationCard>

        <EducationCard
          index="02"
          title="JEE Mains & Advanced"
          subtitle="Petronet Kashmir Super 30"
          duration="Sept 2021 – Aug 2022"
          driveLink="https://drive.google.com/drive/folders/1VBKGDT7q4WWNCuIjlHhReuCcu8uG2KJ5"
        >
          <div className="flex flex-col gap-8">
            <InfoTable
              title="JEE Mains 2022"
              headers={["Subject", "Percentile"]}
              rows={mainsPercentiles.map((p) => [p.subject, p.percentile])}
              footer={["Total", "95.11"]}
            />
            <p className="text-center">· · ·</p>
            <InfoTable
              title="JEE Advanced 2022"
              headers={["Subject", "Marks"]}
              rows={advancedMarks.map((p) => [p.subject, p.marks])}
              footer={["AIR Rank", "26K"]}
            />
          </div>
        </EducationCard>

        <EducationCard
          index="03"
          title="PCMB 12th Boards"
          subtitle="Govt Higher Secondary School"
          duration="Sept 2019 – Sept 2021"
          driveLink="https://drive.google.com/file/d/1t3xIZu66qB-XvXVahJB-8ZZWbjffF9jp/view"
        >
          <InfoTable
            headers={["Subject", "Marks"]}
            rows={schoolMarks.map((s) => [s.subject, s.marks])}
            footer={["Total Marks", "433/500"]}
          />
        </EducationCard>

      </div>
    </div>
  );
}