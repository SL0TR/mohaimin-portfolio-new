import { projects } from "@/app/experience/projects";
import Project3DCard from "./Project3DCard";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Projects() {
  return (
    <ScrollArea>
      <div className="h-full lg:p-10 p-5 mx-auto grid gap-10 xl:grid-cols-auto-fit-30 grid-cols-auto-fit-18">
        {projects.map((project) => (
          <Project3DCard key={project.name} project={project} />
        ))}
      </div>
    </ScrollArea>
  );
}
