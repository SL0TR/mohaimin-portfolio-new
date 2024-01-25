export type CloudTag = {
  slug: string;
  url: string;
  imageUrl?: string;
};

export type CloudTagIcon = {
  url: string;
  icon: string;
};

export type Panel = {
  title: string;
  content: JSX.Element;
  defaultSize: number;
  minSize: number;
  maxSize?: number;
};

export type Panels = Panel[];
