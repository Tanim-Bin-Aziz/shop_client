import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className=" text-center mx-auto p-4 mb-8 border-y-4 md:w-3/12">
      <p className="text-yellow-500 ">--- {subHeading} ---</p>
      <h3 className="uppercase text-3xl">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
