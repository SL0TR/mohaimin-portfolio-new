"use client";
import useFilteredProjects from "../useFilteredProjects";
import FilterSearch from "./FilterSearch";
import Project3DCard from "./Project3DCard";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Projects() {
  const { filteredProjects } = useFilteredProjects();

  return (
    <>
      <div className="w-full relative">
        <div className="flex lg:px-12 px-8 mt-4 z-10 pb-1 absolute w-full left-0">
          <FilterSearch />
        </div>
      </div>
      <ScrollArea>
        <div className="mt-12 lg:mt-10 h-full lg:p-10 p-5 mx-auto grid gap-10 xl:grid-cols-auto-fit-30 grid-cols-auto-fit-18">
          {filteredProjects.map((project) => (
            <Project3DCard key={project.name} project={project} />
          ))}
        </div>
        <div className="h-150" />
      </ScrollArea>
    </>
  );
}
