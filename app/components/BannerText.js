import Link from "next/link";
import React from "react";
const BannerText = ({ bannerText, text, LinkHref, LinkData, textData }) => {
    return (
        <>
           <p className={`banner_text ${bannerText}`}>
  {text} 
  {LinkData && <Link className="px-1 h" href={LinkHref}>{LinkData}</Link>} 
  {textData && textData}
</p>
        </>
    )
}
export default BannerText