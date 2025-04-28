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
      heading: "Hire Our Crypto Developers for Your Next DEX Project",
      paraText:
        "At our pre-eminent decentralized exchange development company, our crypto developers have over a decade of experience building efficient decentralized exchanges with advanced blockchain technology, providing coherent trading experiences.",
      imgSrc: "/decentralized_exchange/teach_img.webp",
      imgAlt: "hire our crypto developers for your DEX development",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Order Book Decentralized Exchanges",
      text:
        "We offer perpetual DEXs crypto trading platforms, allowing indefinite position holding as long as funds cover losses. ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "On-Chain and Off-Chain Order Books",
      text:
        "Our on-chain order books service ensures flawless transactions, while off-chain books services manage private transactions.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Automated Market Maker DEXs ",
      text:
        " We implement AMM protocols in DEXs, enabling decentralized trading with liquidity pools and offering instant token swaps and liquidity provision.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "DeFi DEX Aggregator Development",
      text:
        "Our decentralized crypto exchange development solutions provide user-friendly interfaces, ensuring access to multiple DeFi tokens and consistent trading.",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/decentralized_exchange/icons/process01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Conceptualization",
    },
    {
      img: "/decentralized_exchange/icons/process02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Smart Contract Development ",
    },
    {
      img: "/decentralized_exchange/icons/process03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Designing Phase  ",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/decentralized_exchange/icons/process06.png",
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
      img: "/decentralized_exchange/icons/process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Testing & QA",
    },
   
    {
      img: "/decentralized_exchange/icons/process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "DEX Development ",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/decentralized_exchange/icons/process07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Launch and Maintenance",
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
      heading: "Enhanced Security ",
      text:
        " We deploy advanced cryptographic protocols and decentralized ledgers to protect user assets and transactions from hacking and fraud.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Liquidity Pools",
      text:
        "Our automated market maker development solutions render continuous liquidity, enabling flawless trading without any traditional order books. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Complete Transparency",
      text:
        "With blockchain technology, our solutions make all transaction details publicly accessible and verifiable, enhancing trust among users.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Peer-to-Peer Trading  ",
      text:
        "Our decentralized exchange development services facilitate direct transactions between users, removing intermediaries to lower costs and enhance transaction speed.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "User Control",
      text:
        "Our solutions allow users to retain complete control over their funds with self-custody features, eliminating reliance on third-party custodians.",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Admin Panel",
      text:
        "Our decentralized exchange platform development provides an engaging interface for administrators to manage and monitor DEX, including user activities.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Decentralized Order Book ",
      text:
        " We implement on-chain order books to store and manage orders transparently on the blockchain, ensuring public verifiability.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Cross-Chain Compatibility",
      text:
        "Our decentralised exchange software enables trading across different blockchain networks, allowing users to trade numerous tokens. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Layer 2 Solutions",
      text:
        "We integrate off-chain solutions to improve scalability and reduce transaction fees, enabling faster and more cost-effective trading.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "API Integration ",
      text:
        "Our services offer comprehensive APIs to integrate third-party services, enhancing platform functionality and enabling custom features for trading. ",
    },
  ];

  const sectionsData_a = [
    {
      heading:
        "Tech Stack for White Label Decentralized Exchange Software Development ",
      paraText:
        "Our skilled team leverages deep expertise to deliver innovative decentralized exchange app development solutions with innovative technologies, empowering users to trade confidently in the evolving decentralized exchange landscape. ",
      imgSrc: "/decentralized_exchange/teach_img01.png",
      imgAlt: "tech stack for white label decentralized exchange development",
    },
  ];

  const technology = [
    {
      img: "/decentralized_exchange/icons/coin_01.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Uniswap ",
    },
    {
        img: "/decentralized_exchange/icons/coin_02.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "PancakeSwap",
    },
    {
        img: "/decentralized_exchange/icons/coin_03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Bitstamp",
    },
    {
        img: "/decentralized_exchange/icons/coin_04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: " mx-auto mb-0 mt-3",
      heading: "Huobi",
    },
    {
        img: "/decentralized_exchange/icons/coin_05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "KuCoin",
    },
    {
        img: "/decentralized_exchange/icons/coin_06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: " mx-auto mb-0 mt-3",
      heading: "Kraken",
    },
    {
        img: "/decentralized_exchange/icons/coin_07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: " mx-auto mb-0 mt-3",
      heading: "Bitfinex",
    },

 
  ];

  const Crafting = [
    {
      img: "/decentralized_exchange/icons/sourceses01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Trading",
      text:
        "Our solutions facilitate direct P2P trading of digital assets without intermediaries, revolutionizing the global financial landscape.",
    },
    {
      img: "/decentralized_exchange/icons/sourceses02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Finance ",
      text:
        " We provide DeFi development solutions to democratize access to financial services, fostering financial inclusion and innovation.",
    },
    {
      img: "/decentralized_exchange/icons/sourceses03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Healthcare ",
      text:
        " Our decentralised exchange software facilitates secure medical record exchange among healthcare providers, enhancing data integrity.",
    },
    {
      img: "/decentralized_exchange/icons/sourceses04.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Gaming ",
      text:
        "We build decentralized exchanges for trading in-game assets, enabling gamers to securely buy, sell, and exchange digital items across various gaming platforms.",
    },
    {
      img: "/decentralized_exchange/icons/sourceses05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate",
      text:
        "Our decentralized exchange platforms allow to tokenize property assets and facilitate fractional ownership with increased liquidity.",
    },
    {
      img: "/decentralized_exchange/icons/sourceses06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Art and Collectibles",
      text:
        "DEXs enable the trading of digital art and collectibles, empowering artists to exchange unique digital assets securely.",
    },
    {
      img: "/decentralized_exchange/icons/sourceses07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Energy ",
      text:
        "Peer-to-peer trading of renewable energy certificates promotes sustainable energy practices and enables individuals to participate in energy markets directly.",
    },
    {
      img: "/decentralized_exchange/icons/sourceses08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Legal ",
      text:
        " We utilize decentralized governance mechanisms to provide transparency, trust, and participation in decision-making processes.",
    },
    {
      img: "/decentralized_exchange/icons/sourceses09.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Education",
      text:
        " We develop DEX platforms to facilitate learning and offer global access to educational opportunities with enhanced privacy and integrity.",
    },
    {
      img: "/decentralized_exchange/icons/sourceses10.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky  h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Insurance ",
      text:
        "Our DEX development solutions reduce reliance on traditional insurance intermediaries and enhance trust in insurance transactions.",
    },
    {
      img: "/decentralized_exchange/icons/sourceses11.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Agriculture",
      text:
        "We create decentralized exchanges for transparent trading of agricultural commodities, empowering farmers to access fair markets.",
    },
  ];

  const AboutLbm = [
    {
      img: "/decentralized_exchange/icons/why01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Expertise ",
      text:
        " Our skilled crypto developers with ten years of experience have a passion for innovation in decentralized exchange development.  ",
    },
    {
      img: "/decentralized_exchange/icons/why02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Tailored Solutions ",
      text:
        "Being an eminent custom blockchain development company, we craft bespoke solutions for decentralized exchange development, ensuring an optimized outcome.",
    },
    {
      img: "/decentralized_exchange/icons/why03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Security First",
      text:
        "We adopt robust measures to safeguard user assets, transactions, and platform integrity against potential threats and vulnerabilities.",
    },
    {
      img: "/decentralized_exchange/icons/why04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Blockchain Experts",
      text:
        "With our deep understanding of blockchain technology, we are able to handle the complexities of decentralized exchange development on Ethereum and Binance.",
    },
    {
      img: "/decentralized_exchange/icons/why05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "User Experience",
      text:
        "Our decentralised exchange development solutions provide user-friendly interfaces to make trading easy and accessible for users of all experience levels.",
    },
    {
      img: "/decentralized_exchange/icons/why06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Decentralized Finance",
      text:
        "We implement adaptable DeFi solutions in DEX development to offer enhanced accessibility, efficiency, and trust in the financial ecosystem.",
    },
    {
      img: "/decentralized_exchange/icons/why07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Responsive Support",
      text:
        "Our dedicated team is available all day to ensure that your decentralized exchange platform remains optimized and secure with evolving user requirements.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "James Shaw",
      text:
        "We felt delighted while working with LBM! Their team's expertise in blockchain technology was so good. They guided us through every step of DEX development, ensuring our platform was built with the latest tools and methodologies.",
    },
    {
      clientName: "Ethan Thomas Reynolds",
      text:
        "I selected LBM Solutions for my DEX development project, and it was the best decision ever. Their focus on security gave us peace of mind, and the final product exceeded our expectations. The platform is not only secure but also provides a seamless trading experience.",
    },
    {
      clientName: "Patrick Webb",
      text:
        " We were impressed with the level of support and maintenance provided by LBM’s team. They were responsive to our needs, addressing any issues promptly and ensuring our DEX remained up-to-date and fully functional. ",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Matthew Alexander",
      text:
        "The team at LBM provided a user-centric design for our DEX platform, which received rave reviews from our traders. It was intuitive and catered to both novice and experienced users. We received a significant increase in user engagement after its launch ",
    },
    {
      clientName: "Alexander Mason",
      text:
        " Communication with LBM’s developers was transparent and efficient from start to finish. They kept us informed of progress, provided regular updates, and welcomed our input every step of the way. It felt like a true partnership!",
    },
    {
      clientName: "Luke Wells",
      text:
        "We hired LBM for DEX development, and we were able to differentiate ourselves in the market. They introduced cutting-edge technologies and trading mechanisms that positioned our platform as a leader in DeFi.",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is the development of Dex?",
      body:
        "DEX development involves creating decentralized exchange platforms for cryptocurrency trading. It includes designing, coding, and implementing features like order matching, liquidity pools, and user interfaces for seamless trading experiences.",
    },
    {
      eventKey: "1",
      header: "How much does it cost to create a decentralized exchange?",
      body:
        "The average cost to create a decentralized exchange (DEX) is $45000-$70000. However, some factors like development complexity, features, security measures, and team rates may affect this cost.",
    },
    {
      eventKey: "2",
      header:
        "How long does it take to build a decentralized crypto exchange? ",
      body:
        "Generally, the time to build a decentralized crypto exchange may take from a few months to over a year, depending on factors such as complexity, features, and team size.",
    },
    {
      eventKey: "3",
      header: "What is a decentralized exchange script? ",
      body:
        "A decentralized exchange script is a pre-written code or software solution that enables the rapid development of decentralized exchanges (DEXs) by providing essential functionalities such as order matching and asset swapping.",
    },
    {
      eventKey: "4",
      header: "What is the most famous Decentralised exchange? ",
      body:
        "The most famous decentralized exchange (DEX) is Uniswap, known for its user-friendly interface, automated liquidity provision, and support for Ethereum-based tokens.",
    },
    {
      eventKey: "5",
      header: "Is decentralized exchange safe? ",
      body:
        "Yes, decentralized exchanges (DEXs) are secure. They offer increased security compared to centralized exchanges, as they eliminate the need for a central authority to hold users' funds, reducing the risk of hacking and fraud.",
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
                  textA="Decentralized"
                  clrtext="Exchange Development Company "
                  textB=""
                  heading="banner_h"
                />
                <BannerText text="Avail secure DEX platform and ensure seamless trading with our decentralized exchange development solutions. " />

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
                <img
                  src="/decentralized_exchange/banner.png"
                  alt="secure dex crypto exchange development company"
                  className="img-fluid"
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
            <div className="col-sm-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Our Decentralized  "
                  clrtext="Cryptocurrency Exchange Development"
                  textB="Services"
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="We provide tailored decentralized crypto exchange software with versatile, feature-rich solutions, empowering businesses globally. Our top-notch DEX platform drives innovation and revolutionizes finance with P2P crypto exchange development."
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
                  textA="Our Detailed  "
                  clrtext="Decentralized Exchange Software Development"
                  textB="Procedure"
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="In our decentralized cryptocurrency exchange app development, we use a method that delivers a secure DEX platform. Our solutions promote direct, transparent trading without intermediaries, providing users with control over their funds."
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
            <div className="col-12 ">
              <Heading_h2
                textA="Features of   "
                clrtext="Our Decentralized Exchange (DEX)"
                textB="Development"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
              />

              <ParaText
                f_custome=""
                para_text="Our crypto developers excel in developing efficient decentralized exchange platforms, offering unmatched expertise. Our solutions enhance functionality and flexibility, providing a user-centric and reliable alternative to traditional exchanges."
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
                         <h3> Technical Features</h3>
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

      <section className="currencyes bg-black">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="We Offer Decentralized "
                  clrtext="Exchange Scripts for Rapid DEX Development"
                  textB=""
                  heading="heading_h2 text-white"
                />

                <ParaText
                  f_custome="text-white"
                  para_text="Our exchange scripts reorganize rapid DEX development, offering pre-built, customizable solutions. These scripts ensure secure, efficient, and scalable platforms, enabling rapid deployment and enhancing user experience in decentralized trading."
                />
              </div>
            </div>
          </div>

          <div className="row text-center">
            <Card CardData={technology} />
          </div>
        </div>
      </section>

      <section className="crafting">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Custom Decentralized Exchange "
                  clrtext="Development Services For Diverse Industries"
                  textB=""
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Our decentralized exchange development renders secure and efficient platforms customized to specific industry requirements. These platforms enable consistent trading experiences, enhancing accessibility in DEX landscape. "
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
                  textA="Why Select Us as "
                  clrtext="Your Decentralized Exchange Development Company?"
                  textB=""
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="At LBM Solutions, we have a team of seasoned blockchain developers who provide outstanding cryptocurrency exchange development solutions. We prioritize efficiency and innovation, ensuring consistent decentralized platforms. "
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
              <ParaText para_text="Our clients highly regard our decentralized exchange development services for their robust functionality and innovative features. They appreciate our dedication to creating user-friendly platforms that enhance their trading experience and drive business success." />
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
