"use client";
import { Fragment, useState } from "react";
import SectionHeader from "./SectionHeader";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { Panels } from "@/app/about-me/types";
import Reset from "@/components/Reset";

type ResizablePanels = {
  initialPanels: Panels;
};

function ResizablePanels({ initialPanels }: ResizablePanels) {
  const [panels, setPanels] = useState<Panels>(initialPanels ?? []);
  const shouldShowReset = !panels.length;

  const handleOnClose = (index: number) => {
    setPanels((currState) => {
      const newState = [...currState];
      newState.splice(index, 1);
      return newState;
    });
  };

  const handlePanelReset = () => {
    setPanels(initialPanels);
  };

  return (
    <ResizablePanelGroup direction="horizontal">
      {panels.map((panel, idx) => {
        // If the panel is not the last one, show a handle.
        const shouldShowHandle = idx < panels.length - 1;
        return (
          <Fragment key={panel.title}>
            <ResizablePanel
              defaultSize={panel.defaultSize}
              minSize={panel.minSize}
              maxSize={panel.maxSize}
              className="flex flex-col"
            >
              <SectionHeader
                tabs={[{ title: panel.title }]}
                onClose={() => handleOnClose(idx)}
              />
              <div className="grow">{panel.content}</div>
            </ResizablePanel>
            {shouldShowHandle && <ResizableHandle withHandle />}
          </Fragment>
        );
      })}
      {shouldShowReset && (
        <div className="flex justify-center items-center h-full w-full">
          <Reset onClick={handlePanelReset} />
        </div>
      )}
    </ResizablePanelGroup>
  );
}

export default ResizablePanels;
