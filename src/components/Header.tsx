import Navigation from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="w-full border-b border-b-border flex flex-row justify-between xl:flex-start items-center relative z-40">
      <div className="w-full flex flex-row justify-between xl:justify-start items-center">
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
