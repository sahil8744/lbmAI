"use client";
import React, { Suspense, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Commonbttn from "../../app/components/CommonBtn";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Tab, Row, Col } from "react-bootstrap";
import Logo from "../../app/components/Logo";

import { usePathname } from "next/navigation";
import Link from "next/link";

function BasicExample() {
  const [isSticky, setIsSticky] = useState(false);
  const [isFadeInDown, setIsFadeInDown] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

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

  const handleClickHide = () => {
    const dropdownMenu = document.querySelector(".dropdown-menu.show");
    if (dropdownMenu) {
      dropdownMenu.classList.remove("show");
    }
  };

  const tabs = [
    {
      eventKey: "first",
      services_name: "Mobile App Development ",
      title: "Mobile App Development",
      content: "Second tab content",
      img: "/headerImg/metaverse_dev.png",
      buttons: [
        {
          btn_name: "Custom Mobile App Development",
          // img: "/headerImg/ico_dev.png",
          path: "/mobile-app-development-services",
          canonical: "canonical",
          commonbtn: "bg-transparent fs-6 text-start",
          img_cls: "logo d-none",
          p_content:
            "Accelerate your startup's growth with tailored Android and iOS apps, starting with an MVP launch!",
        },
        // {
        //   btn_name: "Cross-Platform App Development",

        //   path: "javascript:void(0)",
        //   canonical: "canonical",
        //   commonbtn: "bg-transparent fs-6 text-start",
        //   img_cls: "logo d-none",
        //   p_content:
        //     "Reach a broader audience with apps designed for multiple platforms, enhancing scalability and market presence.",
        // },
        // {
        //   btn_name: "iOS App Development",

        //   path: "javascript:void(0)",
        //   canonical: "canonical",
        //   commonbtn: "bg-transparent fs-6 text-start",
        //   img_cls: "logo d-none",
        //   p_content:
        //     "Craft high-performance iOS apps to capture attention, improve customer engagement, and drive business results.",
        // },
        // {
        //   btn_name: "Android App Development",
        //   path: "javascript:void(0)",
        //   canonical: "canonical",
        //   commonbtn: "bg-transparent fs-6 text-start",
        //   img_cls: "logo d-none",
        //   p_content:
        //     "Create feature-rich Android apps that expand your reach, enhance user retention, and increase revenue streams.",
        // },
        // {
        //   btn_name: "Flutter App Development",
        //   path: "javascript:void(0)",
        //   canonical: "canonical",
        //   commonbtn: "bg-transparent fs-6 text-start",
        //   img_cls: "logo d-none",
        //   p_content:
        //     "Deliver smooth, cost-effective mobile apps across platforms, maximizing performance and boosting customer satisfaction.",
        // },
        // {
        //   btn_name: "React Native App Development",
        //         path: "javascript:void(0)",
        //   canonical: "canonical",
        //   commonbtn: "bg-transparent fs-6 text-start",
        //   img_cls: "logo d-none",
        //   p_content:
        //     "Build efficient, cross-platform mobile apps with React Native to increase user engagement and reduce development time.",
        // },
        {
          btn_name: "Clone Script App Development",
          path: "/clone-script-app-development",
          // path: "javascript:void(0)",
          canonical: "canonical",
          commonbtn: "bg-transparent fs-6 text-start",
          img_cls: "logo d-none",
          p_content:
            "Quickly launch successful startup apps with customizable clone scripts to reduce development costs and boost market entry.",
        },
      ],
    },

    {
      eventKey: "second",
      services_name: "Software Development",
      title: "Software Development",
      content: "Second tab content",
      img: "/headerImg/crypto_exchange.png",
      buttons: [
        {
          btn_name: "Custom Software Development ",
          // img: "/headerImg/p2p.png",
          path: "/custom-software-development-services",
          commonbtn: "bg-transparent fs-6 p-0 text-start",
          img_cls: "logo d-none",
          p_content:
            "Empower your business with tailored software development for sustainable growth and success.",
        },
        {
          btn_name: "CRM Software Development ",
          // img: "/headerImg/p2p.png",
          path: "/custom-crm-software-development",
          commonbtn: "bg-transparent fs-6 p-0 text-start",
          img_cls: "logo d-none",
          p_content:
            "Enhance customer relationships and streamline sales processes with customized CRM solutions for business growth.",
        },
        // {
        //   btn_name: "Offshore Software Development ",
        //          path: "javascript:void(0)",
        //   commonbtn: "bg-transparent fs-6 p-0 text-start",
        //   img_cls: "logo d-none",
        //   p_content:
        //     "Access global talent, reduce operational costs, and accelerate project timelines with offshore software development services.",
        // },
        // {
        //   btn_name: "Enterprise Software Development",
        //       path: "javascript:void(0)",
        //   commonbtn: "bg-transparent fs-6 p-0 text-start",
        //   img_cls: "logo d-none",
        //   p_content:
        //     "Optimize business operations with tailored enterprise solutions, improving efficiency, scalability, and decision-making capabilities.",
        // },
      ],
    },

    {
      eventKey: "third",
      services_name: "Blockchain Development",
      title: "Blockchain Development",
      content: "Second tab content",
      img: "/headerImg/token _dev.png",
      buttons: [
        {
          btn_name: "Blockchain Development",
          // img: "/headerImg/sto.png",
          path: "/blockchain-development-company",
          commonbtn: "bg-transparent fs-6 p-0 text-start",
          img_cls: "logo d-none",
          p_content:
            "Transform your startup with blockchain technology, ensuring enhanced security, transparency, and operational efficiency.",
        },
        {
          btn_name: "Token Development",
          // img: "/headerImg/sto.png",
          path: "/crypto-token-development-company",
          commonbtn: "bg-transparent fs-6 p-0 text-start",
          img_cls: "logo d-none",
          p_content:
            "Launch your own tokens to streamline transactions, increase revenue, and expand your market presence quickly.",
        },
        {
          btn_name: "Crypto Coin Development",
          // img: "/headerImg/sto.png",
          path: "/crypto-coin-development-company ",
          commonbtn: "bg-transparent fs-6 p-0 text-start",
          img_cls: "logo d-none",
          p_content:
            "Empower your enterprise with custom cryptocurrencies to drive innovation, facilitate transactions, and boost user trust.",
        },
        {
          btn_name: "Smart Contract Development",
          // img: "/headerImg/sto.png",
          path: "/smart-contract-development-company ",
          commonbtn: "bg-transparent fs-6 p-0 text-start",
          img_cls: "logo d-none",
          p_content:
            "Automate and secure your business transactions, reducing costs and eliminating human errors with smart contracts",
        },
        // {
        //   btn_name: "Metaverse Development",
        //   // img: "/headerImg/sto.png",
        //   path: "/metaverse-development-company",
        //   commonbtn: "bg-transparent fs-6 p-0 text-start",
        //   img_cls: "logo d-none",
        //   p_content:
        //     "Tap into new markets and create immersive, profitable digital experiences that enhance customer engagement and growth.",
        // },
        {
          btn_name: "Crypto Wallet Development",
          // img: "/headerImg/sto.png",
          path: "/crypto-wallet-development-company",
          commonbtn: "bg-transparent fs-6 p-0 text-start",
          img_cls: "logo d-none",
          p_content:
            "Ensure secure, seamless management of digital assets, increasing user confidence and streamlining operations.",
        },
        {
          btn_name: "NFT Development",
          // img: "/headerImg/sto.png",
          path: "/nft-development-company",
          commonbtn: "bg-transparent fs-6 p-0 text-start",
          img_cls: "logo d-none",
          p_content:
            "Create valuable, tradeable NFTs to engage your audience and open new revenue streams in the digital space.",
        },
        {
          btn_name: "Crypto Exchange Development",
          // img: "/headerImg/sto.png",
          path: "/cryptocurrency-exchange-development-company ",
          commonbtn: "bg-transparent fs-6 p-0 text-start",
          img_cls: "logo d-none",
          p_content:
            "Build a scalable, secure platform for trading cryptocurrencies, positioning your business as a market leader",
        },
        {
          btn_name: "dApp Development",
          // img: "/headerImg/sto.png",
          path: "/dapp-development-services",
          commonbtn: "bg-transparent fs-6 p-0 text-start",
          img_cls: "logo d-none",
          p_content:
            "Develop decentralized applications that enhance security, cut costs, and offer innovative solutions for your startup needs.",
        },
      ],
    },
    {
      eventKey: "six",
      services_name: "Metaverse Service",
      title: "Metaverse Service",
      content: "Second tab content",
      img: "/headerImg/meta_dev.png",
      buttons: [
        {
          btn_name: "Metaverse Development ",
         
          path: "/metaverse-development-company",
          commonbtn: "bg-transparent fs-6 p-0 text-start",
          img_cls: "logo d-none",
          p_content:
            "Tap into new markets and create immersive, profitable digital experiences that enhance customer engagement and growth.",
        },
        {
          btn_name: "Metaverse Game Development",
         
          path: "/metaverse-game-development",
          commonbtn: "bg-transparent fs-6 p-0 text-start",
          img_cls: "logo d-none",
          p_content:
            "Launch immersive metaverse games that captivate players, boost engagement, and skyrocket your business growth",
        },
        {
          btn_name: "Metaverse Play-to-Earn Game Development",
         
          path: "/play-to-earn-game-development",
          commonbtn: "bg-transparent fs-6 p-0 text-start",
          img_cls: "logo d-none",
          p_content:
            "Build and Launch rewarding P2E games where players earn real value, attracting loyal users and boosting revenue.",
        },
        {
          btn_name: "Metaverse 3D Avatar Development",

          path: "/metaverse-avatar-development",
          commonbtn: "bg-transparent fs-6 p-0 text-start",
          img_cls: "logo d-none",
          p_content:
            "Provide hyper-realistic 3D avatars that personalize interactions, strengthen user loyalty, and accelerate business growth.",
        },
        {
          btn_name: "Metaverse 3D Space Development",
         
          path: "/metaverse-3d-space-development",
          commonbtn: "bg-transparent fs-6 p-0 text-start",
          img_cls: "logo d-none",
          p_content:
            "Design captivating virtual spaces with immersive experiences that uniquely position your business in the market.",
        },
      ],
    },
    {
      eventKey: "five",
      services_name: "Website Development",
      title: "Website Development",
      content: "Second tab content",
      img: "/headerImg/web_dev.png",
      buttons: [
        {
          btn_name: "Website Development",
          // img: "/headerImg/ico_dev.png",
          path: "/website-development",
          commonbtn: "bg-transparent fs-6 text-start ",
          img_cls: "logo d-none",
          p_content:
            "LBM Solution delivers custom web development services with 10+ years of experience. Secure, scalable websites and apps tailored to your business needs.",
        },
      ],
    },
    {
      eventKey: "sixth",
      services_name: "Digital Marketing ",
      title: "Digital Marketing ",
      content: "Second tab content",
      img: "/headerImg/digital_marketing.png",
      buttons: [
        {
          btn_name: "Digital Marketing ",
          // img: "/headerImg/ico_dev.png",
          path: "/digital-marketing-agency",
          commonbtn: "bg-transparent fs-6 text-start ",
          img_cls: "logo d-none",
          p_content:
            "LBM Solutions, a leading digital marketing agency, for expert strategies that enhance visibility, increase conversions, and grow your business.",
        },
      ],
    },

    {
      eventKey: "forth",
      services_name: "Our Products",
      title: "Our Products",
      content: "Second tab content",
      img: "/headerImg/product.png",
      buttons: [
        {
          btn_name: "Emonitrix",
          // img: "/headerImg/ico_dev.png",
          path: "https://www.emonitrix.ai/",
          commonbtn: "bg-transparent fs-6 text-start ",
          img_cls: "logo d-none",
          p_content:
            "Employee monitoring tool to enhance business efficiency with employee activity monitoring and real-time AI-driven performance reports.",
        },
        {
          btn_name: "TapDapp",
          // img: "/headerImg/ico_dev.png",
          path: "https://www.tapdapp.io/",
          commonbtn: "bg-transparent fs-6 text-start",
          img_cls: "logo d-none",
          p_content:
            "A multichain crypto wallet to simplify asset management with Web 3.0 Browser, ensure security and track market trends.",
        },
        {
          btn_name: "Builditnow",
          // img: "/headerImg/ico_dev.png",
          path: "javascript:void(0)",
          commonbtn: "bg-transparent fs-6 text-start",
          img_cls: "logo d-none",
          p_content:
            "Empower enterprises to create custom software anytime without coding skills and reduce costs, enhancing scalability",
        },
        {
          btn_name: "CoRise",
          // img: "/headerImg/ico_dev.png",
          path: "https://corise.ai/",
          commonbtn: "bg-transparent fs-6 text-start ",
          img_cls: "logo d-none",
          p_content:
            "A platform that connects with cofounders, entrepreneurs, startups, and investors globally for funding and business growth.",
        },
      ],
    },

    // Add more tabs as needed
  ];

  return (
    <>
      <Navbar
        expand="lg"
        className={`bg-body-tertiary services  navbar tab_header d-none d-lg-block ${
          isSticky ? "sticky" : ""
        } ${isFadeInDown ? "fadeInDown" : ""} ${isAnimated ? "animated" : ""}`}
      >
        <Container className="position-">
          <Logo path="/" img_cls="" logo="black-logo" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <ul className="p-0 m-0 d-lg-flex">
                <li>
                  <Commonbttn
                    btn_name="Home"
                    path="/"
                    commonbtn="bg-transparent"
                    img_cls="d-none"
                    add_cls="d-none"
                  />
                </li>
                <li>
                  <Commonbttn
                    btn_name="About"
                    path="/about"
                    commonbtn="bg-transparent"
                    img_cls="d-none"
                    add_cls="d-none"
                  />
                </li>
                <li>
                  <NavDropdown
                    title="Services"
                    id="basic-nav-dropdown"
                    className="p-0 m-0"
                  >
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="first"
                      className=""
                    >
                      <Row className="h-100 tab_contents container mx-auto">
                        <Col sm={3} className="pe-md-0 pt-4">
                          <Nav variant="pills" className="flex-column">
                            {tabs.map((tab, index) => (
                              <Nav.Item key={index}>
                                <Nav.Link
                                  eventKey={tab.eventKey}
                                  className="d-flex align-items-center py-2 rounded-0 "
                                >
                                  {""}
                                  <img
                                    src={tab.img}
                                    alt="logo"
                                    className={`img-fluid me-2`}
                                  />
                                  {tab.title}
                                </Nav.Link>
                              </Nav.Item>
                            ))}
                          </Nav>
                        </Col>
                        <Col sm={9} className="ps-md-0 set_border ">
                          <Tab.Content className=" px-3 set_bg_img position-relative">
                            {tabs.map((tab, index) => (
                              <Tab.Pane eventKey={tab.eventKey} key={index}>
                                <Row>
                                  <h3 className="fw-bold mt-4 px-3">
                                    {tab.services_name}
                                  </h3>
                                  <Col sm={12} className="">
                                    <ul className="p-0 m-0 d-flex flex-wrap text-white ">
                                      {tab.buttons.map((button, btnIndex) => {
                                        // console.log(
                                        //   button?.path,
                                        //   "sdsdsdsdssdsd"
                                        // );
                                        return (
                                          <li
                                            onClick={handleClickHide}
                                            key={btnIndex}
                                            className="col-sm-10 col-md-6 col-xl-4 px-0"
                                          >
                                            <div className="d-flex">
                                              <div className="col-2 d-none">
                                                <img
                                                  src={button.img}
                                                  alt="logo"
                                                  className={`img-fluid me-2`}
                                                />
                                              </div>

                                              <div className="col-10">
                                                {/* <Link href={button?.path} className="text-black"/> */}
                                                <Commonbttn
                                                  btn_name={button?.btn_name}
                                                  path={button?.path}
                                                  canonical={button?.canonical}
                                                  commonbtn={button?.commonbtn}
                                                  img_cls={button?.img_cls}
                                                  p_content={button?.p_content}
                                                  add_cls={button?.add_cls}
                                                />
                                                <p className="text-black m-0 ">
                                                  {button.txt}
                                                </p>
                                              </div>
                                            </div>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </Col>
                                </Row>
                                <div className="set_bg_img">
                                  <img
                                    src="headerImg/header_bg.png"
                                    alt="image"
                                    className="img-fluid position-absolute end-0 bottom-0 z-n1"
                                  />
                                </div>
                              </Tab.Pane>
                            ))}
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </NavDropdown>
                </li>
                <li>
                  <Commonbttn
                    btn_name="Blogs"
                    path="/blogs"
                    commonbtn="bg-transparent"
                    img_cls="d-none"
                    add_cls="d-none"
                  />
                </li>
                <li>
                  <Commonbttn
                    btn_name="Contact Us"
                    path="/contact"
                    commonbtn="bg-transparent"
                    img_cls="d-none"
                    add_cls="d-none"
                  />
                </li>
              </ul>
            </Nav>
            <Commonbttn
              btn_name="Get Started"
              path="/contact"
              commonbtn="btn_cls common_blue fw-normal fs-6 py-2 px-4"
              img_cls="d-none"
              add_cls="d-none"
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

function ContactForms() {
  const usePathnames = usePathname();
  // console.log(usePathnames, "-----", "ssssss");
  return (
    usePathnames !== "/hireus" && (
      <Suspense>
        <BasicExample />
      </Suspense>
    )
  );
}

export default ContactForms;
