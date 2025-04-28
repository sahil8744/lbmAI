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
      heading:
        "Upgrade Your Crypto Payment Systems with LBM’s Cryptocurrency Developer ",
      paraText:
        "Being an eminent crypto payment gateway development company, we specialize in developing advanced cryptocurrency payment platforms, empowering businesses with instant and multi-currency transaction capabilities. ",
      imgSrc: "/payment_gateway_page/teach_img.png",
      imgAlt: "manage your money easily with our crypto developers",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover ",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Multi-Currency Cryptocurrency Payment Gateway Development ",
      text:
        "Our crypto developers specialize in creating versatile multi-currency gateways for absolute crypto transactions.",

    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Defi Crypto Payment Gateway Development",
      text:
        "Our crypto payment gateway solutions ensure total autonomy, granting users full control over their assets in the financial ecosystem.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Payment Gateway Mobile App Development",
      text:
        "We develop comprehensive crypto payment gateway apps for Android and iOS, offering multi-payment options, secure access, and instant conversions.",
        isLink: true,
        linkUrl: "https://www.lbmsolution.com/mobile-app-development-services ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Secure Crypto Wallet",
      text:
        "Our crypto payment platform introduces a robust wallet to manage and store cryptocurrencies with market value tracking, preventing unauthorized access.",
        isLink: true,
        linkUrl: "https://www.lbmsolution.com/crypto-wallet-development-company ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "API Plugins",
      text:
        "We offer customizable API integration to automate payment processes and manage non-payment functionalities, enhancing operational efficiency for your project.",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/payment_gateway_page/icons/process01.png",
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
      img: "/payment_gateway_page/icons/process02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Analysis and Discovery",
    },
    {
      img: "/payment_gateway_page/icons/process03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Requirements Gathering ",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/payment_gateway_page/icons/process06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Testing ",
    },
    {
      img: "/payment_gateway_page/icons/process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Development Phase",
    },
   
    {
      img: "/payment_gateway_page/icons/process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Strategy Design  ",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/payment_gateway_page/icons/process07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Deployment and Support",
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
      heading: "Multi-Currency Support ",
      text:
        " Our crypto payment solutions allow transactions in various cryptocurrencies, enabling customers to use their preferred digital currency.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Real-Time Exchange Rates",
      text:
        "We develop secure crypto payment gateways to provide up-to-date exchange rates for accurate conversion between cryptocurrencies and fiat currencies.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Instant Transaction Processing  ",
      text:
        "Our crypto payment platform enables quick transaction confirmations, minimizing waiting times for users and enhancing the overall transaction experience. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Merchant Dashboard ",
      text:
        "We create a comprehensive dashboard for merchants to manage transactions and access financial data, facilitating better business management.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Customizable Payment Buttons ",
      text:
        "Our crypto payment gateway solutions help to create and customize payment buttons that match website’s design. ",
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
        " We integrate multiple blockchain networks to facilitate secure and transparent transactions, ensuring data immutability and reliability.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "API Documentation ",
      text:
        "Our crypto developers merge the payment gateway with various applications, enhancing usability and reducing integration time.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Throughput Capability",
      text:
        "Our crypto payment gateway solutions facilitate handling a high volume of transactions, ensuring scalability even during peak usage.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Cold Storage Wallets",
      text:
        "We implement cold storage solutions for securely storing cryptocurrencies offline, protecting funds from online threats and hacking attempts.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Transaction Monitoring",
      text:
        "We build absolute crypto currency payment gateways that allow you to monitor real-time transactions and enhance compliance, detecting suspicious activities.",
    },
  ];

  const sectionsData_a = [
    {
      heading:
        "Advanced Technology of Our White Label Crypto Payment Gateway Development ",
      paraText:
        "Having expertise in innovative tech stacks, our crypto developers provide seamless payment gateways for crypto. Our solutions ensure safe transactions, integrating blockchain and encryption for a reliable payment experience in the cryptocurrency realm. ",
      imgSrc: "/payment_gateway_page/teach_img_a.png",
      imgAlt: "tech stack for our white label crypto banking software",
    },
  ];

  const currencyes = [
    {
      img: "/payment_gateway_page/icons/coin01.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Bitcoin ",
    },
    {
      img: "/payment_gateway_page/icons/coin02.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Etherium  ",
    },
    {
      img: "/payment_gateway_page/icons/coin03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Bitcoin Cash",
    },
    {
      img: "/payment_gateway_page/icons/coin04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: " mx-auto mb-0 mt-3",
      heading: "Bianance USD",
    },
    {
      img: "/payment_gateway_page/icons/coin05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "USD Coin",
    },
    {
      img: "/payment_gateway_page/icons/coin06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: " mx-auto mb-0 mt-3",
      heading: "Ripple",
    },
    {
      img: "/payment_gateway_page/icons/coin07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: " mx-auto mb-0 mt-3",
      heading: "Gemini USD",
    },
    {
      img: "/payment_gateway_page/icons/coin08.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Celo",
    },
    {
      img: "/payment_gateway_page/icons/coin09.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Solana",
    },
    {
      img: "/payment_gateway_page/icons/coin10.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Dogecoin",
    },
    {
      img: "/payment_gateway_page/icons/coin11.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Litecoin",
    },
    {
      img: "/payment_gateway_page/icons/coin12.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Zcash",
    },
  ];

  const Crafting = [
    {
      img: "/payment_gateway_page/icons/resoures01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Expertise  ",
      text:
        "We have a team of 200+ crypto developers who specialize in blockchain and cryptocurrency technologies to create efficient and innovative crypto payment gateways.   ",
    },
    {
      img: "/payment_gateway_page/icons/resoures02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Customizable Solutions ",
      text:
        "Our flexible crypto currency payment gateway development services provide custom crypto gateways that align with your requirements and branding.",
    },
    {
      img: "/payment_gateway_page/icons/resoures03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real-Time Processing ",
      text:
        "Our crypto payment platforms enable quick confirmations for transactions and alleviate waiting times, enhancing user satisfaction.",
    },
    {
      img: "/payment_gateway_page/icons/resoures04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Multi-Currency Support ",
      text:
        "We craft payment gateways that support numerous cryptocurrencies, catering to your audience and extending your market presence to a broader scope.",
    },

    {
      img: "/payment_gateway_page/icons/resoures05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen  p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Scalable Solutions ",
      text:
        "Our crypto payment platforms are designed to handle high transaction volumes. We implement DDoS protection to guarantee uninterrupted service.",
    },
    {
      img: "/payment_gateway_page/icons/resoures06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "User-Friendly Interfaces",
      text:
        "We focus on creating intuitive interfaces for both merchants and customers, reducing the learning curve and enhancing user experience.",
    },
    {
      img: "/payment_gateway_page/icons/resoures07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Cost-Efficiency",
      text:
        "Our transparent pricing model ensures you a clear understanding of the project’s costs, delivering exceptional value to your crypto payment gateway.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Sebastian Rogers",
      text:
        "We hired the team of LBM for crypto payment gateway development. They provided us with a high-quality cryptocurrency gateway, which provided outstanding performance. The entire experience, from start to finish, was truly great. ",
    },
    {
      clientName: "Richard Dunn",
      text:
        "The crypto developers of LBM rendered an innovative cryptocurrency payment gateway that was fast, secure, and supports multiple cryptocurrencies, making it perfect for our global customer base. It had completely transformed the way we handled transactions. ",
    },
    {
      clientName: "Jack Oliver George",
      text:
        "At LBM Solutions, the development of our cryptocurrency payment gateway was flawless. The enhanced security features and valuable transaction analytics have greatly benefited our operations. The service provided was excellent and professional from start to finish.",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "James Boyd",
      text:
        "LBM’s team was highly experienced in developing a user-friendly and robust cryptocurrency payment gateway. That gateway provided a coherent payment experience to our clients. The team exceeded our expectations in every way.",
    },
    {
      clientName: "Alan Fitzgerald",
      text:
        "The team of LBM was capable of building a gateway with multi-currency support and real-time processing features to enhance our international transactions. The team's professionalism and reliability were commendable. We were very satisfied with the solutions provided.",
    },
    {
      clientName: "Garrett Lane",
      text:
        "The cryptocurrency payment gateway developed by LBM was intuitive and cost-effective. We saw a significant reduction in transaction fees and an improvement in customer satisfaction. Their service was truly exceptional. ",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "How much does it cost to develop a crypto payment gateway?  ",
      body:
        "The cost to develop a cryptocurrency payment gateway lies between $25,000 to $100,000, depending on features, security requirements, integration complexity, and team's expertise.",
    },
    {
      eventKey: "1",
      header: "How long does it take to create a crypto payment gateway?",
      body:
        "To develop a cryptocurrency payment gateway generally takes about 1 to 5 months. This timeframe accounts for the planning, development, testing, and integration phases, which vary based on complexity and customization requirements.",
    },
    {
      eventKey: "2",
      header: "How does a crypto payment gateway work?",
      body:
        "A cryptocurrency payment gateway facilitates transactions by converting fiat or cryptocurrencies into digital currency, securely transferring funds between buyers and sellers, and verifying transactions through blockchain technology.",
    },
    {
      eventKey: "3",
      header: "How much does a crypto payment gateway charge? ",
      body:
        "A crypto payment gateway typically charges transaction fees ranging from 0.5% to 1% per transaction. Additional charges may apply for currency conversion, network fees, and other services, depending on the provider.",
    },
    {
      eventKey: "4",
      header: "Which crypto payment gateway has no KYC?",
      body:
        "BTCPay Server is a notable example of a cryptocurrency payment gateway that emphasizes privacy and does not require KYC (Know Your Customer) verification. This platform allows traders to accept Bitcoin and other cryptocurrencies directly into their wallets.",
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
                  textA=" "
                  clrtext="Cryptocurrency Payment Gateway Development"
                  textB="For Seamless Transactions"
                  heading="banner_h"
                />
                <BannerText text="At LBM Solutions, we deliver advanced cryptocurrency payment gateway solutions, ensuring secure digital transactions.  " />

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
                  src="/payment_gateway_page/banner.png"
                  alt="crypto banking solutions powered by blockchain"
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
                  textA="Our Crypto Currency Payment "
                  clrtext="Gateway Development Services"
                  textB=""
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="Our bespoke crypto payment gateway solutions assist in elevating your blockchain venture. We develop rapid and transparent crypto payment gateway platforms that boost your business to thrive in the dynamic crypto landscape."
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
                  textA="Our Secure  "
                  clrtext="Cryptocurrency Payment Gateway"
                  textB=" Development Approach"
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="Our cryptocurrency payment gateway development approach emphasizes a structured, stepwise process, delivering high-quality payment gateway solutions to meet diverse client requirements in the crypto market."
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
                textA="How Our "
                clrtext="Crypto Payment Solutions Safeguard"
                textB="Your Transactions?"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0 "
              />

              <ParaText
                f_custome=""
                para_text="Our crypto payment solutions enable businesses to accept crypto payments consistently at all cryptocurrency platforms. We craft crypto payment app that offers secure transactions and flexibility to ensure a smooth payment experience."
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

      <section className="currencyes bg-black">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Diverse Payment Methods from Our "
                  clrtext="Crypto Payment Gateway Development"
                  textB=""
                  heading="heading_h2 text-white"
                />

                <ParaText
                  f_custome="text-white"
                  para_text="Our cryptocurrency payment gateway offers support for multiple cryptocurrencies, providing users with diverse payment options. This flexibility enhances user convenience and accessibility, making transactions smoother across various blockchain networks."
                />
              </div>
            </div>
          </div>

          <div className="row text-center">
            <Card CardData={currencyes} />
          </div>
        </div>
      </section>

      <section className="crafting">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Why LBM Solutions Is "
                  clrtext="Top Crypto Payment Gateway Development Company?"
                  textB=""
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="We are one of the prestigious cryptocurrency payment gateway development companies based on USA. We cater to diverse businesses with our crypto gateway solutions. Our crypto developers deliver customized crypto payment apps, ensuring coherent transactions."
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
              <ParaText para_text="Discover how our crypto payment gateway solutions have transformed businesses. Our clients are pleased with our consistent payment gateway development approach and praised our expertise, reliability, and dedication. Let’s hear from our satisfied clients." />
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
