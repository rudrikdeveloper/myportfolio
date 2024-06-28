"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import Image from "next/image";

const LightBulb = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const maxPosition = 100; // Maximum position from the top of the viewport
      const scrollPosition = window.scrollY; // Use window.scrollY directly

      setIsSticky(scrollPosition > maxPosition);
    };

    const throttledHandleScroll = () => {
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(handleScroll);
      } else {
        handleScroll();
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  return (
    <motion.div
      className={`fixed right-2 w-24 flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out ${
        isSticky ? "bottom-24" : "bottom-4"
      }`}
    >
      <Image
        src={lightBulb.src}
        alt="bulb"
        className="w-full h-auto md:hidden"
        loading="eager"
        priority
      />
    </motion.div>
  );
};

export default LightBulb;
