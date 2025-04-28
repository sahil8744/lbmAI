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
      heading: "We Build Best Crypto Trading Bots to Suit Your Trading Style",
      paraText:
        "Hire cryptocurrency developers at LBM Solutions to avail tailored, white-label solutions that streamline trading with sophisticated algorithms, ensuring cost-efficient, easy functionality to achieve your strategic trading goals. ",
      imgSrc: "/trading_bot_page/teach_img.png",
      imgAlt: "build your own crypto trading bot",
    },
  ];
  const sectionsData_a = [
    {
      heading:
        "Frameworks & Technologies Integrated within Crypto Trading Bot Solutions ",    
      paraText:
        "We adopt advanced technology and robust security protocols to develop superior crypto trading bots, emphasizing efficiency, reliability, and scalability, keeping your bot competitive by staying ahead of industry trends.",
      imgSrc: "/trading_bot_page/teach_img01.png",
      imgAlt: "advanced tech stack crypto trading bot development",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Arbitrage Trading Bot Development",
      text:
        "We create advanced trading bots to automate trades, analyzing prices across platforms for rapid execution. ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Sniper Bot Development",
      text:
        "Our automated crypto trading solutions allow you to detect and purchase newly listed tokens on decentralized exchanges instantly. ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "DCA Bot Development  ",
      text:
        "Our DCA bot development solutions elevate your crypto trading profitability, automating trades and optimizing investment during market fluctuations.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Grid Bot Development ",
      text:
        "Our crypto trading bot solutions automate crypto trading with a grid strategy, enhancing profits amid market volatility. ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "MEV Bot Development",
      text:
        "We craft MEV bot to exploit Miner Extractable Value by monitoring Ethereum for profitable transactions, supporting arbitrage and flash loans. ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Signal Bot Development ",
      text:
        " We utilize market data and technical indicators to generate timely buy or sell signals, aiding in informed decision-making and profit maximization.",
    },
   
  ];

  const DevelopmentProcess_a = [
    {
      img: "/trading_bot_page/icons/process01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Understanding Needs ",
    },
    {
      img: "/trading_bot_page/icons/process02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Designing phase ",
    },
    {
      img: "/trading_bot_page/icons/process03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Bot Creation ",
    },
  ];

  const DevelopmentProcess_b = [
    
    {
      img: "/trading_bot_page/icons/process06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Evaluation & Deployment",
    },
    {
      img: "/trading_bot_page/icons/process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Security and compliance",
    },
    {
      img: "/trading_bot_page/icons/process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Market Research ",
    },
   
  ];

  const DevelopmentProcess_c = [
    {
      img: "/trading_bot_page/icons/process07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Optimization  ",
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
      heading: "Automated Trading",
      text:
        "Our crypto solutions let users automate trades with preset algorithms, minimizing the need for constant market monitoring.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "White-Label Solutions",
      text:
        "We deliver customizable solutions that enable quick deployment and branding opportunities for companies looking to offer trading bots to their clients.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Risk Management Tools",
      text:
        "Our crypto trading bot development services offer features like stop-loss, take-profit, and trailing stops to manage the risks of dynamic crypto markets.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Backtesting ",
      text:
        "We enable businesses to test trading strategies against historical market data before applying them in real markets, ensuring strategy transparency.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Multi-Exchange Integration ",
      text:
        "Our crypto development solutions facilitate the bot to operate across multiple cryptocurrency exchanges, enhancing trading opportunities and liquidity.",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Algorithmic Trading ",
      text:
        " We utilize complex algorithms in our crypto trading bot development to automate trading decisions based on market data analysis.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Market Data Analysis ",
      text:
        "  Our bots can analyze large amounts of market data in real-time, spot trends, and make predictions using past data. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Signal Generation ",
      text:
        "The developed bots generate trading signals based on technical indicators and market patterns, advising when to buy or sell. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Security Protocols",
      text:
        "Our crypto trading bot development uses advanced security features to safeguard against unauthorized access and threats, ensuring your investments remain secure. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Order Execution",
      text:
        " We implement trades automatically based on pre-defined criteria, ensuring speed and accuracy that manual trading cannot match.",
    },
  ];

  const Crafting = [
    {
      img: "/trading_bot_page/icons/bot01.png",
      svg_cls: "d-none",
      add_class: "light_orange h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Pionex",
      text:
        "Pionex offers integrated crypto trading bots with its exchange platform, providing users access to 16 built-in bots like the Grid Trading Bot and DCA Bot. It is designed for automation, efficiency, and convenience in managing crypto investments.",
    },
    {
      img: "/trading_bot_page/icons/bot02.png",
      svg_cls: "d-none",
      add_class: "light_green p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Cryptohopper",
      text:
        "Cryptohopper is a leading crypto trading bot that enables automated trading across various exchanges. It offers strategy designing, backtesting, and market-making tools, along with social trading features, helping traders manage assets and capitalize on market opportunities.",
    },
    {
      img: "/trading_bot_page/icons/bot03.png",
      svg_cls: "d-none",
      add_class: "light_yellow p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Coinrule",
      text:
        " Coinrule is another trading bot that empowers crypto traders to compete with professional algorithms. Its user-friendly logic, If-This-Then-That, allows traders to set custom rules for automatic trades, adapting to market changes without needing to monitor the markets constantly.",
    },
    {
      img: "/trading_bot_page/icons/bot04.png",
      svg_cls: "d-none",
      add_class: "light_grn p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "3Commas",
      text:
        "3Commas is a sophisticated trading bot that offers comprehensive strategy automation, risk management, and portfolio balancing tools. It supports conditional orders across multiple exchanges, helping traders to maximize gains and minimize losses.",
    },
    {
      img: "/trading_bot_page/icons/bot05.png",
      svg_cls: "d-none",
      add_class: "light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Shrimpy.io",
      text:
        "Shrimpy.io is a crypto trading bot focused on portfolio management and strategy automation. It offers tools for rebalancing, backtesting strategies, and social trading capabilities, which help traders automate and optimize their long-term investment strategies.",
    },
  
  ];

  const AboutLbm = [
    {
      img: "/trading_bot_page/icons/why01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Veteran Team",
      text:
        "Our expert crypto trading bot developers create sophisticated bots for high-frequency trading and apply advanced mathematical models to predict and capitalize on market moves. ",
    },
    {
      img: "/trading_bot_page/icons/why02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Custom Solutions",
      text:
        "We tailor each trading bot to the individual needs of our clients, integrating specific trading strategies and risk management tools.",
    },
    {
      img: "/trading_bot_page/icons/why03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Security Measures",
      text:
        "Our trading bot development deploys encryption and secure API connections to protect against unauthorized access and potential security breaches",
    },
    {
      img: "/trading_bot_page/icons/why04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Proven Track Record",
      text:
        "We have a history of developing trading bots that help users achieve their desired outcomes in terms of profit maximization and risk minimization.",
    },
    {
      img: "/trading_bot_page/icons/why05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Cost-Efficiency ",
      text:
        "We optimize our development processes to offer flexible pricing plans and tailored to suit different budgetary constraints.  ",
    },
    {
      img: "/trading_bot_page/icons/why06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Continuous Improvement ",
      text:
        "Our team assists regularly in updating bots with the latest technology and market insights to adapt to new trading environments.",
    },
    {
      img: "/trading_bot_page/icons/why07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Problem Resolution",
      text:
        "We offer quick and effective problem-solving support to minimize downtime and ensure that your trading operations are smooth and uninterrupted. ",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Mia Thompson",
      text:
        "LBM Solutions provided an outstanding trading bot, which significantly boosted my trading efficiency. Their support team was always available and very knowledgeable, making the whole process seamless and stress-free. ",
    },
    {
      clientName: "Charles Allen",
      text:
        "Excellent service by LBM’s team. The bot they developed was easy to use and improved my trading strategy immensely. I feel confident using it in the volatile crypto market, knowing my investments are well-protected.",
    },
    {
      clientName: "Harper Young",
      text:
        "LBM delivered great customization options for our crypto trading bot development. I was able to tailor the bot to my specific trading needs. The developers listened to my requirements and delivered a product that truly enhanced my trading capabilities. ",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Thomas Nathan Wright",
      text:
        "I had tried several trading bots, but the trading bot developed by the team of LVBM stood out for its reliability and performance. The backtesting feature was a game-changer, allowing me to refine my strategies. ",
    },
    {
      clientName: "Isabelle King ",
      text:
        " Great experience with LBM from start to finish. The development team was professional and communicative and delivered the final product on time. The bot's performance exceeded my expectations, and I was happier with the results.",
    },
    {
      clientName: "Ryan Scott",
      text:
        " I really admired the dedication of the LBM team towards our project. The user-friendly interface made it easy for me to get started, even as a novice trader.",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "How much does it cost to create a crypto trading bot? ",
      body:
        "The cost to develop a crypto trading bot is $20,000 to $50,000. Its customization and ongoing maintenance can add additional monthly costs.",
    },
    {
      eventKey: "1",
      header: "What is the best Cryptocurrency trading bot? ",
      body:
        "Cryptohopper is the best cryptocurrency trading bot. However, its preferences vary according to user needs.",
    },
    {
      eventKey: "2",
      header: "How profitable are trading bots? ",
      body:
        "Trading bots can be profitable, but their success depends on market conditions, strategies used, and settings. They automate trades to take advantage of market opportunities, but profits are not guaranteed.",
    },
    {
      eventKey: "3",
      header: "How to build an AI trading bot?",
      body:
        "To build an AI trading bot, define trading strategies, collect and analyze market data, develop algorithms, integrate with trading platforms, test thoroughly, and continuously refine based on performance and market changes.",
    },
    {
      eventKey: "4",
      header: "What programming language do trading bots use?",
      body:
        " Python is the popular programming language used in trading bots due to its simplicity and powerful libraries for data analysis and machine learning. Moreover, JavaScript, C++, and Java can also be used.",
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
                  textA="Crypto Trading "
                  clrtext="Bot Development Company"
                  textB="  "
                  heading="banner_h"
                />
                <BannerText text="We are a prestigious crypto trading bot development company specializing in automated trading solutions tailored for crypto markets. " />

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
                <img src="/trading_bot_page/banner.png" alt="expert crypto trading bot development company" className="img-fluid" />
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
                  textA="Our Profit-Driven  "
                  clrtext=" Crypto Trading Bot Development"
                  textB="Services"
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="Being a top-tier crypto trading bot development company, we render automated crypto trading bot development services according to client needs. We specialize in custom bots that utilize advanced algorithms for automated crypto trading. "
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
                  textA="How  "
                  clrtext="Our Experts Drive Crypto Trading"
                  textB="Bot Development"
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="We integrate market analytics with user-defined strategies to reorganize the crypto trading bot development process and develop the best bot to enhance trading precision and profitability."
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
                textA="Aspects of "
                clrtext="White Label Crypto Trading Bot"
                textB=" For Business Growth"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
              />

              <ParaText
                f_custome=""
                para_text="With expertise over ten years, our custom cryptocurrency development solutions and provide coherent crypto trading bot features to enhance trading efficiency and risk management for businesses."
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
                  textA="Most  "
                  clrtext="Popular Crypto Trading Bots"
                  textB="in Today's Market"
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="The present market features several popular crypto trading bots. These bots offer automated trading strategies, real-time analytics, and easy integration with major exchanges, enhancing user profitability in cryptocurrency trading. "
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
                  textA="Why is"
                  clrtext=" LBM Solutions the Best"
                  textB="Crypto Trading Bot Development Company? "
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="At LBM Solutions, a prominent cryptocurrency trading bot development company, we have 200+ crypto developers to craft automated crypto trading bots to empower your investment journey."
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
              <ParaText para_text="We have delivered numerous DeFi projects and here we display testimonials of our clients to show how our tailored DeFi solutions have met their business goals and delivered outstanding results in the decentralized finance market." />
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
