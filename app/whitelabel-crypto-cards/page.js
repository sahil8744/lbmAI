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
import TabSmartcontract from "../components/TabSmartcontract";

const CryptoTokenDevelopement = () => {
  const bottomSectionRef = useRef(null);

  const sectionsData = [
    {
      heading:
        "Exclusive Crypto Debit And Credit Cards Authorized by Visa, Mastercard",
      paraText:
        "Our crypto developers create versatile crypto cards that are officially sanctioned by leading global payment networks. Our crypto cards ensure compatibility and acceptance worldwide. ",
      imgSrc: "/crypto_card_page/teach_img.webp",
      imgAlt: "visa, mastercard authorize crypto cards",
    },
  ];

  const CardData = [
    {
      img: "cryptcard",
      heading_h3: "Crypto Credit Cards",
      text:
        " Our crypto banking solutions offer crypto friendly credit cards to enhance user experience for daily transactions. Our credit cards allow you to buy crypto and prioritize the convenience of traditional cards, expanding your financial options in the digital currency market.  ",
    },
    {
      img: "cryptodevit",
      heading_h3: "Crypto Debit Cards ",
      text:
        "We specialize in creating custom crypto debit card solutions, enabling the absolute conversion of cryptocurrencies into fiat currencies for transactions. Our crypto debit cards integrate payment gateways and blockchain technology, ensuring efficient and secure experiences for cardholders worldwide.",
    },
  ];

  const sectionsData_a = [
    {
      heading:
        "Personalized Mobile App for Your Brand Featuring Crypto Card Options",
      paraText:
        "We render bespoke mobile app development solutions that align your brand, integrating crypto card options for flawless cryptocurrency-to-fiat transactions. Our solutions enhance user experiences, enabling them to manage their crypto assets and make transactions.",
      imgSrc: "/crypto_card_page/app.png",
      imgAlt: "custom  mobile app with featured crypto card options",
    },
  ];

  const BasicFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Bank Accounts ",
      text:
        " Our solutions enable users to link existing bank accounts with crypto cards, ensuring smooth fund transfer between accounts.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Multi-Currency Support ",
      text:
        "Our credit cards let you store and transact multiple cryptocurrencies and fiat currencies, offering flexibility and convenience.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Cashback Programs",
      text:
        "We introduce reward points and cashback features in our crypto cards for transactions made with that card, enhancing user engagement. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Digital Wallets",
      text:
        "Our crypto debit card development allows coherent integration with popular digital wallets, managing crypto assets and transactions from a single platform.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-md-4",
      p_opacity: "opacity-100",
      heading: "Transaction History",
      text:
        "Our crypto debit and credit cards provide detailed information on each transaction, conversion rates, and associated fees. ",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "API Connectivity  ",
      text:
        " We develop robust APIs that allow the crypto card to connect with cryptocurrency exchanges, digital wallets, and other financial services.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Tokenization",
      text:
        "Our white label crypto card solutions protect sensitive information, which reduces the risk of data breaches, enhancing the overall transaction security.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Encryption Protocols",
      text:
        " We apply advanced security protocols like SSL/TLS to protect data, ensuring privacy and safeguarding against cyber threats.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Payment Processing ",
      text:
        "Our crypto debit cards enable instant transaction processing and confirmation for reliable user experience in online and point-of-sale purchases. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "User Authentication",
      text:
        "We deploy multi-factor authorization to verify user identity and control system access, enhancing security.",
    },
  ];

  const AboutLbm = [
    {
      img: "/crypto_card_page/icons/why01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Expertise  ",
      text:
        "We leverage 10 years of experience to render extensive crypto card development solutions, integrating various card types into our platform.",
    },
    {
      img: "/crypto_card_page/icons/why02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Dashboard Integration ",
      text:
        "Our crypto card development solutions deploy a dashboard to provide users with an overview of their card usage, transactions, and balances in real time.",
    },
    {
      img: "/crypto_card_page/icons/why03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Different Card Integration",
      text:
        "Our solutions help to merge various types of cards, including virtual and prepaid cards, giving users flexibility to manage their finances.",
    },
    {
      img: "/crypto_card_page/icons/why04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Aggregator of Issuers",
      text:
        "Our crypto cards serve as an aggregator of card issuers, offering users access to several card options from different issuers.",
    },
    {
      img: "/crypto_card_page/icons/why05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Customization Options",
      text:
        " Our crypto cards support customizable attributes, which enable users to personalize their cards with unique interfaces, enhancing their experience.",
    },
    {
      img: "/crypto_card_page/icons/why06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Scalability",
      text:
        "Our crypto debit card solutions can handle the transactions and user demands that increase with your business growth.",
    },
    {
      img: "/crypto_card_page/icons/why07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: " Compliance ",
      text:
        " We ensure that our crypto debit and credit card solutions comply with relevant regulations and standards, providing a safe and legal platform for transactions.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Elaine Simmons",
      text:
        " I am greatly impressed with LBM's crypto card development services. Their attention to detail and integration exceeded my expectations. Their team was responsive and delivered a high-quality crypto card that met all our requirements.  ",
    },
    {
      clientName: "Abigail Atkins",
      text:
        "We approached LBM for crypto banking solutions. Its team demonstrated exceptional expertise and professionalism throughout the process. The crypto card's performance was flawless, and their support team was always available to help us.",
    },
    {
      clientName: "Stella Marie Perry",
      text:
        "We had an outstanding experience with the team at LBM Solutions. They delivered our crypto debit card project on time, within budget, and with impeccable quality. Their team's proficiency was evident in the final product, which worked successfully. ",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Claire Richards",
      text:
        "The professionalism and expertise of LBM’s team were unmatched. They provided exceptional crypto credit card solutions as per our specifications. Their ongoing support was also invaluable.",
    },
    {
      clientName: "Satha Fox",
      text:
        " LBM offered us a comprehensive service to build our crypto credit card. Their team was highly skilled and provided unique functionality and security features to our crypto card. We were very pleased with the results.",
    },
    {
      clientName: "Katherine Burke",
      text:
        "Choosing LBM for our crypto credit card development was the best decision we made. Their team was knowledgeable about developing our crypto project. The card performed flawlessly, and their customer service was excellent.",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is a crypto card?",
      body:
        "A payment card utilized to spend cryptocurrency, like traditional money, is called a crypto card. It bridges the gap between digital assets and traditional financial systems, offering convenience and flexibility.",
    },
    {
      eventKey: "1",
      header: "How to make a crypto card?",
      body:
        "To make a crypto card, integrate a digital wallet with a card issuer, ensure compliance with regulations, develop secure transaction protocols, and establish partnerships with payment networks for seamless cryptocurrency-to-fiat conversion. ",
    },
    {
      eventKey: "2",
      header: "How can I customize the white label cards for my brand?",
      body:
        "Customize white label cards for your brand by adding your logo, selecting card designs, configuring user interfaces, integrating specific features, and tailoring the user experience to align with your brand's identity.",
    },
    {
      eventKey: "3",
      header: "How does the custom mobile app enhance the user experience?",
      body:
        "A custom mobile app enhances user experience by providing a personalized interface, seamless navigation, real-time notifications, secure transactions, and tailored features, ensuring convenience and engagement tailored to users' needs and preferences.",
    },
    {
      eventKey: "4",
      header: "Is it legal to buy crypto using a credit card?",
      body:
        "Yes, it is legal. One can purchase crypto using a credit card, but it depends on local regulations and the policies of the credit card issuer and cryptocurrency exchange platform.",
    },
  ];



  const CardProviders=[
    {
      img:"g_pay"
    },
    {
      img:"samsunpay"
    },
    {
      img:"maseter_card"
    },
    {
      img:"visa"
    },
    {
      img:"apple_pay"
    },
  ]

  return (
    <>
      <section className="banner ">
        <div className="container">
          <div className="row flex-column-reverse flex-md-row align-items-center">
            <div className="col-md-7 mt-4 mt-md-0">
              <div className="inner_text">
                <Heading
                  textA="White Label   "
                  clrtext="Crypto Card Solution "
                  textB=""
                  heading="banner_h"
                />
                <BannerText text="We offer scalable crypto debit and credit card development solutions, empowering users to access their digital assets worldwide." />

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
                  src="/crypto_card_page/banner.png"
                  alt="white label crypto card solution"
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
                  textA="Find the "
                  clrtext="  Perfect Cryptocurrency Card to Suit Your"
                  textB="Payment Requirements"
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="Our white label crypto card solutions render ideal cryptocurrency cards tailored to your payment needs. Our cards offer convenience, security, and global acceptance, empowering you to integrate digital assets into your daily transactions."
                />
              </div>
            </div>
            <div className="row mt-4">
              {CardData.map((val, i) => {
                return (
                  <div className="col-sm-6 col-lg-6 mb-4" key={i}>
                    <div
                      className="card_bx h-100 rounded-3 "
                      style={{
                        backgroundColor: "var(--normal_sky)",
                        padding: "20px",
                      }}
                    >
                      <div className="">
          
                        <img
                          src={`/crypto_card_page/icons/${val.img}.png`}
                          alt="banner"
                          className="img-fluid"
                        />
                      </div>
                      <div className="">
                        <h3>{val.heading_h3}</h3>
                        <p className=" position-relative m-0">{val.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      <section className="wallet_features">
        <div className="container">
          <div className="row  ">
            <div className="col-12 ">
              <Heading_h2
                textA="How White  "
                clrtext="Label Crypto Card Solution Ensures"
                textB=" Secure Transactions? "
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
              />

              <ParaText
                f_custome=""
                para_text="Our developers are proficient in crypto card development, offering cutting-edge solutions for secure and convenient transactions. Our crypto debit card services bridge the gap between digital and physical payments, enhancing financial accessibility and usability."
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

      <section className="instantly_link">
        <div className="container">
          <div className="row  ">
            <div className="col-12 ">
              <Heading_h2
                textA="Instantly Link Your Crypto Cards to"
                clrtext=" Multiple Payment and Card Providers"
                textB=""
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
              />

              <ParaText
                f_custome=""
                para_text="Our crypto banking solutions allow users to easily link their crypto cards to various payment and card providers, facilitating consistent transactions across different platforms. It enhances user convenience, providing users with more options for managing their finances."
              />
            </div>

            <div className="row row-cols-lg-5 row-cols-3  bg-black  p-4 align-items-center mt-4  set_bg justify-content-center">
              {CardProviders.map((val, i) => {
                return (
                  <div className="col my-3 my-lg-0 " key={i}>
                    <div className="brands top-0 z-0">
                      <img src={`/crypto_card_page/icons/${val.img}.png`} alt="banner" className="img-fluid"/>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="mobile_app">
        {sectionsData_a.map((section, index) => (
          <TechSection
            key={index}
            heading={section.heading}
            paraText={section.paraText}
            imgSrc={section.imgSrc}
            imgAlt={section.imgAlt}
          />
        ))}
      </div>
      
      <section className="about_lbm">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="What Makes LBM’s "
                  clrtext="White Label Crypto Card Solution Stand Out?"
                  textB=" "
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="As an outstanding crypto development company in the USA, we boast a team of 200+ veteran crypto developers dedicated to providing top-notch crypto card solutions. Our team provides efficient crypto credit and debit cards, making us a trusted choice in the industry.  "
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
              <ParaText para_text="We are proud to offer tailored crypto card solutions that enhance several business operations, ensuring secure transactions. Explore how our services have transformed digital payments for businesses,enhancing their financial operations and user experiences" />
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
