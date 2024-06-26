"use client";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import { ThreeDCard } from "@/components/ThreeDCard";
import Education from "@/components/Education";
import { TypewriterEffectSmoothDemo } from "@/components/TypewriterEffectSmoothDemo";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ target }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, target, { duration: 2 });

    return animation.stop;
  }, [count, target]);

  return <motion.span>{rounded}</motion.span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center pb-24 dark:text-light">
        <Layout className="pt-16">
          <TypewriterEffectSmoothDemo />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-center xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 bluee">
                Biography
              </h2>
              <p className="font-medium text-justify">
                Hi, I&apos;m Rudrik Raina, a web developer and UI/UX designer
                with a passion for creating beautiful, functional, and
                user-centered digital experiences. With some years of experience
                in the field, I am always looking for new and innovative ways to
                bring my clients&apos; visions to life.
              </p>
              <p className="my-4 font-medium text-justify">
                I believe that design is about more than just making things look
                pretty. It&apos;s about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium text-justify">
                Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl bg-light p-4 xs:p-4 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <ThreeDCard />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between mt-6 xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold">
                  <AnimatedNumbers target={70} />%
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 bluee xl:text-center md:text-lg sm:text-base xs:text-sm">
                  frontend programming
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers target={50} />%
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 bluee xl:text-center md:text-lg sm:text-base xs:text-sm">
                  backend programming
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers target={40} />%
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 bluee xl:text-center md:text-lg sm:text-base xs:text-sm">
                  UI/UX design
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Education />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default About;
