import { ProjectStatus } from "@/enums";
import { cn } from "@/lib/utils";
import { stat } from "fs/promises";

type ProjectStatusIndicatorProps = {
  status: ProjectStatus;
};

function getIndicatorColor(status: ProjectStatus) {
  switch (status) {
    case ProjectStatus.IN_DEVELOPMENT:
      return "bg-sky-500";
    case ProjectStatus.OFFLINE:
      return "bg-rose-500";
    case ProjectStatus.ONLINE:
      return "bg-emerald-500";
  }
}

export default function ProjectStatusIndicator({
  status,
}: ProjectStatusIndicatorProps) {
  const indicatorColor = getIndicatorColor(status);

  return (
    <span className="relative flex h-2 w-2">
      <span
        className={cn(
          "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
          indicatorColor
        )}
      />
      <span
        className={cn(
          "relative inline-flex rounded-full h-2 w-2 bg-sky-400",
          indicatorColor
        )}
      />
    </span>
  );
}
