import React from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    layoutEffect: false, 
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg
        className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-red stroke-1 fill-none dark:stroke-primaryDark"
        ></circle>
        <motion.circle
          style={{ pathLength: scrollYProgress }}
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light dark:fill-dark"
        ></motion.circle>
        <circle
          cx="75"
          cy="50"
          r="10"
          className="stroke-1 fill-red animate-pulse dark:fill-primaryDark"
        ></circle>
      </svg>
    </figure>
  );
};

export default LiIcon;
