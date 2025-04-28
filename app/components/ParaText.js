import Link from "next/link";
import React from "react";

const ParaText = ({ para_text, para_text1, f_custome,bold_text,add_cls, LinkHref ,LinkData }) => {
    return (
        <>
            <p className={`para_text lh-base ${f_custome}`}>{para_text1} {bold_text && <span className={`fw-bold ${add_cls}`}>{bold_text}</span>}  {LinkData && <Link className="px-1" href={LinkHref}>{LinkData}</Link>}  {para_text}</p>
        </>
    )
}
export default ParaText