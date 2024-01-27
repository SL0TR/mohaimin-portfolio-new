import { LuConstruction } from "react-icons/lu";
import { Alert, AlertDescription } from "./ui/alert";

export default function GlobalAlert() {
  return (
    <Alert className="w-auto">
      <AlertDescription className="flex items-center">
        <LuConstruction className="mr-2" />
        This page is under construction
        <LuConstruction className="ml-2" />
      </AlertDescription>
    </Alert>
  );
}
