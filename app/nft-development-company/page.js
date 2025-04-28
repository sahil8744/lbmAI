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
      heading: "NFT Marketplace Development",
      text:
        "Leveraging ERC-721 and ERC-1155 standards, we create user-friendly NFT markets for various sectors.  ",
        isLink: true,
        linkUrl: "/nft-marketplace-development-company  ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "NFT Token Development ",
      text:
        "We",
        LinkHref : "/crypto-token-development-company",
        LinkData:"develop NFT tokens",
        text1: "on multiple blockchains, fostering vibrant communities, enabling fractional ownership, and pioneering unique utility applications",
      },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "NFT Smart Contract Development",
      text:
        "We provide secure",
        LinkHref : "/smart-contract-development-company",
        LinkData:"smart contract development",
        text1: "for Ethereum and other blockchains to create dynamic NFT project foundations.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Enterprise NFT Platform Development",
      text:
        "Our enterprise-grade NFT solutions adapt tokenization for enhanced transparency and reliability in supply chains.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "NFT Minting Platform Development ",
      text:
        " Integrating NFT minting platform with existing apps, we enable the creation, minting, and selling of NFTs within your digital ecosystem.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "NFT Game Development",
      text:
        " Our solutions integrate",
        LinkHref : "/blockchain-development-company",
        LinkData:" blockchain-based mechanics",
        text1: "and community-driven quests for a dynamic NFT game experience, raising player-driven economies.",
        isLink: true,
        linkUrl: "/nft-game-development  ",
    },
  ];

  const BasicFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Proof of Authenticity and Ownership ",
      text:
        " Certify the legitimacy of digital and physical assets, making it easier for businesses to verify and manage unique items.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Market Reach",
      text:
        "We tokenize assets as NFTs that allow businesses to access global markets and sell digital or tokenized physical goods across borders without complex logistics. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Brand Engagement ",
      text:
        "Our NFT Development Solutions create exclusive experiences or rewards for customers, fostering deeper engagement and loyalty. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Royalty Automation",
      text:
        "  We provide innovative NFT development services to automate royalty payments using smart contracts, which execute transactions automatically.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-md-4",
      p_opacity: "opacity-100",
      heading: "Supply Chain Transparency  ",
      text:
        "Attain a transparent record of an item's provenance and history for different industries, enhancing trust and value. ",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Blockchain Platform Selection ",
      text:
        "We provide diverse blockchain platforms to support NFT standards such as ERC-721, ERC-1155, BEP-721, BEP-1155, etc. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Smart Contract Development ",
      text:
        "Create smart contracts to define the behavior of NFTs, including minting, transferring, burning, and metadata storage. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Metadata Storage ",
      text:
        "Store metadata associated with each NFT. Metadata can be stored on-chain, off-chain (IPFS), or a combination of both. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Token Standard Compliance",
      text:
        " Our NFT development services ensure compliance with the specific NFT standard you're using. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Wallet Integration",
      text:
        " Ensure compatibility with popular cryptocurrency wallets for users to interact with NFTs seamlessly. ",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/nft_page/icons/nft_process01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Primary Meet ",
    },
    {
      img: "/nft_page/icons/nft_process02.png",
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
      img: "/nft_page/icons/nft_process03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Blueprint ",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/nft_page/icons/nft_process06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Quality Assurance",
    },
    {
      img: "/nft_page/icons/nft_process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "NFT Development",
    },
 
    {
      img: "/nft_page/icons/nft_process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "NFT Prototyping",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/nft_page/icons/nft_process07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Launch and Maintenance ",
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

  const teachnolgy = [
    {
      img: "/cryptotokenImg/icons/coin_01.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Ethereum ",
    },
    {
      img: "/nft_page/icons/coin02.png",
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
      img: "/nft_page/icons/coin06.png",
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
      img: "/nft_page/icons/coin08.png",
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

  const Crafting = [
    {
      img: "/nft_page/icons/nft_ser01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Art and Collectibles",
      text:
        "Our NFT development solutions provide a new way for creators to authenticate their work and for collectors to prove authorization of digital assets.",
      // background: "/cryptwalletImg/wallet_features.png",
    },
    {
      img: "/nft_page/icons/nft_ser02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Gaming ",
      text:
        "The gaming industry acquires true ownership of in-game assets and allows players to buy, sell, and trade unique items, creating new revenue streams.  ",
    },
    {
      img: "/nft_page/icons/nft_ser03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Music and Entertainment ",
      text:
        "Leveraging NFT development services to tokenize content, offer exclusive access, special editions, or unique experiences tied to digital collectibles.",
    },
    {
      img: "/nft_page/icons/nft_ser04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Sports ",
      text:
        "Tokenize sports mementos related to athletes and sports teams that allow them to own a piece of sports history digitally.",
    },
    {
      img: "/nft_page/icons/nft_ser04.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Fashion and Luxury Goods ",
      text:
        "  We develop NFTs to authenticate and track the source of high-end goods, combat counterfeiting, and offer digital collectibles to customers.",
    },
    {
      img: "/nft_page/icons/nft_ser06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate",
      text:
        "Our decentraland represents ownership of real estate properties, enabling easier transfer of property rights and introducing liquidity to traditionally illiquid markets.",
    },
    {
      img: "/nft_page/icons/nft_ser07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Virtual Worlds and Metaverse",
      text:
        "We introduce",
        LinkHref : "/metaverse-development-company",
        LinkData:" metaverse",
        text1: "that enables users to own and trade digital assets, like virtual land, goods, and avatars, within virtual environments.",
      },
    {
      img: "/nft_page/icons/nft_ser08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Healthcare  ",
      text:
        " NFTs in healthcare are used to securely share and authenticate medical records or data, ensuring patient privacy and data integrity.",
      // background: "/cryptwalletImg/wallet_features.png",
    },
    {
      img: "/nft_page/icons/nft_ser09.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Fundraising ",
      text:
        "NFTs offer a novel way to fundraise for charitable causes by auctioning unique digital items, with blockchain technology providing transparency about funds.",
    },
    {
      img: "/nft_page/icons/nft_ser10.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Education ",
      text:
        "Our NFTs solutions allow the verification of academic credentials, providing a tamper-proof record of an individual's qualifications or accomplishments.",
    },
    {
      img: "/nft_page/icons/nft_ser11.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Finance and Banking",
      text:
        "Tokenization of assets via NFTs can transform liquidity and transparency in the finance sector, representing shares of stocks and bonds.",
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
      heading: "Blockchain Developers  ",
      text:
        "Having an experience of more than a decade, our NFT developers focus on delivering top-tier, specialized solutions with precision and excellence.  ",
    },
    {
      img: "/cryptotokenImg/icons/cost.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Customization Expertise",
      text:
        "We understand that each business is unique. Our strength lies in customizing NFT solutions that perfectly align with your needs and visionary goals.",
    },
    {
      img: "/cryptotokenImg/icons/modern.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "End-to-End Services",
      text:
        "Our comprehensive NFT development services, from ideation to deployment, enhance user experience with security features and smart contract development.",
    },
    {
      img: "/cryptotokenImg/icons/highlysec.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Viable Costs",
      text:
        " Our modest packages ensure you get exceptional value for your investment, delivering high-quality solutions without cutting corners.  ",
    },
    {
      img: "/cryptotokenImg/icons/customization.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "24/7 Support",
      text:
        "Our NFT developers are available round-the-clock to address any issues, resolve queries, and provide ongoing maintenance and support for NFT projects.",
    },
    {
      img: "/cryptotokenImg/icons/ontime.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Security-Centric Strategy ",
      text:
        "We prioritize security, adopting a security-first method and integrating industry best practices to protect your digital assets effectively and reliably.",
    },
    {
      img: "/cryptotokenImg/icons/after.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Global Reach",
      text:
        "Our NFT solutions are designed to meet global standards, empowering you to connect with audiences worldwide and expand your market impression effectively.",
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
  const Frameworks = [
    {
      img: "/nft_page/icons/block_frame01.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Ethereum ",
    },
    {
      img: "/nft_page/icons/coin02.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Hyperledger ",
    },
    {
      img: "/nft_page/icons/graphene.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Graphene ",
    },
    {
      img: "/nft_page/icons/block_frame04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Bitcoin ",
    },
    {
      img: "/nft_page/icons/block_frame05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Solana ",
    },
    {
      img: "/nft_page/icons/block_frame06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "EOS ",
    },
    {
      img: "/nft_page/icons/block_frame07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Tezos ",
    },
    {
      img: "/nft_page/icons/block_frame08.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Stellar ",
    },
    {
      img: "/nft_page/icons/block_frame09.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "POA ",
    },
    {
      img: "/nft_page/icons/avalanche.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Avalanche ",
    },
    {
      img: "/nft_page/icons/near.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "NEAR ",
    },
    {
      img: "/nft_page/icons/block_frame12.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Tera Luna ",
    },
    {
      img: "/nft_page/icons/block_frame13.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Polkadot ",
    },
    {
      img: "/nft_page/icons/block_frame14.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Fantom ",
    },
  ];
  const Cloud = [
    {
      img: "/nft_page/icons/amazon.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-xxl-4  mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Amazon ",
    },
    {
      img: "/nft_page/icons/oracle.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-xxl-4 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Oracle ",
    },
    {
      img: "/nft_page/icons/ibm.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-xxl-4 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "IBM ",
    },
  ];
  const Languages = [
    {
      img: "/nft_page/icons/lang01.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-3 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "HTML",
    },
    {
      img: "/nft_page/icons/lang02.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-3 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "CSS ",
    },
    {
      img: "/nft_page/icons/lang03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-3 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Java Script ",
    },
  ];

  const JsFrameworks = [
    // {
    //   img: "/nft_page/icons/jsframe01.png",
    //   svg_cls: "d-none",
    //   add_class: "",
    //   columns: "col-3 mb-4 margin_btm",
    //   heading_h5: "mx-auto mb-0 mt-3",
    //   heading: "Ethereum ",
    // },
    {
      img: "/nft_page/icons/jsframe02.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-3 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Angular.Js ",
    },
    {
      img: "/nft_page/icons/jsframe03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-3 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "React.Js ",
    },
    {
      img: "/nft_page/icons/meteor.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-3 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Meteor ",
    },
    {
      img: "/nft_page/icons/vuejs.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-3 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Vue.Js ",
    },
    {
      img: "/nft_page/icons/jsframe06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-3 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Next.Js ",
    },
    {
      img: "/nft_page/icons/jsframe07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-3 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Ember ",
    },
  ];

  const Containerization = [
    {
      img: "/nft_page/icons/docker.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-xxl-4 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Docker ",
    },
    {
      img: "/nft_page/icons/kubernetes.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-xxl-4 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Kubernetes ",
    },
    {
      img: "/nft_page/icons/openshift.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-xxl-4 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Open Shift ",
    },
  ];
  const Automation = [
    {
      img: "/nft_page/icons/ansible.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-3 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Ansible ",
    },
    {
      img: "/nft_page/icons/puppet.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-3 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Puppet ",
    },
    {
      img: "/nft_page/icons/saltstack.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-3 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Saltstack ",
    },
    {
      img: "/nft_page/icons/terraform.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-3 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Terraform ",
    },
    {
      img: "/nft_page/icons/packer.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-3 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Packer ",
    },
  ];

  const smartcontract = [
    {
      img: "/nft_page/icons/smartcont01.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-3 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Solidity ",
    },
    {
      img: "/nft_page/icons/rust.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-3 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Rust ",
    },
    {
      img: "/nft_page/icons/vyper.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-3 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Vyper ",
    },
    {
      img: "/nft_page/icons/smartcont04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-3 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "WA ",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Natalie Richardson",
      text:
        "I can't say enough about my experience collaborating with LBM Solutions on our NFT project. Their team's technical prowess ensured that our digital assets were not only cutting-edge but also fortified against any security threats. I'd wholeheartedly recommend them to anyone looking to dive into the NFT space!",
    },
    {
      clientName: "Jerry Rogers",
      text:
        "Working with LBM Solutions on our NFT project was amazing. They really know their stuff and made sure our digital stuff was safe and super cool. If you're thinking about NFTs, definitely check them out!",
    },
    {
      clientName: "Cassandra Powell",
      text:
        "I was blown away by LBM's agile approach to tackling challenges. They addressed every obstacle swiftly, showcasing their adaptability and dedication. Without their expertise, our NFT project wouldn't have been the success it is today.",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Jesse Cox",
      text:
        "The team at LBM Solutions didn't just make NFTs for us; they also helped us figure out how to use them best. Their advice was really helpful!",
    },
    {
      clientName: " Monica Myers",
      text:
        "LBM Solutions used the latest tech to make our NFTs super safe and cool. They were always there to help and test everything thoroughly. If you need help with blockchain stuff, they're the ones to go to!",
    },
    {
      clientName: " Ronald Perry",
      text:
        "LBM Solutions made things easier for us with their special NFT solutions. They made our work faster and better. It was great working with a team like them.",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is Non-fungible Token (NFT)?",
      body:
        "NFTs are digital assets created using blockchain technology, which makes each token unique and unable to be replicated. NFTs can represent ownership of specific items that can be associated with digital files.",
    },
    {
      eventKey: "1",
      header: "What token standards are used for NFTs? ",
      body:
        "Non-fungible tokens (NFTs) primarily use specific token standards such as ERC-721 and ERC-1155. These standards ensure that the tokens will be interoperable with various marketplaces, wallets, and other services within the ecosystem. ",
    },
    {
      eventKey: "2",
      header: "What is the best blockchain choice for an NFT project?",
      body:
        "Ethereum, Polygon, Solana, Tezos, etc., are some of the widely adopted blockchain platforms to develop an NFT project. These platforms can be selected according to various factors, such as projects’ needs, target audience, type of assets being tokenized, and desired features.",
    },
    {
      eventKey: "3",
      header: "How much does NFT development cost?",
      body:
        "The cost of NFT development ranges between $45,000-$50,000. The complexity, platform, design, and additional features such as smart contracts and marketplace integration are some factors that can cause variations in the NFT development cost. ",
    },
    {
      eventKey: "4",
      header: "What programming language is NFT?",
      body:
        "JavaScript, Solidity, and Python can be deployed to develop an NFT project. ",
    },
  ];

  const sectionsData = [
    {
      heading: "NFT Development Agency Creating Custom Solutions",
      paraText:
        "Understanding the expectations of modern businesses, the NFT developers at our esteemed NFT development company focus on creating, integrating, and innovating NFTs with robust, adaptable solutions for global business needs. ",
      imgSrc: "/nft_page/teach_img.png",
      imgAlt: "adaptable solutions of nft development",
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
                  textA=" NFT "
                  clrtext="Development Company"
                  textB="  "
                  heading="banner_h"
                />
                <BannerText text="Being an eminent NFT development company, we deliver consistent NFT solutions addressing all business challenges. " />

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
                  src="/nft_page/banner.png"
                  alt="banner"
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
            <div className="col-sm-10">
              <div className="inner_text">
                <Heading_h2
                  textA="NFT "
                  clrtext="Development Services "
                  textB=""
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="We develop top-tier NFT marketplaces, offering comprehensive services from smart contracts to full-stack development, specializing in Ethereum-based NFTs for diverse business needs. "
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
            <div className="col-10 ">
              <Heading_h2
                textA="How Our"
                clrtext="NFT Platform Boosts"
                textB=" Corporate Success "
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
              />

              <ParaText
                f_custome=""
                para_text="Our NFT Development Services provide diverse features that transform assets into digital collectibles, enabling sales in marketplaces for revenue generation, and are employed innovatively across multiple sectors to unlock new economic potential."
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
                  textA="Our Proven"
                  clrtext="NFT Development Process"
                  textB=""
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="We create an excellent NFT development process, focusing on thorough details from planning to market launch, ensuring a unique client experience."
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
                  textA="NFT Software Development"
                  clrtext="Across Different Blockchain"
                  textB="Platforms"
                  heading="heading_h2 text-white"
                />

                <ParaText
                  f_custome="text-white"
                  para_text="We offer customized non-fungible token development services across your choice of blockchain platforms, ensuring versatility and alignment with your specific needs. "
                />
              </div>
            </div>
          </div>

          <div className="row text-center">
            <Card CardData={teachnolgy} />
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
                  textA="NFT Development Services "
                  clrtext="Impact on Various Industries"
                  textB=""
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Our personalized NFT development services boost efficiency, transparency, and security, empowering industries like real estate, fashion, and finance to broaden their audience and enhance business outcomes."
                />
              </div>
            </div>
          </div>
          <div className="row ">
            <Card CardData={Crafting} />
          </div>
        </div>
      </section>

      <section className="currencyes bg-black">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA=" Technology Stack Selection  "
                  clrtext=" of Our NFT Developers"
                  textB=""
                  heading="heading_h2 text-white"
                />

                <ParaText
                  f_custome="text-white"
                  para_text="Leverage our NFT development services tailored to your preferred tech stack, enhancing asset digitization across any blockchain platform to meet your specific business needs."
                />
              </div>
            </div>
          </div>

          <div className="row text-center border-bottom border-dark pb-5 ">
            <h4 className="text-white fw-semibold text-start mb-4">
              Blockchain Frameworks and Networks
            </h4>
            <Card CardData={Frameworks} />
          </div>

          <div className="row text-center border-bottom border-dark pb-5  mt-5">
            <div className="col-lg-6 col-12">
              <h4 className="text-white fw-semibold text-start mb-4">
                Blockchain Cloud Services
              </h4>
              <div className="row">
                <Card CardData={Cloud} />
              </div>
            </div>
            <div className="col-12 mt-5">
              <h4 className="text-white fw-semibold text-start mb-4">
                Smart Contract programming Languages
              </h4>
              <div className="row">
                <Card CardData={smartcontract} />
              </div>
            </div>
          </div>

          <div className="row text-center border-bottom border-dark pb-5 mt-5">
            <h4 className="text-white fw-semibold text-start mb-4">
              Front-end programming Languages
            </h4>
            <div className="col-12">
              <h5 className="text-white text-start mb-4">Languages</h5>
              <div className="row">
                <Card CardData={Languages} />
              </div>
            </div>
            <div className="col-12">
              <h5 className="text-white text-start mb-4">
                JavaScript Frameworks
              </h5>
              <div className="row">
                <Card CardData={JsFrameworks} />
              </div>
            </div>
          </div>
          <div className="row text-center mt-5">
            <h4 className="text-white fw-semibold text-start mb-4">DevOps</h4>
            <div className="col-lg-6">
              <h5 className="text-white text-start mb-4">Containerization</h5>
              <div className="row">
                <Card CardData={Containerization} />
              </div>
            </div>
            <div className="col-12">
              <h5 className="text-white text-start mb-4">Automation</h5>
              <div className="row">
                <Card CardData={Automation} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_lbm">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Why is   "
                  clrtext="LBM Solutions the Best"
                  textB="NFT Development Company?"
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="As an outstanding NFT development company in USA, we offer customized, secure NFT development solutions with experienced developers skilled in the latest tokens, blockchain platforms, and marketplace integrations for diverse industries.  "
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
              <ParaText para_text="See what our happy clients have to say about their experience with us and how our NFT development solutions have made a big difference in their industries, helping them grow and succeed" />
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
