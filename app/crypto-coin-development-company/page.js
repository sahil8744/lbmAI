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

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Crypto Coin Designing & Development",
      text:
        "We specialize in designing and developing unique crypto coins to ensure security and efficiency for digital currency.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Stablecoin Development",
      text:
        "We create reliable digital currencies related to stable assets to secure your transactions and make value consistent. ",
      isLink: true,
      linkUrl: "/sto-development-company",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Initial Coin Offering Development",
      text:
        "Our developers craft and manage ICOs, providing comprehensive solutions to elevate your cryptocurrency project.",
      isLink: true,
      linkUrl: "/ico-development ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Altcoin Development",
      text:
        "Our services focus on creating innovative, custom cryptocurrencies that offer unique features and functionalities.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Crypto Coin Listing",
      text:
        "We simplify the crypto coin listing process, ensuring your digital currency gains optimal visibility on leading exchanges. ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Crypto Coin Marketing ",
      text:
        "Our team focuses on boosting your coin's visibility and engaging potential investors through strategic campaigns that highlight its unique features. ",
        isLink: true,
        linkUrl: "/crypto-marketing-agency",
    },
  ];

  const BasicFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Custom Blockchain Integration",
      text:
        " We tailored",
        LinkHref:"/blockchain-development-company",
        LinkData:"blockchain solutions",
        text1:"that align with your business model for optimal performance and security.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Tokenomics Design",
      text:
        "Our crypto services render strategic planning of token distribution, usage, and retention mechanisms to drive value and utility. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "ICO/IDO Support",
      text:
        "Get comprehensive assistance from",
        LinkHref:"/crypto-token-development-company",
        LinkData:"token creation",
        text1:"to launch, ensuring a successful initial offering with robust marketing strategies.",
      },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Smart Contracts",
      text:
        "We introduce automated, self-executing contractual states that increase trust and transparency while reducing overhead.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-md-4",
      p_opacity: "opacity-100",
      heading: "Multi-Currency Wallets",
      text:
        "We",
        LinkHref:"/crypto-wallet-development-company",
        LinkData:"develop secure wallets",
        text1:"that support multiple cryptocurrencies, enhancing user convenience and safety. ",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Consensus Mechanisms",
      text:
        "We deploy proof-of-work, proof-of-stake, or other Consensus algorithms to ensure network security and integrity.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Encryption Protocols",
      text:
        "Our advanced cryptographic techniques help to safeguard transactions and protect user data against unauthorized access. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Token Standard Compliance",
      text:
        "We follow blockchain standards such as ERC-20 for Ethereum to facilitate interoperability and easy exchange. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Atomic Swaps ",
      text:
        "Our cryptocurrency creation services enable direct, cross-chain trading of cryptocurrencies without any trusted third parties or centralized exchanges.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Privacy Features",
      text:
        "Some techniques like zero-knowledge proofs are employed to offer optional transaction anonymity and enhance privacy.",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/cryptocoin_page/icons/process_coin01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Business Consultation",
    },
    {
      img: "/cryptocoin_page/icons/process_coin02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Planning ",
    },
    {
      img: "/cryptocoin_page/icons/process_coin03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Technical and Design Phase",
    },
  ];

  const DevelopmentProcess_b = [
    
    {
      img: "/cryptocoin_page/icons/process_coin06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Wallet Setup",
    },
    {
      img: "/cryptocoin_page/icons/process_coin05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Initial Coin Offering",
    },
    {
      img: "/cryptocoin_page/icons/process_coin04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Coin Development ",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/cryptocoin_page/icons/process_coin07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Launch and Market ",
    },
    {
      img: "/cryptoexchangeImg/icons/08.png",
      svg_cls: "d-none",
      add_class: "opacity-0",
      columns: "col-sm-6 col-md-4 ",
      heading: "Crypto Exchange Implementation",
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
      img: "/cryptocoin_page/icons/empowering01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Finance",
      text:
        " We develop crypto coins to revolutionize banking and payments by enabling faster, cheaper, and more secure transactions.",
    },
    {
      img: "/cryptocoin_page/icons/empowering02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Healthcare",
      text:
        "Our crypto coin services facilitate to secure the exchange of medical records, improve billing processes, and manage supply chains.",
    },
    {
      img: "/cryptocoin_page/icons/empowering03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate",
      text:
        "Our services help your clients attain real-time, transparent, and tamper-proof recording of property transactions, reducing fraud and speeding up processes.",
    },
    {
      img: "/cryptocoin_page/icons/empowering04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Entertainment and Media",
      text:
        "We develop crypto coins to manage and protect intellectual property rights, reorganize royalty payments, and enable direct artist-to-fan transactions.",
    },
    {
      img: "/cryptocoin_page/icons/empowering05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Retail",
      text:
        "With our services, you can simplify payments, reduce transaction fees, and provide secure and immutable customer data management.",
    },
    {
      img: "/cryptocoin_page/icons/empowering06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Legal Services",
      text:
        "We develop crypto coins to enhance the efficiency of contract management and verification processes through",
        LinkHref : "/smart-contract-development-company",
        LinkData:" smart contracts.",
      
      },
    {
      img: "/cryptocoin_page/icons/empowering07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Government Services ",
      text:
        " We serve governments with crypto coin development, from administering welfare and subsidies to secure voting mechanisms.",
    },
    {
      img: "/cryptocoin_page/icons/empowering08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Education",
      text:
        "Our solutions secure student records and facilitate the administration of fees and scholarships in educational institutions.",
      // background: "/cryptwalletImg/wallet_features.png",
    },
    {
      img: "/cryptocoin_page/icons/empowering09.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Insurance",
      text:
        "Our smart contract development services automate claims processing and fraud prevention, making the industry more reliable.",
    },
    {
      img: "/cryptocoin_page/icons/empowering10.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Logistics",
      text:
        " We provide coherent crypto services to enhance transparency in the supply chain, real-time tracking, and ensure the integrity of shipment data.",
    },
    {
      img: "/cryptocoin_page/icons/empowering11.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Gaming ",
      text:
        "Our services enable secure, fast, and transparent in-game transactions and ownership of virtual goods, transforming how players interact and trade within gaming ecosystems.",
    },
  ];

  const technology = [
    {
      img: "/cryptocoin_page/icons/coin_01.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Ethereum ",
    },
    {
      img: "/cryptocoin_page/icons/coin_02.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "EOS  ",
    },
    {
      img: "/cryptocoin_page/icons/coin_03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "tron",
    },
    {
      img: "/cryptocoin_page/icons/coin_04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: " mx-auto mb-0 mt-3",
      heading: "TEzos",
    },
    {
      img: "/cryptocoin_page/icons/coin_05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "hyperledger",
    },
    {
      img: "/cryptocoin_page/icons/coin_06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: " mx-auto mb-0 mt-3",
      heading: "Stellar",
    },
    {
      img: "/cryptocoin_page/icons/coin_07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: " mx-auto mb-0 mt-3",
      heading: "matic",
    },
    {
      img: "/cryptocoin_page/icons/coin_08.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Chainlink",
    },
    {
      img: "/cryptocoin_page/icons/coin_09.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "ripple",
    },
    {
      img: "/cryptocoin_page/icons/coin_10.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Fantom",
    },
    {
      img: "/cryptocoin_page/icons/coin_11.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Binance",
    },
    {
      img: "/cryptocoin_page/icons/coin_12.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Huobi",
    },
  ];

  const AboutLbm = [
    {
      img: "/cryptocoin_page/icons/icon01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Expert Team",
      text:
        "We have a team of 200+ crypto coin developers to craft unique crypto coin solutions tailored to meet your specific business needs.",
    },
    {
      img: "/cryptocoin_page/icons/icon02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Tailored Solutions ",
      text:
        "Understating different needs, our developers offer custom-made crypto coin development services from custom blockchain integration to personalized coins.",
    },
    {
      img: "/cryptocoin_page/icons/icon03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Scalability  ",
      text:
        "Our solutions are designed to grow with your business. We implement scalability techniques to handle increasing transaction volumes and user demands.",
    },
    {
      img: "/cryptocoin_page/icons/icon04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Transparent Communication",
      text:
        "We provide regular updates and maintain an open line of communication to ensure your vision is accurately realized.",
    },
    {
      img: "/cryptocoin_page/icons/icon05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Customer-Centric Approach ",
      text:
        "We provide custom crypto development solutions that ensure a partnership built on trust and mutual growth",
    },
    {
      img: "/cryptocoin_page/icons/icon06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Proven Track Record",
      text:
        "Our track record of successful projects and happy clients showcases our dedication to quality and excellence.",
    },
    {
      img: "/cryptocoin_page/icons/icon07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Dedicated Support",
      text:
        "We offer post-launch technical support to ensure your crypto coin remains efficient and adaptable to ever-changing market conditions.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Amber Reed",
      text:
        "I was amazed by the level of professionalism and expertise of LBM Solutions. The custom solutions they provided perfectly aligned with our goals, and their ongoing support has been invaluable. They truly exceeded my expectations and helped take my business to the next level. ",
    },
    {
      clientName: "Jeffrey Rodriguez)",
      text:
        "The working process of team at LBM Solutions is quite admirable. Their in-depth knowledge of blockchain technology and attention to detail ensured our project was completed on time and within budget.",
    },
    {
      clientName: "Heather Murphy",
      text:
        "We were thoroughly impressed by LBM Solutions' ability to deliver a custom crypto coin solution tailored to our needs. Their professional team, innovative approach, and focus on security made them an ideal partner for our blockchain project. ",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Steven Martinez",
      text:
        "Choosing LBM Solutions for our crypto coin development was a great decision. Their skilled team provided us with a secure, scalable, and innovative solution that has been a significant asset to our business. ",
    },
    {
      clientName: "Danielle Evans",
      text:
        "LBM Solutions rendered innovative solutions to develop crypto coins, combined with security measures, and gave us confidence in our digital currency's reliability. The team's expertise and ongoing support have been invaluable to our project's success. ",
    },
    {
      clientName: "Jason Carter",
      text:
        "LBM Solutions provided exceptional service for our cryptocurrency development. The team had the proficiency to deliver a secure and efficient solution that met all our requirements.",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is crypto coin development?",
      body:
        "Cryptocoin development is the process of creating digital currencies using blockchain technology. It involves designing, coding, and launching secure and efficient cryptocurrencies tailored to meet specific business needs.",
    },
    {
      eventKey: "1",
      header: "How much does it cost to create your own cryptocurrency?",
      body:
        "Around $5000 to $30,000 is required to develop cryptocurrency. This price may vary depending on complexity, security attributes, and custom requirements. ",
    },
    {
      eventKey: "2",
      header: "How much time is required to develop a Crypto Coin? ",
      body:
        "Usually, crypto coin development takes a few weeks to several months. This duration may be extended according to the project's complexity, required features, and the development team's expertise. ",
    },
    {
      eventKey: "3",
      header: "Can You Create Your Own Coin?",
      body:
        "Yes, you can create your coin. It involves designing, coding, and launching a new cryptocurrency using blockchain technology, often with the help of experienced developers.",
    },
    {
      eventKey: "4",
      header: "How to create your own cryptocurrency? ",
      body:
        "To create your own cryptocurrency, you'll need to define its purpose, choose a blockchain platform, write and deploy smart contracts, and ensure the placement of security features. Hiring experienced developers can help. ",
    },
  ];

  const sectionsData = [
    {
      heading: "Get Ready to Create Your Own Cryptocurrency",
      paraText:
        "Leading the way in crypto coin development, our skilled crypto coin developers have more than 10 years of expertise in crafting customized crypto coin development solutions designed for maximum security and scalability",
      imgSrc: "/cryptocoin_page/teach_img.png",
      imgAlt: "ready to create crypto coin development service",
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
                  textA=""
                  clrtext="Crypto Coin "
                  textB="Development Company"
                  // heading="heading_class"
                  heading="banner_h"
                />
                <BannerText text="Being a well-established crypto coin development company, we assist in crypto coin development to expand your business.   " />

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
                  src="/cryptocoin_page/banner.png"
                  alt="best crypto coin development company"
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
                  textA=""
                  clrtext="Our Crypto Coin "
                  textB="Development Services"
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="Our crypto coin development services focus on using Layer 1 and Layer 2 blockchain technology to make your digital currency faster, more secure, and easier to scale. With our help, you can stand out in the crowded market."
                />
              </div>
            </div>
            <div className="col-sm-12  mt-4">
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
                textA=" Benefits Offered by Our  "
                clrtext="Cryptocurrency Development Services"
                textB=""
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
              />

              <ParaText
                f_custome=""
                para_text="Our cryptocurrency development solutions provide diverse crypto coin features to enhance user experience and ensure robust performance with multi-layer security."
              />
            </div>
            <div className="col-12 mt-4">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={12}>
                    <Nav variant="pills" className="">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          <h3>Business Features</h3>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" className="ms-3">
                          <h3>Technical Features</h3>
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

      <section className="devel_process">
        <div className="container">
          <div className="row mb-4 mb-lg-5 ">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA=" Process We Follow for Your"
                  clrtext="Cryptocurrency Coin Development"
                  textB=" "
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="Being an eminent coin development company, we utilize a comprehensive crypto coin development process to build and market your crypto coin according to the latest trends."
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

      <section className="currencyes bg-black">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Our Cryptocurrency Development Utilizes a"
                  clrtext="Secure Technology Framework "
                  textB=""
                  heading="heading_h2 text-white"
                />

                <ParaText
                  f_custome="text-white color_white"
                  para_text1="Ensuring scalability and security to develop"
                  LinkHref ="/cryptocurrency-exchange-development-company" LinkData="crypto exchange,"
                  para_text="our professional blockchain developers provide you valuable insights and guidance on cost estimation and project planning according to your requirements and budget. "
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
                  textA="Empowering Industries with Our"
                  clrtext="Crypto Coin Development Services"
                  textB=""
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Cryptocoin development is revolutionizing various industries, including finance, healthcare, real estate, and entertainment, by enhancing security, transparency, and efficiency in transactions and data management.  "
                />
              </div>
            </div>
          </div>
          <div className="row ">
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
                  textA="Why Select Us as Your"
                  clrtext="Crypto Coin Development Company?"
                  textB=""
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="Renowned for crypto coin development, LBM Solutions delivers innovative, secure, and scalable cryptocurrency creation service and ensures that your digital currency is built with the highest standards of security. "
                />
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
              <ParaText para_text="We are prominent in crypto coin development services. Here, we display the impact of our service through the eyes of our clients. From startups to industry leaders, we have served the diverse range of businesses we've helped thrive.”" />
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
