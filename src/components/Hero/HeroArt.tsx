import React from "react";
import illustration from "@/assets/hero-illust.svg";
import Image from "next/image";
import HeroBg from "./HeroBg";

function HeroArt() {
  return (
    <>
      <HeroBg />
      <Image priority src={illustration} alt="coder illustration" />
    </>
  );
}

export default HeroArt;
