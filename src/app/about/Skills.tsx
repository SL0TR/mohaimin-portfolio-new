"use client";
import DynamicCloud from "@/components/DynamicCloud";
import React, { useState } from "react";
import { allUniqueSlugs, getIconSlugs, makeTagsUnique } from "./helper";
import { backendIconTags, frontEndTags, toolsIconTags } from "./tags";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CloudTag } from "./types";

enum stacks {
  FRONTEND = "frontend",
  BACKEND = "backend",
  TOOLS = "tools",
}

const stackTagMap: Record<stacks, CloudTag[]> = {
  [stacks.FRONTEND]: frontEndTags,
  [stacks.BACKEND]: backendIconTags,
  [stacks.TOOLS]: toolsIconTags,
};

export default function Skills() {
  const [selectedStacks, setSelectedStacks] = useState<stacks[]>([
    stacks.FRONTEND,
  ]);

  console.log(selectedStacks, "selectedStacks");

  const getStackIconSlugs = () => {
    const slugs = selectedStacks.map((stack) => stackTagMap[stack]);
    return makeTagsUnique(slugs.flat());
  };

  return (
    <>
      <div className="flex flex-col">
        <ToggleGroup
          value={selectedStacks}
          variant="outline"
          type="multiple"
          className="pb-6"
          onValueChange={(value) => setSelectedStacks(value as stacks[])}
        >
          <ToggleGroupItem value={stacks.FRONTEND} aria-label="Toggle bold">
            Frontend
          </ToggleGroupItem>
          <ToggleGroupItem value={stacks.BACKEND} aria-label="Toggle italic">
            Backend
          </ToggleGroupItem>
          <ToggleGroupItem value={stacks.TOOLS} aria-label="Toggle underline">
            Tools
          </ToggleGroupItem>
        </ToggleGroup>
        <DynamicCloud iconSlugs={getStackIconSlugs()} />
      </div>
    </>
  );
}
