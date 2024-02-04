import { Employer } from "@/enums";

export type CareerTimelineItem = {
  company: string;
  link: string;
  position: string;
  date: string;
  description: string;
  image?: string;
  duties?: string[];
  type: string;
  location: string;
  techStackIcons?: string[];
  startDate?: string;
  endDate?: string | null;
  key: Employer;
};
