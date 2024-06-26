import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import profilePic from "../../public/images/profile/developer-pic-5.png";

export function ThreeDCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-light relative group/card dark:bg-dark border-black/[0.1] w-auto h-auto rounded-xl dark:border-light flex justify-center items-center"
        style={{ border: "none" }} // Added style to remove border
      >
        <CardItem translateZ="100" className="w-full mr-6">
          <div
            className="col-span-3 relative h-max rounded-3xl border-2 border-solid border-dark bg-light p-8 xs:p-5 dark:bg-dark dark:border-light"
            style={{ width: "110%", height: "110%" }}
          >
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
            <img
              src={profilePic.src}
              alt="RudrikRaina"
              className="w-full h-auto rounded-2xl"
              loading="eager"
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
