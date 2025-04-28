"use client";
import React, { useRef } from "react";
import Image from 'next/image';

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
      heading: "Hire Expert Blockchain Developers for Transparent Blockchain Solutions",
      paraText:
        " tailored to diverse industry needs, from smart contracts to NFTs, transforming business operations.",
        paraText1:"At LBM Solutions, our team of 200+ blockchain developers specializes in the development of blockchain products and", 
        Link_href:"/website-development",
         Link_data:"websites",
        imgSrc: "/blockchain_page/teach_img.webp",
      imgAlt: "hire blockchain developers",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Blockchain Smart Contract Development",
      text:
        "As a prestigious blockchain development company, we craft secure smart contracts, automating agreements for various use cases. ",
        isLink: true,
        linkUrl: "/smart-contract-development-company ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Metaverse Development Services",
      text:
        "We offer metaverse development solutions for NFT",
        LinkHref : "/nft-marketplace-development-company",
        LinkData:" marketplaces,",
        text1: "social media, and",
        LinkHref1 : "/metaverse-game-development",
        LinkData1:"3D gaming. ",
        isLink: true,
        linkUrl: "/metaverse-development-company",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Token Development",
      text:
        "Our blockchain developers specialize in creating secure crypto tokens for decentralized data exchange across blockchain networks.",
        isLink: true,
        linkUrl: "/crypto-token-development-company",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Custom NFT Development",
      text:
        "We develop unique Non-Fungible Token (NFT) solutions for diverse needs, offering customization for digital assets and collectibles.",
        isLink: true,
        linkUrl: "/nft-development-company",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Crypto Exchange Platform Development",
      text:
        "We develop highly secure cryptocurrency exchange platforms with advanced features like trading bots and multi-wallet systems.",
        isLink: true,
        linkUrl: "/cryptocurrency-exchange-development-company",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Cryptocurrency Wallet Development",
      text:
        "Our blockchain development solutions render user-friendly crypto wallets for storing and transacting with",
        LinkHref : "/crypto-coin-development-company",
        LinkData:" cryptocurrencies,",
        text1: "and digital assets.",
        isLink: true,
        linkUrl: "/crypto-wallet-development-company",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Blockchain Game Development",
      text:
        "Our experts craft blockchain games with secure transactions, NFTs, smart contracts, decentralized economy, and immersive gameplay experiences.",
       
        isLink: true,
        linkUrl: "/blockchain-game-development-company",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/blockchain_page/icons/process01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Requirement Analysis ",
    },
    {
      img: "/blockchain_page/icons/process02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Framework Selection",
    },
    {
      img: "/blockchain_page/icons/process03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Designing Phase",
    },
  ];

  const DevelopmentProcess_b = [
   
    {
      img: "/blockchain_page/icons/process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Blockchain Integration ",
    },
    {
      img: "/blockchain_page/icons/process06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Testing & QA",
    },
    {
      img: "/blockchain_page/icons/process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Smart Contract Development",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/blockchain_page/icons/process07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Launch and Updates",
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
      heading: "Smart Contracts ",
      text:
        "Our blockchain development service providers craft self-executing contracts with coded terms to automate and enforce agreements. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Decentralization",
      text:
        "We develop a distributed network structure that ensures transparency and censorship resistance, enabling peer-to-peer transactions and trustless interactions.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Tokenization ",
      text:
        "Our blockchain development solutions craft crypto tokens for trading, investment, or other purposes, ensuring fractional ownership, liquidity, and value creation. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Consensus Mechanisms",
      text:
        "We implement suitable consensus algorithms that maintain integrity and security and validate transactions in the blockchain.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Enhanced Security",
      text:
        "We deploy cryptographic techniques in the development of blockchain to secure transactions and data, protecting against fraud and attacks. ",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Token Standards",
      text:
        "We utilize different platforms, such as ERC-20 and ERC-721, to develop and manage crypto tokens, enabling interoperability.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Interoperability",
      text:
        "Our blockchain development solutions enable compatibility with other networks, facilitating data exchange and collaboration across different platforms. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Wallet Development",
      text:
        "The custom software features responsive design or dedicated mobile app versions to ensure seamless functionality across all devices. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Encryption",
      text:
        " We utilize encryption techniques to develop blockchain platforms that protect sensitive information, ensuring confidentiality and privacy of data on the blockchain.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Scalability Solutions",
      text:
        "We implement innovative techniques in our custom blockchain development to handle increased transaction volumes and network growth.",
    },
  ];

  const sectionsData_a = [
    {
      heading:
        "Our Tech Stack Approach to Blockchain Development Platform",
      paraText:
        "We utilize the latest security protocols and technologies to provide scalable blockchain solutions for the development of blockchain. Our technical blockchain development approach ensures alignment with global market trends and standards.",
      imgSrc: "/blockchain_page/teach_img_a.webp",
      imgAlt: "blockchain platform development tech stack",
    },
  ];

  const Crafting = [
    {
      img: "/blockchain_page/icons/resoures01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Finance ",
      text:
        "Blockchain in banking enhances transaction security, reduces fraud, and ensures transparency in financial services, enabling faster payments.",
    },
    {
      img: "/blockchain_page/icons/resoures02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Healthcare ",
      text:
        "Our blockchain development solutions secure patient data and reorganize medical records organization, ensuring data privacy across healthcare systems.",
    },
    {
      img: "/blockchain_page/icons/resoures03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Supply Chain  ",
      text:
        "Our blockchain development firm provides blockchain software to track goods from origin to delivery, improving efficiency in supply chain management.",
    },
    {
      img: "/blockchain_page/icons/resoures04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate",
      text:
        "Blockchain in real estate facilitates property transactions to ensure safe and tamper-proof records, reducing fraud and simplifying the process.",
    },
    {
      img: "/blockchain_page/icons/resoures05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Government ",
      text:
        "Our blockchain development team crafts innovative blockchain platforms to keep public records secure and augment processes like voting verification.",
    },
    {
      img: "/blockchain_page/icons/resoures06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Insurance",
      text:
        "We develop blockchain software that helps to automate claims processing, ensure data accuracy, and improve trust between insurers and policyholders.",
    },
    {
      img: "/blockchain_page/icons/resoures07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Education ",
      text:
        "We create a blockchain platform for education to ensure credential authenticity and keep the educational administration and certification processes transparent.",
    },
    {
      img: "/blockchain_page/icons/resoures08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Entertainment ",
      text:
        "Our blockchain-based  ",
        LinkHref : "/mobile-app-development-services",
        LinkData:" mobile app solutions,",
        text1: "are designed to secure content distribution and protect royalty payments, ensuring fair compensation for creators.",
      },
    {
      img: "/blockchain_page/icons/resoures09.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander  p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Logistics",
      text:
        "We provide blockchain development services to create coherent software for real-time tracking, which reduces paperwork and enhances transparency in logistics.",
    },
    {
      img: "/blockchain_page/icons/resoures10.png",
      svg_cls: "d-none",
      add_class: " bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Agriculture ",
      text:
        "Blockchain solutions in agriculture allow farmers to track productivity from farm to table, ensuring food safety, reducing waste, and improving sustainability.",
    },
    {
      img: "/blockchain_page/icons/resoures11.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Automotive ",
      text:
        "We are proficient in the development of blockchain for recording vehicle history and enabling safe transactions for buying, selling, and leasing vehicles.",
    },
  ];

  const AboutLbm = [
    {
      img: "/blockchain_page/icons/why01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Expertise in Blockchain",
      text:
        "Our team provides extensive blockchain development consultation with smart contracts, dApps, and blockchain integration, ensuring optimal performance.  ",
    },
    {
      img: "/blockchain_page/icons/why02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Security Solutions",
      text:
        " Our custom blockchain development solutions provide data reliability with decentralized platforms to safeguard transactions and protect assets from threats.",
    },
    {
      img: "/blockchain_page/icons/why03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Innovation ",
      text:
        "Being an outstanding USA based blockchain development firm, we deliver advanced solutions to create versatile and efficient blockchain systems.",
    },
    {
      img: "/blockchain_page/icons/why04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Cost Efficiency",
      text:
        "We deliver consistent blockchain solutions that optimize costs without compromising quality, maximizing return on investment (RoI).",
    },
    {
      img: "/blockchain_page/icons/why05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Tailored Solutions",
      text:
        "Our team customizes blockchain platforms to fit your unique business needs, enhancing efficiency and aligning with specific industry trends.",
    },
    {
      img: "/blockchain_page/icons/why06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Comprehensive Approach",
      text:
        "We employ a holistic strategy in blockchain development, from thorough analysis and strategic planning to successful deployment and launch. ",
    },
    {
      img: "/blockchain_page/icons/why07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Complete Support",
      text:
        "Our commitment extends beyond implementation, providing ongoing assistance with updates, maintenance, and proactive monitoring to augment performance.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Mae Nichols",
      text:
        "We reached LBM Solutions to create a crypto wallet with blockchain. They developed a highly secure and user-friendly blockchain wallet for us. The team’s attention to detail and technical skills resulted in a reliable product.",
    },
    {
      clientName: "Ann Lawrence",
      text:
        "We hired LBM for blockchain-based mobile app development. Their team provided an intriguing app. Their innovative design and integration ensured a smooth, secure, and user-friendly application. ",
    },
    {
      clientName: "Olivia Francis",
      text:
        "Our experience with team LBM was great. They delivered a tailored blockchain solution that integrated with our operations, enhancing security and efficiency. They offered end-to-edd solutions and stayed available even after the launch of our project.",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Naomi Chase",
      text:
        "The team at LBM Solutions was professional and supportive. They utilized an innovative approach to create an engaging and virtual world for our blockchain based metaverse platform. ",
    },
    {
      clientName: "Juliet Armstrong",
      text:
        "Hiring LBM’s team for our blockchain software was transformative for our business. Their blockchain development expertise delivered a secure and efficient platform, enhancing our operational capabilities.",
    },
    {
      clientName: "Bella Rose Gilbert",
      text:
        " One of my friends suggested LBM Solutions for blockchain development. Their developers were capable of integrating blockchain into our existing systems, and the results were remarkable. Their technical and strategic approach provided us with a secure and efficient integration.",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "How much does it cost to build a blockchain platform?  ",
      body:
        "Building a blockchain platform can cost between $35,000 and $200,000. The final cost is based on various factors like platform complexity, required features, security needs, and the development team's expertise.",
    },
    {
      eventKey: "1",
      header: "How much does it cost to build a private blockchain?",
      body:
        "Creating a private blockchain costs between $20,000 and $100,000. The price varies based on the level of customization, security requirements, scalability, and the specific needs of the enterprise.",
    },
    {
      eventKey: "2",
      header: "How long does it take to build a blockchain?",
      body:
        "Developing a blockchain can take anywhere from 4 to 12 months. The timeline depends on the project's complexity, scope, specific requirements, and the experience and efficiency of the development team.",
    },
    {
      eventKey: "3",
      header: "Which programming language is used in blockchain?  ",
      body:
        "JavaScript is a major programming language used in blockchain. Moreover, Solidity for Ethereum, Python, Go, and C++ are other languages that are used to develop blockchain, depending on the blockchain platform and the specific needs of the project.",
    },
    {
      eventKey: "4",
      header: "How much does it cost to hire a blockchain developer?",
      body:
        "Hiring a blockchain developer costs between $50 and $150 per hour. The rate varies based on the developer's experience, expertise, geographic location, and the complexity of the project.",
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
                  textA="Leading"
                  clrtext="Blockchain Development Company"
                  textB=""
                  heading="banner_h"
                />
                <BannerText text="Develop blockchain-based solutions, including smart contracts,"
                 LinkHref={"/dapp-development-services"} LinkData={"dApps,"}
                  textData={" and cryptocurrency platforms, with our blockchain development company."} />

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
            <div className="col-9 col-sm-8 col-md-5 mx-auto">
              <div className="img ">
                <Image src="/blockchain_page/banner.png" alt="USA based blockchain development comapny" className="img-fluid" width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100} />
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
          paraText1={section.paraText1} Link_href={section.Link_href} Link_data={section.Link_data}
        />
      ))}

      <section className="crypt_wallet" ref={bottomSectionRef}>
        <div className="container">
          <div className="row ">
            <div className="col-sm-12">
              <div className="inner_text">
                <Heading_h2
                  textA="We Build "
                  clrtext="Custom Blockchain Development Solutions"
                  textB="for Business Innovation"
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text1="Our blockchain "
                  LinkHref ="/custom-software-development-services" LinkData="software development"
                  para_text=" services design secure, efficient, and interoperable blockchains, choosing the best consensus algorithms for optimal performance. Our solutions facilitate absolute data collaboration, access, and storage."
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
                  textA="Our Structured  "
                  clrtext="Blockchain Application Development Workflow"
                  textB=""
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="Our blockchain development team offers end-to-end blockchain solutions and precise execution, ensuring efficient deployment of blockchain tailored to specific needs and exceeding expectations of clients."
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
                textA="Benefits of Our"
                clrtext=" Custom Blockchain Application Development"
                textB=""
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0 "
              />

              <ParaText
                f_custome=""
                para_text="Our comprehensive blockchain development services encompass everything from initial consultation to ongoing support. We prioritize the development of blockchain projects that are robust, scalable, and perfectly aligned with your business objectives."
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

       <section className="crafting">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="We Offer "
                  clrtext="Blockchain Development Services Across"
                  textB="Various Industries"
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Our blockchain development team excels in creating custom enterprise blockchain solutions. We empower various firms with custom blockchain application solutions and smart contracts, enhancing dominance with absolute integration.  "
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
                  textA="Why LBM Leads the Way in "
                  clrtext="Blockchain Development Company in the USA?"
                  textB=""
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="As a prestigious blockchain app development company, we offer diverse blockchain development solutions and innovative strategies. Our professional blockchain developers craft tailored blockchain solutions, assisting businesses across industries."
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
              <ParaText para_text="Catering to diverse industries with our innovative blockchain development services, we delivered several blockchain projects. Their satisfaction reflects our commitment to innovation, security, and excellence. Let’s read how we transformed their businesses." />
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
