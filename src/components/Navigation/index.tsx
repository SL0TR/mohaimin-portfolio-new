"use client";
import { navOptions } from "./options";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import NavToggle from "./NavToggle";
import NavList from "./NavList";
import NavItem from "./NavItem";

export default function Navigation() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  return (
    <div>
      <div className="xl:hidden px-4 py-2">
        <NavToggle
          isNavMenuOpen={isNavMenuOpen}
          toggleNavMenu={toggleNavMenu}
        />
      </div>
      <nav>
        <NavList
          items={navOptions}
          cnExtend={cn(
            isNavMenuOpen &&
              "z-20 bg-background top-16 max-maxHeight opacity-100"
          )}
          renderMenuItem={(menuItem) => (
            <NavItem
              item={menuItem}
              isActive={pathname === menuItem.link}
              onClick={toggleNavMenu}
            />
          )}
        />
      </nav>
    </div>
  );
}
