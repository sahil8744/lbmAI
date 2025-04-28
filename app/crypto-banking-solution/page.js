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
      heading: "Simplify Your Money Management with Our Crypto Developers",
      paraText:
        "As a leading crypto development company, our team of crypto developers offers inclusive blockchain-based crypto banking services for secure cryptocurrency management, digital payments, and two-way QR technology to meet the banking community's needs.",
      imgSrc: "/blockchain_poweredcrypto_banking/teach_img.png",
      imgAlt: "manage your money easily with our crypto developers",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Crypto Debit Card",
      text:
        "Our cryptocurrency banking services provide a virtual debit card, enabling quick payments with cryptocurrencies for online and in-store purchases globally.",
        isLink: true,
        linkUrl: "/whitelabel-crypto-cards",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Crypto Credit Card",
      text:
        "We develop virtual credit cards to enable secure, convenient purchases online and offline with flexible repayment options and manage transactions securely.",
        isLink: true,
        linkUrl: "/whitelabel-crypto-cards ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Crypto Payment Gateway",
      text:
        "Our advanced crypto banking software supports a robust crypto payment gateway to offer secure and fast transactions, supporting multiple cryptocurrencies. ",
        isLink: true,
        linkUrl: "/cryptocurrency-payment-gateway-development  ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "P2P Transfers",
      text:
        "Our P2P crypto transfer service enables direct sending and receiving of digital assets, eliminating intermediaries and enhancing user privacy.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Scan & Pay",
      text:
        " Our blockchain-based crypto banking solutions render QR codes to scan & pay, allowing quick, secure payments with cryptocurrency anywhere. ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Cryptocurrency Trading Desk",
      text:
        "We craft scalable crypto solutions to ensure secure, efficient trading of digital assets, accessing real-time market data and advanced tools.",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/blockchain_poweredcrypto_banking/icons/process01.png",
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
      img: "/blockchain_poweredcrypto_banking/icons/process02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Planning Phase",
    },
    {
      img: "/blockchain_poweredcrypto_banking/icons/process03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Prototype Designing",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/blockchain_poweredcrypto_banking/icons/process06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "QA & Deployment",
    },
    {
      img: "/blockchain_poweredcrypto_banking/icons/process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Development ",
    },

    {
      img: "/blockchain_poweredcrypto_banking/icons/process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Prototype Approval  ",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/blockchain_poweredcrypto_banking/icons/process07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Post-launch support",
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
      heading: "Secure Wallet Integration ",
      text:
        "We integrate digital wallets to safeguard user assets with advanced encryption and authentication measures while storing and managing cryptocurrencies.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Multi-Currency Support  ",
      text:
        "Our crypto banking solutions support multiple cryptocurrencies, allowing users to manage various digital assets within a single platform. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Real-Time Transaction Monitoring ",
      text:
        "Our solution allows real-time transaction monitoring, providing users with instant updates on their transfers, which enhances transparency. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "P2P Transfer",
      text:
        "Our crypto developers introduce secure peer-to-peer transfer solutions, enabling users to send and receive cryptocurrencies directly at lower transaction costs.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "QR Code Functionality",
      text:
        "We integrate QR code payment features that allow users to make fast and secure transactions by simply scanning codes.",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "API Connectivity ",
      text:
        "Our crypto banking software enables easy integration with existing financial systems and other blockchain applications, enhancing interoperability and functionality.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Scalability ",
      text:
        "Our solutions are designed to scale efficiently, accommodating growing user bases and transaction volumes and ensuring consistent and reliable service. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Cryptographic Techniques ",
      text:
        "We employ advanced cryptographic methods to secure transactions and user data, protecting against cyber threats.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "KYC/AML Compliance Tools ",
      text:
        "Our crypto banking software development integrates KYC and AML compliance tools to augment the verification process. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Customizable User Roles",
      text:
        "The crypto digital banking solutions allow customized user roles and permissions, ensuring that access to sensitive features and data is controlled and managed.",
    },
  ];

  const AboutLbm = [
    {
      img: "/blockchain_poweredcrypto_banking/icons/why01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Unparalleled Expertise  ",
      text:
        "At LBM Solutions, our blockchain team offers exceptional crypto banking solutions for the crypto banking sector, ensuring a reliable financial experience.  ",
    },
    {
      img: "/blockchain_poweredcrypto_banking/icons/why02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Advanced Technology",
      text:
        "We utilize innovative technology to ensure transparent digital transactions, while our user-friendly platform helps manage your finances effortlessly. ",
    },
    {
      img: "/blockchain_poweredcrypto_banking/icons/why03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Security Solutions ",
      text:
        " Protect your digital assets with our top-tier security solutions. We deploy advanced encryption and fraud detection systems, ensuring your investments remain safe.",
    },
    {
      img: "/blockchain_poweredcrypto_banking/icons/why04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Customizable Options ",
      text:
        "We tailor your crypto banking experience with our versatile banking solutions that align perfectly with your financial goals and business requirements.",
    },
    {
      img: "/blockchain_poweredcrypto_banking/icons/why05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "User-Friendly Platform ",
      text:
        "Our blockchain developers provide adaptable platforms designed to simplify your crypto banking experience and manage your finances effortlessly.",
    },
    {
      img: "/blockchain_poweredcrypto_banking/icons/why06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Global Reach",
      text:
        "Expand your financial operations globally with our crypto banking solutions that support international transactions and multi-currency management.",
    },
    {
      img: "/blockchain_poweredcrypto_banking/icons/why07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Responsive Support ",
      text:
        "Our knowledgeable team quickly addresses your concerns, ensuring flexible operations to run your financial activities smoothly.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Elizabeth Turner",
      text:
        "We had an exceptional experience with LBM for their crypto banking development services. The team delivered a secure, scalable crypto banking platform tailored to our needs. ",
    },
    {
      clientName: "Mark Parker",
      text:
        "Partnering with LBM Solutions for our crypto banking solution was a game-changer. They analyzed our requirements and implemented a user-friendly crypto platform, which improved our business operations significantly.",
    },
    {
      clientName: "Katherine Walker",
      text:
        "LBM Solutions delivered intuitive and secure crypto software, and their team was incredibly responsive and knowledgeable throughout the process. Our customers appreciated the enhanced features of our crypto banking software. ",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Andrew Tyler Hall",
      text:
        "The professionalism, expertise, and commitment of LBM’s team to customer satisfaction set them apart from other software development companies. We would highly recommend them to anyone in need of custom software solutions. ",
    },
    {
      clientName: "Ella Ramirez ",
      text:
        " We had a great experience with their crypto banking solution. The team was professional, and the development process was transparent. They developed a secure and easy-to-use crypto project, which improved our customer satisfaction and operational efficiency",
    },
    {
      clientName: "Michael Phillips",
      text:
        "Working with LBM’s team on our crypto banking solution was a pleasure. The customer service was excellent, and the end product significantly enhanced our financial operations.",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is a crypto bank? ",
      body:
        "A crypto bank is an organization that provides regular banking services with the use of cryptocurrencies. It enables the secure, efficient management of digital assets alongside conventional currencies.",
    },
    {
      eventKey: "1",
      header: "What is neo-banking?",
      body:
        "Neo-banking is a digital-first banking approach that operates entirely online without physical branches. It offers streamlined financial services through mobile apps and websites for enhanced convenience and efficiency.",
    },
    {
      eventKey: "2",
      header: "Which crypto will be used by banks? ",
      body:
        "Banks often use stablecoins like USDC and USDT due to their stable value, along with cryptocurrencies like Bitcoin and Ethereum for their widespread acceptance and strong security features.",
    },
    {
      eventKey: "3",
      header: "What is the first crypto blockchain with banking solutions?",
      body:
        "Ripple (XRP) is the first cryptocurrency blockchain designed for banking solutions which facilitates fast cross-border payments and enhances the efficiency of financial transactions globally.",
    },
    {
      eventKey: "4",
      header: "How does crypto banking work?",
      body:
        "Crypto banking works by integrating traditional banking services with cryptocurrencies, which allows users to manage digital assets, perform transactions, and access financial services through secure, blockchain-based platforms.",
    },
  ];

  const sectionsData_a = [
    {
      heading:
        "Technological Stack Behind Our White Label Crypto Banking Software ",
      paraText:
        "We launch your crypto banking software with our customizable white label platform, offering comprehensive digital banking services with crypto that enhance customer experience and keep you ahead with next-gen features. ",
        imgSrc: "/blockchain_poweredcrypto_banking/teach_img_a.png",
      imgAlt: "tech stack for our white label crypto banking software",
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
                  textA="Blockchain-Powered "
                  clrtext="Crypto Banking Solutions "
                  textB=""
                  heading="banner_h"
                />
                <BannerText text="We provide complete crypto banking solutions for financial institutions and businesses, including banking accounts and credit/debit cards.  " />

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
                <img src="/blockchain_poweredcrypto_banking/banner.png" alt="crypto banking solutions powered by blockchain" className="img-fluid" />
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
                  textA="Maximizing"
                  clrtext="Returns with Our Profit-Focused"
                  textB="Crypto Banking Services"
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="At LBM Solutions, we offer top-tier crypto banking software services, ensuring secure digital asset management, streamlined payments, and advanced encryption. We help businesses seamlessly integrate banking with crypto."
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
                  textA="Our Experts'  "
                  clrtext="Approach to Crypto-Friendly"
                  textB="Banking Solutions"
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="Our cryptocurrency developers adopt a comprehensive strategy for crypto banking software development that provides security, scalability, and user-friendly design, enhancing financial operations and ensuring robust performance."
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
                textA="Why  "
                clrtext="Enterprises Require Crypto"
                textB="Digital Banking Solutions?"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0 "
              />

              <ParaText
                f_custome=""
                para_text="Our crypto banking services offer enhanced security, streamlined financial operations, blockchain integration, scalability, and user-friendly design, improving efficiency in managing digital assets."
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

      <section className="">
        <div className="container">
          <div className="row mb-4 mb-lg-5 ">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Boosting"
                  clrtext="Financial Services Efficiency through"
                  textB=" Crypto Banking Solutions"
                  heading="heading_h2 mb-0"
                />

                <div className="row mt-4">
                  <div className="col-md-6">
                    <ParaText f_custome="" para_text="As cryptocurrencies and contactless payments become more popular, the interest in launching crypto banks is growing. We provide ready-to-use digital banking platforms, including a comprehensive range of financial services, such as bank accounts, credit/debit cards, trading, and user-friendly payment options for managing digital assets and financial transactions. 
 " />
                  </div>
                  <div className="col-md-6">
                    <ParaText f_custome="" para_text=" We are a prestigious crypto development company consisting of a veteran team of crypto developers who have expertise in developing crypto friendly banking software solutions to enhance your business operations, improve customer satisfaction, and ensure a flawless onboarding experience for your users. Our innovative solutions facilitate peer-to-peer transfers, QR code payments, and integration with traditional banking systems." />
                  </div>
                </div>
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

      <section className="about_lbm">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Why Choose"
                  clrtext="LBM Solutions for Crypto"
                  textB="Banking Solutions?"
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="Being a pioneer in white-label crypto banking service providers, we have 200+ crypto developers to assist you in crypto banking software development and provide additional benefits to enhance your financial experience in the evolving crypto landscape.  "
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
              <ParaText para_text="Over a decade, our clients have admired us for our crypto banking development services for their cutting-edge technology solutions and user-friendly interfaces. They appreciate our expertise in creating efficient crypto banking platforms that enhance financial operations and customer satisfaction" />
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
