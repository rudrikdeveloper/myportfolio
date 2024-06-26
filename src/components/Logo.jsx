"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-light text-dark flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-dark shadow-lg dark:text-dark dark:bg-light"
        whileTap={{ scale: 0.9 }}
        whileHover={{
          scale: 1.1,
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
        drag="x"
        dragConstraints={{ right: 20, left: -20 }}
      >
        RR
      </MotionLink>
    </div>
  );
};

export default Logo;
