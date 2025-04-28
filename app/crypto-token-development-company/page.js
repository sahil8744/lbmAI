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
      heading: "Security Token Development",
      p_opacity: "opacity-100",
      text:
        "We develop security tokens with customized  ",
       
        LinkHref : "/smart-contract-development-company",
        LinkData:" smart contracts,",
        text1: "and blockchains that derive value through an external asset.",
        // LinkHref1 : "/metaverse-game-development",
        // LinkData1:"3D gaming. ",
         isLink: true,
        linkUrl: "/sto-development-company ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Tron Token Development ",
      text:
        "From token development to its launching, we assist you in developing Tron Tokens on TRC-10, TRC-20, and TRC-721 standards .",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "ICO Token Development",
      text:
        "To develop ICO, we deploy blockchain technology to attain global reach and fascinate potential shareholders from diverse countries.",
        isLink: true,
        linkUrl: "/ico-development  ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Ethereum Development",
      text:
        "Our experts create Ethereum tokens on distinct standards like ERC-20, ERC-721, ERC-223, ERC-777, ERC-827, ERC-1155, ERC-721, ERC-998.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "NFT Token Development",
      text:
        " Create unique and security-rich NFT tokens with our services and acquire a competitive edge in the crypto realm.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "IDO Development ",
      text:
        "Structured fundraising on  ",
        LinkHref : "/decentralized-exchange-development-company",
        LinkData:" decentralized exchanges",
        text1: "empowers your crypto token with new features to connect with investors and raise capital efficiently.",
        // LinkHref1 : "/metaverse-game-development",
        // LinkData1:"3D gaming. 
      },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "DeFi Token Development ",
      text:
        " Ease your financial deeds, like borrowing, trading, and investments in blockchain systems, by developing high-quality  ",
        LinkHref : "/defi-development-company",
        LinkData:" DeFi",
        text1: "tokens.",
      },
  ];

  const BasicFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Capital Raising ",
      text:
        " Elevate your assets using ICO and STO token development services and suppress traditional financing barriers.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Liquidity",
      text:
        "Explore robust token development solutions for industries and investors to access liquid markets, trade possessions, and unravel value in previously illiquid markets.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Cost Efficiency ",
      text:
        "Smart contracts in crypto token development lead to mitigating management costs with automated processes.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Global Reach",
      text:
        " Experience infinite transactions with our robust services, which expand market reach and eliminate costs and delays in currency exchange.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-md-4",
      p_opacity: "opacity-100",
      heading: "Asset Tokenization ",
      text:
        "Businesses get access to unlock earlier illiquid assets and generate new investment opportunities to tokenize diverse assets.",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Smart Contracts ",
      text:
        "Ensure automated token transactions and adhere to predefined conditions via smart contracts containing self-executing agreements with predefined rules. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Token Standards",
      text:
        "Our crypto tokens developed on ERC-20, ERC-721, or new standards are compatible with existing wallets, exchanges, and infrastructure.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      heading: "Direct Blockchain Crypto Exchange",
      p_opacity: "opacity-100",
      text:
        "We incorporate a wallet feature allowing direct blockchain-based crypto trades.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Customization",
      text:
        "Our solutions assist in customizing token parameters, such as supply, divisibility, and transfer restrictions, according to specific business requirements.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Blockchain Integration",
      text:
        "We develop tokens on various blockchain platforms, such as Ethereum and Binance Smart Chain, leveraging their security and decentralization mechanisms.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Security Features ",
      text:
        "Experience security best solutions to safeguard against vulnerabilities, including reentrancy attacks, integer overflow, and unauthorized access to funds.",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/cryptotokenImg/icons/strategy.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Communication & Strategy",
    },
    {
      img: "/cryptotokenImg/icons/blockchain.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Blockchain Platform Selection",
    },
    {
      img: "/cryptotokenImg/icons/contract.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Set up Smart Contract",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/cryptotokenImg/icons/token.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Token Creation",
    },
    {
      img: "/cryptotokenImg/icons/transferable.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Transferable Features Insertion ",
    },
    {
      img: "/cryptotokenImg/icons/tokenlaunch.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Token Launch ",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/cryptotokenImg/icons/listing.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Listing on Stage",
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

  const currencyes = [
    {
      img: "/cryptotokenImg/icons/coin_01.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Ethereum ",
    },
    {
      img: "/cryptotokenImg/icons/coin_02.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Hyperledger  ",
    },
    {
      img: "/cryptotokenImg/icons/coin_03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Binance",
    },
    {
      img: "/cryptotokenImg/icons/coin_04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: " mx-auto mb-0 mt-3",
      heading: "BCA",
    },
    {
      img: "/cryptotokenImg/icons/coin_05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "NEM",
    },
    {
      img: "/cryptotokenImg/icons/coin_06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: " mx-auto mb-0 mt-3",
      heading: "Corda",
    },
    {
      img: "/cryptotokenImg/icons/coin_07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: " mx-auto mb-0 mt-3",
      heading: "Stellar",
    },
    {
      img: "/cryptotokenImg/icons/coin_08.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Solana",
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
      img: "/cryptotokenImg/icons/coin_10.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Cardano",
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

  const Crafting = [
    {
      img: "/cryptotokenImg/icons/finance.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Finance and Banking",
      text:
        "Experience digital payments, tokenize assets, and enable decentralized finance (DeFi)  ",
        LinkHref : "/mobile-app-development-services",
        LinkData:" applications",
        text1: "such as lending, borrowing, and exchange.", 
        // background: "/cryptwalletImg/wallet_features.png",
    },
    {
      img: "/cryptotokenImg/icons/healthcare.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Healthcare",
      text:
        "Ensure the security of patient data and streamline healthcare data management with our seamless token development solutions. ",
    },
    {
      img: "/cryptotokenImg/icons/realestate.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate",
      text:
        "Tokenize real estate assets for fractionalizing ownership, augmenting liquidity, and streamlining property transactions. ",
    },
    {
      img: "/cryptotokenImg/icons/enery.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Energy and Utilities",
      text:
        "Optimize energy trading, incentivize renewable energy production, and enable peer-to-peer energy transactions with our robust solutions. ",
    },
    {
      img: "/cryptotokenImg/icons/art.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Art and Collectibles",
      text:
        "Develop tokens for artwork as NFTs and attain authenticity and ownership for blockchain platforms.",
    },
    {
      img: "/cryptotokenImg/icons/gaming.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Gaming",
      text:
        "Explore the benefits of in-game assets as NFTs for digital porcelains, virtual land authorization, and unique gaming experiences.",
    },
    {
      img: "/cryptotokenImg/icons/education.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Education ",
      text:
        "Issue and validate academic credentials and certifications as blockchain-based tokens to resist credential fraud and maximize reliability",
    },
    {
      img: "/cryptotokenImg/icons/aggricultrue.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Agriculture and Food Traceability",
      text:
        "Create tokens for farming products to make the food supply chains transparent and consistent",
      // background: "/cryptwalletImg/wallet_features.png",
    },
    {
      img: "/cryptotokenImg/icons/ecommerce.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Retail and E-commerce",
      text:
        "Introduce token-based programs to reward customer loyalty and enable smooth transactions in retail and e-commerce sectors.",
    },
    {
      img: "/cryptotokenImg/icons/governcne.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Governance and Voting",
      text:
        "Our token-based governance models for  ",
        LinkHref : "/dao-development-company",
        LinkData:"decentralized autonomous organizations (DAOs)",
        text1: "render transparency and security for voting processes.",
      },
    {
      img: "/cryptotokenImg/icons/legal.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Legal and Intellectual Property",
      text:
        "With tokens for intellectual property rights and patents, reconstruct IP management and ensure fair compensation for creators.",
    },
  ];

  const AboutLbm = [
    {
      img: "/cryptotokenImg/icons/proficientr.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Proficient Team ",
      text:
        "Our experienced developers are dedicated to easily addressing even the most complicated projects and rendering promising outcomes. ",
    },
    {
      img: "/cryptotokenImg/icons/cost.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Cost-Effective Solutions",
      text:
        "We ensure your project achieves its objectives within budget constraints, driving long-term success.",
    },
    {
      img: "/cryptotokenImg/icons/modern.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Modern Infrastructure ",
      text:
        "We stay at the forefront of blockchain trends and technologies, offering innovative crypto token solutions to capitalize on emerging opportunities.",
    },
    {
      img: "/cryptotokenImg/icons/highlysec.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Highly Secured Solutions",
      text:
        " Our DeFi platform provides robust security measures to safeguard your tokens and ensure the integrity of your blockchain-based assets. ",
    },
    {
      img: "/cryptotokenImg/icons/customization.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Customization Excellence",
      text:
        "Understanding your needs, our team renders customized token development solutions and designs tokens as per business requirements. ",
    },
    {
      img: "/cryptotokenImg/icons/ontime.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "On-Time Delivery ",
      text:
        "By prioritizing timeliness in our token development strategy, we ensure your project is delivered on the scheduled time.",
    },
    {
      img: "/cryptotokenImg/icons/after.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "After-Sales Support",
      text:
        "Our support and maintenance services ensure the troubleshooting of technical issues and the implementation of upgrades and enhancements.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Emily Johnson",
      text:
        " I am grateful for the professionalism and expertise of LBM Solutions. They guided us through every step of the token development process, delivering a robust and secure solution that exceeded our expectations. ",
    },
    {
      clientName: "Michael Williams",
      text:
        "The dedication of LBM to our project's success was evident from the outset, and I highly recommend them to anyone seeking top-notch token development services.",
    },
    {
      clientName: "Sarah Brown",
      text:
        "LBM Solutions provides exceptional service from start to finish. Its experts not only met but exceeded our expectations with their development expertise and commitment to excellence",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "David Jones",
      text:
        "Choosing LBM Solutions for our token development needs was a game-changer. Their technical prowess, combined with their dedication to customer satisfaction, made them the perfect partner for our project.",
    },
    {
      clientName: "Jennifer Davis",
      text:
        "We couldn't be happier with the outcome of our token project, thanks to LBM. Their proactive approach and ability to deliver on time have earned our trust and admiration.",
    },
    {
      clientName: "James Miller",
      text:
        "Working with LBM was a game-changer for our project. Their expertise in token development and commitment to excellence surpassed our expectations. Highly recommended!",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is the difference between a token and a crypto?",
      body:
        "Cryptocurrencies are a particular kind of digital currency that operates on blockchain networks, while tokens are digital assets that exist on existing blockchain networks and represent ownership or utility in various applications.",
    },
    {
      eventKey: "1",
      header: "What is the best crypto token development company?",
      body:
        "Determining the best crypto token development company depends on various factors such as your specific project requirements, budget, timeline, and desired level of expertise. All these factors should be considered while selecting a crypto token development company.  ",
    },
    {
      eventKey: "2",
      header: "How do I create my token? ",
      body:
        "Creating your token requires careful planning, technical expertise, and attention to detail. Be sure to conduct thorough research and seek assistance from experienced developers or consultants if needed to ensure a successful token launch. ",
    },
    {
      eventKey: "3",
      header: "How does a token work?",
      body:
        "Tokens operate as digital assets within blockchain networks, typically implemented as smart contracts. Each token is associated with a unique address on the blockchain, with ownership determined by control of the private keys. Tokens can represent various assets, facilitate transactions, govern decentralized applications, or incentivize participation within blockchain ecosystems.",
    },
    {
      eventKey: "4",
      header: "How Long Does It Take To Develop an ERC 20 Token?",
      body:
        "The time required to develop an ERC-20 token can vary based on diverse factors, such as the complexity of the token's functionality, the experience level of the development team, and any additional features or requirements. However, a basic ERC-20 token implementation can typically be developed within a few days to a couple of weeks by experienced developers. ",
    },
    {
      eventKey: "5",
      header: "How Much Does it Cost to Make a Token?",
      body:
        "The cost of making a token can vary widely depending on the specific requirements and complexities of the project. The essential aspect is to carefully consider your project's needs and budget accordingly. ",
    },
  ];

  const sectionsData = [
    {
      heading: "Expert Token Development Solution Provider",
      paraText:
        "Our professional token developers assist you in crypto token development beginning from primary consultation.  We develop cryptocurrency tokens according to your business needs, which will help you improve ROI.",
      imgSrc: "/cryptotokenImg/teach_img.png",
      imgAlt: "expert & affordable token developers",
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
                  textA=" Secure & Reliable"
                  clrtext="Token Development"
                  textB="  Company"
                  // heading="heading_class"
                  heading="banner_h"
                />
                <BannerText text=" We are a leading token development company to elevate your token development experience with "
                LinkData=" blockchain solutions."
                LinkHref="/blockchain-development-company" />

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
                  src="/cryptotokenImg/banner.png"
                  alt="secure & reliable token development company in USA"
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
                  textA="Crypto "
                  clrtext="Token Development Services"
                  textB=""
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="Transform your business with our wide-ranging crypto token development services. Our experts render secure, amenable, and scalable token development solutions for harnessing the potential of blockchain technology. "
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
                textA="Features of Our"
                clrtext="Crypto currency Token Development "
                textB=""
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
              />
              <ParaText
                f_custome=""
                para_text="In token development, we deploy all the required features of the blockchain network. Our professional developers assist in token generation, platform development, and blockchain integration."
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

      <section className="devel_process">
        <div className="container">
          <div className="row mb-4 mb-lg-5 ">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Our  "
                  clrtext="Token Development Process"
                  textB=""
                  heading="heading_h2 mb-0"
                />
                <ParaText
                  f_custome=""
                  para_text="Our token development services aim at conceptualization, technical implementation, smart contract coding, blockchain network implementation, ensuring security, and promoting the adoption and liquidity of the token.  "
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
                  textA=" We Focus on Multiple"
                  clrtext=" Token Development Platforms"
                  textB=""
                  heading="heading_h2 text-white"
                />

                <ParaText
                  f_custome="text-white"
                  para_text="Delve into the token development world to create flexible and resilient multiple token development platforms, and strategic benefits to navigate the rapidly emerging blockchain landscape."
                />
              </div>
            </div>
          </div>

          <div className="row text-center">
            <Card CardData={technology} />
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
                  textA="Industries We "
                  clrtext="Transform With Token Development "
                  textB="Solution"
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Unlock new business frameworks and avail effective, transparent, and innovative solutions for token development for diverse industries. Our services integrate Blockchain into diverse structures to provide security, scalability, and cost-efficiency."
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
                  textA="Why Choose LBM Solutions"
                  clrtext="As Your Blockchain Development Company?"
                  textB=""
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text1="At LBM Solutions, engage with our team of technical experts for end-to-end token development services based on blockchain from our technical experts. There is no need to spend much time and higher costs for "
                  LinkData="crypto exchange development;"
                  LinkHref="/cryptocurrency-exchange-development-company"
                  para_text="we provide cost-effective solutions with higher security and scalability."
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
              <ParaText para_text="Discover what our clients have to say about their experience with our crypto token development services. Read real testimonials from satisfied clients who have partnered with us." />
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
