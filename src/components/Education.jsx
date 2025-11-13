import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info, workClassName }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mt-0 w-[80%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl bluee sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className={`font-medium w-full md:text-sm ${workClassName || ""}`}>{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    layoutEffect: false,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[18px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Post Graduate Diploma in Management"
            time="2024-2026"
            place="Jaipuria School of Business, Ghaziabad"
            info="The program focuses on developing managerial skills, leadership qualities, and strategic thinking through a blend of academic learning and practical exposure. Specialized courses cover areas such as Finance, Marketing, Operations, Human Resources, Business Analytics, Strategic Management, and Organizational Behavior. Completed projects include data analytics initiatives, HR strategy development, and market research analysis using tools like Power BI, Excel, and statistical analysis software. Demonstrated expertise in business intelligence, data-driven decision making, and management consulting methodologies."
            workClassName="text-justify"
          />
          <Details
            type="Master of Technology in Nanotechnology"
            time="2018-2020"
            place="School of Nanotechnology, UTD, RGPV, Bhopal"
            info="Rigorous postgraduate program focusing on advanced nanotechnology research and applications. Relevant courses included Nanomaterials, Nanoelectronics, Nanophotonics, Nanoscale Characterization Techniques, Nanofabrication, Quantum Mechanics, Nanobiotechnology, and Advanced Materials Science. Completed thesis on nanomaterial synthesis and characterization. Gained hands-on experience with electron microscopy, X-ray diffraction, and other advanced analytical techniques. Developed strong research skills in experimental design, data analysis, and technical documentation."
            workClassName="text-justify"
          />
          <Details
            type="Bachelor of Engineering in Mechanical"
            time="2014-2018"
            place="IES College of Technology, RGPV, Bhopal"
            info="Comprehensive undergraduate program in mechanical engineering covering core principles and applications. Relevant courses included Thermodynamics, Fluid Mechanics, Heat and Mass Transfer, Mechanics of Materials, Machine Design, Manufacturing Processes, Engineering Materials, CAD/CAM, and Industrial Engineering. Completed capstone projects involving mechanical design, simulation, and optimization. Acquired proficiency in design software including AutoCAD, CATIA, and ANSYS. Developed strong analytical, problem-solving, and project management skills through laboratory work and practical applications."
            workClassName="text-justify"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
