"use client";
import SectionHeader, { TabItem } from "@/components/SectionHeader";
import React, { ReactNode, useState } from "react";
import Summary from "./Summary";
import Skills from "./Skills";
import Reset from "@/components/Reset";

const initialTabs: TabItem[] = [
  { title: "Summary", selected: true },
  { title: "Skills", selected: false },
];

const tabContentMap: Record<number, ReactNode> = {
  0: (
    <div className="p-6 h-full mt-2">
      <Summary />
    </div>
  ),
  1: (
    <div className="p-6 mt-10 h-full">
      <Skills />
    </div>
  ),
};

export default function MobilePanels() {
  const [tabs, setTabs] = useState<TabItem[]>(initialTabs);

  const handleTabClick = (index: number) => {
    setTabs((currState) => {
      const newState = [...currState];
      newState.forEach((item, idx) => {
        if (idx === index) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      });
      return newState;
    });
  };

  const getSelectedTab = (currentTabs: TabItem[], index: number) => {
    const currentTab = currentTabs[index];

    if (currentTabs.length > 1) {
      // If the current tab is selected and it's the last tab, select the previous tab
      if (currentTab.selected && index === currentTabs.length - 1) {
        currentTabs[index - 1].selected = true;
      }

      // If the current tab is selected and it's not the last tab, select the next tab
      if (currentTab.selected && index !== currentTabs.length - 1) {
        currentTabs[index + 1].selected = true;
      }
    }

    return currentTabs;
  };

  const handleTabClose = (index: number) => {
    setTabs((currState) => {
      const newTabs = getSelectedTab([...currState], index);
      newTabs.splice(index, 1);
      return newTabs;
    });
  };

  const tabContent = tabContentMap[tabs.findIndex((item) => item.selected)];

  return (
    <>
      <SectionHeader
        tabs={tabs}
        onClick={handleTabClick}
        onClose={handleTabClose}
      />
      {tabContent ? (
        tabContent
      ) : (
        <div className="flex justify-center items-center h-full w-full">
          <Reset onClick={() => setTabs(initialTabs)} />
        </div>
      )}
    </>
  );
}
