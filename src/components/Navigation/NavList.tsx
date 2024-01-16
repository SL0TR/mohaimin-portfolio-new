import { cn } from "@/lib/utils";
import { NavList, RenderMenuItem } from "./types";

type MenuItemsProps<T> = {
  items: T[];
  renderMenuItem: RenderMenuItem<T>;
} & React.HTMLAttributes<HTMLUListElement>;

export default function NavList<T>({
  items,
  renderMenuItem,
  className,
  ...props
}: MenuItemsProps<T>) {
  return (
    <ul
      className={cn(
        "w-full flex flex-col xl:flex-rows absolute xl:static xl:flex-row -top-80 left-0 transition-all ease-in-out duration-350 opacity-0 xl:opacity-100",
        className
      )}
      {...props}
    >
      {items.map((item) => renderMenuItem(item))}
    </ul>
  );
}
