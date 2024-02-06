import { projects } from "@/app/experience/projects";
import { type ClassValue, clsx } from "clsx";
import { SimpleIcon, renderSimpleIcon } from "react-icon-cloud";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const renderCustomIcon = (icon: SimpleIcon, size = 42) => {
  // TODO: Add a tooltip with the icon name and link
  return renderSimpleIcon({
    icon,
    size,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

export const filteredProjectsByQuery = (query: string) => {
  const filteredProjects = projects.filter((project) => {
    return (
      project.techStack.join("").includes(query) ||
      project.tags
        .map((t) => t.toLocaleLowerCase())
        .join("")
        .includes(query)
    );
  });
  return filteredProjects;
};
