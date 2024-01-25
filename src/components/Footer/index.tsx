import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { socialMediaOptions } from "./options";

const linkBaseClassName =
  "px-4 text-slate-500 xl:px-5 h-full flex justify-center items-center hover:text-primary transition-colors ease-in-out duration-200";

export default function Footer() {
  return (
    <div className="w-full flex border-t border-t-border justify-between">
      <div className="flex xl:pl-6 pl-4">
        <h2 className="py-3 border-r border-border xl:pr-4 pr-2 max-sm:grow text-xs 2xl:text-lg">
          Find me in:
        </h2>
        <div className="flex flex-row justify-start items-center h-full">
          {socialMediaOptions.map((socialMediaOption) => (
            <Link
              key={socialMediaOption.name}
              href={socialMediaOption.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(linkBaseClassName, "border-r border-r-border ")}
            >
              {socialMediaOption.icon}
            </Link>
          ))}
        </div>
      </div>
      <Link
        href="https://github.com/SL0TR"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(linkBaseClassName, "border-l border-l-border ")}
      >
        <p className="mr-2 hidden xl:block">@mohaimin</p>
        <FaGithub />
      </Link>
    </div>
  );
}
