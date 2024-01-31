"use client";
import { cn } from "@/lib/utils";
import { IoCloseOutline } from "react-icons/io5";

export type TabItem = {
  title: string;
  selected?: boolean;
};

type SectionHeaderProps = {
  tabs: TabItem[];
  onClick?: (index: number) => void;
  onClose?: (index: number) => void;
};

export default function SectionHeader({
  tabs,
  onClick,
  onClose,
}: SectionHeaderProps) {
  return (
    <div className="border-b border-b-border flex items-center">
      {tabs.map((tab, idx) => (
        <button
          key={tab.title}
          className={cn(
            "border-r border-r-border py-2 pl-6 flex items-center dark:hover:bg-slate-800 hover:bg-neutral-50  transition-colors ease-in-out",
            tab.selected && "bg-neutral-50 dark:bg-slate-800"
          )}
          onClick={() => onClick?.(idx)}
        >
          <p
            className={cn(
              "dark:text-lime-500 text-amber-600 text-sm cursor cursor-grab",
              !onClose && "pr-6"
            )}
          >
            {tab.title}
          </p>
          {onClose && (
            <IoCloseOutline
              className="text-slate-600 ml-2 mr-2 dark:hover:text-slate-300 hover:text-slate-800 transition-colors ease-in-out cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onClose?.(idx);
              }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
