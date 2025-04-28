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
      heading: "Hire Top Blockchain ICO Developers for Your Project",
      paraText:
        "We are a pre-eminent ICO development company with a team of 200+ expert ICO developers to align blockchain solutions with your business goals. We provide seamless initial coin offering development services for effective fundraising.",
      imgSrc: "/ico_page/tech_img.png",
      imgAlt: "expert ico development company",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover ",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "White paper creation and design ",
      text:
        " Our professional ICO token creators craft complete ICO whitepapers, highlighting your project's unique aspects.",
        isLink: true,
        linkUrl: "",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "ICO Website Designing",
      text:
        "We design visually appealing websites and landing pages that showcase your project, ensuring adherence to token standards like ERC-20 and ERC-721.",
        isLink: true,
        linkUrl: " ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "KYC/AML Integration",
      text:
        "Our team expertly incorporates KYC and AML protocols into ICO platforms, enhancing security and transparency.",
        isLink: true,
        linkUrl: "",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Smart Contract Development ",
      text:
        " We develop and audit secure smart contracts, ensuring efficient management of token distribution and essential ICO functionalities. ",
        isLink: true,
        linkUrl: "/smart-contract-development-company",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Post-ICO Development and Launch",
      text:
        " Our ICO services extend beyond launch, offering post-ICO support for token distribution, exchange listings, and community building. ",
        isLink: true,
        linkUrl: "",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "ICO Marketing and PR Support",
      text:
        " Our ICO development services enhance project visibility through targeted social media campaigns tailored to your audience.",
        isLink: true,
        linkUrl: "/crypto-marketing-agency",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/ico_page/icons/process01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Understanding Project Goals  ",
    },
    {
      img: "/ico_page/icons/process02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "ICO Website Design  ",
    },
    {
      img: "/ico_page/icons/process03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Smart Contract Development ",
      isLink: true,
      linkUrl: "/smart-contract-development-company",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/ico_page/icons/process06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "ICO Token Launch",
    },
 
    {
      img: "/ico_page/icons/process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Marketing ",
    },
   
    {
      img: "/ico_page/icons/process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Crypto Token Creation ",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/ico_page/icons/process07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Post-ICO Support  ",
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
      heading: "Token Creation   ",
      text:
        "Our initial coin offering developers develop tokens typically as ERC-20 tokens on the Ethereum platform, depending on the project's needs.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Wallet Integration",
      text:
        "We provide users with a secure wallet to store, send, and receive tokens, and it can be a web wallet, a mobile app, or integration with existing hardware.  ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "User Dashboard ",
      text:
        "We design an interactive interface for investors to participate in the ICO, view their token balance, and monitor the progress of the funding campaign. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Security Features",
      text:
        "Our solutions employ encryption, regular security audits, secure private key storage, and smart contract vulnerability assessments to ensure token safety.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Multi-Currency Support ",
      text:
        "  Our ICO solutions have the potential to accept various cryptocurrencies for payment in the ICO, thereby widening the pool of potential investors.",
    },
  ];

  const Crafting = [
    {
      img: "/ico_page/icons/resoures01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Finance and Banking ",
      text:
        "Our ICO development services use decentralized finance to offer transparent and efficient payment, lending, and investment solutions. ",
    },
    {
      img: "/ico_page/icons/resoures02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate  ",
      text:
        "We tokenize property assets for fractional ownership and easier investment opportunities to enhance property transactions and increase market liquidity.",
    },
    {
      img: "/ico_page/icons/resoures03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Healthcare",
      text:
        "Our ICO development solutions provide secure management of medical records and health data, ensuring patient privacy. ",
    },
    {
      img: "/ico_page/icons/resoures04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Gaming  ",
      text:
        " With in-game assets and currencies, our services enhance player ownership and engagement, enabling NFT-based gaming for unique digital items.",
    },
    {
      img: "/ico_page/icons/resoures05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Supply Chain ",
      text:
        "  ICO development enhances transparency and tracking of goods from production to delivery in logistics and inventory management.",
    },
    {
      img: "/ico_page/icons/resoures06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Entertainment and Media ",
      text:
        "Initial coin offering development empowers content creators with direct distribution and monetization platforms.",
    },
    {
      img: "/ico_page/icons/resoures07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Education",
      text:
        " We support decentralized learning platforms and verifiable credential issuance to enhance accessibility and trust in educational qualifications.",
    },
    {
      img: "/ico_page/icons/resoures08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "E-commerce",
      text:
        "Our team uses blockchain technology for secure transactions, loyalty programs, and supply chain transparency to enhance customer trust.",
    },
    {
      img: "/ico_page/icons/resoures09.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Insurance ",
      text:
        " The smart contracts streamline claims processing and policy management, enhancing transparency, reducing fraud, and improving customer experience.",
    },
    {
      img: "/ico_page/icons/resoures10.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Logistics  ",
      text:
        " Initial coin offering development improves freight tracking and management and reduces operational costs in logistics operations.",
    },
    {
      img: "/ico_page/icons/resoures11.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Manufacturing ",
      text:
        "Our ICO services render tracking of production processes and supply chain components and ensure product authenticity.",
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
        " We deploy blockchain technology to create and manage the tokens being offered in the ICO based on factors like security and scalability.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Token Standardization",
      text:
        " We exploit a standard protocol for the tokens issued during the ICO and ERC-20 for Ethereum-based tokens, ensuring compatibility with various wallets.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Scalability Solutions ",
      text:
        "The layer-2 scaling solutions, sharding, or alternative blockchain architectures are adopted to handle numerous transactions effectively. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Gas Optimization",
      text:
        "Our ICO developers optimize gas usage in smart contracts to minimize transaction costs and improve efficiency on the blockchain network. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Cross-Platform Compatibility ",
      text:
        " Our solutions ensure compatibility with different devices, operating systems, and browsers to maximize accessibility for investors. ",
    },
  ];

  const AboutLbm = [
    {
      img: "/ico_page/icons/why01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Expertise ",
      text:
        "We have a team of ICO developers to offer innovative, tailored ICO development solutions backed by years of experience and industry knowledge.  ",
    },
    {
      img: "/ico_page/icons/why02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Customized Solutions",
      text:
        "  We provide tailored ICO services to meet your unique vision and goals, ensuring that the final product is prepared according to your needs. ",
    },
    {
      img: "/ico_page/icons/why03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Cutting-Edge Technology ",
      text:
        "Our team leverages the latest blockchain platforms, token standards, and smart contract technologies to build your ICO with future-ready solutions.",
    },
    {
      img: "/ico_page/icons/why04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Comprehensive Services",
      text:
        "We provide a full spectrum of ICO development services, from token creation and smart contract development to marketing and post-ICO support.",
    },
    {
      img: "/ico_page/icons/why05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Innovative Marketing",
      text:
        " Our marketing strategies combine traditional and digital channels to maximize your ICO's reach with targeted campaigns that generate buzz and attract investors.",
    },
    {
      img: "/ico_page/icons/why06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Client-Centric Approach ",
      text:
        " We work closely with you, offering personalized attention and support, ensuring your expectations are met, which leads to a successful project.",
    },
    {
      img: "/ico_page/icons/why07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Post-ICO Support",
      text:
        "  We offer post-ICO support, including token listing on exchanges, ongoing technical maintenance, and community engagement to ensure long-term success.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "(Isabella Clark",
      text:
        "The team at LBM Solutions was quite professional and reliable! They helped us navigate the complexities of ICO development with ease. We appreciated their transparency and dedication to our project's success. ",
    },
    {
      clientName: "David Ethan Lewis",
      text:
        "The expertise of LBM in blockchain technology is outstanding. They provided excellent initial coin offering development service and support. Our ICO was not only successful but also secure.",
    },
    {
      clientName: "Charlotte Miller",
      text:
        "We had a fantastic experience working with LBM’s team. Their knowledge of blockchain and ICO development was clear from the start. They provided a complete solution for our project, and we were amazed at the outcome",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "William George Davis",
      text:
        " LBM made the complex process of ICO development seem easy. Their thorough understanding of blockchain technology and market trends helped us launch a successful campaign.",
    },
    {
      clientName: "Eva Taylor ",
      text:
        "The developers at LBM Solutions provided us free consultation and complete guidance for our ICO project. They delivered a secure and scalable ICO platform that met all our requirements. ",
    },
    {
      clientName: "Joseph Samuel White",
      text:
        " We were impressed by their commitment to excellence. They provided complete ICO software development services, ensuring every aspect of our project was handled with care. Their strategic advice and technical skills were crucial to our success.",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is ICO in web development?  ",
      body:
        "Initial Coin Offering (ICO) in web development involves crowdfunding for new blockchain projects by issuing digital tokens to investors, enabling them to support and potentially profit from the project's success.",
    },
    {
      eventKey: "1",
      header: "What is ICO used for?  ",
      body:
        "Startups use Initial Coin Offerings (ICOs) to increase assets for new projects with digital tokens. Investors buy tokens hoping for future profits or to access project services. ",
    },
    {
      eventKey: "2",
      header: "What is the Cost of ICO Development Services?",
      body:"The cost for ICO development services ranges from $5000 to $13000, depending on the project's complexity, requirements, and chosen blockchain platform. ",
    },
    {
      eventKey: "3",
      header: "What is the process for launching an ICO?",
      body:
        "To launch an ICO, define your project, create a whitepaper, develop tokens and smart contracts, ensure legal compliance, market your ICO, and finally, conduct the token sale on your platform.",
    },
    {
      eventKey: "4",
      header: "Which is the best ICO development company?  ",
      body:
        "LBM Solutions is the best ICO development company. It assists with ICO guidance to token creation, marketing, and launch according to your requirements. ",
    },
    {
      eventKey: "5",
      header: "What is the most successful ICO ever?",
      body:"Ethereum is the most successful ICO, raised $18.3 million in 2014. It revolutionized the blockchain space by introducing smart contracts, becoming the second-largest cryptocurrency by market capitalization.",
    },
  ];

  const sectionsData_a = [
    {
      heading:"Our Selection of Blockchain Platforms for ICO Development",
      paraText:
        "Our ICO developers offer top tech stacks for initial coin offering token development, ensuring robust, scalable, and secure solutions that provide high quality and reliability for a wide range of clientele globally.",
      imgSrc: "/blockchain_page/teach_img_a.png",
      imgAlt: "selection of blockchain platforms for ico development",
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
                  textA="Simplify Fundraising With "
                  clrtext="Expert ICO Development Company"
                  textB="  "
                  heading="banner_h"
                />
                <BannerText text="We provide expert ICO development, ensuring secure, scalable blockchain solutions for effective cryptocurrency fundraising ICO projects.  " />

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
                <img src="/ico_page/banner.png" alt="expert ico development company" className="img-fluid" />
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
                  textA="Innovative  "
                  clrtext="ICO Development Services"
                  textB="for Modern Businesses"
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                
                <ParaText
                  f_custome=""
                  para_text="Being a top-tier ICO development service provider, we enable startups and enterprises to maximize their business potential through blockchain technology, enhancing their capabilities for successful financing in the digital economy."
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
                <Heading
                  textA="Our Strategic  "
                  clrtext="Approach to ICO Software "
                  textB="Development"
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="We utilize a structured development process for scalable ICO creation, ensuring quality and satisfaction for our valued clients at every stage."
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
            <div className="col-xl-12 ">
              <Heading_h2
                textA="How ICO  "
                clrtext="Token Development Solutions Fuels"
                textB="Business Growth"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0 "
              />

              <ParaText
                f_custome=""
                para_text="At our ICO development agency, we provide comprehensive initial coin offering services, helping businesses fundraise, delivering significant benefits that enable projects to unlock their full potential in the ICO sector."
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
                        <Nav.Link eventKey="second" className="ms-3"><h3>Technical Features </h3></Nav.Link>
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
                  textA="Our ICO   "
                  clrtext="Development Agency's Connecting Industries"
                  textB="for Success"
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Our seasoned ICO developers deliver top-tier ICO development software services across diverse industries to enhance transparency, security, and efficiency, driving innovation and growth.  "
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
                                    textA="Why is  "
                                    clrtext=" LBM Solutions Your Ideal"
                                    textB="ICO Development Company? "
                                    heading="heading_h2"
                                />

                                <ParaText
                                    f_custome=""
                                    para_text="At LBM Solutions, we create custom solutions for successful ICO projects. Our ICO development agency provides numerous benefits to businesses, setting us apart from the competition in the token development market."
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
              <ParaText para_text="Delivering and launching several ICOs successfully, our clients are satisfied with our ICO development services. Their positive feedback highlights our expertise, to render exceptional ICO development solutions that meet and exceed expectations" />
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
