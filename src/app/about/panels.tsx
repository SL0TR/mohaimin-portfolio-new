import { Panels } from "./types";
import Summary from "./Summary";
import Skills from "./Skills";

export const initialPanels: Panels = [
  {
    title: "Summary",
    content: (
      <div className="h-full p-6 pl-10">
        <Summary />
      </div>
    ),
    defaultSize: 40,
    minSize: 30,
  },
  {
    title: "Skills",
    content: (
      <div className="h-full p-6 flex justify-center items-center">
        <Skills />
      </div>
    ),
    defaultSize: 60,
    minSize: 30,
  },
];
