import IconStack from "@/components/IconStack";
import { Project } from "@/app/types";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn, randomTailwindColor } from "@/lib/utils";
import Image from "next/image";

type ProjectDialogProps = {
  project: Project;
  isOpen: boolean;
  toggleDialog: () => void;
};

export default function ProjectDialog({
  project,
  isOpen,
  toggleDialog,
}: ProjectDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={toggleDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{project.name}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="pt-2 max-sm:pt-1">
          {project.description}
        </DialogDescription>
        <div className="flex flex-wrap gap-3 p-2 max-sm:pt-1">
          <IconStack techStack={project.techStack} />
        </div>
        <Image
          className="rounded-1 py-2 max-sm:py-1"
          src={project.thumbnail}
          alt={project.name}
          width={project.thumbnail.width}
          height={project.thumbnail.height}
        />
        <ul className="flex flex-row flex-wrap gap-2 pt-2 max-sm:pt-1">
          {project.tags.map((tag) => (
            <li key={tag} className="text-xs">
              <Badge
                className={cn(
                  "dark:opacity-45 opacity-70 dark:text-background text-foreground",
                  randomTailwindColor()
                )}
              >
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
