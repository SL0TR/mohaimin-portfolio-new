"use client";
import { IoIosArrowForward } from "react-icons/io";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type DutyListProps = {
  items?: string[];
};

export default function Duties({ items = [] }: DutyListProps) {
  const [canSeeMore, setCanSeeMore] = useState(false);

  const handleSeeMore = () => {
    setCanSeeMore(true);
  };

  return (
    <div
      className={cn(
        "flex items-center space-x-4 rounded-md border p-4 overflow-hidden relative pb-10 transition-all duration-300 ease-in-out ",
        canSeeMore && "overflow-auto pb-4"
      )}
    >
      <ul
        className={cn(
          "truncate w-full transition-all duration-300 ease-in-out font-thin list-decimal",
          canSeeMore && "overflow-auto whitespace-normal overflow-initial"
        )}
      >
        {items?.map((duty) => (
          <li
            className={cn(
              "text-left dark:text-slate-400 relative pl-5",
              canSeeMore && "mb-2"
            )}
            key={duty}
          >
            <IoIosArrowForward className="absolute left-0 top-1" />{" "}
            <p>{duty}</p>
          </li>
        ))}
      </ul>
      <div className="w-full flex justify-end absolute right-0 -bottom-0">
        {!canSeeMore && (
          <Button
            onClick={handleSeeMore}
            variant="link"
            className="dark:text-slate-300"
          >
            ...See more{" "}
          </Button>
        )}
      </div>
    </div>
  );
}
