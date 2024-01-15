import { Button, ButtonProps } from "../ui/button";
import { GrMenu } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

type MenuToggleProps = {
  isNavMenuOpen: boolean;
  toggleNavMenu: () => void;
} & ButtonProps;

export default function NavToggle({
  isNavMenuOpen,
  toggleNavMenu,
  ...buttonProps
}: MenuToggleProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleNavMenu}
      {...buttonProps}
    >
      {isNavMenuOpen ? (
        <AiOutlineClose className="text-slate-500" />
      ) : (
        <GrMenu className="text-slate-500" />
      )}
    </Button>
  );
}
