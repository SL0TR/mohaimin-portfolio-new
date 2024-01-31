import { cn } from "@/lib/utils";
import React from "react";

export type TimelineSide = "left" | "right";

const Timeline = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative overflow-hidden mx-auto before:content-[''] before:absolute before:top-0 before:left-1/2 before:ml-[-1px] before:w-[1px] before:h-full before:bg-border before:z-10 max-md:before:left-[8px] max-md:before:width-[2px]",
      className
    )}
    {...props}
  />
));
Timeline.displayName = "Timeline";

type TimelineBlockProps = {
  side: TimelineSide;
} & React.HTMLAttributes<HTMLDivElement>;

function TimelineBlock({ className, children, side }: TimelineBlockProps) {
  return (
    <div
      className={cn(
        "w-[calc(50%+8px)] flex justify-between clear-both  max-md:w-full max-md:mb-14",
        side === "left"
          ? "float-left rtl max-md:float-none max-md:ltr"
          : "float-right max-md:float-none",
        className
      )}
    >
      {children}
    </div>
  );
}

TimelineBlock.displayName = "Card";

const TimelineMarker = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-[16px] h-[16px] rounded-full bg-amber-500 mt-2 z-50",
      className
    )}
    {...props}
  />
));

TimelineMarker.displayName = "TimelineMarker";

const TimelineContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("w-[95%] px-3", className)} {...props} />
));

TimelineContent.displayName = "TimelineMarker";

export { Timeline, TimelineBlock, TimelineMarker, TimelineContent };
