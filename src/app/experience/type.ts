export type CareerTimelineType = "Full Time" | "Part Time" | "Contract";

export type CareerTimelineItem = {
  company: string;
  link: string;
  position: string;
  date: string;
  description: string;
  image?: string;
  duties?: string[];
  type: CareerTimelineType;
  location: string;
};
