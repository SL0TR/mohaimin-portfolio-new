import Link from "next/link";
import { NavItem } from "./types";
import { cn } from "@/lib/utils";

type MenuItemProps = {
  item: NavItem;
  isActive: boolean;
  onClick?: () => void;
} & React.HTMLAttributes<HTMLLIElement>;

export default function NavItem({
  item,
  isActive,
  onClick,
  className,
  ...props
}: MenuItemProps) {
  return (
    <li
      className={cn(
        "px-6 py-4 border-0 border-r-border xl:border-r border-b-2 border-b-transparent hover:border-b-amber-500 hover:text-foreground transition duration-150 ease-in text-slate-500",
        isActive && "border-b-amber-500 text-foreground",
        className
      )}
      {...props}
    >
      <Link href={item.link} onClick={onClick}>
        <p>{item.name}</p>
      </Link>
    </li>
  );
}
