"use client";
import DynamicCloud from "@/components/DynamicCloud";
import { useState } from "react";
import { makeTagsUnique } from "../helper";
import { backendIconTags, frontEndTags, toolsIconTags } from "../tags";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CloudTag } from "../types";

enum TechStack {
  FRONTEND = "frontend",
  BACKEND = "backend",
  TOOLS = "tools",
}

const stackTagMap: Record<TechStack, CloudTag[]> = {
  [TechStack.FRONTEND]: frontEndTags,
  [TechStack.BACKEND]: backendIconTags,
  [TechStack.TOOLS]: toolsIconTags,
};

export default function Skills() {
  const [selectedStacks, setSelectedStacks] = useState<TechStack[]>([
    TechStack.FRONTEND,
  ]);

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
          onValueChange={(value) => setSelectedStacks(value as TechStack[])}
        >
          <ToggleGroupItem value={TechStack.FRONTEND} aria-label="Toggle bold">
            frontend
          </ToggleGroupItem>
          <ToggleGroupItem value={TechStack.BACKEND} aria-label="Toggle italic">
            backend
          </ToggleGroupItem>
          <ToggleGroupItem
            value={TechStack.TOOLS}
            aria-label="Toggle underline"
          >
            tools
          </ToggleGroupItem>
        </ToggleGroup>
        <DynamicCloud iconSlugs={getStackIconSlugs()} />
      </div>
    </>
  );
}
