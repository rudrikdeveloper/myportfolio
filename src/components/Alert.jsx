import React from "react";

const Alert = ({ type, text }) => {
  return (
    <div className="absolute top-[577px] right-[275px] transform -translate-y-1/2 flex justify-center items-center xl:top-[760px] xl:right-[460px] lg:top-[704px] lg:right-[348px]     md:top-[688px] md:right-[210px] sm:top-[671px] sm:right-[145px] xs:top-[671px] xs:right-[42px]">
      <div
        className={`${
          type === "danger" ? "bg-red-600" : "bg-blue-800"
        } p-2 text-indigo-100 leading-none rounded-full flex items-center`}
        role="alert"
      >
        <p
          className={`${
            type === "danger" ? "bg-red-800" : "bg-blue-500"
          } flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs items-center`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
