"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
  InstagramIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "src/hooks/useThemeSwitcher";
import HamBurger from "./HamBurger";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const navmotion = {
  whileHover: { scale: 1.5 },
  whileTap: { scale: 1 },
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <HamBurger isOpen={isOpen} toggle={toggleMenu} />
      {/* Desktop */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/contact" title="Contact" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap ">
          <motion.a
            href="https://x.com/"
            target="{_blank}"
            className="w-6 mr-3"
            {...navmotion}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/rudrikdeveloper"
            target="{_blank}"
            className="w-6 mx-3"
            {...navmotion}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/rudrikraina/"
            target="{_blank}"
            className="w-6 mx-3"
            {...navmotion}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://in.pinterest.com/"
            target="{_blank}"
            className="w-6 mx-3 bg-light rounded-full"
            {...navmotion}
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/rudrik_rdx?igsh=MWYyZmJpeTR0YWZ1dA%3D%3D&utm_source=qr"
            target="{_blank}"
            className="w-6 ml-3 "
            {...navmotion}
          >
            <InstagramIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
      {/* Mobile */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink href="/" title="Home" toggle={toggleMenu} />
            <CustomMobileLink href="/about" title="About" toggle={toggleMenu} />
            <CustomMobileLink
              href="/contact"
              title="Contact"
              toggle={toggleMenu}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://x.com/"
              target="{_blank}"
              className="w-6 mr-3 sm:mx-1"
              {...navmotion}
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com/rudrikdeveloper"
              target="{_blank}"
              className="w-6 mx-3 bg-light rounded-full sm:mx-1 dark:bg-dark"
              {...navmotion}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rudrikraina/"
              target="{_blank}"
              className="w-6 mx-3 sm:mx-1"
              {...navmotion}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://in.pinterest.com/"
              target="{_blank}"
              className="w-6 mx-3 sm:mx-1 bg-light rounded-full"
              {...navmotion}
            >
              <PinterestIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/rudrik_rdx?igsh=MWYyZmJpeTR0YWZ1dA%3D%3D&utm_source=qr"
              target="{_blank}"
              className="w-6 ml-3 sm:mx-1 bg-dark"
              {...navmotion}
            >
              <InstagramIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
