"use client";
import { navOptions } from "./options";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import NavList from "./NavList";
import NavItem from "./NavItem";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { GrMenu } from "react-icons/gr";
import { NavItem as NavItemType } from "./types";
import { ThemeToggle } from "../ThemeToggle";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();

  const renderMenuItem = (navItem: NavItemType) => {
    const isActive = pathname === navItem.link;

    return (
      <NavItem
        key={navItem.link}
        item={navItem}
        className={cn(
          isActive &&
            "border-b-amber-600 dark:border-b-lime-600 text-foreground"
        )}
      />
    );
  };

  return (
    <div className="pr-4 xl:pr-0 ">
      <div className="xl:hidden flex justify-center">
        <Drawer>
          <DrawerTrigger>
            <GrMenu className="text-slate-500" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerDescription>
                <NavList
                  items={navOptions}
                  className={cn("w-full flex flex-col items-center")}
                  renderMenuItem={renderMenuItem}
                />
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <div className="flex w-full justify-center">
                <ThemeToggle className="ml-2 max-sm:border-transparent" />
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="hidden xl:block">
        <NavList
          items={navOptions}
          className={cn("w-full flex flex-row")}
          renderMenuItem={renderMenuItem}
        />
      </div>
    </div>
  );
}
