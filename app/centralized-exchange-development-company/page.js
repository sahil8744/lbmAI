"use client";
import React, { useRef } from "react";

import Heading from "../../app/components/Heading";
import Heading_h2 from "../../app/components/Heading_h2";
import BannerText from "../components/BannerText";
import Commonbttn from "../../app/components/CommonBtn";
import ParaText from "../components/ParaText";
import Card from "../components/Card";
import Cta from "../components/Cta";
import Image from 'next/image';

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
      heading: "Hire Our Crypto Exchange Developers ",
      paraText:
        "Our team of expert crypto exchange developers creates uninterrupted, feature-rich centralized exchanges. We craft next-gen CEX platforms tailored to your business model and passive income requirements. ",
      imgSrc: "/centralizedcryptocur_page/tech_img.webp",
      imgAlt: "hire top crypto exchange developers",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Custom Exchange Development",
      text:
        "Our crypto developers design and build feature-rich exchanges, ensuring superior scalability for your crypto exchange platform.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Exchange Consulting Services",
      text:
        "Our centralized cryptocurrency exchange development solutions ensure clients a seamless transition into the crypto world.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Exchange Integration & Maintenance ",
      text:
        "We enhance existing crypto exchanges with new features and functionalities with complete maintenance, eliminating technical bugs.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Cryptocurrency Exchange Clone Script",
      text:
        " We create top-tier cryptocurrency exchange clone scripts for startups and enterprises, ensuring a flawless exchange experience.",
    },
  ];

  const BasicFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Enhanced Security Measures ",
      text:
        "We implement multi-layer security protocols, including two-factor authentication and encryption, to safeguard assets and data..",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "User-friendly Interface",
      text:
        "Our cryptocurrency exchange development solutions offer an intuitive and responsive design that caters to both novice and experienced traders. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Multi-currency Support  ",
      text:
        "Our centralized crypto exchange development services support a wide array of cryptocurrencies and fiat currencies, facilitating diverse trading options. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Liquidity Integration  ",
      text:
        "We ensure seamless order execution with high liquidity options, connecting with external exchanges when necessary.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-md-4",
      p_opacity: "opacity-100",
      heading: "Customizable Features",
      text:
        "The centralized exchange development allows customization of the platform to meet specific business needs, enhancing functionality. ",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Matching Engine  ",
      text:
        "Our CEX development solutions are optimized for low-latency operations, ensuring timely order matching and improved trading efficiency.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Blockchain Integration ",
      text:
        "We deploy blockchain technology to enhance transaction security and transparency in trading. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Multi-Signature Wallets ",
      text:
        "Our solutions provide the need of multiple approvals for transactions and mitigate the risk of unauthorized access to increase security. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "API Support   ",
      text:
        "Our CEX development provides extensive API capabilities for consistent integration with external services and tools, enhancing platform functionality.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "DDoS Mitigation",
      text:
        "We incorporate advanced DDoS protection strategies to ensure the platform remains operational and accessible even under attack. ",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/centralizedcryptocur_page/icons/process01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-md-6 col-lg-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Consultation Phase ",
    },
    {
      img: "/centralizedcryptocur_page/icons/process02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-md-6 col-lg-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Understanding Needs  ",
    },
    {
      img: "/centralizedcryptocur_page/icons/process03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-md-6 col-lg-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Strategy Design ",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/centralizedcryptocur_page/icons/process06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-md-6 col-lg-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Payment Gateways ",
    },
    {
      img: "/centralizedcryptocur_page/icons/process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-md-6 col-lg-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Attribute Integration   ",
    },
 
    {
      img: "/centralizedcryptocur_page/icons/process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-md-6 col-lg-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Development Phase  ",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/centralizedcryptocur_page/icons/process07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-md-6 col-lg-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "QA & Maintenance ",
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
      img: "/cryptocoin_page/icons/coin_11.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Binance  ",
    },
    {
      img: "/cryptotokenImg/icons/coin_09.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Polygon",
    },
    {
      img: "/nft_page/icons/block_frame11.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: " mx-auto mb-0 mt-3",
      heading: "NEAR",
    },
    {
      img: "/centralizedcryptocur_page/icons/teachstack05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Terra",
    },
    {
        img: "/centralizedcryptocur_page/icons/teachstack066.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: " mx-auto mb-0 mt-3",
      heading: "Cardino",
    },
    {
        img: "/centralizedcryptocur_page/icons/teachstack06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: " mx-auto mb-0 mt-3",
      heading: "Algorand",
    },
    {
        img: "/centralizedcryptocur_page/icons/teachstack07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Avalanche",
    },
    {
        img: "/centralizedcryptocur_page/icons/teachstack08.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Solana",
    },
    {
        img: "/centralizedcryptocur_page/icons/teachstack09.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Arbitrum",
    },
    {
        img: "/centralizedcryptocur_page/icons/teachstack10.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Bitcoin",
    },

  ];

  const programming = [
    {
      img: "/nft_page/icons/smartcont01.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Solidity",
    },
    {
      img: "/nft_page/icons/smartcont02.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Rust",
    },
    {
      img: "/centralizedcryptocur_page/icons/teach01.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Go",
    },
    {
      img: "/centralizedcryptocur_page/icons/teach02.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Node Js",
    },
    {
      img: "/centralizedcryptocur_page/icons/teach03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Type Script",
    },
    {
      img: "/centralizedcryptocur_page/icons/teach04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Laravel",
    },
    {
      img: "/centralizedcryptocur_page/icons/teach05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Java",
    },
    {
      img: "/centralizedcryptocur_page/icons/tech06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "React",
    },
    {
      img: "/centralizedcryptocur_page/icons/tech07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "View",
    },
    {
      img: "/centralizedcryptocur_page/icons/tech08.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Angular",
    },
    {
      img: "/centralizedcryptocur_page/icons/tech09.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Flutter",
    },
    {
        img: "/centralizedcryptocur_page/icons/tech10.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Android",
    },
  ];

  const Crafting = [
    {
      img: "/centralizedcryptocur_page/icons/sourceses01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Finance and Banking ",
      text:
        "Our centralized crypto exchange integrates exchanges into existing financial ecosystems, offering new avenues for trading and investment.",
      // background: "/cryptwalletImg/wallet_features.png",
    },
    {
      img: "/centralizedcryptocur_page/icons/sourceses02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Tech Startups ",
      text:
        "We provide startups with the infrastructure to offer innovative financial products and attract a global user base.",
    },
    {
      img: "/centralizedcryptocur_page/icons/sourceses03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Retail   ",
      text:
        " Our centralized exchange platform allows retailers to accept cryptocurrencies, opening up new payment methods for customers worldwide.",
    },
    {
      img: "/centralizedcryptocur_page/icons/sourceses04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Retail & E-Commerce ",
      text:
        "Develop retail and e-commerce solftwre for automated business processes and enhanced shopping experiences.",
    },
    {
      img: "/centralizedcryptocur_page/icons/sourceses05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Gaming  ",
      text:
        "In the gaming industry, our centralized exchange services facilitate the trade of in-game assets and currencies, enhancing monetization strategies.",
    },
    {
      img: "/centralizedcryptocur_page/icons/sourceses06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate  ",
      text:
        "The CEX exchanges simplify transactions involving large sums, such as property sales, by providing a stable and secure platform for crypto payments.",
    },
    {
      img: "/centralizedcryptocur_page/icons/sourceses07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Healthcare ",
      text:
        "Centralized crypto exchanges can be used for secure, transparent funding and donations within healthcare projects and innovations.",
    },
    {
      img: "/centralizedcryptocur_page/icons/sourceses08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Telecommunications ",
      text:
        "CEX exchanges can reorganize billing and payment services for global telecommunications, reducing transaction fees and improving customer satisfaction.",
      // background: "/cryptwalletImg/wallet_features.png",
    },
    {
      img: "/centralizedcryptocur_page/icons/sourceses09.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Agriculture ",
      text:
        " The centralized crypto exchanges help farmers to trade agricultural commodities or tokenize assets, providing liquidity and better market access.",
    },
    {
      img: "/centralizedcryptocur_page/icons/sourceses10.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Energy Sector",
      text:
        "Our centralized exchange platform enables the trading of energy credits and commodities, facilitating more transparent and efficient energy markets.",
    },
    {
      img: "/centralizedcryptocur_page/icons/sourceses11.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Travel and Tourism  ",
      text:
        "Our solutions simplify the process of booking and payments across countries, reducing the need for currency exchange and enhancing the travel experience.",
    },
    {
      img: "/centralizedcryptocur_page/icons/sourceses12.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Art and Collectibles  ",
      text:
        "Centralized exchanges are pivotal in the trade of digital and physical art, including NFTs, enhancing the accessibility and valuation of artworks.",
      // background: "/cryptwalletImg/wallet_features.png",
    },
  ];

  const AboutLbm = [
    {
      img: "/centralizedcryptocur_page/icons/why01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Expert Team ",
      text:
        "Our team has mastered the complexities of blockchain technology, offering top-tier development services that stand out in the market.",
    },
    {
      img: "/centralizedcryptocur_page/icons/why02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "End-to-end Solutions",
      text:
        "We provide complete support for centralized crypto exchange development, from the blueprint to launch and beyond, ensuring robust, scalable, and secure platforms.",
    },
    {
      img: "/centralizedcryptocur_page/icons/why03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "End-to-end Development",
      text:
        "Our crypto exchange development providers craft scalable exchanges with advanced trading features to fulfil the requirements of traders and investors. ",
    },
    {
      img: "/centralizedcryptocur_page/icons/why04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Customized Solutions",
      text:
        "We ensure regulatory compliance, protect user privacy, and provide responsive support for smooth, trustworthy digital asset trading experiences.",
    },
    {
      img: "/centralizedcryptocur_page/icons/why05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Proven Track Record  ",
      text:
        "With the successful delivery of several CEX projects, we created a centralized exchange platform trusted by traders worldwide for secure, efficient transactions.",
    },
    {
      img: "/centralizedcryptocur_page/icons/why06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Compliance and Reliability ",
      text:
        "We ensure that all exchanges comply with the necessary regulatory standards, providing a reliable platform you can trust.",
    },
    {
      img: "/centralizedcryptocur_page/icons/why07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Quick Launch",
      text:
        "Our efficient development processes and expert team enable us to deliver your project quickly, helping you capitalize on market opportunities without delay.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Michelle Cook",
      text:
        "LBM Solutions was suitable for developing cryptocurrency exchanges. Their team's attention to detail and commitment to excellence were evident throughout the process. They also provide rapid upgrades and maintenance support ",
    },
    {
      clientName: "Timothy Nelson",
      text:
        "We contact LBM Solutions for Cryptocurrency Exchange Clone Script. Its professional team provided outstanding work on our crypto exchange project. We got an exceptional custom CEX project, and their team was a pleasure to work with. ",
    },
    {
      clientName: "Rachel Mitchell",
      text:
        "Exceptional service from LBM! Their team's expertise and dedication made our crypto exchange project more secure. The platform they delivered is secure, user-friendly, and exactly what we needed. ",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Eric Hill",
      text:
        "We were impressed by the professionalism and dedication of the team at LBM. They delivered a centralized exchange that exceeded all our expectations. That platform provided smooth transactions, robust security, and simply outstanding.",
    },
    {
      clientName: "Taylor Carter",
      text:
        "I really admired LBM’s team for their exceptional work on our centralized crypto exchange. They were professional, reliable, and truly dedicated to delivering a top-notch solution. I highly recommended this company for crypto exchange development",
    },
    {
      clientName: "Brian Moore",
      text:
        " Thanks to LBM Solutions, we now have a crypto exchange platform that's second to none. Their assistance is admirable in every aspect of the platform. I recommended their services! ",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is Centralized Exchange?",
      body:
        "A centralized exchange (CEX) is a platform where cryptocurrencies are traded. It is managed by a central authority that facilitates transactions and maintains the security and integrity of trades. ",
    },
    {
      eventKey: "1",
      header: "What is a centralized exchange script?",
      body:
        "A centralized exchange script is a pre-built software solution that helps to deploy a centralized cryptocurrency exchange rapidly, complete with essential trading features and security protocols. ",
    },
    {
      eventKey: "2",
      header: "Are centralized crypto exchanges safe? ",
      body:
        "Yes, Centralized crypto exchanges are generally safe, utilizing advanced security measures like encryption, two-factor authentication, and cold storage. However, they can be targets for hackers, so diligence is crucial.",
    },
    {
      eventKey: "3",
      header: "How long does it take to build a centralized crypto exchange?",
      body:
        "A centralized crypto exchange can be developed within 6 months to a year. However, the complexity of features, security measures, and the level of customization may affect the time to develop CEX exchange.",
    },
    {
      eventKey: "4",
      header: "What is the cost of developing a centralized exchange software?",
      body:
        "It costs $20,000 to $30,000 to develop a centralized exchange software. Different factors such as feature complexity, security measures, customization level, and the development team's expertise may influence its cost.",
    },
    {
      eventKey: "5",
      header: "Which popular CEX clone scripts do you offer? ?",
      body:
        "We provide clone scripts of renowned centralized exchanges (CEX) like Binance Clone, Coinbase, LocalBitcoins, and Wazirx. These scripts provide a solid foundation for launching your crypto exchange. ",
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
                  textA="Centralized  "
                  clrtext="Cryptocurrency Exchange Development"
                  textB=""
                  heading="banner_h sectoin_h"
                />
                <BannerText text="Build scalable CEX exchange platform at our prominent centralized cryptocurrency exchange development company. " />

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
                <Image
                  src="/centralizedcryptocur_page/banner.png"
                  alt="bset cex exchange development company in USA"
                  className="img-fluid"
                  width={0} 
                  height={0} 
                  sizes="100vw"
                  style={{ width: "auto", height: "auto", }} 
                  priority
                  quality={100}
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
                  textA="Our Centralized"
                  clrtext="Cryptocurrency Exchange Development"
                  textB="Services"
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="Our centralized crypto exchange development services help businesses gain a competitive edge. Our 200+ blockchain developers deliver secure exchange solutions with advanced payment gateways for higher performance and security."
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
                textA="What  "
                clrtext="Businesses Gain from Our"
                textB="CEX Exchange Software?"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0 "
              />

              <ParaText
                f_custome=""
                para_text="Our crypto developers craft a versatile admin panel to offer exceptional business solutions. Explore our advanced centralized crypto exchange features for seamless platform management and authenticity."
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
                  textA="Our   "
                  clrtext="Centralized Cryptocurrency Exchange "
                  textB="Development Process"
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="Our Crypto Exchange Development process follows diverse phases, deploying a secure, centralized exchange platform for trading digital assets, ensuring coherent transactions, security, and a top-notch user experience."
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
                  textA="Technology Stack for "
                  clrtext="Centralized Exchange Development Solutions "
                  textB=""
                  heading="heading_h2 text-white"
                />

                <ParaText
                  f_custome="text-white"
                  para_text="Our centralized exchange development leverages a high-end, proven technology stack that optimizes your resources, saving time and money while ensuring efficient, reliable performance in practical business scenarios."
                />
              </div>
            </div>
          </div>

          <div className="row text-center">
            <h4 className="text-white fw-semibold text-start">
              Blockchain Platforms
            </h4>
            <Card CardData={technology} />
          </div>

          <div className="row text-center mt-5">
            <h4 className="text-white fw-semibold text-start">
              Programming Languages
            </h4>
            <Card CardData={programming} />
          </div>
        </div>
      </section>

      <section className="crafting">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Our"
                  clrtext="Centralized Crypto Exchange Software"
                  textB=" Supports Every Industry"
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Our CEX development renders centralized cryptocurrency exchange software to launch robust platforms, which help business owners gain a competitive edge across various industries, enabling secure and efficient trading platforms. "
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
                  textA="Why Select Us as  "
                  clrtext="Your Centralized Crypto Exchange"
                  textB=" Development Company? "
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="With more than a decade of experience, our centralized crypto exchange development company in USA provides customized CEX exchange solutions to meet diverse crypto project demands and achieve complete client satisfaction. "
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
              <ParaText para_text="Our client feedback underscores our expertise in centralized crypto exchange development! See why our clients trust us for CEX and blockchain development. Their testimonials show our ability to tailor solutions that meet specific business requirements." />
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
