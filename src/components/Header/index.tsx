import Navigation from "./Navigation";
import { GrMenu } from "react-icons/gr";

export default function Header() {
  return (
    <header className="w-full border-border border-b-1 flex flex-row justify-between lg:flex-start items-center">
      <div className="flex flex-row">
        <h2 className="px-6 py-4 lg:border-r-1 border-border lg:w-80 text-secondary">
          _mohaimin
        </h2>
        <div className="hidden lg:block">
          <Navigation />
        </div>
      </div>

      <div className="hidden lg:block">
        <button className="px-6 py-4 border-l-1 border-l-border text-secondary">
          Resume
        </button>
      </div>

      <div className="lg:hidden">
        {/* <button className="px-6 py-4 cursor-pointer" data-ripple-light="true">
          <GrMenu className="text-secondary" />
        </button> */}
        <button
          className="middle none center rounded-lg  py-3 px-6   active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          <GrMenu className="text-secondary" />
        </button>
      </div>
    </header>
  );
}
