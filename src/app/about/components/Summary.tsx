import { ScrollArea } from "@/components/ui/scroll-area";
import { summarySections } from "./summarySections";

export default function Summary() {
  // TODO: Add line numbers to the left of the text.
  return (
    <div className="flex flex-col h-full xl:justify-center items-center ">
      <ScrollArea className="h-[430px] md:h-[350px] 2xl:h-[auto] md:px-6 2xl:px-10 xl-mobile:h-[600px]">
        {summarySections.map((section) => (
          <div key={section.title} className="mb-4">
            <p className="text-amber-600 2xl:text-lg text-sm">
              <span className="text-indigo-400">const </span>
              <span className="text-indigo-500"> {section.title} </span>
              <span className="text-indigo-400"> = </span>`{section.content}`
              <span className="dark:text-indigo-200 text-indigo-400">;</span>
            </p>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
