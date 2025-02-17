import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl bluee sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-red capitalize animate-pulse dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[18px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Customer Service Associate - L2"
            company="Magnum"
            time="Jun-2021 - Jan-2022"
            address="Bhopal, India"
            companyLink="https://www.magnumgroup.co.in/"
            work="Responsibilities included handling inbound and outbound customer calls, resolving customer queries and complaints, providing information about products and services, maintaining customer records, achieving call center targets, and ensuring high levels of customer satisfaction."
          />
          <Details
            position="Voice Process Associate - L1"
            company="eNoah"
            time="Jun-2020 - April-2021"
            address="Indore, India"
            companyLink="https://enoahisolution.com/"
            work="Responsibilities involved managing a high volume of outbound and inbound calls to hospitals across multiple U.S. time zones, supporting insurance companies in obtaining medical documentation, negotiating costs effectively, and ensuring smooth payment processing. Addressed concerns related to medical records and physician statements while adhering to HIPAA guidelines. Consistently met performance objectives and upheld strong customer service standards."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
