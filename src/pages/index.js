"use client";

import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import { motion } from "framer-motion";
import { Hometext } from "@/components/Hometext";
import LightBulb from "@/components/LightBulb";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  const MotionLink = motion(Link);
  const scaleMotion = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  };

  return (
    <>
      <Head>
        <title>Rudrik Raina - Portfolio</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Rudrik Raina, a web developer and UI/UX designer turning vision into reality with code and design."
        />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 flex-grow md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full h-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Rudrik Raina"
                className="w-full h-auto md:inline-block md:w-full"
                loading="eager"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw, 50vw"
                priority
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText text="Turning Vision Into Reality With Code And Design." />
              <Hometext />
              <div className="flex items-center self-start mt-2 lg:self-center">
                <MotionLink
                  href="/Resume.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  {...scaleMotion}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </MotionLink>
                <MotionLink
                  href="mailto:rudrikofficial239@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                  {...scaleMotion}
                >
                  Let&apos;s Connect
                </MotionLink>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe MotionLink={MotionLink} />
        <LightBulb />
      </main>
    </>
  );
}
