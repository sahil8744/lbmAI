"use client";
import React, {Suspense} from "react";
import Image from "next/image";
import Ind from "/public/headerImg/ind_flag.png";
import Usa from "/public/headerImg/usa_flag.png";
import whiteLogo from "/public/headerImg/white-logo.png";
import SocialHandels from "./SocialHandels";

import {  usePathname } from "next/navigation";

const Header = () => {
  return (
    <>
      <div className="topbar d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center py-3">
            <div className="col-lg-4">
              <div className="contact-info">
                <ul className="d-flex gap-xl-4 gap-3 align-items-center m-0 p-0 contact_details position-relative">
                  <li>
                    <a
                      href="tel:+91-8448443318"
                      className="text-white d-flex align-itmes-center mob ind"
                    >
                      <Image src={Ind} alt="image" className="me-2" />
                      +91-8448443318
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+17245463818 "
                      className="text-white d-flex align-itmes-center mob usa"
                    >
                      <Image src={Usa} alt="image" className="me-2" />
                      +17245463818
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 text-center ">
              <div className="logo d-none">
                <a href="/">
                  <Image src={whiteLogo} alt="image" className="Image-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="">
                <div className="news_line"></div>
                <ul className="social_icons text-end  d-flex align-items-center justify-content-lg-end justify-content-start gap-4 gap-xl-4 m-0 p-0 d-none">
                  <li>
                    <a
                      href="https://www.facebook.com/lbmsolutionspvtltd"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                        />
                      </svg>
                    </a>
                  </li>
                 

                  <li>
                    <a
                      href="https://www.instagram.com/lbmsolutions/"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a78.831 78.831 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465a72.11 72.11 0 0 1-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78.43 78.43 0 0 1-2.189-.023l-.194-.006a63.036 63.036 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.889 4.889 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428a74.1 74.1 0 0 1-.03-.712l-.005-.194A79.047 79.047 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.678a4.897 4.897 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.youtube.com/@LBMSolutions"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104l.022.26l.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105l-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006l-.087-.004l-.171-.007l-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103l.003-.052l.008-.104l.022-.26l.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007l.172-.006l.086-.003l.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/lbm_solutions" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
                        />
                      </svg>
                    </a>
                  </li>
                
                </ul>
                <SocialHandels addcls="icons d-flex align-items-center justify-content-end gap-4 m-0 p-0"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function ContactForms() {
  const usePathnames = usePathname();
  // console.log(usePathnames, "-----", "ssssss");
  return (
    usePathnames !== "/hireus" &&
    (
      <Suspense>
        <Header />
      </Suspense>
    )
  );
}

export default ContactForms ;
