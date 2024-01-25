import Image from "next/image";
import bgImage from "@/assets/hero-bg.svg";
import { cn } from "@/lib/utils";

type HeroBgProps = React.HTMLAttributes<HTMLImageElement>;

export default function HeroBg({ className }: HeroBgProps) {
  return (
    <Image
      src={bgImage}
      alt="hero-bg"
      className={cn("absolute top-0 right-0", className)}
      width={900}
      priority
    />
  );
}
