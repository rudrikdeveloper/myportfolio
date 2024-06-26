"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Passion",
      className: "dark:text-light",
    },
    {
      text: "Fuels",
      className: "dark:text-light",
    },
    {
      text: "Purpose!",
      className: "bluee",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
