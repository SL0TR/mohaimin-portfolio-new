import React from "react";
import bgImage from "@/assets/hero-bg.svg";
import illustration from "@/assets/hero-illust.svg";
import Image from "next/image";

function HeroArt() {
  return (
    <>
      <Image
        src={bgImage}
        alt="hero-bg"
        className="absolute top-0 right-0"
        width={900}
        priority
      />
      <Image priority src={illustration} alt="coder illustration" />
    </>
  );
}

export default HeroArt;
