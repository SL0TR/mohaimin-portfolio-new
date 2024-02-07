"use client";
import { useState } from "react";
import useFilteredProjects from "../useFilteredProjects";
import FilterSearch from "./FilterSearch";
import Project3DCard from "./Project3DCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProjectDialog from "./ProjectDialog";
import { projects } from "@/app/experience/projects";

export default function Projects() {
  const { filteredProjects } = useFilteredProjects();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProjectIdx, setSelectedProjectIdx] = useState<number>(0);

  function toggleDialog() {
    setIsDialogOpen((prev) => !prev);
  }

  function handleProjectSelect(idx: number) {
    setSelectedProjectIdx(idx);
    toggleDialog();
  }

  return (
    <>
      <div className="w-full relative">
        <div className="flex lg:px-12 px-8 mt-4 z-10 pb-1 absolute w-full left-0">
          <FilterSearch />
        </div>
      </div>
      <ScrollArea>
        <div className="mt-12 lg:mt-10 h-full lg:p-10 p-5 mx-auto grid gap-10 xl:grid-cols-auto-fit-30 grid-cols-auto-fit-18">
          {filteredProjects.map((project, index) => (
            <Project3DCard
              key={project.name}
              index={index}
              onViewDetails={handleProjectSelect}
              project={project}
            />
          ))}
        </div>
        <div className="h-150" />
      </ScrollArea>
      <ProjectDialog
        project={projects?.[selectedProjectIdx]}
        isOpen={isDialogOpen}
        toggleDialog={toggleDialog}
      />
    </>
  );
}
