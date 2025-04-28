import React from "react";
// import Head from "next/head";
import { Icon } from "@iconify/react";
import Link from "next/link";

const SocialHandels = ({ addcls }) => {
  const SocialIcon = [
    {
      name: "Instagram",
      _blank: "_blank",
      path: "https://www.instagram.com/lbmsolutions/",
      icon: "ph:instagram-logo-fill",
    },
    {
      name: "Youtube",
      _blank: "_blank",
      path: "https://www.youtube.com/@LBMSolutions",
      icon: "mdi:youtube",
    },
    {
      name: "Facebook",
      _blank: "_blank",
      path: "https://www.facebook.com/lbmsolutionspvtltd",
      icon: "ri:facebook-fill",
    },
    {
      name: "Linkedin",
      _blank: "_blank",
      path: "https://www.linkedin.com/company/lbm-solutions/",
      icon: "ri:linkedin-fill",
    },
    
    {
      name: "Twitter",
      _blank: "_blank",
      // path: "https://twitter.com/lbm_solutions",
      path: "https://x.com/LBMsolutions_",
      icon: "ri:twitter-x-fill",
    },
  ];
  return (
    <>
      <ul className={`${addcls}  `}>
        {SocialIcon.map((val, i) => {
          return (
            <>
              <li key={i}>
                <div className="tooltip-container">
                  <div className="text">
                    <Link className="icon" href={val.path} target={val._blank}>
                      <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="svg_img">
                          <Icon
                            icon={val.icon}
                            width="26"
                            height="26"
                            className="text-white"
                          />
                        </span>
                      </div>
                      <div className="text">{val.name}</div>
                    </Link>
                  </div>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default SocialHandels;
