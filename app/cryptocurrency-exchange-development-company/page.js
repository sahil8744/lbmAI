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
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "P2P Crypto Exchange Software Development ",
      text:
        "Based on blockchain platform, we",
        LinkHref : "/custom-software-development-services",
        LinkData:" craft software,",
        text1: "aligned with your vision, delivering flawless trading experiences in crypto landscape.",
        isLink: true,
        linkUrl: "/p2p-crypto-exchange-development",
   },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Centralized Crypto Exchange Development",
      text:
        "Featuring instant liquidity, robust APIs, and security measures, we excel in",
        LinkHref : "/blockchain-development-company",
        LinkData:"blockchain development,",
        text1: "specializing in centralized exchange development.",
        isLink: true,
        linkUrl: "/centralized-exchange-development-company",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Decentralized Crypto Exchange Development",
      text:
        "Crafting robust solutions that align with the Web3 vision in the cryptocurrency world, ensuring adaptability to evolving trends. ",
        isLink: true,
        linkUrl: "/decentralized-exchange-development-company",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Hybrid Crypto Exchange Development ",
      text:
        "With higher liquidity and quick transactions, we harness features to support your exchange with security and unparalleled performance.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Crypto Derivatives Exchange Development",
      text:
        "Gain ability to leverage holdings, hedge positions, or speculate on asset movements with crypto derivatives and navigate crypto market.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "OTC Crypto Exchange Development ",
      text:
        "Develop your own OTC crypto trading platform which prioritizes security, ensuring utmost protection for users' assets.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "White Label Crypto Exchange Development ",
      text:
        " Experience decentralized trading to attain advanced security features with our crypto exchange solutions, which reflect your brand identity.",
    },
  ];

  const BasicFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Customization Options",
      text:
        " Tailor our crypto exchange platform to meet your business needs, including branding, user interface, and functionality customization.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Multi-Currency Support",
      text:
        "Enable trading of multiple cryptocurrencies, allowing users to diversify their portfolios and attract a broader user base.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Liquidity Management ",
      text:
        "Implement our robust crypto exchange solutions to maintain liquidity, enhancing trading opportunities and user satisfaction.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Security",
      text:
        "We integrate robust security measures such as two-factor authentication and DDoS protection to safeguard user funds and data.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-md-4",
      p_opacity: "opacity-100",
      heading: "Advanced Trading Features",
      text:
        "Our crypto exchange solutions allow margin trading, futures contracts, and automated trading bots to attract traders and increase trading volume.",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Secure Architecture  ",
      text:
        "Develop a resilient crypto exchange platform capable of handling high trading volumes and providing uninterrupted service to users.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Matching Engine",
      text:
        "We introduce a powerful matching engine that efficiently matches buy and sell orders to facilitate seamless crypto exchange.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Order Management System (OMS)",
      text:
        "We introduce OMS to manage order placement, order execution, and order cancellation processes effectively.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Wallet Integration ",
      text:
        "Our cryptocurrency exchange development solutions provide secure and multi-currency wallets to deposit, withdraw, and store cryptocurrencies safely.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "API Integration",
      text:
        "Provide comprehensive APIs for seamless integration with third-party services, enabling automated trading, liquidity provision, and market data access.",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/cryptoexchangeImg/icons/01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Crypto Exchange Type Selection",
    },
    {
      img: "/cryptoexchangeImg/icons/02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Select Technology Stack ",
    },
    {
      img: "/cryptoexchangeImg/icons/03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Crypto Exchange Design Creation",
    },
  ];

  const DevelopmentProcess_b = [
    
  
    {
      img: "/cryptoexchangeImg/icons/06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Payment Gateway Insertion",
    },
    {
      img: "/cryptoexchangeImg/icons/05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Crypto Wallet Integration",
    },
    {
      img: "/cryptoexchangeImg/icons/04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Liquidity Provider Incorporation",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/cryptoexchangeImg/icons/07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Testing and QA",
    },
    {
      img: "/cryptoexchangeImg/icons/08.png",
      svg_cls: "d-none",
      add_class: "opacity-1",
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
      img: "/cryptotokenImg/icons/crypto_ex01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Type of Exchange",
      text:
        "The type of exchange you intend to develop (centralized, decentralized, or hybrid) will significantly impact development costs.",
    },
    {
      img: "/cryptotokenImg/icons/crypto_ex02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Features and Functionality",
      text:
        "The complexity and breadth of features, such as trading pairs, trading charts, and security measures, affect the development costs.",
    },
    {
      img: "/cryptotokenImg/icons/crypto_ex03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "UI/UX Design",
      text:
        "The quality and sophistication of the",
        LinkHref : "/website-development",
        LinkData:"user interface",
        text1: "(UI) and user experience (UX) design will influence development costs.",
      },
    {
      img: "/cryptotokenImg/icons/crypto_ex04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Regulatory Compliance",
      text:
        "Compliance with regulatory requirements in your target jurisdictions will entail additional costs for legal consultations and KYC/AML procedures.",
    },
    {
      img: "/cryptotokenImg/icons/crypto_ex05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Liquidity Solutions",
      text:
        "Implementing liquidity solutions, such as market-making algorithms or integration with external liquidity providers, will impact development costs.",
    },
    {
      img: "/cryptotokenImg/icons/crypto_ex06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Customization Requirements ",
      text:
        "Any specific customization requirements, such as branding, white-label solutions, or custom features, also affect the development cost.",
    },
    {
      img: "/cryptotokenImg/icons/crypto_ex07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Integration with Third-party Services ",
      text:
        "Integrating with third-party services, like payment gateways or blockchain networks, may incur additional costs.",
    },
    {
      img: "/cryptotokenImg/icons/crypto_ex08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Technology Stack",
      text:
        "The cost will affected depending upon the technology stack, including programming languages, frameworks, and development tools.",
      // background: "/cryptwalletImg/wallet_features.png",
    },
    {
      img: "/cryptotokenImg/icons/crypto_ex09.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Testing and Quality Assurance",
      text:
        "Ensuring a bug-free and reliable exchange platform in crypto exchange development also influenced the development costs.",
    },
    {
      img: "/cryptotokenImg/icons/crypto_ex10.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Deployment and Hosting ",
      text:
        "Costs related to deploying the exchange platform to production servers and ongoing hosting expenses will need to be considered. ",
    },
    {
      img: "/cryptotokenImg/icons/crypto_ex11.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Project Management ",
      text:
        "Allocating resources for project management, including hiring project managers or outsourcing services, is another factor of development costs.",
    },
  ];

  const currencyes = [
    {
      img: "/cryptotokenImg/icons/coin_01.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5:"mx-auto mb-0 mt-3",
      heading: "Ethereum ",
    },
    {
      img: "/cryptotokenImg/icons/coin_02.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5:"mx-auto mb-0 mt-3",
      heading: "Hyperledger  ",
    },
    {
      img: "/cryptotokenImg/icons/coin_03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5:"mx-auto mb-0 mt-3",
      heading: "Binance",
    },
    {
      img: "/cryptotokenImg/icons/coin_04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5:" mx-auto mb-0 mt-3",
      heading: "BCA",
    },
    {
      img: "/cryptotokenImg/icons/coin_05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5:"mx-auto mb-0 mt-3",
      heading: "NEM",
    },
    {
      img: "/cryptotokenImg/icons/coin_06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5:" mx-auto mb-0 mt-3",
      heading: "Corda",
    },
    {
      img: "/cryptotokenImg/icons/coin_07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5:" mx-auto mb-0 mt-3",
      heading: "Stellar",
    },
    {
      img: "/cryptotokenImg/icons/coin_08.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5:"mx-auto mb-0 mt-3",
      heading: "Solana",
    },
    {
      img: "/cryptotokenImg/icons/coin_09.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5:"mx-auto mb-0 mt-3",
      heading: "Polygon",
    },
    {
      img: "/cryptotokenImg/icons/coin_10.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5:"mx-auto mb-0 mt-3",
      heading: "Cardano",
    },
  ];

  const AboutLbm = [
    {
      img: "/cryptotokenImg/icons/cions_01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Expertise",
      text:
        "We have a team of 200+ experienced crypto exchange developers, proficient in blockchain technology, ensures the delivery of high-quality solutions.",
    },
    {
      img: "/cryptotokenImg/icons/cions_02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Customized",
      text:
        "Understanding the unique requirements of every client, we render customized solutions tailored to your specific requirements, budget, and timeline.",
    },
    {
      img: "/cryptotokenImg/icons/cions_03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Innovative Infrastructure ",
      text:
        " Our crypto exchange developers deploy pioneering technologies to develop seamless exchange platforms that meet the evolving needs of the market.",
    },
    {
      img: "/cryptotokenImg/icons/cions_04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Post-launch Support",
      text:
        "Our commitment doesn't end with the launch of your exchange. Our after-sale support ensures smooth operation and ongoing success.",
    },
    {
      img: "/cryptotokenImg/icons/cions_05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Transparent Process ",
      text:
        "We allow clients to have complete visibility into our progress and be involved in decision-making every step of the way throughout the development process.",
    },
    {
      img: "/cryptotokenImg/icons/cions_06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Quick Launch",
      text:
        "Our robust crypto exchange development solutions empower clients to capitalize on market opportunities promptly and achieve objectives with minimal delay.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Manuel Henderson",
      text:
        "Impressed doesn't even describe our experience with LBM. Their expertise in cryptocurrency exchange development is genuinely unparalleled. They took our vision and turned it into a reality. ",
    },
    {
      clientName: "Dawn Hernandez",
      text:
        "We approached LBM Solutions with a complex set of requirements for our cryptocurrency exchange, and they exceeded our expectations in every way. Their team demonstrated exceptional technical prowess and a deep understanding of the crypto industry. ",
    },
    {
      clientName: "Arnold Brooks",
      text:
        "From the initial consultation to the final product delivery, LBM proved to be a reliable and innovative partner for our cryptocurrency exchange project. The crypto exchange they developed not only meets but exceeds industry standards, concerning security, functionality, and user experience.",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Leslie Wright",
      text:
        "Working with LBM Solutions exceeded our expectations in every aspect. Their expertise, dedication, and attention to detail ensured that our crypto exchange platform was not only launched on time but also surpassed industry standards.",
    },
    {
      clientName: "Tyrone Jackson",
      text:
        "As a startup entering the competitive world of cryptocurrency exchanges, we needed a development partner we could trust. LBM came highly recommended, and their team was incredibly responsive, collaborative, and knowledgeable, guiding us through every stage of development with professionalism and expertise.",
    },
    {
      clientName: "Rose Murphy",
      text:
        "We were initially hesitant about outsourcing our cryptocurrency exchange development, but LBM quickly put our concerns to rest. Their transparent communication, agile approach to crypto exchange development, and dedication to delivering quality results made the entire process smooth and seamless.",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is Cryptocurrency Exchange Software?",
      body:
        "Cryptocurrency exchange software refers to the technological infrastructure that powers online platforms where users can buy, sell, and trade various cryptocurrencies. It combines advanced technology, security measures, and regulatory compliance to create a trusted and transparent trading environment for users worldwide.",
    },
    {
      eventKey: "1",
      header: "How much does it cost to build a cryptocurrency exchange? ",
      body:
        "The cost to develop a crypto exchange ranges from $100,000 to $350,000. However, this cost may be maximized or minimised depending on the advanced features and customization requirements.",
    },
    {
      eventKey: "2",
      header: "How long does it take to build a cryptocurrency exchange? ",
      body:
        "The time to develop a cryptocurrency exchange may take 6 months or a year according to the scope and complexity of the project. It's essential to allocate sufficient time for each phase and to work with experienced professionals who can help you navigate the development process efficiently.",
    },
    {
      eventKey: "3",
      header:
        "What are the security features of the crypto exchange platform? ",
      body:
        "There are several security features for cryptocurrency exchange platforms such as encryption, two-factor authentication, cold storage, and regular security audits to safeguard user funds and data from cyber-attacks and unauthentic access.",
    },
    {
      eventKey: "4",
      header: "What is the best crypto exchange platform? ",
      body:
        "Determining the finest cryptocurrency exchange platform can depend on several factors such as user preferences, trading needs, security features, regulatory compliance, supported cryptocurrencies, fees, and geographical availability. The most stable cryptocurrency exchanges include Coinbase, Binance and Kraken.",
    },

  ];

  const sectionsData = [
    {
      heading: "Develop Your Unique Cryptocurrency Exchange Platform",
      paraText1:
        "Our team of experienced",
        paraText:"in USA pave the path for long-term success with innovative technical setups and comprehensive crypto exchange development solutions, understating the diverse needs of clients.", 
        Link_href:"/crypto-coin-development-company",
         Link_data:"crypto developers",
        imgSrc: "/cryptoexchangeImg/teach_img.webp",
      imgAlt: "create your custom cryptocurrency exchange with expert developers",
    },
  ];
  const sectionsData_a = [
    {
      heading: "Techstack For Cryptocurrency Exchange Development ",
      paraText:
        "For cryptocurrency exchange development, selecting the right tech stack is crucial for ensuring scalability, security, and functionality. We, at a prominent crypto exchange development company, provide the best possible solutions.",
      imgSrc: "/cryptoexchangeImg/teach_img.webp",
      imgAlt: "crypto exchange development technology stack",
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
                  textA="Cryptocurrency"
                  clrtext="Exchange Development "
                  textB="Company"
                  // heading="heading_class"
                  heading="banner_h "
                />
                <BannerText text="At our prominent cryptocurrency exchange development company, we transform your visions into scalable crypto exchange solutions." />

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
                  src="/cryptoexchangeImg/banner.png"
                  alt="top crypto exchange development company in USA"
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
          paraText1={section.paraText1} Link_href={section.Link_href} Link_data={section.Link_data}
        />
      ))}

      <section className="crypt_wallet" ref={bottomSectionRef}>
        <div className="container">
          <div className="row ">
            <div className="col-sm-10">
              <div className="inner_text">
                <Heading_h2
                  textA="Explore Our"
                  clrtext="Crypto Exchange Development"
                  textB=" Services"
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="Elevate your cryptocurrency venture with our cutting-edge crypto exchange development services. From robust platforms to versatile services, we empower enterprises to thrive in the competitive crypto landscape."
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
          <div className="row">
            <div className="col-12">
              <Heading_h2
                textA=" Features of Our "
                clrtext="Cryptocurrency Exchange Development"
                textB="Services"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0 "
              />

              <ParaText
                f_custome=""
                para_text="Our crypto exchange development services focus on integrating robust security features which develop highly secure cryptocurrency exchange platforms, maximizing customer value and fostering trust and reliability."
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
                  textA="The Full "
                  clrtext="Lifecycle of Cryptocurrency Exchange"
                  textB="Platform Development "
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="Our cryptocurrency exchange development process involves several key stages to ensure the creation of a secure, efficient, and user-friendly trading platform based on the requirements and objectives of clients."
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

      {/* <TechSection /> */}
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
                  textA="We Build Cryptocurrency Exchanges on"
                  clrtext="Leading Blockchain Platforms"
                  textB=""
                  heading="heading_h2 text-white"
                />

                <ParaText
                  f_custome="text-white"
                  para_text="Ensuring scalability and security to develop crypto exchange, our professional blockchain developers provide you valuable insights and guidance on cost estimation and project planning according to your requirements and budget. "
                />
              </div>
            </div>
          </div>

          <div className="row text-center">
            <Card CardData={currencyes}  />
          </div>
        </div>
      </section>

      <section className="crafting">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Key Factors to Consider "
                  clrtext=" Crypto Exchange Development Cost"
                  textB=""
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="Ensuring scalability and security to develop crypto exchange, our professional blockchain developers provide you valuable insights and guidance on cost estimation and project planning according to your requirements and budget. "
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
                  textA=" What Makes Us Best "
                  clrtext="Cryptocurrency Exchange Development Company"
                  textB=""
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="Partnering with LBM Solutions, the best crypto exchange development company in USA, ensures you access to unparalleled expertise, innovative solutions, and unwavering support throughout your crypto exchange development journey. "
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
              <ParaText para_text="Step into the world of our clients' success stories. Here, you'll find authentic testimonials from individuals and businesses who have embarked on the journey of cryptocurrency exchange development with us." />
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
