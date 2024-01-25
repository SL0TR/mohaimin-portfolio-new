"use client";
import { Fragment, useState } from "react";
import SectionHeader from "./SectionHeader";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { Panels } from "@/app/about/types";

type ResizablePanels = {
  initialPanels: Panels;
};

function ResizablePanels({ initialPanels }: ResizablePanels) {
  const [panels, setPanels] = useState<Panels>(initialPanels ?? []);

  const handleOnClose = (index: number) => {
    setPanels((currState) => {
      const newState = [...currState];
      newState.splice(index, 1);
      return newState;
    });
  };

  return (
    <ResizablePanelGroup direction="horizontal">
      {panels.map((panel, idx) => (
        <Fragment key={panel.title}>
          <ResizablePanel
            defaultSize={panel.defaultSize}
            minSize={panel.minSize}
            maxSize={panel.maxSize}
          >
            <SectionHeader
              tabs={[{ title: panel.title }]}
              onClose={() => handleOnClose(idx)}
            />
            <div className="h-full p-6 pl-10">{panel.content}</div>
          </ResizablePanel>
          {idx < panels.length - 1 && <ResizableHandle withHandle />}
        </Fragment>
      ))}
    </ResizablePanelGroup>
  );
}

export default ResizablePanels;
