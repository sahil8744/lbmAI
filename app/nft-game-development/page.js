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
      heading: "Build the Future of Gaming with Our NFT Game Developers ",
      paraText:
        "We have a team of professional 3d NFT game developers to deliver innovative NFT game development solutions. We have deep expertise in blockchain technology to craft the best NFT game, offering true ownership of in-game assets. ",
      imgSrc: "/nft_game_page/teach_img.png",
      imgAlt: "teach_img",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Full-Cycle NFT Game Development ",
      text:
        "Our team excels in developing diverse NFT game genres, offering NFT tokenization, ownership, game mechanics, and multiplatform compatibility.  ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "2D/3D Art & Design",
      text:
        "We have proficiency in 2D/3D NFT games, including characters, in-game assets, and engaging environments, ensuring unique gaming experiences.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "NFT Metaverse Game Development",
      text:
        "Our metaverse game development services include virtual ecosystems, avatars, and rare items, building decentralized P2E platforms with NFTs. ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Smart Contract Development ",
      text:
        "We build smart contracts to manage NFT assets from creation to ownership and transfer, confirming decision-making for NFT games.",
        isLink: true,
        linkUrl: "/smart-contract-development-company",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Game Support & Maintenance",
      text:
        "Our NFT game development services provide 24/7 support, community engagement and maintenance support with security updates.",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/nft_game_page/icons/process01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Game Conceptulization ",
    },
    {
      img: "/nft_game_page/icons/process02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "UI/UX Design ",
    },
    {
      img: "/nft_game_page/icons/process03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Create Game Art Assets",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/nft_game_page/icons/process06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Testing Phase",
    },
    {
      img: "/nft_game_page/icons/process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
       custome_col_b: "col-10 col-sm-9",
      heading: "Game Development ",
    },
    
    {
      img: "/nft_game_page/icons/process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Animation ",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/nft_game_page/icons/process07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Game Deployment ",
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
      heading: "Secure Asset Ownership ",
      text:
        "Our NFT game development solutions provide players with true ownership of in-game assets, ensuring secure transfer.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Decentralized Marketplace",
      text:
        " We create NFT games to enable peer-to-peer trading of NFTs within the game which allow players to trade assets directly.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Monetization  ",
      text:
        "Our NFT development platform supports revenue opportunities, offering rare items, adding value, and enhancing the gaming experience.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Player Engagement ",
      text:
        "We integrate valuable NFTs and develop a dynamic gaming environment that rewards and captivates players, boosting retention.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Cross-Platform Compatibility",
      text:
        "Our solutions enable gameplay across different devices and platforms, increasing accessibility and reaching a wider audience.",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Smart Contract Integration",
      text:
        "We implement blockchain-based smart contracts to automate transactions, enforce rules, and ensure transparency in the game’s economy.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Interoperability ",
      text:
        "We utilize NFTs across different games and platforms to enhance their utility, enabling players to transfer assets among ecosystems. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Token Standards Compliance ",
      text:
        "Our solutions adhere to token standards like ERC-721 and ERC-1155, ensuring compatibility and integration with existing blockchain ecosystems. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Data Processing ",
      text:
        "Our NFT games provide real-time processing of transactions and in-game actions, ensuring a smooth gaming experience for players. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Scalability Solutions",
      text:
        " We utilize scaling technologies such as Layer 2 solutions to handle large volumes of transactions and users, maintaining performance.",
    },
  ];

  const sectionsData_a = [
    {
      heading: "Technology Behind Our NFT Gaming Platform Development ",
      paraText:
        "Being an outstanding NFT game development company in USA, our blockchain developers utilize the latest tools to drive and expedite your NFT game creation, ensuring innovative and efficient results.",
      imgSrc: "/nft_game_page/teach_img_a.png",
      imgAlt: "teach_img",
    },
  ];

  const Crafting = [
    {
      img: "/nft_game_page/icons/resoures01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Arcade Games ",
      text:
        "Our NFTs game development focuses on engaging gameplay, with high scores and competition, which indicate classic arcade cabinets.",
    },
    {
      img: "/nft_game_page/icons/resoures02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Action Games ",
      text:
        " Our NFT-based game development solutions feature captivating visuals and multiple battle levels, transforming characters, powers, and tickets into NFTs.",
    },
    {
      img: "/nft_game_page/icons/resoures03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Casino Games ",
      text:
        " We enable NFTs to represent assets and rewards that allow users to own and trade their gaming items, enhancing the online gambling experience.",
    },
    {
      img: "/nft_game_page/icons/resoures04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "PvP Battle Games",
      text:
        "We tokenize virtual assets into valuable NFTs for exclusive sales, allowing players to buy advanced items and dominate the PvP battlefield.",
    },
    {
      img: "/nft_game_page/icons/resoures05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Plat to Earn Games ",
      text:
        "We create NFT games where players can earn real-world rewards like cryptocurrency or NFTs by playing, offering a fun way.",
    },
    {
      img: "/nft_game_page/icons/resoures06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Fantasy Sports Games",
      text:
        " We develop NFT fantasy sports platforms where users can select their dream teams and players as NFTs, earning revenue and prizes. ",
    },
    {
      img: "/nft_game_page/icons/resoures07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Adventure Games ",
      text:
        "We create adventure NFT games with virtual experiences, offering exclusive tickets, power upgrades, and maps",
    },
    {
      img: "/nft_game_page/icons/resoures08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Move to Earn Games  ",
      text:
        "Our NFT games development solutions reward players with cryptocurrency or digital assets, combining gaming with fitness benefits.",
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
      heading: "Expert Developers",
      text:
        "Our team comprises 200+ NFT game developers with extensive experience in blockchain technology, ensuring secure gaming solutions tailored to your needs. ",
    },
    {
      img: "/blockchain_page/icons/why02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Blockchain Integration",
      text:
        "We specialize in integrating blockchain into NFT games, providing transparent and tamper-proof transactions for an enhanced gaming experience.",
    },
    {
      img: "/blockchain_page/icons/why03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Innovative Game Design ",
      text:
        "Our NFT developers craft visually stunning game environments, characters, and assets, making NFT games unique.",
    },
    {
      img: "/blockchain_page/icons/why04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Robust Security",
      text:
        "We implement advanced measures to protect your NFT game and players' assets, ensuring a safe and trustworthy gaming platform.",
    },
    {
      img: "/blockchain_page/icons/why05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Timely Delivery ",
      text:
        "Our efficient project management ensures NFT game development is completed on schedule, allowing launch of game without delays.",
    },
    {
      img: "/blockchain_page/icons/why06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Comprehensive Services",
      text:
        "Our full-cycle development services cover all aspects of NFT game creation, ensuring a cohesive and successful project.",
    },
    {
      img: "/blockchain_page/icons/why07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Exceptional Support",
      text:
        "We offer complete post-launch assistance, timely updates, and swift issue resolution to ensure optimal performance and player satisfaction.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Anthony Powell",
      text:
        "I recently worked with LBM for an adventure NFT game project. Their team was incredibly professional and always ready to address my questions. The game they developed exceeded my expectations in terms of quality and functionality.",
    },
    {
      clientName: "Margaret Russell",
      text:
        " The team at LBM Solutions was fantastic! They took my idea and turned it into a fully functioning game with unique NFTs that my users love. Their attention to detail and dedication to the project were impressive.",
    },
    {
      clientName: "Michael Sullivan",
      text:
        "I was a bit doubtful about attempting to enter the NFT gaming space, but this company's expertise made the process seamless. They guided me through each step, from concept to launch. The final product was engaging and user-friendly.",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Thomas Myers",
      text:
        " I collaborated with this NFT game development company for my startup, and the experience was exceptional. Their developers were highly skilled and knowledgeable about blockchain technology. The game they created was visually stunning and operated smoothly. ",
    },
    {
      clientName: "Jayden Price",
      text:
        "We hired LBM’s team for our NFT-based action game development! They delivered a high-quality game that incorporated unique NFTs. Their customer service was top-notch, and they always responded quickly to any concerns.",
    },
    {
      clientName: "Francis Stevens",
      text:
        "This NFT game development company delivered beyond my expectations. Their team was experineced in the latest technologies and trends, ensuring my game was both innovative and engaging. The process was smooth, and the end product was flawless. ",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is an NFT Game? ",
      body:
        "An NFT game integrates blockchain technology, allowing players to own, trade, and sell unique in-game assets as non-fungible tokens (NFTs), enhancing gameplay with real-world value and digital ownership.",
    },
    {
      eventKey: "1",
      header: "How much does it cost to develop an NFT game?",
      body:
        "The cost to develop an NFT game is ranging from $45,000 to $300,000. Moreover, the complexity, features, blockchain integration, and the development team's expertise may lead to change in this amount.",
    },
    {
      eventKey: "2",
      header: "How much time will it take to create an NFT game? ",
      body:
        "The time to create an NFT game may take 4-12 months. It may vary according to the project's complexity, features, design, and the development team's expertise and resources.",
    },
    {
      eventKey: "3",
      header: "What is the most popular play-to-earn NFT?",
      body:
        "One of the most popular play-to-earn NFTs is Axie Infinity, where players earn cryptocurrency by breeding, battling, and trading digital pets called Axies.",
    },
    {
      eventKey: "4",
      header: "Are NFT games profitable?  ",
      body:
        "Yes, NFT games can be profitable by offering in-game purchases, trading fees, and unique assets, allowing players and developers to earn real-world value from virtual items and gameplay.",
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
                  textA="NFT Game Development Company "
                  clrtext="for Tomorrow’s Gaming Landscape"
                  textB=""
                  heading="banner_h"
                />
                <BannerText text="As a leading NFT game development company, we develop immersive NFT gaming platforms with unique, tradable assets. " />

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
                  src="/nft_game_page/banner.png"
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
            <div className="col-sm-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Our Blockchain-Powered "
                  clrtext="NFT Game Development Services"
                  textB=""
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="Our NFT based game development services provide comprehensive creation of blockchain-based games, enabling players to create, trade, and enhance unique digital items for intriguing gaming experiences."
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
                  textA="A Closer Look at "
                  clrtext="Our Secure NFT Game "
                  textB="Development Process"
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="Our NFT game development solutions focus on crafting appealing, blockchain-based games with unique digital assets, offering secure ownership and continuous support for engaging and coherent gaming experiences."
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
                textA="How Our"
                clrtext="NFT Gaming Platform Development"
                textB="Enhances Morden Gaming?"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0 "
              />

              <ParaText
                f_custome=""
                para_text="Our NFT based game development services merge gaming excitement with blockchain technology, creating unique, rewarding experiences. We introduce exclusive features in NFT gaming platform, reshaping the gaming industry."
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
                  textA="Real-World "
                  clrtext="Implementations of NFT Gaming Development"
                  textB=""
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Accelerate your NFT journey with our innovative NFT game development solutions. Our developers create the best NFT games to engage players by introducing assets and rewards which enrich the gaming ecosystem with novel features.  "
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
                  textA="Why We're Your "
                  clrtext="Trusted NFT Game Development Company?"
                  textB=""
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="At LBM Solutions, a prestigious NFT gaming platform development company in the USA, our NFT developers deliver seamless gaming solutions, ensuring timely delivery, game's success, and engaging gaming experience.  "
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
              <ParaText para_text="With expertise over a decade, we have delivered several unique designs, engaging gameplay, and smooth blockchain integration. We have served numerous clients with our NFT game development solutions. They admired our team's innovation and dedication to delivering exceptional gaming experiences that captivate and retain players." />
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
