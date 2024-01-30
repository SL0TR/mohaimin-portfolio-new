import { LuConstruction } from "react-icons/lu";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";
import { IoMdHome } from "react-icons/io";

export default function UnderConstructionAlert() {
  return (
    <Alert className="w-auto max-w-full px-4">
      <AlertTitle className="w-full text-center">
        <span className="text-2xl font-semibold text-indigo-400">
          Heads up!
        </span>
      </AlertTitle>
      <AlertDescription className="flex items-center mt-3 justify-center">
        <LuConstruction className="mr-2" />
        This page is under construction
        <LuConstruction className="ml-2" />
      </AlertDescription>
      <AlertDescription className="flex items-center my-4 justify-center ">
        <Button size="sm">
          <IoMdHome className="mr-2 " />
          <Link href="/">Go Home</Link>
        </Button>
        <Button className="ml-2" size="sm" variant="link">
          <FaGithub className="mr-2" />
          <Link target="_blank" href="https://github.com/SL0TR/mohaimin.me">
            View code
          </Link>
        </Button>
      </AlertDescription>
    </Alert>
  );
}
