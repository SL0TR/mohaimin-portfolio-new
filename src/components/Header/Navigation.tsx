"use client";

import Link from "next/link";
import { navOptions } from "./options";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="w-full">
      <ul className="w-full flex flex-rows">
        {navOptions.map((option, i) => {
          const isActive = pathname === option.link;

          return (
            <li
              key={option.name}
              className={cn(
                "px-6 py-4 border-r-1 border-r-border border-l-border border-b-2 border-b-transparent hover:border-b-accent hover:text-white  transition duration-150 ease-in text-secondary",
                isActive && "border-b-accent text-white"
              )}
            >
              <Link href={option.link}>
                <p>{option.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
