"use client";
import useTyped from "@/hooks/useTyped";

function Greeting() {
  const el = useTyped({
    strings: [
      "Hi!",
      "Bonjour!",
      "হ্যালো!",
      "Hola!",
      "こんにちは!",
      "你好!",
      "Hola!",
    ],
  });
  return (
    <h1>
      <span ref={el} /> I am
    </h1>
  );
}

export default Greeting;
