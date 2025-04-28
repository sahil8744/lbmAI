"use client";
import React, { Suspense } from "react";
// import Logo from "../../app/components/Logo";
import SocialHandels from "./SocialHandels";
import Link from "next/link";
import styled from "styled-components";

import {usePathname } from "next/navigation";

const FooterBottom = () => {
  const LI = styled.li`
    a {
      color: gray;
      transition: 0.3s all;
      font-size: 18px;
      &:hover {
        color: #fff;
      }
    }
  `;
  const MenuListing = [
    {
      path: "/about",
      vertical_bar: "|",
      link_name: "About Us ",
    },
    {
      path: "",
      vertical_bar: "|",
      link_name: " Team",
    },
    {
      path: "",
      vertical_bar: "|",
      link_name: " Careers ",
    },
    {
      path: "",
      vertical_bar: "|",
      link_name: "Terms of Services ",
    },
    {
      path: "",
      vertical_bar: "",
      link_name: "Privacy Policy",
    },
  ];

  return (
    <>
      <footer className="bg-black py-3 border-top border-dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <p className="text-center text-lg-start copy_right" style={{ color: "#787a80", fontSize:"18px" }}>
                Copyright ©  All Rights Reserved. lbmsolution.com
              </p>
              <ul className="d-flex flex-wrap flex-lg-nowrap justify-content-center justify-content-lg-start align-items-center  m-0 p-0">
                {MenuListing.map((val, i) => {
                  return (
                    <LI key={i}>
                      <Link href={val.path} className="">
                        {val.link_name}{" "}
                        <span className="px-2 px-xl-4">{val.vertical_bar}</span>
                      </Link>
                    </LI>
                  );
                })}
              </ul>
              {/* <Logo path="/" img_cls="" logo="white-logo" /> */}
            </div>
            <div className="col-12 col-sm-8 col-lg-4 text d-none">
              <ul className="p-0 m-0 ">
                <li className="text-center text-md-end">
                  <a href="javascript:void(0)" className="text-white ">
                    Terms & Conditions | Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <SocialHandels addcls="icons d-flex flex-wrap  align-items-center justify-content-center justify-content-lg-end gap-4 m-0 p-0 mt-2 mt-lg-0" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};



function FooterBttm() {
  const usePathnames = usePathname();
  // console.log(usePathnames, "-----", "ssssss");
  return (
    usePathnames !== "/hireus" &&
 (
      <Suspense>
        <FooterBottom />
      </Suspense>
    )
  );
}

export default FooterBttm ;
