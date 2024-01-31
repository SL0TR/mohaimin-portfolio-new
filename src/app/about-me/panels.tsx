import Summary from "./components/Summary";
import Skills from "./components/Skills";
import { Panels } from "../types";

export const aboutMePanels: Panels = [
  {
    title: "Summary",
    content: (
      <div className="h-full">
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
