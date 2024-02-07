import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GrPowerReset } from "react-icons/gr";

type FeedbackProps = {
  onReset: () => void;
  isSuccess: boolean;
};

export default function Feedback({ onReset, isSuccess }: FeedbackProps) {
  const title = isSuccess ? "Thank you! 🤘" : "Something went wrong! 😢";
  const message = isSuccess
    ? "Your message has been sent. You will receive answer really soon!"
    : "Your message has not been sent. Please try again.";

  return (
    <div className="flex flex-col gap-4 justify-center items-center text-center px-5">
      <h1
        className={cn(
          "text-2xl",
          isSuccess ? "text-green-500" : "text-red-500"
        )}
      >
        {title}
      </h1>
      <p className="dark:text-slate-400">{message}</p>
      <Button variant="secondary" onClick={onReset}>
        <GrPowerReset className="mr-2" />
        send-new-message
      </Button>
    </div>
  );
}
