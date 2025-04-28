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
      heading: "High-Quality DAO Development From Our Skilled dApp Developers",
      paraText:
        "As the best DOA development company, we have a team of professional DAO developers with deep blockchain knowledge to create secure, transparent, and automated solutions tailored to your organization's needs.",
      imgSrc: "/dao_page/teach_img.webp",
      imgAlt: "hire skilled dApp developers ",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "DAO DApp Development ",
      text:
        "Our team crafts dApps, including wallets, allowing users to trade and earn independently, unlocking various tech opportunities.",
        isLink: true,
        linkUrl: "/dapp-development-services",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "DAO Smart Contract Development ",
      text:
        "We build rigid smart contracts for DAOs, securing functions and fostering governance by inflexible rules.",
        isLink: true,
        linkUrl: "/smart-contract-development-company",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "DAO Blockchain Development",
      text:
        "We offer custom solutions, providing voting rights and automated services, captivating investors and elevating your business.",
        isLink: true,
        linkUrl: "/blockchain-development-company",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "DAO Enabled NFT Platform Development ",
      text:
        "We enable collective NFT ownership with DAO governance, ensuring transparent, automated decisions with our NFT development solutions.",
        isLink: true,
        linkUrl: "/nft-development-company",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "DAO Token Development",
      text:
        "We develop secure DAO tokens, create strategic token models, and guide token distribution, treasury, staking, and success factors for projects.  ",
        isLink: true,
        linkUrl: "/crypto-token-development-company",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "DAO Node Development",
      text:
        "We develop custom DAO nodes, enabling secure user voting and decision verification for sustainable, autonomous governance on your platform.",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/dao_page/icons/process01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Discover Workshop",
    },
    {
      img: "/dao_page/icons/process02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Create Strategy ",
    },
    {
      img: "/dao_page/icons/process03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Solution Design  ",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/dao_page/icons/process06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Launch and Maintenance",
    },
    {
      img: "/dao_page/icons/process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Testing and QA ",
    },
  
    {
      img: "/dao_page/icons/process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "DAO Development",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/dao_page/icons/process07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "After-launch Support ",
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
      heading: "Smart Contract Development ",
      text:
        "Our experts develop secure smart contracts to automate DAO functions, ensuring compliance with organizational rules and reducing manual intervention. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Tokenization",
      text:
        "We create secure, transparent tokens to facilitate governance, voting rights, and community participation, empowering user engagement within the DAO ecosystem.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Interoperability",
      text:
        "Our DAO development solutions are designed to be compatible with various platforms, enhancing connectivity and functionality.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Scalability ",
      text:
        " Our architectures are designed to handle increasing numbers of users and transactions, ensuring performance remains robust as your DAO expands.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Staking Mechanisms",
      text:
        "Our systems incentivize engagement, confirming active participation and contributing to the stability and growth of the DAO. ",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Modular Architecture",
      text:
        " Our decentralized autonomous organization development services allow easy upgrades and new features, ensuring flexibility without disrupting current operations.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Multi-Signature Wallets",
      text:
        "We introduce wallets for security, requiring multiple approvals for transactions, reducing unauthorized activities, and enhancing trust in DAO.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Governance Tokens",
      text:
        " We create and manage voting tokens for DAOs, incentivizing participation and ensuring fair distribution of decision-making power.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Cross-Chain Compatibility",
      text:
        "Our DAO platform development solutions operate across multiple blockchain platforms to enhance reach, leveraging different features.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Open-Source Code",
      text:
        "Our services enhance transparency, ensure security through public scrutiny, allow customization, and build trust and innovation within decentralized autonomous organizations. ",
    },
  ];

  const sectionsData_a = [
    {
      heading: "Our High-Tech Frameworks for DAO Platform Development Services",
      paraText:
        "We ensure top-quality DAO blockchain software development with advanced technologies. Our diverse tools and frameworks create high-performance platforms tailored to project needs, keeping your DAO innovative and competitive. ",
      imgSrc: "/metaverse_3d/teach_img01.png",
      imgAlt: "high-tech frameworks for dao platform development ",
    },
  ];

  const Crafting = [
    {
      img: "/dao_page/icons/sourceses01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Governance",
      text:
        "Our DAO designs promote fairness, accountability, and efficient management within decentralized organizations, ensuring stakeholder participation.",
    },
    {
      img: "/dao_page/icons/sourceses02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Investment Funds",
      text:
        "Our DAO development team creates decentralized investment funds, allowing members to vote on portfolio choices and boosting investor trust.",
    },
    {
      img: "/dao_page/icons/sourceses03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Non-Profit Organizations  ",
      text:
        "Decentralized autonomous organizations allow non-profits to manage funds visibly, ensuring donor trust and enabling community members to vote on projects.",
    },
    {
      img: "/dao_page/icons/sourceses04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Supply Chain",
      text:
        " We utilize automated contracts and tracking to reduce fraud, enhance efficiency, and ensure every stakeholder can verify and participate in the supply chain operations.",
    },
    {
      img: "/dao_page/icons/sourceses05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Decentralized Finance (DeFi)",
      text:
        "Our solutions automate financial services, offering community-driven management of lending, borrowing, and trading platforms.",
    },
    {
      img: "/dao_page/icons/sourceses06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate",
      text:
        " DAOs manage real estate investments collectively, allowing members to vote on property purchases and management, providing a secure platform for fractional ownership.",
    },
    {
      img: "/dao_page/icons/sourceses07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Content Creation",
      text:
        "We craft DAOs to provide collective funding, transparent revenue sharing, community-driven decisions, fostering fair pay, and collaborative content.",
    },
    {
      img: "/dao_page/icons/sourceses08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Gaming Communities",
      text:
        " Our DAO platform allows players to participate in game development decisions and manage in-game assets, enhancing community engagement.",
    },
    {
      img: "/dao_page/icons/sourceses09.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Research and Development",
      text:
        "We craft DAOs to promote funding allocation, collaborative project management, and community voting on research priorities.",
      // background: "/cryptwalletImg/wallet_features.png",
    },
  ];

  const AboutLbm = [
    {
      img: "/dao_page/icons/why01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Blockchain Experts",
      text:
        "With a decade of experience, our DAO development team creates secure, innovative DAOs, offering deep technical knowledge to meet your needs.  ",
    },
    {
      img: "/dao_page/icons/why02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Tailored Solutions",
      text:
        "We offer customized DAO development aligning with your goals. From new projects to enhancing existing DAOs, we've got you covered.",
    },
    {
      img: "/dao_page/icons/why03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Timely Delivery",
      text:
        "We prioritize deadlines, delivering high-quality DAO solutions on time. Our efficient project management ensures timely delivery without compromising quality.",
    },
    {
      img: "/dao_page/icons/why04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Innovative Approach",
      text:
        "We deliver cutting-edge, future-proof DAOs, ensuring adaptability to the evolving decentralized landscape, considering the latest industry trends.",
    },
    {
      img: "/dao_page/icons/why05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "User-Centric Design",
      text:
        "Our team prioritize intuitive, user-friendly designs in DAO development to provide easy navigation and interaction, enhancing user engagement and satisfaction.",
    },
    {
      img: "/dao_page/icons/why06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Proven Track Record",
      text:
        "We deliver practical, reliable DAO solutions tailored to meet specific needs, offering success in the decentralized landscape.",
    },
    {
      img: "/dao_page/icons/why07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Cost-efficiency ",
      text:
        "We provide top-quality, cost-effective DAO development services, ensuring excellent value and high-quality results within your budget.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Aria Barnes",
      text:
        "LBM’s team developed intuitive and user-friendly DAOs, focusing on user experience. Their designs ensured ideal interaction and engagement, making complex decentralized systems accessible and easy to navigate for end-users.",
    },
    {
      clientName: "Lee Jennings",
      text:
        "The innovative and creative approach of LBM Solutions for DAO development sets them apart. They offered unique solutions that drive progress and efficiency within decentralized frameworks.",
    },
    {
      clientName: "Olivia Ross",
      text:
        "We selected LBM for DAO development, which provided us with excellent returns. Their expertise and efficiency resulted in cost-effective solutions that enhanced operational effectiveness and provided significant value to us.",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Leah Butler",
      text:
        "At LBM, their team prioritized project timelines without compromising quality. They delivered well-structured, functional DAOs on schedule, and their project management skills were commendable.",
    },
    {
      clientName: "Samuel Charles Graham",
      text:
        "The developers of LBM provided us with highly customizable DAO development platforms. Their flexible approach to developing unique, innovative DAOs was aligned perfectly with our specific requirements and goals",
    },
    {
      clientName: "Rose Stewart",
      text:
        "LBM’s team rendered excellent post-development support, ensuring smooth DAO operations. Their comprehensive assistance in resolving issues demonstrated their strong commitment to client success and satisfaction.",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What does DAO mean?",
      body:
        "DAO stands for Decentralized Autonomous Organization. It's a digital entity governed by smart contracts, enabling decentralized decision-making and operation without traditional centralized management structures.",
    },
    {
      eventKey: "1",
      header: "What Is DAO Blockchain Software Development? ",
      body:
        "DAO blockchain software development involves creating decentralized applications (dApps) that enable DAOs to operate autonomously on a blockchain network, facilitating transparent, trustless governance and decision-making among participants.",
    },
    {
      eventKey: "2",
      header: "How much does DAO development cost? ",
      body:
        "The cost of DAO development lies within $3500-$20000 on average. However, this cost may depend on factors such as complexity, features, and the rates of the development team.",
    },
    {
      eventKey: "3",
      header: "Does a DAO need a token?",
      body:
        "Yes, DAO required a token. It typically serves as a means of governance, voting, or as a utility for accessing services within the ecosystem. Tokens can incentivize participation and align interests among members.",
    },
    {
      eventKey: "4",
      header: "What is the difference between traditional organization and DAO?",
      body:
        "A traditional organization operates with centralized control and hierarchical structures, while a DAO functions autonomously using smart contracts for community-driven decision-making and automated processes.",
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
                  textA="Decentralized Autonomous"
                  clrtext="Organization (DAO) Development Company"
                  textB=""
                  heading="banner_h"
                />
                <BannerText text="Empower your business with our DAO development services, adopting transparent and automated authority for innovative decentralized solutions." />

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
                <img src="/dao_page/banner.png" alt="decentralized autonomous organization development company" className="img-fluid" />
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
                  textA="Our Advanced"
                  clrtext="DAO Development Services"
                  textB=""
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Our dApp developers excel in crafting secure, automated DAO platforms, integrating blockchain expertise to create transparent solutions and ensure optimal performance for community-driven projects."
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
                  textA="The Process of "
                  clrtext="Building Decentralized Autonomous Organizations"
                  textB=""
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="We provide end-to-end DAO development services focusing on secure, rule-based operations, which ensure safe, transparent operations with expert blockchain, smart contracts, and governance solutions tailored to your needs."
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
                textA="Why DAO"
                clrtext="Development Services Be Your "
                textB="Next Investment?"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
              />

              <ParaText
                f_custome=""
                para_text="The self-sustaining nature of DAOs unlocks fresh opportunities for worldwide collaboration. Our DAO app development solutions ensure smooth operations, efficient resource management, accountability, and inclusivity, shaping the future of decentralized governance."
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
                  textA="Industry-Centric "
                  clrtext="Applications of DAO Development Solutions"
                  textB=""
                  heading="sectoin_h"
                />
                <heading_h2
                  f_custome=""
                  para_text="DAO development revolutionizes business structures with decentralized control and secure processes. DAOs, as compared to traditional organisations, foster community participation, reduce costs, and enhance efficiency.    "
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
                  textA="What Makes  "
                  clrtext="LBM Solutions Your Go-To DAO"
                  textB="Development Company?"
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="We at LBM Solutions are a prominent DAO development company that offers expert services and continuous support. With our skilled team DAO developers, we build secure, flexible, and customized DAO platforms to meet your unique needs.  "
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
              <ParaText para_text="Being a pioneer of decentralized autonomous organization development, we are appreciated by our clients, delivering them innovative DAO Solutions. They are impressed with our deep expertise in creating DAOs that enhance governance, transparency, and community engagement." />
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
