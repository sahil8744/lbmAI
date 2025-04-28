"use client";
import React, { useRef } from "react";

import Heading from "../../app/components/Heading";
import Heading_h2 from "../../app/components/Heading_h2";
import BannerText from "../components/BannerText";
import Commonbttn from "../../app/components/CommonBtn";
import TechSection from "../../app/components/TeachSection";
import ParaText from "../components/ParaText";
import Card from "../components/Card";
import Cta from "../components/Cta";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import Client from "../components/Client";
import GetInTouch from "../components/GetInToch";

import ClutchGoogle from "../components/ClutchGoggle";

const CryptoWallet = () => {
  const bottomSectionRef = useRef(null);

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Web Wallet Development",
      p_opacity: "opacity-100",
      text:
        "Access your Wallet from anywhere via the Internet and access multi-cryptocurrency support with",
        text1:"trading.", 
        LinkHref:"/cryptocurrency-exchange-development-company",
        LinkData:"exchange",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: " Defi Wallet Development",
      text:
        "Get complete authority over your digital assets and have enhanced security from decentralised protocols, P2P transfers, and the potential for higher returns.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Mobile Wallet Development",
      text:
        "For on-the-go users. Experience optimized, swift transactions anytime, anywhere with our ",
        LinkHref:"/mobile-app-development-services",
        LinkData:"mobile wallet.",
        // text1:"trading.", 
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: " NFT Wallet Development",
      text:
        "The ultimate hub for nun-fungible tokes specially designed for digital art and collectables to securely store and showcase.",
        
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "MPC Wallet Development",
      text:
        "Get unparalleled security via Multi-Party Computation and merge asset protection with easy accessibility. The perfect blend of safety and convenience.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "White-Label Wallet Development",
      text:
        "Your brand, your wallet. This wallet system gives you customizable and ready-to-launch solutions to enhance your crypto presence.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Centralized Wallet Development",
      text:
        "Avail third-party control and get paper whitelisting to ensure quick and secure transactions.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: " Multichain Wallet Development",
      text:
        "One wallet, many chains. Keep multiple assets on different",
        LinkHref:"/blockchain-development-company",
        LinkData:"blockchains",
        text1:" with seamless integration. Manage diverse assets effortlessly with multichain capabilities.", 
      },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Coin-base Wallet Development",
      text:
        "User-centric, versatile, and reliable: Store your proprietary token in a coinbase wallet solution and that too with an asset handling guide.",
    },
  ];

  const BasicFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      heading: "Custom Token Addition",
      p_opacity: "opacity-100",
      text:
        "Permit users to manually input and oversee",
        LinkHref:"/crypto-token-development-company",
        LinkData:"tokens",
        text1:"that aren't automatically recognized by the wallet.", 
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      heading: "Saved Addresses",
      p_opacity: "opacity-100",
      text:
        "Utilise the address book to store and handle recurring  ",
        LinkHref:"/crypto-coin-development-company",
        LinkData:"cryptocurrency",
        text1:"addresses on the platform conveniently.", 
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      heading: "Invite & Earn",
      p_opacity: "opacity-100",
      text:
        "Through the integrated referral system in the wallet, invite peers and receive reward benefits.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      heading: "Connection to Wallet",
      p_opacity: "opacity-100",
      text:
        "Allows a robust link and engagement between a web-based",
        LinkHref:"/dapp-development-services",
        LinkData:"DApp",
        text1:"and the user's mobile crypto-currency wallet.", 
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-md-4",
      heading: "NFT Asset Support",
      p_opacity: "opacity-100",
      text:
        "The wallet provides functionality for ",
        LinkHref:"/nft-development-company",
        LinkData:"NFTs (Non-Fungible Tokens),",
        text1:" denoting asset or tangible item ownership.",
    },
  ];

  const AdvanceFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "ol-sm-6 col-lg-3 mb-4",
      heading: "Inter-Blockchain Crypto Exchange",
      p_opacity: "opacity-100",
      text:
        "Swap digital currencies between diverse blockchain platforms without the need for external trading platforms.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "ol-sm-6 col-lg-3 mb-4",
      heading: "Multi-Network Wallets",
      p_opacity: "opacity-100",
      text:
        "Our digital wallets accommodate various blockchain systems, centralizing crypto management for users.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "ol-sm-6 col-lg-3 mb-4",
      heading: "Direct Blockchain Crypto Exchange",
      p_opacity: "opacity-100",
      text:
        "We incorporate a wallet feature allowing direct blockchain-based crypto trades.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "ol-sm-6 col-lg-3 mb-4",
      heading: "Fiat Conversion Gateway",
      p_opacity: "opacity-100",
      text:
        "Enable conversion between cryptocurrencies and Fiat or vice versa through our Fiat gateway.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "ol-sm-6 col-lg-3 mb-4",
      heading: "(DApp) Multi-Network Browser",
      p_opacity: "opacity-100",
      text:
        "Our wallet facilitates a DApp browser for engagements across multiple blockchain platforms.",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/cryptwalletImg/icons/process_a.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      heading: "Requirement gathering & Analysis",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
    },
    {
      img: "/cryptwalletImg/icons/process_b.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      heading: "Design, Wireframe & Mockups ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
    },
    {
      img: "/cryptwalletImg/icons/process_c.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      heading: "Prototype Demo ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/cryptwalletImg/icons/process_d.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      heading: "Maintenance Support",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
    },
    {
      img: "/cryptwalletImg/icons/process_e.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      heading: "Marketing",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
    },
    {
      img: "/cryptwalletImg/icons/process_f.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      heading: "Alteration & Confirmation",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/cryptwalletImg/icons/process_g.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      heading: "Testing and Audits",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
    },
    {
      img: "/cryptwalletImg/icons/process_h.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 ",
      heading: "Development",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
    },
    {
      img: "",
      svg_cls: "d-none",
      add_class: "opacity-0",
      columns: "col-sm-6 col-md-4  mb-4 d-none d-md-block",
      heading: "",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
    },
  ];

  const Crafting = [
    {
      img: "/cryptwalletImg/icons/icon_a.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Blockchain Wallet Development Expertise",
      text:
        "Our expertise in blockchain wallet development ensures top-tier solutions.",
      // background: "/cryptwalletImg/wallet_features.png",
    },
    {
      img: "/cryptwalletImg/icons/icon_b.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Comprehensive Cryptocurrency Wallet Development Services",
      text:
        "We offer a full range of services to cater to all your wallet development needs.",
    },
    {
      img: "/cryptwalletImg/icons/icon_c.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Ease of Creating a Crypto Wallet App",
      text:
        "Our streamlined process makes it easy to create your own crypto wallet app.",
    },
    {
      img: "/cryptwalletImg/icons/icon_d.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Innovative Blockchain Wallet Development Company",
      text: "We stay ahead of the curve in blockchain technology.",
    },
    {
      img: "/cryptwalletImg/icons/icon_e.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Custom Solutions to Build a Crypto Wallet App",
      text: "We offer tailored services to build your ideal crypto wallet app.",
    },
    {
      img: "/cryptwalletImg/icons/icon_f.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Advanced Blockchain Wallet App Development",
      text:
        "Our team is adept at developing sophisticated blockchain wallet apps.",
    },
    {
      img: "/cryptwalletImg/icons/icon_g.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Reliable Blockchain Wallet Development Services",
      text:
        "We are committed to delivering dependable and secure wallet solutions.",
    },
  ];

  const AboutLbm = [
    {
      img: "/cryptwalletImg/icons/icon_1.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Masters in Blockchain",
      text:
        "We're deeply passionate about blockchain With years under our belt,we  proudly lead the industry.We 've honed this craft to its finest.",
      p_opacity: "",
      custome_col_a: "col-2",
    },
    {
      img: "/cryptwalletImg/icons/icon_2.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Comprehensive Solutions",
      text:
        "Think of us as your journey's guide. From the spark of an idea to its full bloom, we're with you, offering top-tier expertise.",
      p_opacity: "",
      custome_col_a: "col-2",
    },
    {
      img: "/cryptwalletImg/icons/icon_3.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Cost-effective Offerings",
      text:
        "We blend value with excellence. Every step, from ideation to rollout, carries our mark of quality and affordability.",
      p_opacity: "",
      custome_col_a: "col-2",
    },
    {
      img: "/cryptwalletImg/icons/icon_4.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Tailored Excellence",
      text:
        "We listen and adapt. Our services, broad as they are, always have a personal touch, ensuring it feels just right for you.",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
    },
    {
      img: "/cryptwalletImg/icons/icon_5.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Focus on Security",
      text:
        "Trust is our foundation. Every solution, from inception to completion, prioritizes your security.",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
    },
    {
      img: "/cryptwalletImg/icons/icon_6.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      heading: "24/7 Support",
      text:
        "Anytime you need us, we're here. Throughout our collaboration, expect steadfast support and a friendly voice.",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Jane Doe",
      comName: "Tech Innovations Inc.",
      text:
        "Partnering with LBM Solution transformed our digital strategy. Their innovative solutions drove our project's success beyond expectations.",
    },
    {
      clientName: "Sarah Lee",
      comName: "Blockchain Ventures",
      text:
        "Blockchain development by LBM was top-notch. Their innovative approach and technical skills brought our project to life, exceeding expectations.",
    },
    {
      clientName: "Mike Brown",
      comName: "Digital Solutions Ltd",
      text:
        "Thanks to LBM, our mobile app is a hit. Their development team understood our vision and delivered a seamless, user-friendly product.",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Emily Clark",
      comName: "Tech Innovations Inc.",
      text:
        "LBM's smart contract development service was exceptional. Their attention to detail and security focus ensured a flawless launch.",
    },
    {
      clientName: "Alex Johnson",
      comName: "Designer",
      text:
        "Our partnership with LBM for blockchain solutions has been pivotal. Their expertise and professionalism are unmatched..",
    },
    {
      clientName: "David Smith",
      comName: "Head of Sales",
      text:
        "LBM's custom software service was a game-changer for our operations. Their tailored solutions perfectly fit our needs..",
    },
   
  ];
  const ClientData_cc = [
   
    {
      clientName: "Rachel Green",
      comName: "Digital Solutions Ltd",
      text:
        "Choosing LBM for our NFT project was the best decision. Their strategic approach and innovative ideas were crucial to our success.",
    },
  ];

  const sectionsData = [
    {
      heading: "A Trusted Crypto Wallet Development Company",
      paraText:
        "We’re not just another development firm; we're a symbol of trust and  reliability in the blockchain community. Our innovative solutions and  consistent delivery of quality have made us a trusted partner for  businesses around the globe.",
      imgSrc: "/cryptwalletImg/teach_img.png",
      imgAlt: "trusted crypto wallet development provider",
    },
  ];

  return (
    <div className="main_scroll">
      <section className="banner ">
        <div className="container">
          <div className="row flex-column-reverse flex-md-row align-items-center">
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="inner_text">
                <Heading
                  textA="Leading the "
                  clrtext=" Way in Crypto Wallet "
                  textB="Development"
                  // heading="heading_class"
                  heading="banner_h"
                />
                <BannerText text=" Developing Blockchain / Mobile App /  " 
                LinkHref={"/custom-software-development-services"} LinkData={"Custom Software,"}
                textData={" with end to end solutions and niche specific expertise."} />

                <div className="mt-4 mt-md-5">
                  <Commonbttn
                    btn_name="Get Free Consultation"
                    path="/contact"
                    commonbtn="btn_cls"
                    img_cls="d-none"
                    add_cls="d-none"
                  />
                </div>
              </div>
            </div>
            <div className="col-9 col-sm-8 col-md-6 mx-auto ">
              <div className="img ">
                <img
                  src="/cryptwalletImg/banner.png"
                  alt="USA’s trusted leader in crypto wallet development"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="row justify-content-between align-items-center pt-5 mt-xl-5 d-none">
            <div className="col-lg-4 col-md-5 col-sm-6 col-9 ">
              <div className="row">
                <div className="col-5">
                  <img
                    src="/homeImg/clutch.svg"
                    alt="banner"
                    className="img-fluid"
                  />
                </div>
                <div className="col-5">
                  <img
                    src="/homeImg/google.svg"
                    alt="banner"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 d-none d-sm-block">
              <div className="position-relative pointer">
                <img
                  src="/homeImg/text_img.png"
                  alt="textimg"
                  className="text_img ms-auto text-end img-fluid "
                />
                <img
                  src="/homeImg/downarrow.png"
                  alt="arrow"
                  className="arrow img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* import the Clutch Google components */}
      <ClutchGoogle bottomSectionRef={bottomSectionRef} />

      {/* <TechSection /> */}
      {sectionsData.map((section, index) => (
        <TechSection
          key={index}
          heading={section.heading}
          paraText={section.paraText}
          imgSrc={section.imgSrc}
          imgAlt={section.imgAlt}
        />
      ))}

      <section className="crypt_wallet" ref={bottomSectionRef}>
        <div className="container">
          <div className="row ">
            <div className="col-sm-12 ">
              <div className="inner_text">
                <Heading_h2
                  textA="Types of "
                  clrtext="Crypto Wallet Services"
                  textB=""
                  heading="heading_h2 mb-4 mb-lg-5"
                />
                <ParaText f_custome="" para_text="" />
              </div>
            </div>
            <div className="col-sm-12 ">
              <div className="row">
                {/* {LoopingCard.map((val, i) => { return ( ); })} */}
                <Card CardData={CardLoop} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <Cta />
        </div>
      </section>

      <section className="wallet_features">
        <div className="container">
          <div className="row  flex-column-reverse flex-xl-row">
          <div className="col-12 ">
              <Heading_h2
                textA="Crypto"
                clrtext=" Wallet Features"
                textB=""
                heading="mb-4 mb-lg-5 sectoin_h  heading_h2"
              />
              <div className="img d-none">
                <img
                  src="/cryptwalletImg/wallet_features.png"
                  alt="wallet_featurer"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-12 ">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={12}>
                    <Nav variant="pills" className="">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          <h3>Basic Features</h3>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" className="ms-3">
                          <h3>Advance Features</h3>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12} className="mt-4">
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <div className="row">
                          <Card CardData={BasicFeatures} />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="row">
                          <Card CardData={AdvanceFeatures} />
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
        
          </div>
        </div>
      </section>

      <section className="devel_process">
        <div className="container">
          <div className="row mb-4 mb-lg-5 ">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Our "
                  clrtext="Wallet Development Process"
                  textB=""
                  heading="heading_h2 mb-0"
                />
                <ParaText f_custome="" para_text="" />
              </div>
            </div>
          </div>
          <div className="row justify-content-between aling-items-center position-relative box_a">
            <Card CardData={DevelopmentProcess_a} status="false" />
          </div>
          <div className="row justify-content-between aling-items-center move_right  my-xl-5 position-relative box_a box_b">
            <Card CardData={DevelopmentProcess_b} status="false" />
          </div>
          <div className="row justify-content-between aling-items-center position-relative box_a box_c">
            <Card CardData={DevelopmentProcess_c} status="false" />
          </div>
        </div>
      </section>

      <section className="crafting">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Crafting the  "
                  clrtext="Future of Crypto Wallets"
                  textB=""
                  heading="heading_h2"
                />
                <ParaText f_custome="" para_text="" />
              </div>
            </div>
          </div>
          <div className="row">
            <Card CardData={Crafting} />
          </div>
        </div>
      </section>

      <section className="about_lbm">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="What is "
                  clrtext="Different about LBM Solutions? "
                  textB=""
                  heading="heading_h2"
                />
                <ParaText f_custome="" para_text="" />
              </div>
            </div>
          </div>
          <div className="row">
            <Card CardData={AboutLbm} />
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <Cta />
        </div>
      </section>

      <section className="clients">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Heading_h2
                textA="A Client's "
                clrtext="First-Hand Experience"
                textB="of Partnership"
                heading="heading_h2"
              />
              <ParaText para_text="Learn from our clients about their positive experiences working with us. They share stories of how our partnership helped their businesses thrive, giving you a clear view of the benefits and results we deliver." />
            </div>
          </div>

          <div className="row client_review mt-4 mt-lg-5">
            <Client ClientData_a={ClientData_aa} />
          </div>
        </div>
        <div className="row client_review justify-content-center mt-4">
          <Client ClientData_b={ClientData_bb} />
        </div>
        <div className="row client_review justify-content-center mt-4">
          <Client ClientData_c={ClientData_cc} />
        </div>
      </section>
      <GetInTouch
        getinTocch="Get expert advice from a Crypto Wallet Development Company in India, leading the way in global crypto innovation."
        path="/contact"
        targett="_blank"
        btn_name="Book Now"
        cls_nm="fw-bold"
      />
    </div>
  );
};
export default CryptoWallet;
