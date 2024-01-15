"use client";

import Link from "next/link";
import { navOptions } from "./options";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "../ui/button";
import { GrMenu } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

export default function Navigation() {
  const pathname = usePathname();
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  console.log(isNavMenuOpen);

  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  return (
    <div>
      <div className="xl:hidden px-4 py-2">
        <Button variant="ghost" size="icon" onClick={toggleNavMenu}>
          {isNavMenuOpen ? (
            <AiOutlineClose className="text-slate-500" />
          ) : (
            <GrMenu className="text-slate-500" />
          )}
        </Button>
      </div>
      <nav>
        <ul
          className={cn(
            "w-full flex flex-col xl:flex-rows absolute xl:static xl:flex-row -top-80 left-0 transition-all ease-in duration-200 opacity-0 xl:opacity-100",
            isNavMenuOpen &&
              "z-20 bg-background top-16 max-maxHeight opacity-100"
          )}
        >
          {navOptions.map((option, i) => {
            const isActive = pathname === option.link;

            return (
              <li
                key={option.name}
                className={cn(
                  "px-6 py-4 border-r-border border-r  border-b-2 border-b-transparent hover:border-b-amber-500 hover:text-foreground transition duration-150 ease-in text-slate-500",
                  isActive && "border-b-amber-500 text-foreground",
                  isNavMenuOpen && "border-0"
                )}
              >
                <Link href={option.link} onClick={toggleNavMenu}>
                  <p>{option.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
