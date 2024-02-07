import { ContactFormValues } from "@/app/contact/type";
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
  const lowerCaseQuery = query.toLowerCase();

  console.log(lowerCaseQuery);

  const filteredProjects = projects.filter((project) => {
    return (
      project.techStack
        .map((t) => t.toLowerCase())
        .join("")
        .includes(lowerCaseQuery) ||
      project.tags
        .map((t) => t.toLowerCase())
        .join("")
        .includes(lowerCaseQuery)
    );
  });
  return filteredProjects;
};

export function sendEmail(data: ContactFormValues) {
  const apiEndpoint = "/api/email";

  return fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function randomTailwindColor() {
  const colors = [
    "bg-red-300",
    "bg-yellow-300",
    "bg-green-300",
    "bg-blue-300",
    "bg-indigo-300",
    "bg-purple-300",
    "bg-pink-300",
    "bg-gray-300",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}
