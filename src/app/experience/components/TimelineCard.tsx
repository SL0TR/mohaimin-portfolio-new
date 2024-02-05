import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CareerTimelineItem } from "../type";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Duties from "./Duties";
import { Button } from "@/components/ui/button";
import { IoOpenOutline } from "react-icons/io5";

type TimelineCardProps = {
  item: CareerTimelineItem;
  side: "left" | "right";
};

export default function TimelineCard({ item, side }: TimelineCardProps) {
  const isLeft = side === "left";

  return (
    <>
      <Card>
        <CardHeader className="max-sm:p-4">
          <CardTitle className="text-indigo-400 md:text-lg 2xl:text-xl">
            {item.position}
          </CardTitle>
          <div
            className={cn(
              "flex flex-row w-full text-right justify-end max-md:justify-start",
              !isLeft && "justify-start"
            )}
          >
            <Link href={item.link} target="_blank">
              <p className="underline text-base mr-2">{item.company} </p>
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
        <CardContent className="grid gap-4 ltr">
          <Duties items={item.duties} />
          <div className="flex justify-end">
            <Link href={`/projects?employer=${item.key}`}>
              <Button variant="link" className="pr-0">
                <IoOpenOutline className="mr-2" />
                Projects
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
