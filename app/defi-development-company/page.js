"use client";
import React, { useRef } from "react";

import Heading from "../../app/components/Heading";
import Heading_h2 from "../../app/components/Heading_h2";
import BannerText from "../components/BannerText";
import Commonbttn from "../../app/components/CommonBtn";
import ParaText from "../components/ParaText";
import Card from "../components/Card";
import Cta from "../components/Cta";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import Client from "../components/Client";
import TechSection from "../components/TeachSection";
import Accordion from "../components/Accordion";

import ClutchGoogle from "../components/ClutchGoggle";

const CryptoTokenDevelopement = () => {
  const bottomSectionRef = useRef(null);

  const sectionsData = [
    {
      heading: "Hire Our Skilled DeFi Developers Now & Join the DeFi Revolution!",
      paraText:
        "We are at the forefront of the DeFi development services. Our team consists of 200+ DeFi developers who craft secure DeFi token platforms with blockchain technology, ensuring your project leads the charge in the emerging DeFi market. ",
      imgSrc: "/defi_page/teach_img.png",
      imgAlt: "teach_img",
    },
  ];
  const sectionsData_a = [
    {
      heading:
        "Our Advanced Technology Framework For Defi Platform Development",
      paraText:
        "Our DeFi platform development services deliver tailored solutions across diverse blockchain platforms optimizing transaction speeds, fees, and responsive updates to meet evolving market demands.",
      imgSrc: "/defi_page/teach_img_a.png",
      imgAlt: "teach_img",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "DeFi Smart Contract Development ",
      text:
        "  Our DeFi developers create fully autonomous DeFi smart contracts using Solidity, ensuring safe transactions in a peer-to-peer network.",
        isLink: true,
        linkUrl: "/smart-contract-development-company  ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "DeFi Token Development ",
      text:
        " We have expertise in developing diverse DeFi tokens, enabling the tokenization of real-world assets on various blockchain platforms.",
        isLink: true,
        linkUrl: "/crypto-token-development-company  ",
        
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "DeFi Wallet Development ",
      text:
        " We craft secure, autonomous wallets that give users full control over their funds, ensuring safe transactions and unique private keys.",
        isLink: true,
        linkUrl: "/crypto-wallet-development-company  ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "DeFi Exchange Development ",
      text:
        "Our solutions render DeFi-based decentralized exchanges to make crypto trading accessible and secure. ",
        isLink: true,
        linkUrl: "/cryptocurrency-exchange-development-company",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "DeFi dApp Development ",
      text:
        "  We specialize in crafting DeFi DApps, enabling coherent interactions with blockchain for trading, lending, and borrowing assets. ",
        isLink: true,
        linkUrl: "/dapp-development-services ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "DeFi Coin Development",
      text:
        " Our scalable DeFi coins enhance your financial platform's functionality, providing users with innovative ways to trade, invest, and manage assets. ",
        isLink: true,
        linkUrl: "/crypto-coin-development-company   ",
    },
    // {
    //   img_class: "d-none",
    //   svg_cls: "",
    //   add_class: "h-100 on_hover",
    //   columns: "col-sm-6 col-lg-4 mb-4",
    //   heading: "DeFi Coin Development",
    //   text:
    //     " Our scalable DeFi coins enhance your financial platform's functionality, providing users with innovative ways to trade, invest, and manage assets. ",
    //     isLink: true,
    //     linkUrl: "/",
    // },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "DeFi Yield Farming Development ",
      text:
        "We provide innovative DeFi platforms which enable users to earn through liquidity mining and cryptocurrency staking.",
        isLink: true,
        linkUrl: "/",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "DeFi Lending and Borrowing Platform",
      text:
        " Our smart contract-based DeFi solutions allow direct crypto transactions without intermediaries.",
        isLink: true,
        linkUrl: "/",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/defi_page/icons/process01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Client Requirements ",
    },
    {
      img: "/defi_page/icons/process02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Planning Phase  ",
    },
    {
      img: "/defi_page/icons/process03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Architecture Designing ",
    },
  ];

  const DevelopmentProcess_b = [
     
    {
      img: "/defi_page/icons/process06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Deployment ",
    },
    
    {
      img: "/defi_page/icons/process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Validation and Evaluation   ",
    },
    
    {
      img: "/defi_page/icons/process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Model Development ",
    },

  ];

  const DevelopmentProcess_c = [
    {
      img: "/defi_page/icons/process07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Maintenance ",
    },
    {
      img: "process_h.png",
      svg_cls: "d-none",
      add_class: "opacity-0",
      columns: "col-sm-6 col-md-4 ",
      heading: "",
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
  const BasicFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Smart Contract Functionality   ",
      text:
        " We introduce automated contracts that do not require intermediaries, enhancing transparency and reducing potential disputes.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Tokenization Capabilities ",
      text:
        "Our DeFi development solutions allow businesses to create and manage digital assets or tokens that have an extensive range of value securely.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Yield Farming Tools  ",
      text:
        "Our services provide unique features that enable users to earn rewards, typically in the form of tokens, by staking or lending their digital assets. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Staking Mechanisms",
      text:
        "We provide scalable DeFi solutions which facilitate token holders to earn a return on their holdings by participating in network operations.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Liquidity Pools ",
      text:
        " We deploy mechanisms that facilitate efficient trading by providing liquidity to the system, enabling smoother and more stable transaction flows. ",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Oracles ",
      text:
        " We integrate oracles to extract external data safely into the blockchain environment, which is essential for functionalities in trading platforms and triggering events.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Interoperability Protocols ",
      text:
        " We ensure that the DeFi application can operate across different blockchain systems, facilitating numerous transactions and enhancing user experience.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Scalability Solutions ",
      text:
        "Our solutions utilize state channels or rollups to handle a larger number of transactions per second, reducing gas fees and improving transaction speeds.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Crypto Wallet Integration ",
      text:
        "Our DeFi platforms support various crypto wallets for consistent user interaction, enabling secure storage and easy transactions of digital assets. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Automated Market Maker (AMM)",
      text:
        "We introduce some algorithms that allow digital assets to be traded automatically through liquidity pools that dictate prices based on a mathematical formula.",
    },
  ];

  const Crafting = [
    {
      img: "/defi_page/icons/resouceses01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Banking and Finance ",
      text:
        "Our DeFi solutions can revolutionize traditional banking by offering services such as loans, savings, and insurance, which reduce costs and increase accessibility.  ",
    },
    {
      img: "/defi_page/icons/resouceses02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate  ",
      text:
        "We provide tokenization of property assets to simplify transactions, reduce costs, and increase liquidity, making real estate investment accessible to a broader audience.",
    },
    {
      img: "/defi_page/icons/resouceses03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Gaming ",
      text:
        "DeFi software is helpful for in-game financial transactions and to tokenize in-game assets, allowing players to own and trade assets across different platforms.",
    },
    {
      img: "/defi_page/icons/resouceses04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Healthcare",
      text:
        " DeFi improves financial operations in healthcare to facilitate flawless payments and enable new models for health insurance.",
    },
    {
      img: "/defi_page/icons/resouceses05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Art and Collectibles ",
      text:
        "Artists and collectors can gain more control and liquidity over their assets with DeFi, providing new ways to fund, monetize, and invest in art.",
    },
    {
      img: "/defi_page/icons/resouceses06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Legal Industry  ",
      text:
        " We introduce smart contracts in DeFi development that automatically execute and enforce the terms of legal agreements, reducing the need for manual processing.",
    },
    {
      img: "/defi_page/icons/resouceses07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Agriculture ",
      text:
        "Our DeFi solutions provide farmers with more direct access to financial services like crop insurance, which diminishes costs through decentralized platforms.",
    },
    {
      img: "/defi_page/icons/resouceses08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Telecommunications",
      text:
        "We provide more flexible payment systems and democratize access to communications infrastructure to assist telecommunications services.",
    },
    {
      img: "/defi_page/icons/resouceses09.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Insurance ",
      text:
        " Our DeFi services automate claims processing and payouts through smart contracts, reducing overhead costs and improving the speed and accuracy of settlements.",
    },
    {
      img: "/defi_page/icons/resouceses10.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Venture Capital and Startups  ",
      text:
        " DeFi platforms reorganize fundraising efforts for startups by offering decentralized crowdfunding and venture funding solutions.",
    },
    {
      img: "/defi_page/icons/resouceses11.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Sports Management  ",
      text:
        "Our DeFi development solutions transform athlete contracts, ticket sales, and event management through secure transactions and smart contracts. ",
    },
  ];

  const AboutLbm = [
    {
      img: "/defi_page/icons/why01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Expertise  ",
      text:
        " With over 10 years of expertise, our veteran DeFi developers provide decentralized finance platforms, ensuring top-notch, industry-specific solutions.  ",
    },
    {
      img: "/defi_page/icons/why02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Tailored Solutions ",
      text:
        "Our DeFi solutions are tailored to fulfil particular business requirements, ensuring coherent integration with your existing systems and processes",
    },
    {
      img: "/defi_page/icons/why03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "User-Centric Design",
      text:
        "We focus on creating intuitive and user-friendly interfaces that enhance user engagement and adoption, making DeFi accessible to all.",
    },
    {
      img: "/defi_page/icons/why04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Transparent Processes ",
      text:
        "We maintain clear and open communication during the entire development, keeping you up-to-date in every decision-making process.",
    },
    {
      img: "/defi_page/icons/why05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Future-Ready Solutions",
      text:
        " Our solutions are designed with future advancements in mind, ensuring your DeFi platform remains viable in Defi Market.",
    },
    {
      img: "/defi_page/icons/why06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Community Engagement",
      text:
        "We help you build and nurture a vibrant community around your DeFi platform, fostering trust and driving user participation.",
    },
    {
      img: "/defi_page/icons/why07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Responsive Support",
      text:
        "We provide continuous support and maintenance to keep your DeFi platform running smoothly, addressing any issues promptly and effectively.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Robert Joseph Brown",
      text:
        "We contacted LBM for the DeFi development. The platform they developed for us is incredibly efficient. Everything runs smoothly, and we haven’t faced any issues. Their team was professional and delivered what we needed.",
    },
    {
      clientName: "Isabella Clark",
      text:
        "The team of LBM customized DeFi solution to fit our business perfectly. It was exactly created according to our unique requirements. Their attention to detail and understanding of our needs were appealing.",
    },
    {
      clientName: "David Ethan Lewis",
      text:
        "We feel very secure using the DeFi platform. LBM’s team implemented strong security measures, which gave us an excellent experience. Their focus on safety and reliability is commendable. We trust their work thoroughly.",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "William George ",
      text:
        "  The professionalism, expertise, and commitment of LBM’s team to customer satisfaction set them apart from other software development companies. We would highly recommend them to anyone in need of custom software solutions. ",
    },
    {
      clientName: "Charlotte Taylor ",
      text:
        " The developers of LBM provided an intuitive and user-friendly user interface for our DeFi platform. Our customers found it easy to navigate and use. It improved our user experience significantly. ",
    },
    {
      clientName: "Ava Charlotte Miller",
      text:
        " LBM utilized an innovative approach to DeFi development, which helped us stay ahead in the market. They brought fresh ideas and implemented them effectively. We were impressed with their team's creativity and forward-thinking mindset. ",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is the difference between DeFi and centralized finance?  ",
      body:
        "DeFi uses blockchain technology for peer-to-peer transactions without intermediaries, while centralized finance depends on banks and traditional institutions to handle and control all transactions and services.",
    },
    {
      eventKey: "1",
      header: "What is the cost to start DeFi project?  ",
      body:
        "The cost of starting a DeFi project may depend on the complexity, features, and scale of the project. On average, the cost to develop DeFi project is $25,000-$60,000.  ",
    },
    {
      eventKey: "2",
      header: "How does DeFi affect traditional finance? ",
      body:
        "DeFi offers faster, cheaper, and more accessible financial services directly on blockchain networks. It reduces the need for banks and intermediaries and promotes financial inclusion, which challenges traditional finance.",
    },
    {
      eventKey: "3",
      header: "Why invest in DeFi coins and tokens?",
      body:
        "Investing in DeFi coins and tokens offers the potential for high returns, access to innovative financial services, greater control over assets, and participation in a rapidly growing, decentralized financial ecosystem that operates without traditional intermediaries. ",
    },
    {
      eventKey: "4",
      header: "What is the best DeFi platform?",
      body:
        " Aave is the best DeFi platform for lending and borrowing. Moreover, Uniswap is known for decentralized exchanges and Compound for earning interest on crypto assets. ",
    },
  ];

  return (
    <>
      <section className="banner ">
        <div className="container">
          <div className="row flex-column-reverse flex-md-row align-items-center">
            <div className="col-md-7 mt-4 mt-md-0">
              <div className="inner_text">
                <Heading
                  textA="DeFi Development Company "
                  clrtext="for the Future of Finance"
                  textB="  "
                  heading="banner_h"
                />
                <BannerText text="We are a pioneering DeFi development company that excels at designing intuitive DeFi solutions from dApps to DEXs." />

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
            <div className="col-9 col-sm-8 col-md-5 mx-auto ">
              <div className="img ">
                <img src="/defi_page/banner.png" alt="banner" className="img-fluid" />
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
            <div className="col-sm-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Our Decentralized Finance"
                  clrtext=" (DeFi) Development "
                  textB="Services"
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="At LBM Solutions, we are committed to delivering comprehensive DeFi development services for startups to enterprises. We design innovative DeFi platforms to enhance your competitive edge."
                />
              </div>
            </div>
            <div className="col-sm-12  mt-4">
              <div className="row">
                <Card CardData={CardLoop} />
              </div>
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
                  textA="Process We Follow for Your"
                  clrtext="Use DeFi Software"
                  textB="Development"
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="During our DeFi development process, we provide complete information, ensuring you stay informed and receive scalable DeFi software development solutions that empower your business."
                />
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

      <section className="wallet_features">
        <div className="container">
          <div className="row  ">
            <div className="col-12 col-lg-11">
              <Heading_h2
                textA="How Our   "
                clrtext="DeFi Development Solutions"
                textB=" Make a Difference"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
              />

              <ParaText
                f_custome=""
                para_text="Our decentralized financial systems provide top-notch features that enhance functionality, safety, and user experience for DeFi projects, ensuring they meet business goals and customer needs."
              />
            </div>
            <div className="col-12 mt-4">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={12}>
                    <Nav variant="pills" className="">
                      <Nav.Item>
                        <Nav.Link eventKey="first"><h3>Business Features</h3></Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" className="ms-3">
                        <h3>  Technical Features</h3>
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
                          <Card CardData={TechnicalFeatures} />
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

      {sectionsData_a.map((section, index) => (
        <TechSection
          key={index}
          heading={section.heading}
          paraText={section.paraText}
          imgSrc={section.imgSrc}
          imgAlt={section.imgAlt}
        />
      ))}

      <section className="crafting">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Our"
                  clrtext="DeFi Development Services Making"
                  textB="Waves Across Industries"
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Our DeFi development services cater to multiple industries and offer tokenization of real-world assets into digital tokens, enhancing investment opportunities and liquidity.  "
                />
              </div>
            </div>
          </div>
          <div className="row">
            <Card CardData={Crafting} />
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <Cta />
        </div>
      </section>

      <section className="about_lbm">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Why"
                  clrtext=" LBM Solutions Is the Best Fit As Your"
                  textB="DeFi Development Company?"
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="Being an outstanding DeFi development company in USA, we provide defi platform development with precision and have successfully delivered several decentralized finance projects, ensuring your business’s success.  "
                />
              </div>
            </div>
          </div>
          <div className="row">
            <Card CardData={AboutLbm} />
          </div>
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
              <ParaText para_text="We have delivered numerous DeFi projects and here we display testimonials of our clients to show how our tailored DeFi solutions have met their business goals and delivered outstanding results in the decentralized finance market." />
            </div>
          </div>

          <div className="row  client_review mt-4 mt-lg-5">
            <Client ClientData_a={ClientData_aa} />
          </div>
        </div>
        <div className="row client_review justify-content-center mt-4">
          <Client ClientData_b={ClientData_bb} />
        </div>
      </section>

      <section className="faq bg-black">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <Heading_h2
                textA="Frequently "
                clrtext="Asked Questions"
                textB=""
                heading="heading_h2 text-white"
              />
              <ParaText para_text="" />
            </div>
          </div>

          <Accordion accordionData={Faq} />
        </div>
      </section>
    </>
  );
};

export default CryptoTokenDevelopement;
