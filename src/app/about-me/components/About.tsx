import DesktopPanels from "@/components/ResizablePanels";
import { aboutMePanels } from "../panels";
import MobilePanels from "./MobilePanels";

export default function About() {
  return (
    <>
      <div className="hidden xl:block h-full">
        <DesktopPanels initialPanels={aboutMePanels} />
      </div>
      <div className="xl:hidden h-full">
        <MobilePanels />
      </div>
    </>
  );
}
