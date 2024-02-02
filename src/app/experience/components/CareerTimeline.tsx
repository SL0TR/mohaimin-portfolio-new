import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Timeline,
  TimelineBlock,
  TimelineContent,
  TimelineMarker,
} from "@/components/ui/timeline";
import career from "@/data/career.json";
import { cn } from "@/lib/utils";
import TimelineCard from "./TimelineCard";
import { PiShootingStarThin } from "react-icons/pi";

export default function CareerTimeline() {
  return (
    <ScrollArea>
      <div className="flex justify-center mt-10">
        <PiShootingStarThin className="dark:text-amber-700 text-amber-500 text-2xl 2xl:text-5xl animate-pulse" />
      </div>
      <Timeline className="p-10 my-10 max-md:p-0">
        {career.timeline.map((item, index) => {
          const isOdd = index % 2 === 0;
          const side = isOdd ? "left" : "right";

          return (
            <TimelineBlock side={side} key={item.company}>
              <TimelineMarker className="dark:bg-amber-700 bg-amber-500" />
              <TimelineContent
                className={cn(
                  "amber-600",
                  side === "left" && "text-right max-md:text-left"
                )}
                dir="ltr"
              >
                <TimelineCard item={item} side={side} />
              </TimelineContent>
            </TimelineBlock>
          );
        })}
      </Timeline>
    </ScrollArea>
  );
}
