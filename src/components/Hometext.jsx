import React from "react";
import { FlipWords } from "../components/ui/FlipWords";

export function Hometext() {
  const words = [
    "Health-Consultant",
    "Power-BI-Expert",
    "Data-Analyst",
    "Entrepreneur",
  ];

  return (
    <div className="px-4">
      <div className="my-4 text-base font-medium md:text-sm sm:text-xs text-justify">
        As a skilled &nbsp;
        <FlipWords
          words={words}
          className="bg-black text-light rounded-xl dark:bg-light dark:text-dark dark:font-bold"
        />{" "}
        <br />I am passionate about transforming complex data into actionable insights while delivering exceptional customer experiences. Explore my portfolio, showcasing my expertise in Power BI, Data Analytics, Business Intelligence, Customer Service Excellence, and data-driven decision-making.
      </div>
    </div>
  );
}
