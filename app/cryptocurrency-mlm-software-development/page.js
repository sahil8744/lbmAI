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
      add_class: "h-100 on_hover ",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Ethereum MLM Software",
      text:
        "We offer customized Ethereum MLM software according to your business needs, enhancing blockchain functionality.",
      // isLink: true,
      // linkUrl: "",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover ",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Tron MLM Software ",
      text:
        "We create TRON-based MLM platforms to offer secure MLM software, ensuring versatile features and unique integrations.",
      // isLink: true,
      // linkUrl: "",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover ",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Bitcoin MLM Software ",
      text:
        " Our MLM software development services confirm a perfect launch of the Bitcoin MLM platform based on your business plans.",
      // isLink: true,
      // linkUrl: "",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Binance MLM Software",
      text:
        "Our team crafts MLM software based on Binance to boost smart contract reliability and help resolve issues.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Solana MLM Software ",
      text:
        "We build Solana MLM software to offer high-speed transactions and scalable solutions, which enhances reliability for MLM businesses.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Polygon MLM Software",
      text:
        "Our polygon MLM software development solutions with innovative UI/UX ensure faster performance and reliability.",
    },
  ];

  const BasicFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Multi-Tier Commission Structure",
      text:
        "Our MLM software developers implement a hierarchical commission system to reward users based on multiple levels of their downline.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "User Dashboard",
      text:
        "Our MLM software development solutions provide an intuitive dashboard to track earnings and manage account details.  ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Automated Payouts ",
      text:
        " We create secure MLM software systems for automated payouts using cryptocurrency, ensuring that bonuses are distributed instantly. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Smart Contract Integration ",
      text:
        "We utilize blockchain-based smart contracts to automate the execution of MLM rules and ensure transparency.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-md-4",
      p_opacity: "opacity-100",
      heading: "Cross-Platform Integration",
      text:
        "Our software development team creates MLM software integrated with other platforms to enhance functionality and user experience.",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Blockchain Integration",
      text:
        "We craft custom MLM software based on blockchain to ensure the immutability of all transactions within the MLM platform. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Wallet Integration",
      text:
        "Our crypto MLM software solutions provide built-in support for multiple cryptocurrency wallets to transact digital currencies directly. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "API Integration",
      text:
        "We develop APIs to enable integration with other services, like payment gateways and marketing tools, for better interoperability.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Data Encryption",
      text:
        "We implement advanced encryption techniques to protect sensitive user data, ensuring that all details are secure from unauthorized access.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Real-Time Analytics",
      text:
        "Our smart contract based MLM software renders reporting tools to track user activities and monitor performance.",
    },
  ];

  const CardLoop_a = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover ",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Unilevel Plan MLM Software ",
      text:
        "Our unilevel plan MLM software development services simplify network building with a single-level structure, offering expansion opportunities.",

    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover ",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Matrix Plan MLM Software",
      text:
        "We plan matrix plan MLM software to optimize performance with fixed depth and width, allowing precise distributor limits per level. ",

    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover ",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Binary Plan MLM Software",
      text:
        "This MLM software offers customizable structures to enhance flexibility for businesses and users with customized configurations.",
      isLink: true,

    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Autopool MLM Software",
      text:
        "We offer an autopool MLM plan to automate progress through levels, which helps distributors achieve financial goals with a pool-based scheme.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Charity/Crowdfunding Plan ",
      text:
        "This MLM Plan merges business growth with social impact and enables distributors to earn commissions while supporting noble causes. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Generation Plan MLM Software",
      text:
        "Our generation MLM software enhances systematic income distribution across multiple levels, improving product sales efficiency.",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/mlm_page/icons/01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Conceptualization ",
    },
    {
      img: "/mlm_page/icons/02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Select Blockchain Platform",
    },
    {
      img: "/mlm_page/icons/03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Design & Planning",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/mlm_page/icons/06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "MLM Software Developmen",
    },
    {
      img: "/mlm_page/icons/05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Wallet Integration",
    },
    {
      img: "/mlm_page/icons/04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Smart Contract Creation ",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/mlm_page/icons/07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Deployment ",
    },
    {
      img: "",
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
      img: "/mlm_page/icons/crypto_ex01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Decentralization ",
      text:
        "Our cryptocurrency MLM software enables peer-to-peer transactions without intermediaries to increase trust and reduce costs.",
    },
    {
      img: "/mlm_page/icons/crypto_ex02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Security ",
      text:
        "We utilize blockchain technology to ensure data integrity and security, protecting users from fraud and unauthentic access.",
    },
    {
      img: "/mlm_page/icons/crypto_ex03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real-Time Payments",
      text:
        "We provide top-notch MLM software development solutions to enable quick transactions globally, without any delay.",
    },
    {
      img: "/mlm_page/icons/crypto_ex04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Smart Contract",
      text:
        "Our team specializes in smart contract development for MLM software, ensuring automated processes and streamlined operations.",
    },
    {
      img: "/mlm_page/icons/crypto_ex05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Scalability ",
      text:
        "Our MLM software easily scales to handle growing user bases and transaction volumes, ensuring smooth operations.",
    },
    {
      img: "/mlm_page/icons/crypto_ex06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Global Reach",
      text:
        "We render crypto MLM software development solutions to facilitate cross-border transactions, expanding the market reach of the business.",
    },
    {
      img: "/mlm_page/icons/crypto_ex07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Enhanced Privacy ",
      text:
        "We use cryptographic methods in crypto MLM software development to protect personal and transaction data of user.",
    },
    {
      img: "/mlm_page/icons/crypto_ex08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "User-Friendly Interface",
      text:
        "Our MLM software provides an automatic interface to manage accounts and transactions easily, boosting user retention.",
      // background: "/cryptwalletImg/wallet_features.png",
    },
    {
      img: "/mlm_page/icons/crypto_ex09.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Multi-Currency Support",
      text:
        "MLM software supports multiple cryptocurrencies, which offers flexibility to choose the preferred digital currency for transactions.",
    },
    {
      img: "/mlm_page/icons/crypto_ex10.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real-Time Analytics ",
      text:
        "Our MLM software provides real-time insights to help businesses track performance and user behavior, enabling them to make strategies.",
    },

  ];

  const AboutLbm = [
    {
      img: "/mlm_page/icons/cions_01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Expertise ",
      text:
        "Our team excels in developing secure MLM software on Bitcoin, Ethereum, and TRON, ensuring secure operations for businesses.",
    },
    {
      img: "/mlm_page/icons/cions_02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Decentralized Approach",
      text:
        "We create MLM software with unmatched transparency, which ensures trust among your network participants.",
    },
    {
      img: "/mlm_page/icons/cions_03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Customizable Solutions  ",
      text:
        "We offer personalized white label cryptocurrency MLM software development solutions to meet the unique requirements of clients.",
    },
    {
      img: "/mlm_page/icons/cions_04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Cost-Efficiency",
      text:
        "We provide high-quality crypto MLM software development services to maximize ROI and help you achieve your business goals.",
    },
    {
      img: "/mlm_page/icons/cions_05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "24/7 Technical Support",
      text:
        "Our dedicated team is always available to resolve any issues and ensure your MLM operations run without interruption.",
    },
    {
      img: "/mlm_page/icons/cions_06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Security Measures",
      text:
        "We develop crypto MLM software on blockchain technology to provide advanced security features and protect your data.",
    },
    {
      img: "/mlm_page/icons/cions_06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Regulatory Compliance",
      text:
        "Our MLM software development follows the latest rules and ensures that your business stays compliant with MLM industry standards.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Layla Freeman",
      text:
        "We hired LBM’s team to create smart contract based MLM software. Their team provided seamless MLM software, which streamlined our operations and ensured secure and transparent transactions. ",
    },
    {
      clientName: "Sophia Andrews",
      text:
        "LBM Solutions delivered us excellent MLM software that enhanced our network marketing operations and business efficiency. They introduced top-notch features and after-launch support for our project.",
    },
    {
      clientName: "Ruth Kennedy",
      text:
        "We were satisfied with the MLM software developed by LBM Solutions. Their MLM software development team created viable crypto MLM software, which managed our cryptocurrency network marketing operations efficiently. ",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Gabriella Lane",
      text:
        "We wanted to create a Solana MLM software. LBM Solutions crafted the perfect MLM software that met our requirements. It was fast, secure, and had greatly improved our business processes.",
    },
    {
      clientName: "Marie Lloyd",
      text:
        "We highly admired the MLM software development service of LBM. Their team delivered advanced cryptocurrency MLM software that exceeded our expectations. It ensured secure transactions.",
    },
    {
      clientName: "Sarah Barber",
      text:
        "LBM’s software development team offered us feature-rich MLM software to enhance our business performance. The supporting team was always available not only during development but also after the launch.",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is Cryptocurrency MLM software? ",
      body:
        "Cryptocurrency MLM software is used for multi-level marketing by integrating cryptocurrencies for transactions. It enables secure, transparent, and efficient network marketing operations with digital assets.",
    },
    {
      eventKey: "1",
      header: "What is cryptocurrency software development? ",
      body:
        "Cryptocurrency software development is a process in which platforms and applications are created to enable quick transactions, wallet is managed, and cryptocurrencies are integrated for various business purposes, including trading and blockchain-based solutions.",
    },
    {
      eventKey: "2",
      header: "What is the popular crypto used for MLM projects?  ",
      body:
        "Bitcoin and Ethereum are famous cryptocurrencies used in MLM projects due to their widespread acceptance, security features, and general support in the crypto community.",
    },
    {
      eventKey: "3",
      header:
        "What is the difference between a pyramid scheme and an MLM? ",
      body:"A pyramid scheme relies on recruiting participants with promises of high returns, while MLM involves selling actual products or services through a structured network, earning commissions based on sales.",
    },
    {
      eventKey: "4",
      header: "How much does multi-level Marketing (MLM) software development cost?  ",
      body:
        "MLM software development costs range from $2500 to $30,000, depending on the complexity, features, and customizations required for the specific business needs. ",
    },
  ];

  const sectionsData = [
    {
      heading:
        "Our Skilled Software Developers Built Advanced Crypto MLM software",
      paraText:
        "As a prominent USA-based MLM development agency, our team of expert software developers excels in delivering secure and customizable multi-level marketing solutions to elevate your business.",
      imgSrc: "/mlm_page/teach_img.png",
      imgAlt: "mlm software developement by our expert team",
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
                  clrtext="Cryptocurrency MLM Software   "
                  textB="Development Company"
                  // heading="heading_class"
                  heading="banner_h "
                />
                <BannerText text="Avail scalable MLM Software solutions at our cryptocurrency MLM software development company for multi-level marketing success.  " />

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
                <img src="/mlm_page/banner.png" alt="relaible crypto mlm software development company" className="img-fluid" />
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
                  textA="Smart Contract  "
                  clrtext="Based MLM Software "
                  textB="Development Services"
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="Our MLM software developers craft advanced crypto MLM software for enhanced security and efficiency. We offer secure smart contract based MLM development solutions that attract global markets and ensure better outcomes."
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

      <section className="devel_process">
        <div className="container">
          <div className="row mb-4 mb-lg-5 ">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="A Comprehensive  "
                  clrtext="Look into Our Cryptocurrency MLM"
                  textB="Software Workflow"
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="We provide comprehensive custom CRM development services. Our CRM developers are capable of developing customizable MLM software to elevate your business growth with real-time tracking tools and user-friendly interfaces."
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
          <div className="row">
            <div className="col-12">
              <Heading_h2
                textA=" The Benefits of  "
                clrtext="Adopting Cryptocurrency"
                textB="MLM Software"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0 "
              />

              <ParaText
                f_custome=""
                para_text="Being the best MLM software development company, we introduce innovative features and strategic revenue factors in crypto MLM software development, ensuring quick international transactions, convenient payment systems, and zero fraud risks."
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



      <section className="crypt_wallet" ref={bottomSectionRef}>
        <div className="container">
          <div className="row ">
            <div className="col-sm-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Types of  "
                  clrtext="MLM Software Development"
                  textB="We Provide"
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="We are the best cryptocurrency smart contract MLM software company that excels in assisting you with diverse plans for MLM software tailored to your marketing needs, empowering your business with innovative technology.  
"
                />
              </div>
            </div>
            <div className="col-sm-12  mt-4">
              <div className="row">
                {/* {LoopingCard.map((val, i) => { return ( ); })} */}
                <Card CardData={CardLoop_a} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="crafting">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA=" "
                  clrtext="Core Revenue Factors of Our"
                  textB=" White Label Cryptocurrency MLM Software"
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="Our cryptocurrency MLM software development services are designed to enhance revenue streams. Our veteran team develops secure cryptocurrency MLM software with real-time transaction tracking and smart contracts development."
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
                  textA=" What Makes LBM Solutions the  "
                  clrtext="Best Cryptocurrency MLM Software Development Company?"
                  textB=""
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="Leading the MLM industry as a prominent MLM software company in USA, we have a team of 200+ MLM software developers. We offer viable cryptocurrency MLM software development solutions, ensuring transparency and security. "
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
              <ParaText para_text="As a pre-eminent MLM software development company, we have delivered several MLM software development projects. Our customizable cryptocurrency MLM software development solutions have helped several clients achieve their business goals. Let’s hear directly from our clients" />
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
