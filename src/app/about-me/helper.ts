import {
  backendIconTags,
  frontEndTags,
  mobileIconsTags,
  toolsIconTags,
} from "./tags";
import { CloudTag } from "./types";

export const getIconSlugs = (iconTags: CloudTag[]) =>
  iconTags.map((tag) => tag.slug);

export const makeTagsUnique = (tags: CloudTag[]): string[] => {
  const uniqueTags = new Set(tags.map((tag) => tag.slug));
  return Array.from(uniqueTags);
};

export const allUniqueSlugs = makeTagsUnique([
  ...frontEndTags,
  ...backendIconTags,
  // ...mobileIconsTags,
  ...toolsIconTags,
]);

export const calculateYearsOfExperience = () => {
  const fromYear = 2017;
  const today = new Date();
  const currentYear = today.getFullYear();

  return currentYear - fromYear;
};
