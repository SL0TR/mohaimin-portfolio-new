import SectionHeader from "@/components/SectionHeader";
import CareerTimeline from "./CareerTimeline";

export default function Experience() {
  return (
    <div className="w-full h-full">
      <SectionHeader tabs={[{ title: "Timeline" }]} />
      <CareerTimeline />
    </div>
  );
}
