"use client";
import React from "react";
import Logo from "../../app/components/Logo";
import SocialHandels from "./SocialHandels";
const Footer = () => {
  return (
    <>
      <footer className="bg-black py-3 border-top border-dark">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-12 col-sm-4 my-4 my-lg-0">
                     <SocialHandels  addcls="icons d-flex align-items-center justify-content-center  justify-content-lg-start gap-4 m-0 p-0"/>
            </div>

            <div className="col-10 col-sm-12 col-lg-4  col-lg-4 text-center text-lg-start  mx-auto logo">
              <Logo path="/" img_cls="" logo="white-logo" />
            </div>
            <div className="col-12 col-sm-8 col-lg-4 text">
              <ul className="p-0 m-0 ">
                <li className="text-center text-md-end">
                  <a href="javascript:void(0)" className="text-white ">
                    Terms & Conditions | Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
