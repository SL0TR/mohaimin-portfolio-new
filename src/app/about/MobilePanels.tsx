"use client";
import SectionHeader, { TabItem } from "@/components/SectionHeader";
import React, { ReactNode, useState } from "react";
import Summary from "./Summary";
import Skills from "./Skills";

const initialTabs: TabItem[] = [
  { title: "Summary", selected: true },
  { title: "Skills", selected: false },
];

const tabContent: Record<number, ReactNode> = {
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

  const handleTabClose = (index: number) => {
    setTabs((currState) => {
      const newState = [...currState];
      newState.splice(index, 1);
      return newState;
    });
  };

  return (
    <>
      <SectionHeader
        tabs={tabs}
        onClick={handleTabClick}
        onClose={handleTabClose}
      />
      {tabContent[tabs.findIndex((item) => item.selected)]}
    </>
  );
}
