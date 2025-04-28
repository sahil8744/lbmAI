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
      heading: "Upgrade Your Token Security with Our Professional Token Creators ",
      paraText:
        "At LBM Solutions, we have a team of token developers who specialize in asset tokenization to develop effective STOs. Our security token offering solutions meet your needs for tokenized asset fundraising and enhancing liquidity.",
      imgSrc: "/sto_page/teach_img.png",
      imgAlt: "increase your token security with professional token creators",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Security Token Offering Development ",
      text:
        "Our token developers utilize innovative technology to create scalable tokens that align with your business goals, securing tokens.",
        isLink: true,
        linkUrl: "",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Security Token Exchange Platform Development",
      text:
        "Our STO software ensures SEC-compliant exchanges, enabling global asset-backed token exchanges to support your business growth.   ",
        isLink: true,
        linkUrl: "",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "STO Marketing",
      text:
        "We provide expert STO marketing with targeted campaigns and analytics tools to optimize performance and maximize your ROI.",
        isLink: true,
        linkUrl: "/crypto-marketing-agency",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Tokenized Asset Offering Development",
      text:
        "Our team creates asset-based tokens, guaranteeing investor returns and simplifying the tokenization process on Ethereum for business growth.",
        isLink: true,
        linkUrl: "",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Smart Contract Development",
      text:
        "Automate real-time trading with our smart contracts development solutions, offering flexible transaction approvals and continuous monitoring.",
        isLink: true,
        linkUrl: "/smart-contract-development-company",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Security Token Wallet Development",
      text:
        "We offer advanced encryption, coherent integration, and robust security features, ensuring efficient management of cryptocurrencies.",
        isLink: true,
        linkUrl: "",
    },
   
   
  ];

  const DevelopmentProcess_a = [
    {
      img: "/sto_page/icons/process01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "The Groundwork ",
    },
    {
      img: "/sto_page/icons/process02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Token Design",
    },
    {
      img: "/sto_page/icons/process03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Smart Contract Development",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/sto_page/icons/process06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "STO Marketing  ",
    },
    {
      img: "/sto_page/icons/process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Deployment Phase",
    },
    
    {
      img: "/sto_page/icons/process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "STO Token Development  ",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/sto_page/icons/process07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Post-STO Compliance",
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
      heading: "Custom Token Creation",
      text:
        "Our token developers tailor tokens to meet specific business requirements, ensuring they align with the unique goals of your project.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Smart Contract Development",
      text:
        "We develop secure and efficient smart contracts to automate processes, manage transactions, and enforce terms without intermediaries",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Exchange Integration ",
      text:
        "Our STO software is integrated with major cryptocurrency exchanges to facilitate the trading of your security tokens",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Investor Management ",
      text:
        " Our solutions enhance investment experience, providing tools and platforms to manage investor relations and engagements efficiently.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Analytics",
      text:
        "We render comprehensive reporting tools to track the performance of your STO, make data-driven decisions, and optimize strategies for better outcomes. ",
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
        "We create security token offerings with blockchain technology to ensure transparency and immutability of transactions.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Token Standard",
      text:
        "Our STO services utilize advanced token protocols like ERC-20, ERC-721, and ERC-1400 for compatibility and interoperability across different exchanges. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Multi-Signature Wallets",
      text:
        "We implement wallets that require multiple signatures for transactions to enhance security of token by preventing unauthorized access.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Interoperability",
      text:
        "We ensure our STO platform is compatible with various blockchain networks, wallets, and exchanges to maximize reach and usability.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Enhanced Liquidity",
      text:
        "Security token development enables fractional ownership and secondary trading, improving market efficiency.",
    },
  ];

  const sectionsData_a = [
    {
      heading: "The Tech Stack Powering Our STO Development Solutions",
      paraText:
        "Our token creators are proficient in crafting security token offering platforms based on innovative technology, ensuring robust user authentication and safe security token management.",
      imgSrc: "/sto_page/teach_img01.png",
      imgAlt: "technical framework for sto development",
    },
  ];

  const Crafting = [
    {
      img: "/sto_page/icons/sourceses01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate",
      text:
        "Our STO solutions tokenize property assets to enhance liquidity while ensuring regulatory compliance and transparent transactions.",
    },
    {
      img: "/sto_page/icons/sourceses02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Finance   ",
      text:
        "We facilitate the issuance of security tokens for financial instruments, reducing transaction costs and enhancing market efficiency through our token solutions.",
    },
    {
      img: "/sto_page/icons/sourceses03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Art and Collectibles ",
      text:
        "Our security token offering solutions ensure secure and transparent transactions while attracting a broader investor base.",
    },
    {
      img: "/sto_page/icons/sourceses04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Venture Capital   ",
      text:
        " Simplifying investment processes, we adopt adaptable and flexible ways in tokenization to raise capital and manage investments. ",
    },
    {
      img: "/sto_page/icons/sourceses05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Intellectual Property ",
      text:
        " Our STO services allow the tokenization of intellectual property assets, enabling easier monetization and secure transactions.",
    },
    {
      img: "/sto_page/icons/sourceses06.png",
        svg_cls: "d-none",
        add_class: "bg_light_sky p-4 h-100 rounded-3",
        columns: "col-sm-6 col-lg-4 mb-4",
        heading: "Technology ",
        text:
            " We tokenize tech assets and projects to attract investment, enhance liquidity, and ensure traceable transactions, driving industry advancement.",
    },
    {
      img: "/sto_page/icons/sourceses07.png",
        svg_cls: "d-none",
        add_class: "bg_light_pink p-4 h-100 rounded-3",
        columns: "col-sm-6 col-lg-4 mb-4",
        heading: "Supply Chain",
        text:
            "Improve transparency, traceability, and efficiency in supply chain management through tokenized assets, ensuring secure transactions and enhanced operational processes. ",
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
        " We have a team of 200+ token developers to ensure high-quality and reliable service delivery according to your business requirements.",
    },
    {
      img: "/nft_market_page/icons/why02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Tech Expertise ",
      text:
        "Our token creators utilize the latest advancements in blockchain and smart contract technology to deliver secure, efficient, and scalable solutions.",
    },
    {
      img: "/nft_market_page/icons/why03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Tailored Strategies",
      text:
        " We deliver customized solutions to fit your business's unique needs and goals, improving your STO's effectiveness.",
    },
    {
      img: "/nft_market_page/icons/why04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Investor Confidence",
      text:
        "We focus on creating transparent and trustworthy STO processes that boost investor confidence and engagement.",
    },
    {
      img: "/nft_market_page/icons/why05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Comprehensive Solutions ",
      text:
        "We have a team of 200+ token developers to provide end-to-end STO development solutions, covering all aspects of your project.  ",
    },
    {
      img: "/nft_market_page/icons/why06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Regulatory Compliance",
      text:
        "Our team ensures adherence to all relevant regulations, including KYC/AML, to maintain legal compliance and build investor trust.",
    },
    {
      img: "/nft_market_page/icons/why07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Ongoing Suppor",
      text:
        "We offer continuous support and maintenance to ensure your STO operates smoothly and efficiently post-launch.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Avery Campbell",
      text:
        "LBM’s STO development services are exceptional! They provided comprehensive guidance at every step, ensuring full compliance and top-notch security for our STO project ",
    },
    {
      clientName: "Christopher Evans",
      text:
        "The team of LBM offered excellent support and expertise throughout our STO process. The launch was flawless, significantly boosting investor confidence. Their strategic approach truly made a difference in our success.",
    },
    {
      clientName: "Sofia Roberts",
      text:
        "LBM provided us with outstanding service! Their customized blockchain strategies, attention to detail, and use of the latest technology made our STO a huge success. They developed STO project as per our needs.",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Dylan Perry",
      text:
        " We got professional and highly knowledgeable team at LBM Solutions. They managed all regulatory requirements efficiently, delivering a secure and effective tokenization process. Their expertise ensured our STO was executed flawlessly ",
    },
    {
      clientName: "Juliette Reed",
      text:
        "We were thoroughly impressed by the comprehensive approach of LBM. The STO development process was smooth, secure, and successful, exceeding our expectations. We got complete service and support. ",
    },
    {
      clientName: "Elizabeth Cook",
      text:
        "We had a great experience working with LBM’s team! Their end-to-end support and dedication to our project's success were impressive. They ensured a smooth and efficient STO development process.",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is STO blockchain?",
      body:
        "STO blockchain refers to Security Token Offerings on a blockchain platform which enables the compliant tokenization of assets, enhances liquidity, and facilitates secure, transparent fundraising through smart contracts and decentralized technology.",
    },
    {
      eventKey: "1",
      header: "Which technology creates a security token? ",
      body:
        "Blockchain technology creates security tokens by utilizing smart contracts and decentralized networks to tokenize assets, ensuring secure, transparent transactions, regulatory compliance, and enhanced liquidity for investors and issuers.",
    },
    {
      eventKey: "2",
      header: "How does a security token work?",
      body:
        "A security token shows ownership in an asset, using blockchain and smart contracts for secure, transparent transactions. It ensures regulatory compliance, automates dividends, and boosts investor confidence and liquidity.",
    },
    {
      eventKey: "3",
      header: "What is the STO development cost?",
      body:
        "Generally, the cost to develop security token offerings can range from $600 to $2000, including legal, development, and marketing expenses. For an accurate estimate, it's best to consult with an STO development provider to discuss specific needs and requirements.",
    },
    {
      eventKey: "4",
      header: "How long does it take to develop an STO platform with LBM Solution? ",
      body:
        "At LBM Solutions, developing an STO platform typically takes 1-2 months. It involves regulatory compliance, smart contract development, token issuance, security measures, and integration with exchanges and blockchain networks.",
    },
    {
      eventKey: "5",
      header: "What is the difference between STOs and ICOs? ",
      body:
        "STOs are regulated and issue security tokens backed by assets, ensuring compliance, while ICOs offer utility tokens without regulatory oversight, primarily for funding projects and accessing platform services.",
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
                  textA="Security Token"
                  clrtext="Offering (STO) Development Company"
                  textB=""
                  heading="banner_h sectoin_h"
                />
                <BannerText text="As a pioneering STO development company, we ensure strategic security tokens, boosting investor engagement and business growth." />

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
                <img src="/sto_page/banner.png" alt="strategic security tokens offering (sto) development " className="img-fluid" />
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
                  textA="LBM Solutions’ "
                  clrtext="Complete Security Token Offering Services"
                  textB=""
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="We provide outstanding security token service, tokenizing real-world assets to ensure successful fundraising. Our security token offering creation provides token issuance, investor management, and exchange integration. "
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
                  textA="Our Experts’ "
                  clrtext="Proven Methods for STO Platform "
                  textB="Development"
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="Our dedicated blockchain developers have expertise in security token offering development and offer you comprehensive STO solutions to ensure successful tokens, maximizing your project's potential."
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
                textA="Why Security"
                clrtext="Tokens are Essential for Modern"
                textB="Enterprises"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0 "
              />

              <ParaText
                f_custome=""
                para_text="We provide inclusive STO software development solutions, from token creation to exchange integration enabling businesses to tokenize assets and securely raise capital according to their specific needs."
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
                  textA="Customized Asset  "
                  clrtext="Tokenization for Different Industry Needs"
                  textB=""
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Our custom security token offering services cater to diverse sectors which enable secure asset tokenization, enhance liquidity, and facilitate adaptable fundraising. We ensure seamless integration and compliance for successful STO development. "
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
                  textA="Why LBM Solutions is "
                  clrtext="Your Ideal STO Development Company?"
                  textB=""
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="We at LBM Solutions are a prominent security token offering development company in the USA. Our STO and blockchain developers render consistent STO solutions with pioneering technology, ensuring fundraising and tokenizing assets. "
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
              <ParaText para_text="Being a top-notch STO development company, we have developed and launched numerous STO projects over a decade. Our clients value our expertise in creating secure and efficient token offerings that drive their business growth and investor confidence." />
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
