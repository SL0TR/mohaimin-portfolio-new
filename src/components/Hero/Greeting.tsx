"use client";
import useTyped from "@/hooks/useTyped";

const words = [
  "Hi!",
  "Bonjour!",
  "হ্যালো!",
  "Hola!",
  "こんにちは!",
  "你好!",
  "Hola!",
];

function Greeting() {
  const el = useTyped({
    strings: words,
  });
  return (
    <h1>
      <span ref={el} /> I am
    </h1>
  );
}

export default Greeting;
