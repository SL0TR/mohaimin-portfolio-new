import { ScrollArea } from "@/components/ui/scroll-area";

export default function Summary() {
  // TODO: Add line numbers to the left of the text.

  return (
    <div className="flex flex-col h-full justify-center items-center text-slate-700 dark:text-slate-400">
      <ScrollArea className="h-[400px] md:h-[300px] 2xl:h-[600px]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat officia deserunt mollit anim id est laborum.
        </p>
        <br />
        <br />
        <p>
          About me I have 5 years of еxperience in web development lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        </p>
      </ScrollArea>
    </div>
  );
}
