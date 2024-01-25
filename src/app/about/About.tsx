import ResizablePanels from "@/components/ResizablePanels";
import { initialPanels } from "./panels";
import MobilePanels from "./MobilePanels";

export default function About() {
  return (
    <>
      <div className="hidden xl:block h-full">
        <ResizablePanels initialPanels={initialPanels} />
      </div>
      <div className="xl:hidden h-full">
        <MobilePanels />
      </div>
    </>
  );
}
