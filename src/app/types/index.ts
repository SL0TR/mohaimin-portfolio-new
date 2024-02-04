import {
  ProjectTechStackType,
  ProjectStatus,
  TechStack,
  TechStackType,
  Employer,
} from "@/enums";
import { StaticImageData } from "next/image";

export type Panel = {
  title: string;
  content: JSX.Element;
  defaultSize: number;
  minSize: number;
  maxSize?: number;
};

export type Panels = Panel[];

export type TechStackConfig = {
  [key in TechStack]: {
    name: string;
    iconSlug: string;
    type: TechStackType;
  };
};

export type Project = {
  name: string;
  description: string;
  thumbnail: StaticImageData;
  url: string | null;
  gallery: string[];
  tags: string[];
  techStack: TechStack[];
  status: ProjectStatus;
  techStackType: ProjectTechStackType;
  employer: Employer;
};
