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
      heading: "Smart Contract Audit Services",
      text:
        "Our developers conduct detailed smart contract audits, combining manual and automatic tests to ensure security and quality.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Smart Contract Consulting ",
      text:
        "Leverage our ",
        LinkHref : "/blockchain-development-company",
        LinkData:" blockchain consultants,",
        text1: "for expert digital contract insights, platform selection, and comprehensive smart contract audits.",
        // LinkHref1 : "/metaverse-game-development",
        // LinkData1:"3D gaming. ",
      },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Smart Contract Architecture",
      text:
        "Our team delivers top-tier smart contract frameworks with secure, transparent, and immutable blockchain architecture.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "DeFi Smart Contract Development",
      text:
        "Our smart contract development enhances  ",
        LinkHref : "/defi-development-company",
        LinkData:"DeFi",
        text1: "with secure, automated smart contracts for lending, borrowing, and trading.",
      },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "NFT Smart Contract Development",
      text:
        "  Launch your",
        LinkHref : "/nft-marketplace-development-company",
        LinkData:"NFT marketplace",
        text1: "with our resilient smart contract development platform, ensuring secure, transparent trading experiences.",
      },

    
  ];

  const BasicFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Automation ",
      text:
        "Our smart contract development services help execute transactions and agreements based on predefined rules with, reducing the need for manual intervention.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Cost Reduction",
      text:
        "Smart contracts reduce administrative and transactional costs, automating processes traditionally handled by intermediaries.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Enhanced Security ",
      text:
        "With blockchain technology, a decentralized and tamper-proof environment is created to reduce the risks of fraud and malicious attacks.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Improved Accuracy ",
      text:
        " Automated contracts eliminate the errors of manually filling out and processing forms, leading to higher accuracy in business transactions.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-md-4",
      p_opacity: "opacity-100",
      heading: "Customization",
      text:
        "Customized smart contracts meet the specific needs and conditions of any business, providing flexibility across various industries.",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Self-Execution ",
      text:
        "Smart contracts allow legal agreements to meet lines of code, executing the terms of the deal autonomously. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Immutable ",
      text:
        " When a smart contract is deployed on the blockchain, no party can alter the terms of the agreement, providing a secure and stable framework for operations.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Decentralized  ",
      text:
        "Our smart contract development eliminates the central point of failure and the need for a trusted intermediary, reducing potential manipulation or fraud.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Automated Compliance ",
      text:
        " Our smart contract coding includes regulatory requirements, ensuring compliance is automatically enforced without manual oversight. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Tamper-proof",
      text:
        " The decentralized and cryptographic nature of blockchain ensures the resiliency of smart contracts against tampered and hacking attempts.",
    },
   
  ];

  const DevelopmentProcess_a = [
    {
      img: "/smartcontract_page/icons/devprocess01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Requirement Analysis",
    },
    {
      img: "/smartcontract_page/icons/devprocess02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Strategy and Technical Design",
    },
    {
      img: "/smartcontract_page/icons/devprocess03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Development Procedure  ",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/smartcontract_page/icons/devprocess05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Launch and Maintenance ",
    },
   
    {
      img: "/smartcontract_page/icons/devprocess04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Testing and Quality Assurance ",
    },
    {
      img: "/smartcontract_page/icons/devprocess03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Deployment on Blockchain",
    },
 
  ];

  const DevelopmentProcess_c = [
    {
      img: "/smartcontract_page/icons/devprocess06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Customer Service",
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

  const BlockchainPlatforms = [
    {
      img: "/smartcontract_page/icons/coin01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading_h5:"mt-3",
      img_class:"w-25",
      heading: "Ethereum Smart Contract Development",
      text:
        "We create a harmonious trifecta of technical prowess, intelligent strategies and design-thinking-driven process to deliver Ethereum smart contract development solutions.",
    },
    {
      img: "/smartcontract_page/icons/coin02.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading_h5:"mt-3",
      img_class:"w-25",
      heading: "Tron Smart Contract Development",
      text:
        "We provide TRON smart contract development services to help our clients create efficient & scalable decentralized solutions.",
    },
    {
      img: "/smartcontract_page/icons/coin03.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading_h5:"mt-3",
      img_class:"w-25",
      heading: "Hyperledger Smart Contract Development",
      text:
        "Our experienced developers work dedicatedly to provide enterprises with secure Hyperledger smart contract development services as their requirements.",
    },
    {
      img: "/smartcontract_page/icons/coin04.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading_h5:"mt-3",
      img_class:"w-25",
      heading: "Binance Smart Contract Development",
      text:
        "We deliver BSC smart contracts with a primary degree of precision and highly automated asset management for the optimal use of participants seeking Binance smart contract",
    },
    {
      img: "/smartcontract_page/icons/coin05.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading_h5:"mt-3",
      img_class:"w-25",
      heading: "EOS Smart Contract Development",
      text:
        "We create smart contracts on EOS to support new-age dApps development that can perform the intended function as per the users' requirements.",
    },
    {
      img: "/smartcontract_page/icons/coin06.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading_h5:"mt-3",
      img_class:"w-25",
      heading: "Polkadot Smart Contract Development",
      text:
        "We design powerful smart contracts on Polkadot Blockchain by leveraging the interoperability capabilities of the platform.",
    },


   

  ];


  const Crafting = [
    {
      img: "/smartcontract_page/icons/smartcont01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Finance ",
      text:
        "Automate transactions and enforce agreements without intermediaries, reducing fraud and speeding up settlements in banking and insurance.",
      // background: "/cryptwalletImg/wallet_features.png",
    },
    {
      img: "/smartcontract_page/icons/smartcont02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate ",
      text:
        "Our smart contract development solutions automate deeds transfer and insurance services to streamline property transactions, eliminating paperwork.  ",
    },
    {
      img: "/smartcontract_page/icons/smartcont03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Healthcare  ",
      text:
        "Smart contracts secure patient data and manage consent for health information sharing, improving compliance and operational efficiencies.",
    },
    {
      img: "/smartcontract_page/icons/smartcont04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Supply Chain ",
      text:
        " We provide transparency and traceability in supply chains, from origin to consumer, ensuring authenticity and reducing counterfeiting.",
    },
    {
      img: "/smartcontract_page/icons/smartcont05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Entertainment ",
      text:
        "Develop smart contracts to automate royalty payments, ensuring artists and creators are paid fairly and promptly without any third-party management.",
    },
    {
      img: "/smartcontract_page/icons/smartcont06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Legal ",
      text:
        "Smart Contracts execute legal agreements like wills and contracts, ensuring compliance and execution according to pre-determined rules.",
    },
    {
      img: "/smartcontract_page/icons/smartcont07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Government ",
      text:
        "Improve transparency and efficiency in government operations, such as voting systems and public records management.",
    },
    {
      img: "/smartcontract_page/icons/smartcont08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Automotive   ",
      text:
        " Our solutions enable secure, transparent transactions for everything from car sales to automated fleet management and integrated insurance services. ",
      // background: "/cryptwalletImg/wallet_features.png",
    },
    {
      img: "/smartcontract_page/icons/smartcont09.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Energy  ",
      text:
        "Peer-to-peer transactions in energy trading platforms allow users to buy and sell energy without traditional intermediaries.",
    },
    {
      img: "/smartcontract_page/icons/smartcont10.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Manufacturing  ",
      text:
        "Automate supply ordering, quality control processes, and maintenance schedules to update operations at lower downtime and higher production efficiency.",
    },
    {
      img: "/smartcontract_page/icons/smartcont11.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Advertising ",
      text:
        "Smart contract development facilitates transparent and verifiable transactions between advertisers and publishers to ensure accurate billing.",
    },
   

  ];
  

  const AboutLbm = [
    {
      img: "/smartcontract_page/icons/whylbm01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Technical Process   ",
      text:
        "As a dedicated smart contract company, our sole focus is on blockchain technologies, ensuring excellence in every project we undertake.  ",
    },
    {
      img: "/smartcontract_page/icons/whylbm02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Expert Team",
      text:
        " We have 200+ smart contract developers dedicated to developing your smart contract architecture and recommending optimal technology strategies to ensure success.",
    },
    {
      img: "/smartcontract_page/icons/whylbm03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Customized Solutions",
      text:
        " We deliver",
        LinkHref : "/custom-software-development-services",
        LinkData:"custom solutions",
        text1: "for your specific audience. With a clear roadmap, we ensure simplified development and deployment of smart contract projects.",
      },
    {
      img: "/smartcontract_page/icons/whylbm04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Industry Competency",
      text:
        "Our team have extensive knowledge across various industries, enabling us to customize Smart Contract development services to meet specific business needs.",
    },
    {
      img: "/smartcontract_page/icons/whylbm05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Cost-efficient Support",
      text:
        "Our cost-effective support involves providing complete, affordable services that help clients maximize their investment in blockchain technology.",
    },
    {
      img: "/smartcontract_page/icons/whylbm06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Complete Support ",
      text:
        "Our commitment extends beyond product launch. We offer comprehensive post-delivery support, allowing you to concentrate on scaling your business.",
    },
    {
      img: "/smartcontract_page/icons/whylbm07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "After-Sales Support ",
      text:
        "Our support and maintenance services ensure the troubleshooting of technical issues and the implementation of upgrades and enhancements.",
    },
  ];



  const ClientData_aa = [
    {
      clientName: "April Turner",
      text:
        "Working with LBM on our smart contract development was a revelation. Their technical expertise ensured that our contracts were not only efficient but also secure. Highly recommended for any blockchain project! ",
    },
    {
      clientName: "Leroy Washington",
      text:
        "I had a fantastic experience working with LBM. Their team of developers demonstrated a deep understanding of blockchain technology and delivered a flawless smart contract solution for our project.",
    },
    {
      clientName: "Sheila Alexander",
      text:
        "The team at LBM acted as more than developers; they were trusted advisors throughout our project. Their guidance on blockchain technology and smart contract integration was instrumental in our success.",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Clarence Ross",
      text:
        " We engaged LBM Solutions for smart contract development, and they proved to be a reliable and trustworthy partner. Throughout the development process, they maintained clear communication and addressed all concerns or questions.",
    },
    {
      clientName: "Sabrina Ward",
      text:
        "The expertise of LBM’s team in smart contract development was evident from the outset, and they consistently delivered high-quality solutions within the specified timelines. ",
    },
    {
      clientName: " Harold Hayes",
      text:
        "Working with LBM Solutions was a breeze! Their team of developers demonstrated a deep understanding of blockchain technology and delivered smart contract solutions that met our exact requirements. I wholeheartedly endorse this company",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is a smart contract?",
      body:
        "It is a kind of digital contract executed automatically when pre-determined conditions are met. The smart contarct is code that runs on a blockchain platform, which ensures that the contract is decentralized, transparent, and tamper-proof. ",
    },
    {
      eventKey: "1",
      header: "What are the four significant parts of a smart contract?",
      body:
        "The four major components of a smart contract that define its functionality and purpose within a blockchain are contract Initialization, functions, state variables, and events. ",
    },
    {
      eventKey: "2",
      header: "Where can I develop smart contracts",
      body:
        "Several platforms are available for smart contract development, such as Ethereum, Binance Smart Chain (BSC), Solana, Tazos, etc. The choice of platform often depends on the particular needs of the project, the programming languages supported, scalability, security, and community support. ",
    },
    {
      eventKey: "3",
      header: "How much does it cost to develop a smart contract?",
      body:
        "The cost for smart contract development is nearly $3000. However, the price may reach even more than $10,000 based on the needs of the project. ",
    },
    {
      eventKey: "4",
      header: "How long does it take to develop a smart contract?",
      body:
        "A smart contract can be developed in a few months. More experienced developers might take some days or weeks. Moreover, some factors, such as the complexity of the contract, platforms, tools, and compliance requirements, may have an impact on its development period. ",
    },
    {
      eventKey: "5",
      header: "Which are appropriate blockchain platforms for smart contract development?",
      body:
        "Some extensively utilized platforms are Ethereum, Binance Smart Chain, Cardano, Solana, Polkadot, Avalanche, and Tezos. The blockchain platform for smart contract development can be selected according to various factors, like scalability needs, programming language preferences, security considerations, and community support. ",
    },
   
  ];

  const sectionsData = [
    {
      heading: "Hire Smart Contract Developers ",
      paraText:
        "As an eminent smart contract development company in USA, our seasoned smart contract developers leverage their extensive expertise to design automated solutions that automate complex business agreements and transactions.  ",
      imgSrc: "/smartcontract_page/teach_img.png",
      imgAlt: "unlock the potential with smart contract developers",
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
                  textA=" "
                  clrtext="Smart Contract Development  "
                  textB=" Company"
                  heading="banner_h"
                />
                <BannerText text="We offer comprehensive smart contract development solutions to automate transactions across various industries." />

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
                  src="/smartcontract_page/banner.png"
                  alt="smart contract development company in USA"
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
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Smart Contract "
                  clrtext="Development Services "
                  textB=""
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="Unlock the potential of blockchain with our smart contracts development services. We empower your business with innovative solutions that accelerate contract execution, reduce expenses, and drive automation. "
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
          <div className="row  ">
            <div className="col-12 ">
              <Heading_h2
                textA="Why Your Business Needs  "
                clrtext="Smart Contract Development"
                textB=""
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0 "
              />
          
              <ParaText
                f_custome=""
                para_text="Our solutions introduce various features that make smart contract development highly attractive for businesses looking for efficient, low-cost, and highly secured operations."
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

      <section className="blockchain_platforms">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Blockchain Platforms, We Work On For "
                  clrtext="Smart Contract Development"
                  textB=""
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Our smart contract developer develops and deploys smart contracts on major blockchain platforms. We have proficiency in several programming languages to automate your business contract successfully."
                />
              </div>
            </div>
          </div>
          <div className="row ">
            <Card CardData={BlockchainPlatforms} />
          </div>
        </div>
      </section>

      <section className="devel_process">
        <div className="container">
          <div className="row mb-4 mb-lg-5 ">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA=""
                  clrtext="Smart Contract Development "
                  textB="Process"
                  heading="heading_h2 mb-0"
                />
            
                <ParaText
                  f_custome=""
                  para_text="Navigate smart contract development with a clear roadmap, ensuring secure, efficient agreements tailored to your business needs. We exploit a coherent process to develop smart contracts through different stages. "
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

      <section className="cta">
        <div className="container">
          <Cta />
        </div>
      </section>

      <section className="crafting">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Smart Contract  "
                  clrtext="Use Cases In Different"
                  textB="Industries"
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Smart contract development revolutionizes industries worldwide by enhancing transparency, auditability, and efficiency in traditional business workflows."
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
                  textA="Why Choose LBM Solutions as Your  "
                  clrtext="Smart Contract Development Company?"
                  textB=" "
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="At LBM Solutions, our expert developers offer unique solutions to align precisely with your business necessities. We deliver excellent Smart Contract Development Services to benefit businesses with superior efficiency, security, and reliability. "
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
              <ParaText para_text="See how our smart contract development has transformed businesses! Our clients share their success stories and highlight secure transactions that drive efficiency. Their experiences reflect our expertise and commitment to delivering smooth blockchain solutions." />
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
