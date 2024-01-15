import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { NavList, RenderMenuItem } from "./types";

type MenuItemsProps = {
  items: NavList;
  renderMenuItem: RenderMenuItem;
  cnExtend?: string;
} & React.HTMLAttributes<HTMLUListElement>;

export default function NavList({
  items,
  cnExtend = "",
  renderMenuItem,
  ...props
}: MenuItemsProps) {
  return (
    <ul
      className={
        cn(
          "w-full flex flex-col xl:flex-rows absolute xl:static xl:flex-row -top-80 left-0 transition-all ease-in duration-200 opacity-0 xl:opacity-100"
        ) + cn(cnExtend)
      }
      {...props}
    >
      {items.map((item) => {
        return renderMenuItem(item);
      })}
    </ul>
  );
}
