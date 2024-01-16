import HeroArt from "./HeroArt";
import HeroIntro from "./HeroIntro";

export default function Hero() {
  return (
    <div className="flex w-full h-full flex-row items-center relative">
      <div className="w-full xl:w-1/2 flex xl:justify-end justify-center xl:pr-14">
        <HeroIntro />
      </div>
      <div className="w-full xl:w-1/2 xl:pr-12 pr-0 hidden xl:block">
        <HeroArt />
      </div>
    </div>
  );
}
