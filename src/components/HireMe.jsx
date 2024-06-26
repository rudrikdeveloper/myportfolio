"use client";
import React, { useEffect, useState } from "react";
import { CircularText } from "./Icons";
import { motion } from "framer-motion";

const HireMe = ({ MotionLink }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const maxPosition = 100; // Maximum position from the top of the viewport
      const scrollPosition = window.scrollY; // Use window.scrollY directly

      setIsSticky(scrollPosition > maxPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed left-2 bottom-2 flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute xs:right-1 ${
        isSticky ? "bottom-20" : "bottom-4"
      }`}
    >
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24 xs:w-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <CircularText className="fill-dark dark:fill-light" />
        </motion.div>
        <MotionLink
          href="/contact"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-light text-dark shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold z-50
          dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[10px] xs:w-10 xs:h-10 xs:text-[8px]"
          whileHover={{
            background: [
              "#f5f5f5",
              "rgba(131,58,180,1)",
              "rgba(253,29,29,1)",
              "rgba(252,176,69,1)",
              "rgba(131,58,180,1)",
              "#f5f5f5",
            ],
            transition: { duration: 1, repeat: Infinity },
          }}
        >
          Hire Me
        </MotionLink>
      </div>
    </div>
  );
};

export default HireMe;
