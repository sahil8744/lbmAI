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

const PlayToEarn = () => {
  const bottomSectionRef = useRef(null);

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover ",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Full-Cycle P2E Game Development",
      text1:"specialize in offering P2E game development solutions from concept to deployment.",
      text:
        "Our",
        LinkHref : "/metaverse-development-company",
        LinkData:"metaverse developers",
        // isLink: true,
      // linkUrl: "",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover ",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Play-to-Earn Game Design Development",
      text:
        "Our skilled designers create captivating P2E game platforms with vibrant 3D characters and unique NFTs.",
      // isLink: true,
      // linkUrl: "",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "P2E Metaverse Game Development",
      text:
        "Our P2E gaming platform development solutions render fascinating play to earn metaverse games to earn real-world value.",
      // isLink: true,
      // linkUrl: "",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Play-to-Earn NFT Game Development",
      text:
        "We create NFT based P2E gaming platforms, allowing players to gain rewards and play games to earn money.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Game Testing And Quality Assurance ",
      text:
        "Our quality analysts identify and resolve bugs and complexities, ensuring flawless performance for Play-to-Earn games.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "P2E Game Marketing And Promotion ",
      text:
      " We provide tailored ",
      text1:"to attract players and build anticipation for your P2E gaming platform.",
        LinkHref : "/digital-marketing-agency",
        LinkData:"marketing strategies",
    },
  ];

  const BasicFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "In-Game Economy ",
      text:
        "Our P2E game development platform includes a robust in-game economy where players can play games to earn money and trade and sell assets.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "NFT Integration ",
      text:
        "We integrate NFTs in play to earn game development platforms to own unique digital assets, enhancing player engagement. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Reward Systems  ",
      text:
        "Our P2E games feature reward systems that incentivize continuous play, offering in-game assets for their achievements.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Customizable Avatars",
      text:
        "We create P2E games that allow the customization of 3D avatars, enhancing the gaming experience in metaverse realm.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-md-4",
      p_opacity: "opacity-100",
      heading: "Secure Transactions",
      text:
        "Our play to earn game development strategy implements multiple layers of security for all transactions to protect in-game assets. ",
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
        "We integrate blockchain technology in web3 play-to-earn game development to render transparency of transactions in P2E ecosystem.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "High-Performance Servers",
      text:
        "We deploy servers to manage large volumes of concurrent users, ensuring smooth gameplay and minimal latency.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Scalable Infrastructure",
      text:
        "Our play to earn game development solutions provide scalable infrastructure to accommodate growing player bases and confirm consistency.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Cross-Chain Compatibility",
      text:
        "We ensure our P2E games are compatible with multiple blockchain networks, which allow access to diverse player communities.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Decentralized Storage",
      text:
        "We use decentralized solutions to store game assets securely, ensuring data integrity and availability.",
    },
  ];


  const DevelopmentProcess_a = [
    {
      img: "/play_to_earn/icons/01.png",
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
      img: "/play_to_earn/icons/02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Game Planning",
    },
    {
      img: "/play_to_earn/icons/03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "NFT Integration ",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/play_to_earn/icons/06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "UI/UX Design ",
    },
    {
      img: "/play_to_earn/icons/05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Game Development",
    },
    {
      img: "/play_to_earn/icons/04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Deployment ",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/play_to_earn/icons/07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Launch & Marketing ",
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



  const ClientData_aa = [
    {
      clientName: "Zoe Taylor",
      text:
        "We were impressed with the creativity and expertise of the LBM team. They brought our spinning game idea to life with amazing graphics and intuitive gameplay. We saw impressive user engagement and ROI right from the launch. ",
    },
    {
      clientName: "Elijah White",
      text:
        "We contacted LBM to develop RPG game. Our players loved the immersive experience and the seamless earning opportunities. They delivered the project before the deadline and also provided after-launch assistance. ",
    },
    {
      clientName: "Grace Hill",
      text:
        "We had an excellent experience working with LBM Solutions. Their action game development process was top-notch. We achieved a significant increase in user retention and engagement.",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Carter Gray",
      text:
        "LBM’s team crafted an engaging metaverse sports game according to our requirements. The integration of play-to-earn elements was flawless. We got excellent financial returns.",
    },
    {
      clientName: "Olivia Davis",
      text:
        "We hired LBM’s team for our play-to-earn game project, and they delivered beyond expectations. The game’s performance and player feedback was outstanding. Their expertise in blockchain and game development was evident in the quality of their work ",
    },
    {
      clientName: "Jack Mitchell",
      text:
        "Our play-to-earn adventure game developed by LBM was a huge success! We saw impressive user engagement and ROI right from the launch. Their expertise in-game mechanics and blockchain integration is unmatched. ",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is play-to-earn games? ",
      body:
        "Play-to-earn games help players earn real-time rewards through gameplay, like cryptocurrency or NFTs. These games combine entertainment with financial incentives, which makes gaming more rewarding and engaging.",
    },
    {
      eventKey: "1",
      header: "How much does it cost to develop a play-to-earn game?",
      body:
        "It costs  $30,000 to over $100,000 to build a play to earn game. High-quality graphics, blockchain integration, and advanced gameplay mechanics can increase development expenses.",
    },
    {
      eventKey: "2",
      header: "How long does it usually take to develop a P2E game?",
      body:
        "Creating a play-to-earn game may take six months to a year. The timeline depends on the game's complexity, design requirements, and feature set. ",
    },
    {
      eventKey: "3",
      header: "Why Are Play To Earn Games So Popular?  ",
      body:
        "Play-to-earn games are famous because they allow players to earn real money while having fun. The integration of entertainment with financial incentives creates a dynamic and engaging gaming environment to attract a huge audience.",
    },
    {
      eventKey: "4",
      header: "Are play-to-earn games profitable? ",
      body:
        "Yes, play-to-earn games can be highly profitable. Players earn through in-game activities and trading, while developers benefit from in-game purchases, transaction fees, and a growing player base. ",
    },
  ];

  const sectionsData = [
    {
      heading:
        "Hire Expert Play to Earn Game Developer for Secure Gaming Solution ",
        paraText:"Our P2E games offer exciting opportunities to earn rewards while enjoying games.",
      paraText1:
        "Being an esteemed P2E game development company, we have expert play to earn game developers to deliver innovative",
        Link_href:"/blockchain-game-development-company",
         Link_data:"blockchain-based games.",
        imgSrc: "/play_to_earn/teach_img.png",
      imgAlt: "Hire our Expert p2e game developer",
    },
  ];

  const sectionsData_a = [
    {
      heading: "Our Tech Stack Strategy for P2E Game Development Success",
      paraText:
        "Our web3 play-to-earn game development process leverages advanced technologies to create immersive play-to-earn metaverse games. We utilize innovative game engines, blockchain protocols, and VR tools for realistic environments.",
      imgSrc: "/play_to_earn/teach_img_a.png",
      imgAlt: "tech stack of p2e game platform development",
    },
  ];

  const currencyes = [
    {
      img: "/cryptotokenImg/icons/coin_01.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "ETH ",
    },

    {
      img: "/cryptotokenImg/icons/coin_03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "BSC",
    },
    {
      img: "/cryptocoin_page/icons/coin_03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: " mx-auto mb-0 mt-3",
      heading: "Tron",
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
      img: "/cryptotokenImg/icons/coin_08.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Solana",
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
      img: "/centralizedcryptocur_page/icons/teachstack07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: " mx-auto mb-0 mt-3",
      heading: "Avax",
    },
    {
      img: "/p2p_page/icons/wax.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Wax",
    },
  ];

  const technology = [
    {
      img: "/metagaming_page/carimg_01.png",
      alt_value:"adventure p2e game development services",
      img_class: "rounded-3",
      svg_cls: "d-none",
      add_class: "text_img_card rounded-3 text-start p-3 h-100",
      columns: "col-md-6 col-lg-4 mb-4 ",
      custome_col_a: "overflow-hidden ",
      heading_h5: "text-white mb-0 mt-3",
      heading: "Adventure Games ",
      text:
        "Our P2E game development services create strategic adventure games, ensuring each quest leads to virtual and financial gains.",
      p_opacity: "text-white fs-5",
    },
    {
      img: "/metagaming_page/carimg_02.png",
      alt_value:"rpg p2e metaverse game development",
      img_class: "rounded-3",
      svg_cls: "d-none",
      add_class: "text_img_card rounded-3 text-start p-3 h-100",
      columns: "col-md-6 col-lg-4 mb-4 ",
      custome_col_a: "overflow-hidden ",
      heading_h5: "text-white mb-0 mt-3",
      heading: "RPG Games ",
      text:
        "We create role-playing games to shape legacy, unlock rare assets, and transform your gameplay journey into a captivating saga of virtual conquest.",
      p_opacity: "text-white fs-5",
    },
    {
      img: "/metagaming_page/carimg_03.png",
      alt_value:"action play to earn metaverse game development",
      img_class: "rounded-3",
      svg_cls: "d-none",
      add_class: "text_img_card rounded-3 text-start p-3 h-100",
      columns: "col-md-6 col-lg-4 mb-4 ",
      custome_col_a: "overflow-hidden ",
      heading_h5: "text-white mb-0 mt-3",
      heading: "Action Games ",
      text:
        "We provide play-to-earn NFT game development, where every skillful move earns rewards. Our platform allows users to play combats and earn money.",
      p_opacity: "text-white fs-5",
    },
    {
      img: "/metagaming_page/carimg_04.png",
      alt_value:"sports p2e game platfporm development ",
      img_class: "rounded-3",
      svg_cls: "d-none",
      add_class: "text_img_card rounded-3 text-start p-3 h-100",
      columns: "col-md-6 col-lg-4 mb-4 ",
      custome_col_a: "overflow-hidden ",
      heading_h5: "text-white mb-0 mt-3",
    heading: "Trading Card Games",
        text:
          " Our P2E gaming platform development turns each duel into a journey, blending strategy to elevate your card game skills.",
       
        p_opacity: "text-white fs-5",
    },
    {
      img: "/metagaming_page/carimg_05.png",
      alt_value:"trading card p2e game development",
      img_class: "rounded-3",
      svg_cls: "d-none",
      add_class: "text_img_card rounded-3 text-start p-3 h-100",
      columns: "col-md-6 col-lg-4 mb-4 ",
      custome_col_a: "overflow-hidden ",
      heading_h5: "text-white mb-0 mt-3",
      heading: "Sports Games",
      text:
        "Our platform allows you to win matches, earn rewards, and gain financial success through our play to earn game development.",
        p_opacity: "text-white fs-5",
    },
    {
      img: "/metagaming_page/carimg_06.png",
      alt_value:"mmorts p2e platform development",
      img_class: "rounded-3",
      svg_cls: "d-none",
      add_class: "text_img_card rounded-3 text-start p-3 h-100",
      columns: "col-md-6 col-lg-4 mb-4 ",
      custome_col_a: "overflow-hidden ",
      heading_h5: "text-white mb-0 mt-3",
      heading: "MMORTS Games",
      text:
        " We develop P2E games that blend real-time strategy with multiplayer elements, enabling players to build empires and engage in global battles.",
      p_opacity: "text-white fs-5",
    },
  ];


  const AboutLbm = [
    {
      img: "/play_to_earn/icons/icons_a.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Expert Team",
      text:
        "We have 100+ P2E game developers to provide top-notch Play-to-Earn game development services with profitable gaming experiences.",
    },
    {
      img: "/play_to_earn/icons/icons_b.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Customized Metaverse Solutions",
      text:
        "Our play to earn game development solutions meet specific business goals, ensuring unique and enhanced engagement.",
    },
    {
      img: "/play_to_earn/icons/icons_c.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "AR & VR Expertise ",
      text:
        "Our metaverse developers utilize augmented and virtual reality technologies to create immersive play to earn environments that captivate players.",
    },
    {
      img: "/play_to_earn/icons/icons_d.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Budget-Friendly Solutions",
      text:
        "We deliver cost-effective P2E gaming solutions that ensure maximum ROI without compromising quality or performance.",
    },
    {
      img: "/play_to_earn/icons/icons_e.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Business-Focused Approach",
      text:
        " Our P2E game development strategy aligns games with your business objectives, maximizing user retention and revenue.",
    },
    {
      img: "/play_to_earn/icons/icons_f.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Security",
      text:
        "We implement robust protection measures to prioritize the security of play to earn games, safeguarding player data and transactions.",
    },
    {
      img: "/play_to_earn/icons/icons_g.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Global Reach",
      text:
        " We develop games with multilingual support and culturally adaptable content to attract a global audience, expanding your market reach.",
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
                  clrtext="Play to Earn"
                  textB="Game Development Company"
                  heading="banner_h "
                />
                <BannerText text="We are a leading P2E game development company aiming to create immersive P2E games with real-time enjoyment." />

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
                <img src="/play_to_earn/banner.png" alt="US based p2e game development company" className="img-fluid" />
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
                  textA="Our Play To Earn "
                  clrtext=" Game Development Services "
                  textB=""
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="Our web3 play-to-earn game development solutions combine interactive gameplay with gainful incentives. We render an engaging NFT-based gaming platform to drive potential revenue and offer players an excellent virtual experience."
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
                  textA="Our Structured  "
                  clrtext="P2E Game Development Process Workflow"
                  textB=""
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="for token rewards and ensuring a balanced economy where players earn valuable in-game assets."
                  para_text1="Our p2e gaming platform development services follow a complete strategy to create play to earn games, integrating"
                  LinkHref ="/blockchain-development-company"
                  LinkData="blockchain technology"
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
                textA="Benefits of Play-to-Earn Game  "
                clrtext="Platform Development With LBM Solution"
                textB=""
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0 "
              />

              <ParaText
                f_custome=""
                para_text="We at LBM Solutions, create feature-rich P2E games to attract users in the P2E industry. Our game platforms incorporate effective features and functionalities, ensuring secure gameplay."
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

      {/* Add new section Metaverse Game Development  */}
      <section className="meta_game bg-black">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Types of  "
                  clrtext="Play to Earn Games We Develop"
                  textB=" "
                  // heading="heading_class"
                  heading=" heading_h2 text-white"
                />
                <ParaText
                  f_custome="text-white"
                  para_text1="We are an outstanding play to earn"
                  para_text="agency specializing in creating diverse genres of blockchain games. Our expertise helps businesses maximize earning potential, enabling users to play games to earn money., integrating"
                  LinkHref ="/nft-game-development"
                  LinkData="NFT game development"
              />
              </div>
            </div>
          </div>
          <div className="row text-center mt-5">
            <Card CardData={technology} />
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

      <section className="currencyes bg-black">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Blockchain Frameworks Supporting Our "
                  clrtext=" Play-to-Earn Platform"
                  textB=""
                  heading="heading_h2 text-white"
                />

                <ParaText
                  f_custome="text-white"
                  para_text="Our P2E developers provide versatile blockchain game development solutions to create engaging P2E games. These games allow users to earn rewards through dynamic in-game activities and strategic economic interactions in captivating virtual worlds. "
                />
              </div>
            </div>
          </div>

          <div className="row text-center">
            <Card CardData={currencyes} />
          </div>
        </div>
      </section>

 

      <section className="about_lbm">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Why Choose "
                  clrtext="Our Play-to-Earn Game"
                  textB=" Development Company?"
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="LBM Solution focuses on creating sustainable and profitable blockchain games. We design interactive metaverse games featuring avatar customization, treasure hunts, and vibrant digital marketplaces."
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
              <ParaText para_text="We have delivered numerous successful play-to-earn game projects that have exceeded our clients' expectations. Our clients admired us for our innovative gameplay development, seamless integration, and ROI. Let’s see how we've transformed gaming ideas into successful, engaging, and profitable projects." />
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

export default PlayToEarn;
