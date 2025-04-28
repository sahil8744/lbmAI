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
      heading: "Hire Skilled NFT Developers For Your Marketplace Success ",
      paraText:
        "We have an expert team of NFT developers with extensive blockchain expertise to create a unique NFT marketplace designed to engage and attract a substantial active user base with its distinctive functionalities. ",
      imgSrc: "/nft_market_page/teach_img.png",
      imgAlt: "hire skills nft developers for you nft marketplace",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Decentralized NFT Marketplace Development",
      text:
        "Our team specializes in providing excellent NFT marketplace platforms, enabling secure and private trading of digital assets.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "NFT Development & Consultation",
      text:
        "We have veteran NFT consultants and developers to create engaging, customized NFT marketplaces with ERC-721 and ERC-1155 standards.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Metaverse NFT Marketplace Development",
      text:
        "Our NFT marketplace development solutions allow users to trade and bid on digital assets like land and avatars in metaverse space.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "NFT Smart Contract Development",
      text:
        "With proficiency in developing and auditing NFT smart contracts, we ensure flawless and compliant NFT transactions. ",
      isLink: true,
      linkUrl: "/smart-contract-development-company",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "NFT Wallet Development ",
      text:
        "We craft secure and user-friendly wallets that enable absolute transactions of NFT assets across various blockchain platforms.",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/nft_market_page/icons/process01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Consultation Phase ",
    },
    {
      img: "nft_market_page//icons/process02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Prototype Creation   ",
    },
    {
      img: "/nft_market_page/icons/process03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Buy/Sell Logic Development  ",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/nft_market_page/icons/process06.png",
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
      img: "/nft_market_page/icons/process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Test and Launch ",
    },

    {
      img: "/nft_market_page/icons/process04.png",
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
      img: "/nft_market_page/icons/process07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Support and Upgrades ",
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
      heading: "User Authentication",
      text:
        "Our NFT developers implement vigorous authentication methods, namely 2FA and biometric security, to protect user accounts.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Wallet Integration",
      text:
        "Our NFT marketplace development platforms support multiple cryptocurrency wallets for coherent transaction processes within the marketplace. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Customizable User Interfaces ",
      text:
        " We offer custom interfaces where users can modify layouts and displays according to their preferences, enhancing user experience.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Scalability Solutions",
      text:
        "We deploy solutions like layer-2 scaling or choosing a highly scalable blockchain for scalability to handle increased traffic and transactions.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Analytics Dashboard",
      text:
        "Our NFT marketplace development solutions provide dashboards to users and admins, offering insights into transaction histories and market trends. ",
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
        "We select the appropriate blockchain technology that supports NFT standards, like Ethereum with ERC-721 and ERC-1155, for NFT marketplace creation. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "IPFS Deployment ",
      text:
        " We use InterPlanetary File System (IPFS) for decentralized storage of asset files, ensuring that data remains tamper-proof. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Crypto Wallet Integration",
      text:
        "Our whitelabel NFT marketplace supports various wallets for managing and transacting with cryptocurrencies and NFTs. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Payment Gateway  ",
      text:
        " We incorporate various payment gateways that support both cryptocurrencies and fiat currencies, depending on the legal and operational frameworks. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Token Standards",
      text:
        "We offer extensive NFT token creation services, supporting diverse standards like ERC-721 and ERC-1155.",
    },
  ];

  const teachnolgy = [
    {
      img: "/p2p_page/icons/onlyfans.png",
      svg_cls: "d-none",
      add_class: "onlyfans",
      columns: "col-12 col-sm-6 col-lg-4 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3 ",
      heading: "OnlyFans Clone Script ",
      text:
        "We provide OnlyFans clone scripts to create NFT marketplaces that enable creators to mint exclusive content as NFTs, providing fans a platform to purchase and own unique digital assets securely.",
      p_opacity: "mt-2 pb-lg-4",
    },

    {
      img: "/p2p_page/icons/Opensea.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-12 col-sm-6 col-lg-4 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Opensea Clone Script ",
      text:
        "Our OpenSea clone script enables entrepreneurs to establish a peer to peer NFT marketplace, connecting creators, collectors, and gamers to trade and mint NFTs. It replicates OpenSea's features and can be deployed on multiple blockchains like Ethereum and Binance Smart Chain.",
      p_opacity: "mt-2",
    },
    {
      img: "/p2p_page/icons/polkacity.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-12 col-sm-6 col-lg-4 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Polkacity Clone Script ",
      text:
        "Our Polkacity clone script leverages Ethereum and Polkadot networks, offering a comprehensive suite for NFT marketplaces and asset purchases. We craft decentralized NFT marketplaces, enabling access to virtual cities and the potential for earning commissions.",
      p_opacity: "mt-2",
    },
  ];

  const sectionsData_a = [
    {
      heading:
        "We Select the Best Blockchain Platform for NFT Marketplace App Development  ",
      paraText:
        "As a leader in NFT marketplace development, we integrate advanced technologies to create a whitelabel NFT marketplace with exceptional features and unmatched user experiences. ",
      imgSrc: "/nft_market_page/teach_img01.png",
      imgAlt: "teach_img",
    },
  ];

  const Crafting = [
    {
      img: "/nft_market_page/icons/sourceses01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Art",
      text:
        " Our NFT marketspace allows artists to tokenize their works and sell digital ownership directly to buyers without intermediaries.",
    },
    {
      img: "/nft_market_page/icons/sourceses02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Gaming  ",
      text:
        "NFT platforms represent in-game assets, allowing players to own, buy, sell, and trade within and across different gaming platforms.",
    },
    {
      img: "/nft_market_page/icons/sourceses03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Music ",
      text:
        "Our NFT marketplace development solutions allow musicians to tokenize their songs and albums, providing a new revenue model by selling these as NFTs.",
    },
    {
      img: "/nft_market_page/icons/sourceses04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Fashion  ",
      text:
        "Designers and brands can create digital versions of clothing and accessories, which can be bought and sold as NFTs within NFT marketplaces.",
    },
    {
      img: "/nft_market_page/icons/sourceses05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Logistics ",
      text:
        "For this industry, custom software can optimize routing, fleet management, tracking systems, and logistics scheduling.",
    },
    {
      img: "/nft_market_page/icons/sourceses06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate",
      text:
        " NFT marketplace provides virtual real estate where users can buy, sell, or lease digital property.",
    },
    {
      img: "/nft_market_page/icons/sourceses07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Film and Entertainment ",
      text:
        " We create NFT marketplaces to distribute and monetize films and series, offer exclusive viewing rights, or tokenize movie memorabilia.",
    },
    {
      img: "/nft_market_page/icons/sourceses08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Photography ",
      text:
        " With NFTs, photographers can sell their digital photos as NFTs, controlling the distribution and earning potential of their digital works.",
      // background: "/cryptwalletImg/wallet_features.png",
    },
    {
      img: "/nft_market_page/icons/sourceses09.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Technology ",
      text:
        "From software licenses to patented technologies, items can be tokenized and traded as NFTs, ensuring authenticity and ownership.",
    },
    {
      img: "/nft_market_page/icons/sourceses10.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Advertising and Marketing",
      text:
        "These virtual spaces allow brands to create unique NFTs as promotional campaigns, driving engagement and offering customers tangible digital assets.",
    },
    {
      img: "/nft_market_page/icons/sourceses11.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Tourism",
      text:
        "Offering virtual tours and exclusive access, NFTs can provide innovative and unique experiences for tourists and guests.",
    },
  ];

  const AboutLbm = [
    {
      img: "/nft_market_page/icons/why01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Skilled Team ",
      text:
        "With years of experience in blockchain technology, our team has profound knowledge of developing and launching successful NFT marketplaces.",
    },
    {
      img: "/nft_market_page/icons/why02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Custom Solutions",
      text:
        "We offer customized NFT marketplace development solutions as per client requirements, ensuring a personalized platform with advanced features.",
    },
    {
      img: "/nft_market_page/icons/why03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Technology Expertise",
      text:
        "Our NFT marketplace development solutions use the latest tech stacks to create secure and scalable NFT marketplaces, ensuring exclusive user experience.",
    },
    {
      img: "/nft_market_page/icons/why04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Customized Solutions",
      text:
        "Delivering scalable, high-quality custom software solutions tailored to startups, mid-sized companies, and enterprises to meet specific needs.",
    },
    {
      img: "/nft_market_page/icons/why05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "End-to-End Services",
      text:
        "From ideation and conceptualization to development, testing, and deployment, we provide complete services to create a consistent NFT marketplace.",
    },
    {
      img: "/nft_market_page/icons/why06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Client-Centric Approach ",
      text:
        "We focus on creating user-friendly interfaces that ensure an intuitive experience for marketplace operators, enhancing overall user engagement.",
    },
    {
      img: "/nft_market_page/icons/why07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "After-launch Support ",
      text:
        "We offer extensive post-launch support for your NFT marketplace, ensuring continuous performance through updates, security checks, and technical help.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Evelyn Nora Adams",
      text:
        "LBM’s team created an excellent NFT marketplace for us, meeting all our specifications. Their attention to detail and commitment to quality were commendable. ",
    },
    {
      clientName: "Oliver Baker",
      text:
        "We were amazed at the expertise of LBM Solutions in NFT development. They developed a secure and user-friendly NFT platform according to our requirements attracting numerous users.",
    },
    {
      clientName: "Abigail Hill",
      text:
        " The team of LBM delivered a customized NFT marketplace that exceeded our expectations. The platform was feature-rich and intuitive. Their support team was also helpful and responsive.",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Aaron Nelson",
      text:
        "The team at LBM provided us with outstanding solutions for our NFT marketplace, ensuring seamless transactions and high security. Their technical knowledge and problem-solving skills were evident throughout the project. ",
    },
    {
      clientName: "Emily Jane Carter",
      text:
        "Exceptional work of LBM! They created a scalable NFT marketplace with advanced features that cater to our business needs. The platform’s performance was excellent, and the team’s after-launch support was invaluable.  ",
    },
    {
      clientName: "Kyle Mitchell",
      text:
        "They built a unique NFT marketplace for us tailored to our needs. Their assistance was fantastic, ensuring that the platform ran smoothly. Their expertise and professionalism were evident in the final product. ",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is NFT marketplace development?",
      body:
        "NFT marketplace development involves creating a digital where people can safely purchase, sell, and exchange unique digital assets (NFTs) securely, integrating blockchain technology, smart contracts, and user-friendly interfaces.",
    },
    {
      eventKey: "1",
      header: "How much does it cost to develop the NFT marketplace?",
      body:
        "The cost to develop an NFT marketplace varies widely, typically ranging from $35,000 to $50,000, depending on features, blockchain integration, design complexity, and developer expertise.",
    },
    {
      eventKey: "2",
      header: "How much time will it take to develop NFT Marketplace? ",
      body:
        "Developing an NFT marketplace usually takes 3 to 6 months, based on the complexity, features, and customization requirements of the project.",
    },
    {
      eventKey: "3",
      header: "What programming language for NFT marketplace?",
      body:
        "NFT marketplaces are developed using Java, and its frameworks are developed using React, with back-end languages such as Node.js or Python.",
    },
    {
      eventKey: "4",
      header: "Is NFT marketplace profitable?",
      body:
        "Yes, an NFT marketplace can be profitable due to transaction fees, listing fees, and royalties from secondary sales, attracting both creators and collectors in the growing digital asset market.",
    },
    {
      eventKey: "5",
      header:
        "How to create an NFT marketplace development platform like Opensea?",
      body:
        "To create an NFT marketplace like OpenSea, integrate blockchain technology, develop smart contracts, design a user-friendly interface, implement wallet support, and ensure security measures for safe and seamless transactions.",
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
                  textA="NFT  "
                  clrtext="Marketplace Development Company"
                  textB=" for Businesses"
                  heading="banner_h"
                />
                <BannerText text="Launch your NFT marketplace with creation and wallet integration solutions at our prominent NFT marketplace development company. " />

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
                  src="/nft_market_page/banner.png"
                  alt="white label nft marketplace development company"
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
                  textA="Our"
                  clrtext="NFT Marketplace Development "
                  textB="Services"
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="We offer consistent white-label NFT marketplace development, providing scalable, ready-to-deploy solutions and customizable dashboards for entrepreneurs and content creators to explore new revenue streams in the NFT space."
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
                  textA="Our Expert-Led "
                  clrtext="NFT Marketplace Development Process"
                  textB=""
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="Our NFT marketplace development approach constructs a scalable whitelabel NFT marketplace, ensuring robust, error-free smart contracts and financial security."
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
            <div className="col-10 ">
              <Heading_h2
                textA="The Impact of Our "
                clrtext="NFT Marketplace Development"
                textB=" on Business Growth "
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
              />

              <ParaText
                f_custome=""
                para_text="At our NFT marketplace development agency, we build advanced, secure NFT marketplaces, focusing on exceptional features that elevate the trading experience and satisfy users. "
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

 
      <section className="currencyes bg-black">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Make Your "
                  clrtext="NFT Marketplace Platform"
                  textB=" Own With Our Clone Scripts"
                  // heading="heading_class"
                  heading=" heading_h2 text-white"
                />
                <ParaText
                  f_custome="text-white"
                  para_text="Our customizable NFT marketplace development solutions feature attractive shop fronts, user and admin dashboards, advanced filters, and trading tools. We utilize security layers, optimizing trading experiences tailored to client needs."
                />
              </div>
            </div>
            <div className="row text-center jusify-content-center">
              <Card CardData={teachnolgy} />
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
                  textA="Our NFT Marketplace Development Solutions "
                  clrtext="Empower Various Industries"
                  textB=""
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Specializing in crafting versatile, tailored NFT marketplace solutions that can be quickly launched, we help entrepreneurs showcase a variety of NFT collectibles across multiple sectors in a metaverse marketplace. "
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
                  textA="Why LBM is Your "
                  clrtext="Ideal NFT Marketplace "
                  textB="Development Company?"
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="Being an esteemed whitelabel NFT marketplace development company in USA, LBM Solutions has 200+ NFT marketplace developers who develop seamless NFT marketplace solutions according to business goals. "
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
              <ParaText para_text="With the reliability over 10+ years, our clients commend our NFT marketplace development services for its seamless functionality, design, and security. They appreciate our development team's dedication to delivering tailored solutions that drive engagement and success in the NFT space." />
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
