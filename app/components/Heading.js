import React from "react";

const Heading = ({ textA, clrtext, textB, heading, }) => {
    return (
        <>
            <h1 className={` ${heading}`}> {textA} <span>{clrtext}</span> {textB}</h1>
        </>
    );
};
export default Heading;


