"use client";
import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg mt-auto dark:border-light sm:text-base dark:text-light">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <div className="flex items-center lg:py-2">
          Build with{" "}
          <motion.span className="text-red text-2xl px-1 animate-pulse">
            <FaHeart />
          </motion.span>{" "}
          from RUDRIK RAINA
        </div>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
      </Layout>
    </footer>
  );
};

export default Footer;
