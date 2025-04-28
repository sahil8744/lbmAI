import React from "react";

const Heading_h3 = ({ text, custome_hd }) => {
  return (
    <>
      <h2 className={`heading_h3 lh-base ${custome_hd}`}>{text}</h2>
    </>
  );
};
export default Heading_h3;
