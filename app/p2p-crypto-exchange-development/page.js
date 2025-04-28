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

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Expert Team ",
      text:
        " Our seasoned developers excel in the current blockchain and P2P exchange development technologies, ensuring your platform is built with scalable and robust architecture.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "End-to-end Solutions",
      text:
        "Our P2P crypto exchange development offers end-to-end solutions, handling everything from initial concept design to final deployment. ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Customized Solutions",
      text:
        "Our crypto exchange developers customize every aspect of your P2P crypto exchange to meet your business demands.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Regulatory Expertise",
      text:
        " Our team confirms that your exchange adheres strictly to all relevant laws and regulations, minimizing risk and fostering trust among your users.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Innovative Problem Solving",
      text:
        " Our team is adept at solving complex problems with innovative peer-to-peer exchange solutions.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Advanced Security",
      text:
        " Our platforms are built with the highest security protocols to protect your users and their transactions.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Aftermath Support",
      text:
        "We confirm your P2P crypto exchange operates smoothly after its launch and provides optimal performance while adapting to evolving market demands.",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/p2p_page/icons/process01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Conceptualization  ",
    },
    {
      img: "/p2p_page/icons/process02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Platform Design ",
    },
    {
      img: "/p2p_page/icons/process03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "backend Development ",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/p2p_page/icons/process06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Regulatory Compliance ",
    },
    {
      img: "/p2p_page/icons/process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Testing and QA",
    },

    {
      img: "/p2p_page/icons/process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Coin/Token Listing",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/p2p_page/icons/process07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Launch and maintenance ",
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
      heading: "Matching Engine  ",
      text:
        "P2P exchange development incorporates an effective algorithm to match buy and sell orders efficiently, ensuring smooth transaction flows",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Multi-Currency Support ",
      text:
        "Our peer-to-peer exchange software supports a wide range of cryptocurrencies and fiat currencies, broadening the market reach and user base. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "User Verification System",
      text:
        "We implement KYC (Know Your Customer) and AML (Anti-Money Laundering) compliance tools to ensure platform integrity and legal compliance.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Payment Gateway Integration",
      text:
        "Our solutions provide multiple payment options, including bank transfers, credit cards, and digital wallets, enhancing user convenience.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Security Features ",
      text:
        "  We implement robust security measures, such as SSL encryption and continuous security audits, to protect user data and funds.",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Decentralized Architecture",
      text:
        " We utilize a decentralized network model which eradicates single points of failure and enhances security.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Peer-to-Peer Network ",
      text:
        " Our solutions facilitate direct connections between users for trading without intermediaries, reducing costs and increasing privacy. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Blockchain Integration ",
      text:
        "Blockchain technology is employed in peer-to-peer exchange for transparent and immutable record-keeping, ensuring trust and integrity in transactions.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Cryptographic Security",
      text:
        " Our peer to peer exchange focuses on the latest cryptographic methods, which secure transactions and protect user data against cyber threats.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Scalability Solutions",
      text:
        " We design P2P exchange with scalability to handle growing numbers of users and transactions without degradation in performance.",
    },
  ];

  const teachnolgy = [
    {
      img: "/p2p_page/icons/coin05.png",
      svg_cls: "d-none",
      add_class: "h-100",
      columns: "col-12 col-sm-6 col-lg-4 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3 ",
      heading: "Coinbase Clone Script ",
      text:
        "We provide a custom Coinbase clone script including themes, designs, and features to revolutionize crypto exchange. Our customized clone script deploys Blockchain-enabled security to ensure safe asset management and seamless transactions.",
      p_opacity: "mt-2 pb-lg-4",
    },

    {
      img: "/p2p_page/icons/coin03.png",
      svg_cls: "d-none",
      add_class: "h-100",
      columns: "col-12 col-sm-6 col-lg-4 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Wazirx Clone Script ",
      text:
        "We built an exchange platform like WazirX with our WazirX clone script, featuring enhanced security and APIs for a seamless, customizable cryptocurrency exchange experience. Our clone script deploys and scales your trading platform, maintaining your unique brand identity. ",
      p_opacity: "mt-2",
    },
    {
      img: "/p2p_page/icons/coin04.png",
      svg_cls: "d-none",
      add_class: "h-100",
      columns: "col-12 col-sm-6 col-lg-4 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Binance p2p Clone Script ",
      text:
        "Our developers help to launch a custom crypto exchange with our Binance P2P clone script. We tailor unique features to elevate user engagement and retention on your platform for the robust functionality of Binance.",
      p_opacity: "mt-2",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "James Carter Thompson",
      text:
        "We were looking for crypto exchange development. One of our friends suggested LBM Solutions to us. The dedication and detail they brought to our project were remarkable. Their solutions are not only innovative but also perfectly tailored to our needs.",
    },
    {
      clientName: "Emma Johnson",
      text:
        "The most admirable thing at LBM Solutions was the commitment of its team to our vision. They delivered a scalable and secure P2P exchange that has become a cornerstone of our digital strategy.",
    },
    {
      clientName: "Michael Wilson",
      text:
        "The LBM’s team didn’t just deliver; they redefined what's possible in P2P crypto exchange development. Their innovative approach unlocked new revenue streams and enhanced our market presence. ",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Olivia Anderson",
      text:
        "The ability of crypto developers at LBM to tackle complex challenges and deliver straightforward solutions was matchless. Our platform's robustness and user-friendly design are directly attributable to their expertise.",
    },
    {
      clientName: " John Harris",
      text:
        "The technical expertise of LBM was outstanding. They tackled complex challenges efficiently and provided a reliable platform that has not only met but exceeded our expectations. ",
    },
    {
      clientName: "Sophia Martin",
      text:
        "The level of customization obtained from LBM, combined with their in-depth understanding of blockchain technology, made them the perfect partner. They delivered a highly efficient platform, which significantly boosted our market presence.",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is P2P crypto exchange?  ",
      body:
        "A P2P crypto exchange assists users in trading cryptocurrencies through smart contracts or other trust mechanisms for security. There is no need for any intermediary.",
    },
    {
      eventKey: "1",
      header: "How does a P2P exchange work?  ",
      body:
        "In a P2P exchange, buyers and sellers match their trade orders directly. Transactions are secured via escrow or smart contracts until both parties confirm the exchange is complete. ",
    },
    {
      eventKey: "2",
      header: "What is the P2P crypto exchange development cost? ",
      body:
        "The average cost to develop a P2P crypto exchange ranges between $25000 and $35000, depending on features, security measures, and the chosen blockchain technology. ",
    },
    {
      eventKey: "3",
      header: "What is the future of P2P trading?",
      body:
        "P2P trading is dignified for growth, driven by its decentralized framework, improved security features, and reduced costs. Advances in blockchain technology and smart contracts are set to boost its global efficiency and reach.",
    },
    {
      eventKey: "4",
      header: "What is the difference between P2P and crypto exchange? ",
      body:
        "P2P exchanges allow direct transactions between users without intermediaries, while traditional crypto exchanges use a central authority to facilitate trades, often offering more liquidity and faster trading capabilities.",
    },
  ];

  const sectionsData = [
    {
      heading: "Hire Our Expert Crypto Exchange Developers Today!",
      paraText:
        "Being an eminent P2P exchange development company, we have a team of skilled developers who craft versatile, multichain-capable Peer-to-Peer crypto exchange software, that enables seamless trading across.",
      imgSrc: "/p2p_page/teach_img.png",
      imgAlt: "hire expert crypto exchange developers from LBM",
    },
  ];

  const sectionsData_a = [
    {
      heading:
        "The Core Technology Stack for Developing Best P2P Crypto Exchange ",
      paraText:
        "We utilize the latest technology stack to provide the best peer-to-peer crypto exchange development with advanced security protocols to ensure a scalable, secure, and responsive trading platform.",
      imgSrc: "/p2p_page/teach_img01.png",
      imgAlt: "technical architecture for cryptocurrency exchange creation",
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
                  textA="P2P Crypto "
                  clrtext="Exchange Development Company"
                  textB="  "
                  heading="banner_h"
                />
                <BannerText text="As a renowned P2P crypto exchange development company, we provide a decentralized platform to exchange cryptocurrencies. " />

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
                  src="/p2p_page/banner.png"
                  alt="p2p crypto exchange development provider "
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

      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Heading_h2
                textA="Building a Secure and  "
                clrtext="Scalable Peer-to-Peer "
                textB="Crypto Exchange"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0 "
              />
            </div>
          </div>
          <div className="row justify-content-between mt-lg-5">
            <div className="col-sm-8 col-md-6 ">
              <img
                src="/p2p_page/peer-to-peer.png"
                alt="secure p2p crypto exchange platform development "
                className="img-fluid"
              />
            </div>
            <div className=" col-md-6 ">
              <div className="inner_text">
                <ParaText
                  f_custome=""
                  para_text="Our P2P crypto exchange team assists you in launching a sophisticated peer-to-peer crypto trading software tailored to your business needs and market trends. Our best P2P crypto exchange development strategies and blockchain developers utilize absolute software to help you deploy an innovative platform in the competitive crypto trading landscape."
                />
                <ParaText
                  f_custome=""
                  para_text="Our services include user interface design, advanced matching algorithms, robust security features, and regulatory compliance assistance. We also integrate blockchain technology for decentralized ledger functionality and smart contract-based platform for secure and transparent trades. Our goal is to help you launch a scalable peer to peer crypto exchange platform that not only meets current market needs but also anticipates future trends, ensuring long-term success in the crypto exchange domain."
                />
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
                  textA="Our  "
                  clrtext="P2P Crypto Exchange "
                  textB="Development Process"
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="Our consistent teams adapt P2P crypto exchange development processes according to your goals, creating a reliable peer-to-peer exchange. With our thorough skills, we create a straightforward plan for developing your peer-to-peer exchange platform."
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
              <Heading
                textA="The Value  "
                clrtext="Our P2P Crypto Exchange Software"
                textB=" Brings to Businesses "
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0 "
              />

              <ParaText
                f_custome=""
                para_text="Our solutions provide a variety of cryptocurrencies and a decentralized environment. An advantage of using a peer-to-peer (P2P) cryptocurrency exchange is that it ensures secure and efficient trading experiences."
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
                  textA="Find Your Ideal "
                  clrtext=" P2P Crypto Exchange"
                  textB="Clone Script with Us"
                  heading="heading_h2 text-white"
                />

                <ParaText
                  f_custome="text-white"
                  para_text="We develop reliable peer-to-peer crypto exchange scripts based on leading blockchain platforms. Our customizable solutions facilitate direct peer to peer trading, significantly enhancing user experiences by removing intermediaries from the process.  "
                />
              </div>
            </div>
          </div>
          <div className="row text-center jusify-content-center">
            <Card CardData={teachnolgy} />
          </div>
        </div>
      </section>

      <section className="crypt_wallet" ref={bottomSectionRef}>
        <div className="container">
          <div className="row ">
            <div className="col-sm-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Why Select Us as Your"
                  clrtext="P2P Crypto Exchange Development"
                  textB="Company?"
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="Having 10+ years of expertise, LBM Solutions is a prominent P2P crypto exchange development company. We provide outstanding P2P crypto exchange software development services customized to evolving market dynamics."
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
              <ParaText para_text="With over a decade of specialized experience, we've become leaders in P2P crypto exchange development, consistently delivering innovative cryptocurrency solutions. Dive into our client testimonials to see how our expertise and dedication have propelled their projects to success." />
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
                heading="Heading_h2 text-white"
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
