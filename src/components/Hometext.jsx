import React from "react";
import { FlipWords } from "../components/ui/FlipWords";

export function Hometext() {
  const words = [
    "Full-Stack-Developer",
    "UI/UX-Designer",
    "Web-Developer",
    "Entrepreneur",
  ];

  return (
    <div className="px-4">
      <div className="my-4 text-base font-medium md:text-sm sm:text-xs">
        As a skilled &nbsp;
        <FlipWords
          words={words}
          className="bg-black text-light rounded-xl dark:bg-light dark:text-dark dark:font-bold"
        />{" "}
        <br />I am dedicated to turning ideas into innovative web applications.
        Explore my portfolio, showcasing my expertise in React.js, UI/UX Design
        and web development.
      </div>
    </div>
  );
}
