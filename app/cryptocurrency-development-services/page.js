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
      heading: "Trust Our Talented Cryptocurrency Developers for Your Project",
      paraText:
        "As a renowned cryptocurrency development company, we have 200+ cryptocurrency developers who are skilled in creating customized, decentralized trading assets and solutions to boost your business's growth and success.",
      imgSrc: "/cryptocurrencies_page/teach_img.webp",
      imgAlt: "hire our trusted cryptocurrency developers",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Crypto Coin Development",
      text:
        "Our team helps to develop cryptocurrency coins, transforming unique ideas into coins to stabilize the dynamic crypto setting.",
      isLink: true,
      linkUrl: "/crypto-coin-development-company ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Cryptocurrency Wallet Development",
      text:
        "We create customizable cryptocurrency wallets with advanced features and security, enhancing digital transactions for diverse platforms. ",
      isLink: true,
      linkUrl: "/crypto-wallet-development-company  ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Cryptocurrency Marketing",
      text:
        "We provide targeted marketing strategies to boost visibility, attract investors, and drive adoption in the dynamic digital currency realm.",
      isLink: true,
      linkUrl: "/crypto-marketing-agency",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Crypto Trading Bot Development ",
      text:
        "Our cryptocurrency development services focus on automating trades using algorithms that capitalize on market trends to enhance profitability for users.",
      isLink: true,
      linkUrl: "/crypto-trading-bot-development-company",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Cryptocurrency Payment Gateway Development",
      text:
        "Develop advanced crypto payment gateways that process multi-currency transactions securely.",
      isLink: true,
      linkUrl: "/cryptocurrency-payment-gateway-development",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Cryptocurrency Card",
      text:
        "We provide innovative payment tools to utilize cryptocurrencies as the foundational asset and allow flawless transactions.",
      isLink: true,
      linkUrl: "/whitelabel-crypto-cards ",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/cryptocurrencies_page/icons/process01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Understanding Requirements",
    },
    {
      img: "/cryptocurrencies_page/icons/process02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Whitepaper Creation",
    },
    {
      img: "/cryptocurrencies_page/icons/process03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Technical Design",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/cryptocurrencies_page/icons/process06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Testing ",
    },
    {
      img: "/cryptocurrencies_page/icons/process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Wallet Setup ",
    },
    {
      img: "/cryptocurrencies_page/icons/process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Development Stage  ",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/cryptocurrencies_page/icons/process07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Launch and Marketing",
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
      img: "/cryptocurrencies_page/icons/teach01.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "React ",
    },
    {
      img: "/cryptocurrencies_page/icons/teach02.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Web3",
    },
    {
      img: "/cryptocurrencies_page/icons/teach03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Mongo DB",
    },
    {
      img: "/cryptocurrencies_page/icons/teach04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Container Service",
    },
    {
      img: "/cryptocurrencies_page/icons/teach05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "GO Lang",
    },
    {
      img: "/cryptocurrencies_page/icons/teach06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Angular JS",
    },
    {
      img: "/cryptocurrencies_page/icons/teach07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Solidity",
    },
    {
      img: "/cryptocurrencies_page/icons/teach08.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "IPFS",
    },
    {
      img: "/cryptocurrencies_page/icons/teach09.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Laravel",
    },
    {
      img: "/cryptocurrencies_page/icons/teach10.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Cluster",
    },
    {
      img: "/cryptocurrencies_page/icons/teach11.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Node Js",
    },
    {
      img: "/cryptocurrencies_page/icons/teach12.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Metamask",
    },
    {
      img: "/cryptocurrencies_page/icons/teach13.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Etherscan",
    },
    {
      img: "/cryptocurrencies_page/icons/teach14.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Tuffle",
    },
    {
      img: "/cryptocurrencies_page/icons/teach15.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Express.JS",
    },
  ];

  const BasicFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Decentralization ",
      text:
        "Our cryptocurrency development solutions reduce bottlenecks and potential points of failure, which eliminates the need for central authority.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Transparency ",
      text:
        "We utilize blockchain technology to provide an immutable record of transactions, increasing trust and transparency. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Security",
      text:
        "Secure transactions and protect against fraud and unauthorized access with our customized cryptocurrency development services.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Cost-Effectiveness",
      text:
        "The need for intermediaries is removed, and transaction processing costs are reduced to mitigate the transaction fees, making it economically viable. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Global Transactions",
      text:
        "We simplify international trade by enabling seamless cross-border transactions without the complexities of currency exchange or regulatory hurdles. ",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Blockchain Technology",
      text:
        " We provide a decentralized and tamper-proof ledger that increases security and transparency to support all cryptocurrency transactions.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Consensus Algorithms",
      text:
        " Essential for maintaining the integrity of the blockchain, the PoW or PoS mechanisms are used to ensure the verification of all transactions.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Cryptography ",
      text:
        "Our cryptocurrency development services provide the basis for secure transactions through complex mathematical algorithms that secure data and ensure privacy.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Tokenization ",
      text:
        "The digital currencies and other assets are developed that can be traded and stored securely to enable the digital representation of assets on the blockchain. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Wallets and Encryption ",
      text:
        " Our cryptocurrency wallet development provides advanced encryption for storing private keys securely while providing an interface to manage and trade cryptocurrencies. ",
    },
  ];

  const teachnolgy = [
    {
      img: "/cryptocoin_page/icons/coin_01.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-12 col-sm-6 col-lg-3 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "ETH ",
    },
    {
      img: "/cryptocoin_page/icons/coin_11.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-12 col-sm-6 col-lg-3 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "BSC",
    },
    {
      img: "/cryptocoin_page/icons/coin_03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-12 col-sm-6 col-lg-3 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "TRON",
    },
    {
      img: "/cryptotokenImg/icons/coin_09.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-12 col-sm-6 col-lg-3 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "POLYGON",
    },
    {
      img: "/cryptocurrencies_page/icons/coin05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-12 col-sm-6 col-lg-3 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "SOLANA",
    },
    {
      img: "/cryptocoin_page/icons/coin_10.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-12 col-sm-6 col-lg-3 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "FANTOM",
    },
    {
      img: "/cryptocurrencies_page/icons/coin07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-12 col-sm-6 col-lg-3 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "AVAX",
    },
    {
      img: "/cryptocurrencies_page/icons/coin08.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-12 col-sm-6 col-lg-3 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "WAX",
    },
  ];

  const Crafting = [
    {
      img: "cryptocurrencies_page//icons/resoures01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Financial Services ",
      text:
        "Cryptocurrencies are revolutionizing banking, payments, and insurance through faster transactions and reduced fees.",
    },
    {
      img: "/cryptocurrencies_page/icons/resoures02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Retail and E-commerce",
      text:
        " Our cryptocurrency development solutions help online retailers and e-commerce platforms minimize transaction fees and provide customer privacy.",
    },
    {
      img: "/cryptocurrencies_page/icons/resoures03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate",
      text:
        "Cryptocurrency development facilitates faster, more secure property transactions with reduced overhead costs by eliminating intermediaries like brokers and banks.",
    },
    {
      img: "/cryptocurrencies_page/icons/resoures04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Logistics",
      text:
        "Our blockchain and cryptocurrency development services improve tracking, reduce fraud, and increase the efficiency of supply chains.",
    },
    {
      img: "/cryptocurrencies_page/icons/resoures05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen  p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Healthcare ",
      text:
        "We provide secure, tamper-proof databases for medical records to improve privacy and trust between entities.",
    },
    {
      img: "/cryptocurrencies_page/icons/resoures06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky  p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Gaming",
      text:
        " Cryptocurrencies are used in online gaming for in-game purchases, betting, and prize distributions, offering a seamless transaction experience.",
    },
    {
      img: "/cryptocurrencies_page/icons/resoures07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink  h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Legal Services",
      text:
        "Smart contracts powered by cryptocurrency technology can automate and enforce legal agreements without intermediaries.",
    },
    {
      img: "/cryptocurrencies_page/icons/resoures08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see  p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Media and Entertainment",
      text:
        "Our crypto services allow direct transactions between creators and consumers, potentially reducing the need for distributors and promoters.",
    },
    {
      img: "/cryptocurrencies_page/icons/resoures09.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Telecommunications ",
      text:
        "Crypto payments can enhance the billing processes and improve data security for services.",
    },
    {
      img: "/cryptocurrencies_page/icons/resoures10.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Energy Sector",
      text:
        "We provide more efficient and transparent peer-to-peer energy exchanges and enable decentralized energy markets to streamline transactions in energy trading.",
    },
    {
      img: "/cryptocurrencies_page/icons/resoures11.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream  p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Non-Profit Organizations",
      text:
        "Our solutions allow non-profits to receive donations directly, bypassing costly payment processors and improving the transparency of fund usage.",
    },
  ];

  const AboutLbm = [
    {
      img: "/cryptocurrencies_page/icons/why01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Dedicated Team  ",
      text:
        "Our developers have expertise in blockchain technology and cryptocurrency development and have successfully launched several crypto projects. ",
    },
    {
      img: "/cryptocurrencies_page/icons/why02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Customized Solutions",
      text:
        "Our cryptocurrency development services are able to meet your specific business needs, ensuring that your digital currency aligns perfectly with your strategic goals.",
    },
    {
      img: "/cryptocurrencies_page/icons/why03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Advanced Technology",
      text:
        "We adopt the latest blockchain development technologies and tools to create innovative and efficient cryptocurrency solutions that stand out in the market.",
    },
    {
      img: "/cryptocurrencies_page/icons/why04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Security Focus ",
      text:
        "Our advanced security protocols help to prioritize the security of your cryptocurrency and conduct testing to prevent potential vulnerabilities.",
    },
    {
      img: "/cryptocurrencies_page/icons/why05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Global Reach",
      text:
        "Having numerous years of experience with clients across the globe, we understand diverse market dynamics and deliver universally applicable solutions.",
    },
    {
      img: "/cryptocurrencies_page/icons/why06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Innovative Features ",
      text:
        "Being a pioneer in incorporating innovative features like smart contracts, multi-signature wallets, and atomic swaps, we enhance the functionality and appeal of your cryptocurrency.",
    },
    {
      img: "/cryptocurrencies_page/icons/why07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Ongoing Support",
      text:
        "Our after-sale services remain active after the launch to ensure continuous operation for your nodes, network, and smart contracts.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Kathryn Long",
      text:
        "Working with the team of LBM Solutions was a game-changer. Their team had a deep understanding of blockchain technology, enabling a smooth launch of our crypto token. They provide the best service for our cryptocurrency development",
    },
    {
      clientName: "Aaron Stewart",
      text:
        "The developers at LBM were quite professional. They guided us through every aspect of the development process, making complex blockchain concepts that were easy to understand. Our cryptocurrency project became successful because of their support ",
    },
    {
      clientName: "Vanessa Adams",
      text:
        "I'm thoroughly impressed by the dedication and skills of LBM Solutions, shown during our cryptocurrency development. They were responsive, knowledgeable, and highly efficient.",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Tyler Cox",
      text:
        "LBM Solutions had provided an outstanding technical expertise. Their professionals not only developed our cryptocurrency but also offered strategic insights that enhanced our business model",
    },
    {
      clientName: "Tara Howard ",
      text:
        "The team of LBM delivered far beyond our expectations with a highly scalable and secure cryptocurrency. Their continuous support post-launch was invaluable. Definitely recommend them for any serious crypto project ",
    },
    {
      clientName: "Charles Reed",
      text:
        "I am really impressed with the work of LBM Solutions! They turned our ideas into a fully functional cryptocurrency. The development process was smooth and transparent. I’m delighted with the outcome. ",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: " What is cryptocurrency development? ",
      body:
        "Cryptocurrency development involves creating either coins or tokens. The key distinction lies in their operation: coins have their blockchain, whereas tokens are built on top of existing blockchains. ",
    },
    {
      eventKey: "1",
      header: "What are the four types of cryptocurrency?",
      body:
        "The four main types of cryptocurrency are Bitcoin, Altcoins, tokens, and stablecoins. ",
    },
    {
      eventKey: "2",
      header: "What is the most trusted cryptocurrency? ",
      body:
        "Bitcoin is the most reliable cryptocurrency. It is well-recognized because of its pioneering role, robust security, and widespread adoption as a digital store of value and decentralized currency.",
    },
    {
      eventKey: "3",
      header: "Which programming language do crypto developers use?",
      body:
        "C++ is the most widely utilized programming language for developing cryptocurrency. Moreover, crypto developers can use Python and Java according to the requirements of the cryptocurrency project.  ",
    },
    {
      eventKey: "4",
      header: "How much does it cost to develop a crypto?",
      body:
        "The cost to develop a cryptocurrency can range from $25,000 to $50,000, depending on complexity, features, security requirements, and developer expertise.",
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
                  clrtext="Development Services"
                  textB=""
                  heading="banner_h"
                />
                <BannerText text="Our leading cryptocurrency development company empowers you to develop customized cryptocurrency. At LBM Solutions, our cryptocurrency developers leverage advanced technologies to deliver secure and decentralized trading solutions for your business success.  " />

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
                  src="/cryptocurrencies_page/banner.png"
                  alt="end to end solutions of cryptocurrency development services"
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
                  textA="Build,"
                  clrtext="Launch, and Scale with Our Cryptocurrency "
                  textB="Development Services"
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="Elevate your business with our cryptocurrency development services. We render a comprehensive suite of cryptocurrency solutions, from cryptocurrency creation to deployment on chosen blockchains, tailored to meet client-specific needs."
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
                  textA="Our"
                  clrtext="Established Cryptocurrency"
                  textB=" Development Process"
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="We provide comprehensive cryptocurrency development solutions to customize cryptocurrency creation on chosen blockchain networks that fit your business needs, ensuring exceptional quality."
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
                  textA="Technology"
                  clrtext="Stack Selection for"
                  textB="Crypto Services"
                  heading="heading_h2 text-white"
                />

                <ParaText
                  f_custome="text-white"
                  para_text="Cryptocurrency development relies on a robust technology stack, including blockchain protocols, consensus algorithms, cryptography, and interoperable solutions to build secure and scalable cryptocurrencies. "
                />
              </div>
            </div>
          </div>

          <div className="row text-center">
            <Card CardData={technology} />
          </div>
        </div>
      </section>

      <section className="wallet_features">
        <div className="container">
          <div className="row  ">
            <div className="col-12 ">
              <Heading_h2
                textA="Benefits"
                clrtext="Derived from the Development of"
                textB="Cryptocurrencies"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
              />

              <ParaText
                f_custome=""
                para_text="Our cryptocurrency development services offer significant features to elevate your business with enhanced security, transparency, and global reach, unlocking extensive growth and opportunities."
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

      <section className="currencyes bg-black">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Trust Our  "
                  clrtext=" Cryptocurrency Development"
                  textB="Platform"
                  heading="heading_h2 text-white"
                />

                <ParaText
                  f_custome="text-white"
                  para_text="Experience our expertise in cryptocurrency development to create advanced cryptocurrencies on your preferred blockchain, incorporating innovative features for a cutting-edge solution."
                />
              </div>
            </div>
            <div className="row text-center jusify-content-center">
              <Card CardData={teachnolgy} />
            </div>
          </div>
        </div>
      </section>

      <section className="crafting">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading
                  textA="Customized Cryptocurrency  "
                  clrtext="Solutions Across All Industries"
                  textB=""
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Our cryptocurrency development services, tailored for diverse industries, render secure, scalable digital asset creation and integration, enhancing operational efficiency and financial innovation."
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
                <Heading
                  textA="Why is"
                  clrtext="LBM Solutions the Best Cryptocurrency"
                  textB="Development Company?"
                  heading="sectoin_h  heading_h2 "
                />

                <ParaText
                  f_custome=""
                  para_text="LBM Solutions, a leading cryptocurrency development company in USA, excels in crafting unique digital currencies using advanced technologies and methodologies. Our crypto developers ensure that your cryptocurrency project is innovative and competitive. "
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
              <ParaText para_text="Having over 10 years experience, we have delivered numerous cryptocurrency projects. Here we demonstrate our clients’ remarks who partnered with us for their cryptocurrency development needs. Read their testimonials to understand the impact of our expertise." />
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
