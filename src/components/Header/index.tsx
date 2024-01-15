import { ThemeToggle } from "../ThemeToggle";
import { Button } from "../ui/button";
import Navigation from "./Navigation";
import { GrMenu } from "react-icons/gr";

export default function Header() {
  return (
    <header className="w-full border-b border-b-border flex flex-row justify-between xl:flex-start items-center relative z-40">
      <div className="w-full flex flex-row justify-between xl:justify-start">
        <h2 className=" px-6 py-4 xl:border-r border-r-border xl:w-80 text-slate-500">
          _mohaimin
        </h2>
        <Navigation />
      </div>
      <div className="hidden xl:block px-4 py-2">
        <ThemeToggle />
      </div>
    </header>
  );
}
