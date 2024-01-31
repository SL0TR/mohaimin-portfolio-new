export type Panel = {
  title: string;
  content: JSX.Element;
  defaultSize: number;
  minSize: number;
  maxSize?: number;
};

export type Panels = Panel[];
