import React from "react";

const Heading_h2 = ({ textA, clrtext, textB, heading, }) => {
    return (
        <>
            <h2 className={` ${heading}`}> {textA} <span>{clrtext}</span> {textB}</h2>
        </>
    );
};
export default Heading_h2;


