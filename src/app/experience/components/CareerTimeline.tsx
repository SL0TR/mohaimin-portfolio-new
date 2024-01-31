import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Timeline,
  TimelineBlock,
  TimelineContent,
  TimelineMarker,
} from "@/components/ui/timeline";
import Link from "next/link";
import career from "@/data/career.json";
import { cn } from "@/lib/utils";

export default function CareerTimeline() {
  return (
    <ScrollArea>
      <Timeline className="p-10 my-10 max-md:p-0">
        {career.timeline.map((item, index) => {
          const isOdd = index % 2 === 0;
          const side = isOdd ? "left" : "right";

          return (
            <TimelineBlock side={side} key={item.company}>
              <TimelineMarker className="dark:bg-amber-700 bg-amber-500" />
              <TimelineContent
                className={cn("amber-600", side === "left" && "text-right")}
                dir="ltr"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-indigo-400 text-lg">
                      {item.position}
                    </CardTitle>
                    <div
                      className={cn(
                        "flex flex-row w-full text-right justify-end",
                        side === "right" && "justify-start"
                      )}
                    >
                      <Link href={item.link} target="_blank">
                        <p className="underline text-base mr-2">
                          {item.company}{" "}
                        </p>
                      </Link>
                      <p> - {item.type}</p>
                    </div>

                    <CardDescription className="text-slate-500">
                      {item.date}
                    </CardDescription>
                    <CardDescription className="text-slate-500">
                      {item.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4 ltr ">
                    <div className=" flex items-center space-x-4 rounded-md border p-4 text-sm">
                      {item.description}
                    </div>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineBlock>
          );
        })}
      </Timeline>
    </ScrollArea>
  );
}
