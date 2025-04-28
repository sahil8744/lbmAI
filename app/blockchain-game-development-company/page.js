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

const BlockchainGameDevelopment = () => {
  const bottomSectionRef = useRef(null);

  const sectionsData = [
    {
      heading: "Hire Our Blockchain Game Developer for Your Gaming Needs ",
      paraText:
        "Renowned as a prestigious blockchain game development agency, our veteran game developers excel in designing and developing blockchain games. Our blockchain gaming solutions ensure seamless gameplay and secure transactions.  ",
      imgSrc: "/blockchain_game/teach_img.webp",
      imgAlt: "top blockchain game developers in USA",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover ",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Custom Game Development",
      text:
        "As pioneers in blockchain technology, we create innovative blockchain games customized to our clients' needs.",
      // isLink: true,
      // linkUrl: " ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover ",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "3d Avatar and Character Creation",
      text:
        "We design and develop customizable 3D avatars and characters for fantasy, multiplayer, and play to earn games.",
      // isLink: true,
      // linkUrl: "",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover ",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "NFT Marketplace Creation",
      text:
        "Our NFT marketplace development solutions provide extensive blockchain platforms for in-game asset trading with accessible interfaces.",
      // isLink: true,
      // linkUrl: "",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover ",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Metaverse Web3 Game Development ",
      text:
        "We create interactive metaverse Web3 games with realistic 3D environments, play to earn mechanics, and live game streaming.",
      // isLink: true,
      // linkUrl: "",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover ",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "P2E Game Development",
      text:
        "Our viable P2E game development solutions deliver decentralized gaming platforms, enabling gamers to earn real-world rewards. ",
      // isLink: true,
      // linkUrl: "",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover ",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Smart Contract Development",
      text:
        "Our blockchain game developers create blockchain games with smart contracts to make the web3 gaming experience more intuitive.  ",
      // isLink: true,
      // linkUrl: "",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/blockchain_game/icons/process01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Conceptualization",
    },
    {
      img: "/blockchain_game/icons/process02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Game Design",
    },
    {
      img: "/blockchain_game/icons/process03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Blockchain Integration ",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/blockchain_game/icons/process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Live Operations & Monetization ",
    },
    {
      img: "/blockchain_game/icons/process06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Testing & Deployment ",
    },
    {
      img: "/blockchain_game/icons/process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Game Development ",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/blockchain_game/icons/process07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Support and Maintenance",
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
      heading: "Interoperability  ",
      text:
        "Our blockchain games enable absolute use of in-game assets across multiple platforms, enhancing player experience and asset utility. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Play to Earn Models ",
      text:
        "Our play to earn game development solutions help players earn real-world value through in-game tasks and participating in events. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Automation  ",
      text:
        "We develop smart contracts to automate in-game processes and transactions and ensure absolute gameplay, reducing the need for intermediaries.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "DeFi Solutions",
      text:
        "Our blockchain game development solutions utilize insurance products to protect players' investments and assets within the game.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Scalability ",
      text:
        "We utilize layer 2 scaling solutions to handle larger transaction data and ensure absolute gameplay experiences without high fees or delays.",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Wallet Support",
      text:
        "We integrate various blockchain wallets to ensure smooth transactions within games and flexibility in managing in-game assets.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Compatibility ",
      text:
        "Our blockchain gaming platforms support multiple blockchain networks to choose the preferred blockchain and increase reach.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Asset Tokenization",
      text:
        "Our blockchain games allow tokenizing in-game assets as NFTs to provide unique ownership and enable trading on various marketplaces.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Decentralized Solutions",
      text:
        "We implement blockchain technology in game development to manage player identities and provide authentication across multiple platforms.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Community Rewards",
      text:
        "Our blockchain game developers utilize community reward systems to incentivize player contributions and participation in community activities.",
    },
  ];

  const sectionsData_a = [
    {
      heading:
        "Our Winning Tech Stack Strategy for Blockchain Gaming Development ",
      paraText:
        "Pioneering in blockchain technology, our developers deploy advanced technologies and security protocols to build blockchain based gaming platform with secure transactions, delivering a smooth and scalable gaming experience.",
      imgSrc: "/blockchain_game/teach_img_a.webp",
      imgAlt: "tech stack for game design and development",
    },
  ];

  const Crafting = [
    {
      img: "/blockchain_game/icons/resoures01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Veteran Team ",
      text:
        "We have 200+ seasoned blockchain game developers with over a decade of experience to develop scalable blockchain games tailored to unique needs. ",
    },
    {
      img: "/blockchain_game/icons/resoures02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Innovative Game Design ",
      text:
        " Our inventive approach utilizes blockchain technology for game design and development, delivering interactive gaming experiences.",
    },
    {
      img: "/blockchain_game/icons/resoures03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Customizable Solutions   ",
      text:
        "We provide personalized blockchain game platforms to meet your specific requirements and game vision.",
    },
    {
      img: "/blockchain_game/icons/resoures04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Security First ",
      text:
        "Our blockchain game development deploys the highest security standards, which confirm safe transactions and transparent game operations",
    },
    {
      img: "/blockchain_game/icons/resoures05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Community Engagement ",
      text:
        "Our blockchain game platforms engage a vibrant player community through decentralized governance and player incentives.",
    },
    {
      img: "/blockchain_game/icons/resoures06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Integration Support",
      text:
        "Our solutions ensure smooth integration with existing gaming platforms to provide a seamless transition to blockchain gaming. ",
    },
    {
      img: "/blockchain_game/icons/resoures07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "End-to-End Solutions ",
      text:
        "We render comprehensive blockchain game development solutions from initial concept to development and deployment of games.",
    },
  ];


  const technology = [
    {
      img: "/metagaming_page/carimg_01.png",
      alt_value:"blochcain based adventure games",
      img_class: "rounded-3 w-100",
      svg_cls: "d-none",
      add_class: "text_img_card rounded-3 text-start p-3 h-100",
      columns: "col-md-6 col-lg-4 mb-4 ",
      custome_col_a: "overflow-hidden ",
      heading_h5: "text-white mb-0 mt-3",
      heading: "Adventure Games ",
      text:
        "We create adventure blockchain games that ensure each quest is immersive and rewarding, offering flawless gameplay. ",
      p_opacity: "text-white fs-5",
    },
    {
      img: "/metagaming_page/carimg_02.png",
      alt_value:"rpg blockchain games development",
      img_class: "rounded-3 w-100",
      svg_cls: "d-none",
      add_class: "text_img_card rounded-3 text-start p-3 h-100",
      columns: "col-md-6 col-lg-4 mb-4 ",
      custome_col_a: "overflow-hidden ",
      heading_h5: "text-white mb-0 mt-3",
      heading: "RPG Games ",
      text:
        "Our RPG blockchain games deliver rich storytelling and deep character customization with player-driven economies and unique assets.",
      p_opacity: "text-white fs-5",
    },
    {
      img: "/metagaming_page/carimg_03.png",
      alt_value:"action blockchain games development",
      img_class: "rounded-3 w-100",
      svg_cls: "d-none",
      add_class: "text_img_card rounded-3 text-start p-3 h-100",
      columns: "col-md-6 col-lg-4 mb-4 ",
      custome_col_a: "overflow-hidden ",
      heading_h5: "text-white mb-0 mt-3",
      heading: "Action Games ",
      text:
        "We design versatile action blockchain games with thrilling combat and smooth performance, making every battle intense and rewarding.",
      p_opacity: "text-white fs-5",
    },
    {
      img: "/metagaming_page/carimg_04.png",
      alt_value:"blockchain sports games development",
      img_class: "rounded-3 w-100",
      svg_cls: "d-none",
      add_class: "text_img_card rounded-3 text-start p-3 h-100",
      columns: "col-md-6 col-lg-4 mb-4 ",
      custome_col_a: "overflow-hidden ",
      heading_h5: "text-white mb-0 mt-3",
      heading: "Sports Games",
      text:
        "We utilize secure player assets and dynamic in-game economies to develop sports games that offer a realistic gaming experience. ",
      p_opacity: "text-white fs-5",
    },
    {
      img: "/metagaming_page/carimg_05.png",
      alt_value:"trading card game development",
      img_class: "rounded-3 w-100",
      svg_cls: "d-none",
      add_class: "text_img_card rounded-3 text-start p-3 h-100",
      columns: "col-md-6 col-lg-4 mb-4 ",
      custome_col_a: "overflow-hidden ",
      heading_h5: "text-white mb-0 mt-3",
      heading: "Trading Card Games",
      text:
        "We develop blockchain games with unique, collectible trading cards and player-driven markets to make every match exciting. ",
      p_opacity: "text-white fs-5",
    },
    {
      img: "/metagaming_page/carimg_06.png",
      alt_value:"mmorts blockchain game development",
      img_class: "rounded-3 w-100",
      svg_cls: "d-none",
      add_class: "text_img_card rounded-3 text-start p-3 h-100",
      columns: "col-md-6 col-lg-4 mb-4 ",
      custome_col_a: "overflow-hidden ",
      heading_h5: "text-white mb-0 mt-3",
      heading: "MMORTS Games",
      text:
        "Our games blend strategy and massive multiplayer battles to provide secure asset ownership, creating epic conflicts. ",
      p_opacity: "text-white fs-5",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Lily Nelson",
      text:
        "We appreciated the customized solutions and continuous support of LBM Solutions. The blockchain game development process was flawless, and the final product exceeded our expectations.",
    },
    {
      clientName: "Ryan Davis",
      text:
        " I highly recommended LBM’s team for blockchain game development. Their dedication to quality and detail resulted in a extensive P2P game that was fun and secure.",
    },
    {
      clientName: "Chloe Anderson",
      text:
        "One of our friends suggested LBM Solutions to develop a sports game. Its developers integrated real-time data and tokenization into our blockchain game, adding a new dimension to player engagement. The game's fairness and transparency brought a huge audience.",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Sam Johnson",
      text:
        "We collaborated with LBM to create a blockchain-based adventure game with outstanding results. Their attention to the in-depth use of blockchain technology enhanced the gameplay, making it immersive and engaging.",
    },
    {
      clientName: "Harper Robinson",
      text:
        "LBM team's dedication and blockchain knowledge transformed our game idea into reality. Their innovative solutions and player-driven economies had set our game apart. ",
    },
    {
      clientName: "Gabriel Lewis",
      text:
        " We got captivating, secure blockchain game development solutions according to our requirements at LBM. Our trading card games game offered unique player-driven economies and secure asset ownership",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What Are Blockchain Games?",
      body:
        "Blockchain games integrate blockchain technology to enable true ownership of in-game assets, secure transactions, and decentralized economies. These games provide innovative and transparent gaming experiences.",
    },
    {
      eventKey: "1",
      header: "How Much Does It Cost to Build a Blockchain Game? ",
      body:
        "The cost of developing a blockchain game varies between $25000 and $50000, depending on its complexity, features, and development duration.",
    },
    {
      eventKey: "2",
      header: "How Long Does It Take to Develop a Blockchain Game? ",
      body:
        "Developing a blockchain game takes 6 to 18 months, depending on project scope, features, and team expertise.",
    },
    {
      eventKey: "3",
      header: "Why Are Play To Earn Games So Popular?  ",
      body:
        "Play-to-earn games are popular because they reward players with real-world value and offer opportunities to earn cryptocurrency or NFTs, making gaming financially rewarding and engaging.",
    },
    {
      eventKey: "4",
      header: "How Is Blockchain Used In-Game Development? ",
      body:
        "Blockchain is used in game development to enable secure asset ownership, transparent transactions, decentralized economies, and immutable records, enhancing trust and player engagement.",
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
                  textA="Blockchain Game"
                  clrtext="Development Company"
                  textB=""
                  heading="banner_h"
                />
                <BannerText text="Avail secure gaming solutions at our esteemed blockchain game development company to enhance player experiences globally.   " />

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
                <Image src="/blockchain_game/banner.png" alt="best blockchain game development agency" className="img-fluid"    width={0} 
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
        />
      ))}

      <section className="crypt_wallet" ref={bottomSectionRef}>
        <div className="container">
          <div className="row ">
            <div className="col-sm-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Our Blockchain  "
                  clrtext="Game Development Services"
                  textB=""
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="We render custom blockchain game development solutions to create secure & feature-loaded decentralized games, ensuring scalability and captivating experiences that attract players and drive engagement in the P2E gaming industry. "
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
                  textA="Our Streamlined"
                  clrtext="Approach to Game"
                  textB="Design and Development"
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="We utilize a tailored blockchain game development strategy to ensure every blockchain gaming project aligns with your vision, maximizes player engagement, and leverages the latest blockchain innovations for optimal performance."
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
                textA="Benefits of Blockchain  "
                clrtext="Game Development Platform "
                textB="With LBM Solution"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0 "
              />

              <ParaText
                f_custome=""
                para_text="At LBM Solutions, we are an outstanding blockchain game development company dedicated to crafting feature-loaded decentralized games. Our game creators develop gaming platform using blockchain technology to ensure engaging experiences that captivate players."
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



      {/* Add new section Metaverse Game Development  */}
      <section className="meta_game bg-black">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="We Are Experts in "
                  clrtext="Creating Blockchain Games Across Various Genres"
                  textB=" "
                  heading=" heading_h2 text-white"
                />
                <ParaText
                  f_custome="text-white"
                  para_text="Our blockchain developers are capable of crafting feature-rich blockchain games across diverse genres. We provide viable game development solutions to ensure immersive gameplay, true ownership, and secure transactions. "
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

      <section className="crafting">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="What Sets"
                  clrtext="Our Blockchain Game Development Company Apart?"
                  textB=""
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="As a pre-eminent blockchain game development agency in USA, we specialize in crafting captivating blockchain games that offer unique player-driven economies. Our innovative solutions guarantee unmatched interactivity and engagement.  "
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
              <ParaText para_text="Having a decade of experience in blockchain game development, we delivered several games developed using blockchain technology. Our clients admired us for our blockchain game development services. Our dedication to excellence and collaboration has earned us their trust and praise. Let’s hear from our satisfied clients" />
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

export default BlockchainGameDevelopment;
