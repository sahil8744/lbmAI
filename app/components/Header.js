"use client";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../app/components/Logo";
// import Navigation from "./Navigation";
import Link from "next/link";
import NavLink from "./NavLink";
import Image from 'next/image';

import Commonbttn from "../../app/components/CommonBtn";

function BasicExample() {
  const [isSticky, setIsSticky] = useState(false);
  const [isFadeInDown, setIsFadeInDown] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const handleClickHide = () => {
    document.querySelector(".dropdwon").style.opacity = "0";
    document.getElementById("btnClosed").click();
  };

  const handleMouseEnter = () => {
    document.querySelector(".dropdwon").style.opacity = "1";
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setIsSticky(isScrolled);
      setIsFadeInDown(isScrolled);
      setIsAnimated(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`bg-body-tertiary services  navbar     d-none  ${
        isSticky ? "sticky" : ""
      } ${isFadeInDown ? "fadeInDown" : ""} ${isAnimated ? "animated" : ""} `}
    >
      <Container className="d-inline-block">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-3">
            <div className="d-flex justify-content-between">
              <Logo path="/" img_cls="" logo="black-logo" />
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                id="btnClosed"
                // className="d-none"
              />
            </div>
          </div>
          <div className="col-lg-6 ">
            {/* <Navigation /> */}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto ">
                <ul className="justify-content-center mx-lg-auto navbar-nav ">
                  <li className="nav-item">
                    <NavLink activeclassName="theme_clr" text="Home" href="/home" />
                  </li>
                  <li className="nav-item">
                    <NavLink activeclassName="theme_clr" text="About" href="" />
                  </li>

                  <li className="nav-item">
                    <div
                      className=" service_nav"
                      onMouseEnter={handleMouseEnter}
                    >
                      <a
                        href="javascript:void(0)"
                        className="nav-link d-flex py-0"
                      >
                        Services aman
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M5 7.75a.75.75 0 0 0-.53 1.28l7 7a.75.75 0 0 0 1.06 0l7-7A.75.75 0 0 0 19 7.75z"
                            />
                          </svg>
                        </span>
                      </a>

                      <div
                        className="dropdwon rounded-4 mt-4 p-0 col-12 col-sm-10 col-lg-12 col-xxl-8"
                        v-if="show"
                      >
                        <div className="row  pb-0 justify-center">
                          <div className="col-lg-12 bg-sucess pt-4">
                            <div className="row position-relative px-3">
                              <div className="col-lg-3 col-md-6">
                                <ul className="p-0">
                                  <li onClick={handleClickHide}>
                                    <div className="icons d-flex align-items-center">
                                      <Image
                                        src="/headerImg/ico_dev.png"
                                        alt="image"   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                                      />
                                      <NavLink
                                        activeclassName="theme_clr"
                                        text="ICO"
                                        href="/ico-development"
                                      />
                                    </div>
                                  </li>
                                  <li onClick={handleClickHide}>
                                    <div className="icons  d-flex align-items-center">
                                      <Image src="/headerImg/p2p.png" alt="image"   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100} />
                                      <NavLink
                                        activeclassName="theme_clr"
                                        text="P2P"
                                        href="/p2p-crypto-exchange"
                                      />
                                    </div>
                                  </li>
                                  <li onClick={handleClickHide}>
                                    <div className="icons  d-flex align-items-center">
                                      <Image src="/headerImg/dapp.png" alt="image"   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100} />
                                      <NavLink
                                        activeclassName="theme_clr"
                                        text="Dapp"
                                        href="/dapp"
                                      />
                                    </div>
                                  </li>
                                  <li onClick={handleClickHide}>
                                    <div className="icons  d-flex align-items-center">
                                      <Image src="/headerImg/defi.png" alt="image"   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100} />
                                      <NavLink
                                        activeclassName="theme_clr"
                                        text="Defi"
                                        href="/defi-development-company"
                                      />
                                    </div>
                                  </li>
                                  <li onClick={handleClickHide}>
                                    <div className="icons d-flex align-items-center">
                                      <Image
                                        src="/headerImg/crypt_wallet.png"
                                        alt="image"   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                                      />
                                      <NavLink
                                        activeclassName="theme_clr"
                                        text="Crypto Wallet"
                                        href="/cryptowallet"
                                      />
                                    </div>
                                  </li>
                                  <li onClick={handleClickHide}>
                                    <div className="icons d-flex align-items-center">
                                      <Image
                                        src="/headerImg/meta_avatar.png"
                                        alt="image"   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                                      />
                                      <NavLink
                                        activeclassName="theme_clr"
                                        text="Metaverse Avatar"
                                        href="/metaverse-avatar-development"
                                      />
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3 col-md-6">
                                <ul className="p-0">
                                  <li onClick={handleClickHide}>
                                    <div className="icons  d-flex align-items-center">
                                      <Image
                                        src="/headerImg/center_ex.png"
                                        alt="image"   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                                      />
                                      <NavLink
                                        activeclassName="theme_clr"
                                        text="Crypto Exchange"
                                        href="/crypto-exchange-development"
                                      />
                                    </div>
                                  </li>
                                  <li onClick={handleClickHide}>
                                    <div className="icons  d-flex align-items-center">
                                      <Image
                                        src="/headerImg/smart_contract.png"
                                        alt="image"   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                                      />
                                      <NavLink
                                        activeclassName="theme_clr"
                                        text="SmartContract"
                                        href="/smart-contract-development-company"
                                      />
                                    </div>
                                  </li>
                                  <li onClick={handleClickHide}>
                                    <div className="icons  d-flex align-items-center">
                                      <Image
                                        src="/headerImg/meta_game.png"
                                        alt="image"   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                                      />
                                      <NavLink
                                        activeclassName="theme_clr"
                                        text="MeataVerse Gaming"
                                        href="/metaverse-gaming-development"
                                      />
                                    </div>
                                  </li>
                                  <li onClick={handleClickHide}>
                                    <div className="icons  d-flex align-items-center">
                                      <Image
                                        src="/headerImg/meta_dev.png"
                                        alt="image"   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                                      />
                                      <NavLink
                                        activeclassName="theme_clr"
                                        text="Metaverse Development"
                                        href="/metaverse-development-company"
                                      />
                                    </div>
                                  </li>
                                  <li onClick={handleClickHide}>
                                    <div className="icons  d-flex align-items-center">
                                      <Image
                                        src="/headerImg/cryptobank.png"
                                        alt="image"   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                                      />
                                      <NavLink
                                        activeclassName="theme_clr"
                                        text="Blockchain Crypto Banking "
                                        href="/blockchain-powered-crypto-banking"
                                      />
                                    </div>
                                  </li>
                                  <li onClick={handleClickHide}>
                                    <div className="icons  d-flex align-items-center">
                                      <Image
                                        src="/headerImg/meta_3d.png"
                                        alt="image"   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                                      />
                                      <NavLink
                                        activeclassName="theme_clr"
                                        text="Metaverse 3d Space"
                                        href="/metaverse-3d-space"
                                      />
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3 col-md-6">
                                <ul className="p-0">
                                  <li onClick={handleClickHide}>
                                    <div className="icons  d-flex align-items-center">
                                      <Image
                                        src="/headerImg/crypto_trading.png"
                                        alt="image"   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                                      />
                                      <NavLink
                                        activeclassName="theme_clr"
                                        text="Crypto Token"
                                        href="/crypto-token-development"
                                      />
                                    </div>
                                  </li>
                                  <li onClick={handleClickHide}>
                                    <div className="icons  d-flex align-items-center">
                                      <Image
                                        src="/headerImg/ido_dev.png"
                                        alt="image"   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                                      />
                                      <NavLink
                                        activeclassName="theme_clr"
                                        text="Software Development"
                                        href="/software-development"
                                      />
                                    </div>
                                  </li>
                                  <li onClick={handleClickHide}>
                                    <div className="icons  d-flex align-items-center">
                                      <Image
                                        src="/headerImg/mobile_app.png"
                                        alt="image"   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                                      />
                                      <NavLink
                                        activeclassName="theme_clr"
                                        text="Mobile App"
                                        href="/mobile-app"
                                      />
                                    </div>
                                  </li>
                                  <li onClick={handleClickHide}>
                                    <div className="icons  d-flex align-items-center">
                                      <Image
                                        src="/headerImg/nftmarket.png"
                                        alt="image"   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                                      />
                                      <NavLink
                                        activeclassName="theme_clr"
                                        text="NFT Marketplace"
                                        href="/nft-marketplace-development"
                                      />
                                    </div>
                                  </li>
                                  <li onClick={handleClickHide}>
                                    <div className="icons  d-flex align-items-center">
                                      <Image
                                        src="/headerImg/centralized.png"
                                        alt="image"   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                                      />
                                      <NavLink
                                        activeclassName="theme_clr"
                                        text="Centralized Cryptocurrency"
                                        href="/centralized-cryptocurrency-exchange"
                                      />
                                    </div>
                                  </li>
                                
                                </ul>
                              </div>
                              <div className="col-lg-3 col-md-6">
                                <ul className="p-0">
                                  <li onClick={handleClickHide}>
                                    <div className="icons  d-flex align-items-center">
                                      <Image
                                        src="/headerImg/cryptchain.png"
                                        alt="image"   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                                      />
                                      <NavLink
                                        activeclassName="theme_clr"
                                        text="Cryptocoin development"
                                        href="/cryptocoin-development-company"
                                      />
                                    </div>
                                  </li>
                                  <li onClick={handleClickHide}>
                                    <div className="icons  d-flex align-items-center">
                                      <Image
                                        src="/headerImg/future_trading.png"
                                        alt="image"   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                                      />
                                      <NavLink
                                        activeclassName="theme_clr"
                                        text="Crypto Trading Bot"
                                        href="/crypto-trading-bot-development"
                                      />
                                    </div>
                                  </li>
                                  <li onClick={handleClickHide}>
                                    <div className="icons  d-flex align-items-center">
                                      <Image src="/headerImg/nft.png" alt="image"   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100} />
                                      <NavLink
                                        activeclassName="theme_clr"
                                        text="NFT Development"
                                        href="/nft-development-company"
                                      />
                                    </div>
                                  </li>
                                  <li onClick={handleClickHide}>
                                    <div className="icons  d-flex align-items-center">
                                      <Image
                                        src="/headerImg/cryptocurrency.png"
                                        alt="image"   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                                      />
                                      <NavLink
                                        activeclassName="theme_clr"
                                        text="Cryptocurrency"
                                        href="/cryptocurrency-development"
                                      />
                                    </div>
                                  </li>
                                  <li onClick={handleClickHide}>
                                    <div className="icons  d-flex align-items-center">
                                      <Image
                                        src="/headerImg/sto.png"
                                        alt="image"   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                                      />
                                      <NavLink
                                        activeclassName="theme_clr"
                                        text="STO Development"
                                        href="/sto-development"
                                      />
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row common_blue w-100 py-2 m-0 mt-4">
                          <div className="col-lg-12">
                            <div className="inner_txt px-4 py-3 pt-0">
                              <a
                                href="javascript:void(0)"
                                className="d-inline-block lh-1 d-inline-flex align-items-center drop_footer"
                                style={{
                                  borderBottom: "2px solid #fff",
                                }}
                              >
                                Call Me Back
                                <span className="fs-4 ms-2 fw-semibold arrow1">
                                  →
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeclassName="theme_clr"
                      text="Contact Us"
                      href="/contact"
                    />
                  </li>

                  <li className="nav-item header_btn d-lg-none my-2">
                    <Link href="/contact" className="text-white d-inline-block">
                      Get Started
                    </Link>
                  </li>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </div>
          <div className="col-lg-3">
            <div className="d-none d-lg-block">
              <div className="header_btn d-flex align-items-center justify-content-md-end">
                <div className="svg me-3 d-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
                    ></path>
                  </svg>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
