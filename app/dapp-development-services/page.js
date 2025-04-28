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
        "Secure, Scalable dApp Development to Power Your Business Transformation",
      paraText1:
        "As an eminent dApp development company in USA, we have a team of 200+ dApp developers to shape your ideas into customizable Web3 applications, leveraging blockchain technology to deliver smart contracts, NFT marketplaces, and",
        Link_href:"/metaverse-development-company",
         Link_data:" metaverse worlds.",
        imgSrc: "/dapp_page/teach_img.webp",
      imgAlt: "USA based dapp development company",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "dApp Development & Integration",
      text:
        "  We craft perfect decentralized applications with integration support to give businesses a competitive edge in smart contract development.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "dApp Consulting & Maintenance",
      text:
        "Avail effective solutions with ongoing support and updates, ensuring your DApp adapts to market trends and operates seamlessly.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "DOA development",
      text:
        "We excel in DAO development, offering tailored",
        LinkHref : "/blockchain-development-company",
        LinkData:"  blockchain solutions,",
        text1: "to reform traditional business models with enhanced efficiency and integration.",
        isLink: true,
        linkUrl: "/dao-development-company",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "DeFi Application Development",
      text:
        "We",
        LinkHref : "/defi-development-company",
        LinkData:"develop scalable DeFi",
        text1: "applications, enhancing business growth and user benefits by eliminating intermediaries.",
        isLink: true,
        linkUrl: "/defi-development-company",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Tokenization Platform ",
      text:
        "Our dApp developers provide asset",
        LinkHref : "/crypto-token-development-company",
        LinkData:" tokenization,",
        text1: "crafting personalized solutions to enhance liquidity and market accessibility for diverse assets.",
      },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Smart Contract Development",
      text:
        "We offer smart contract development across Ethereum, Polkadot, and Polygon, customizing contracts for diverse industries.",
        isLink: true,
        linkUrl: "/smart-contract-development-company",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/dapp_page/icons/process01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Ideation",
    },
    {
      img: "/dapp_page/icons/process02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Create a Roadmap",
    },
    {
      img: "/dapp_page/icons/process03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Proof of Concept",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/dapp_page/icons/process06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Testing & Deployment",
    },

    {
      img: "/dapp_page/icons/process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "dApp development ",
    },
 
    {
      img: "/dapp_page/icons/process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Technical Design ",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/dapp_page/icons/process07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Upgrades & after-sale support",
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

  const teachnolgy = [
    {
      img: "/dapp_page/icons/coin01.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-12 col-sm-6 col-lg-3 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Ethereum ",
      text:"An open-source decentralized public pl with the functionality of a smart contract."
    },
    {
      img: "/dapp_page/icons/coin02.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-12 col-sm-6 col-lg-3 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Hyperledger",
      text:"An open-source project of blockchain App platforms and related tools."
    },
    {
      img: "/dapp_page/icons/coin03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-12 col-sm-6 col-lg-3 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Corda",
      text:"An open-source blockchain dApp platfor building cross-industry apps."
    },
    {
      img: "/dapp_page/icons/coin04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-12 col-sm-6 col-lg-3 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Tezos",
      text:"An open-source App platform for decentralized applications and assets."
    },
  ];

  const BasicFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Enhanced Security",
      text:
        "Reduced risk of single points of failure and attacks, as data is distributed across a network of nodes.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Cost Efficiency",
      text:
        "Our dApp development services automate processes and transactions, saving time and reducing administrative costs.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "User Control ",
      text:
        " Users have control over their data and can choose what to share and with whom.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Efficiency and Speed ",
      text:
        "The smart contracts development in dAPP streamlines and automates workflows, reducing the need for manual intervention.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Decentralized Governance",
      text:
        "Our solutions enable community participation in decision-making processes through decentralized governance models.",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Smart Contracts",
      text:
        "Our smart contract development solutions automate transactions and enforce the rules of dApp, eradicating the need for mediators. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Consensus Mechanisms ",
      text:
        "dApps use different consensus methods, like PoW, PoS, and DPoS, to validate transactions and transactions and reliability of the decentralized network. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Cryptographic Tokens",
      text:
        "Our dApps incorporate their tokens or cryptocurrencies, which are used for transactions, governance, or incentivizing user participation.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Peer-to-Peer (P2P) Network",
      text:
        "Being operated on a P2P network, our dApps allow the exchange of data and assets directly among users without any centralized server, enhancing privacy.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Frontend Frameworks",
      text:
        "We develop the frontend of dApp using popular web development frameworks like React, Angular, or Vue.js, similar to traditional apps.",
    },
  ];

  const Crafting = [
    {
      img: "/dapp_page/icons/resoures01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Finance ",
      text:
        "Our dApps revolutionize traditional finance, enabling services like lending, borrowing, and trading without the need for mediators.",
    },
    {
      img: "/dapp_page/icons/resoures02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Supply Chain Managemen  ",
      text:
        " Ensure the authenticity of goods by tracking their journey from origin to consumer.",
    },
    {
      img: "/dapp_page/icons/resoures03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Gaming ",
      text:
        "Our services provide games that run on a decentralized network, which eliminates downtime and server failures",
    },
    {
      img: "/dapp_page/icons/resoures04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Retail",
      text:
        "Our dApp developers create decentralized loyalty programs where tokens can be used across multiple platforms.",
    },
    {
      img: "/dapp_page/icons/resoures05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Automotive",
      text:
        "dApps allow tracking the history and maintenance of vehicles securely, which ensures transparency and trust in vehicle transactions.",
    },
    {
      img: "/dapp_page/icons/resoures06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Legal ",
      text:
        "The smart contracts are utilized in dAPP for executing and managing legal agreements with minimal need for legal personnel.",
    },
    {
      img: "/dapp_page/icons/resoures07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Tourism and Hospitality ",
      text:
        "We develop dApps for booking travel and lodgings without any centralized platforms, reduce fees, and maximize trust via reviews and transactions.",
    },
    {
      img: "/dapp_page/icons/resoures08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Non-Profit Organizations ",
      text:
        "dApps ensure that donations are traceable and that funds are used as intended, increasing donor confidence. ",
    },
    {
      img: "/dapp_page/icons/resoures09.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander  p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Human Resources",
      text:
        "Develop dApp platforms where employers and employees can connect directly, and employment contracts can be securely managed via smart contracts.",
    },
    {
      img: "/dapp_page/icons/resoures10.png",
      svg_cls: "d-none",
      add_class: " bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Art and Design",
      text:
        "with our dApps solutions, artists can deal directly with amassers, providing better revenue to entertainers.",
    },
    {
      img: "/dapp_page/icons/resoures11.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Education",
      text:
        " Decentralized platforms enable direct interaction between students and educators without intermediaries, enhancing learning opportunities.",
    },
  ];

  const AboutLbm = [
    {
      img: "/dapp_page/icons/why01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Dedicated Team  ",
      text:
        " We have a professional dApp developers’ team to provide top-tier, customized solutions according to unique demands of each client. ",
    },
    {
      img: "/dapp_page/icons/why02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Project-based Approach",
      text:
        "We use a project-oriented approach to enhance client collaboration and meet specific objectives with a team of dedicated dApp developers.",
    },
    {
      img: "/dapp_page/icons/why03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Customized Solutions",
      text:
        " Our team excels at tailoring dApp development solutions to meet the demands of every client.",
    },
    {
      img: "/dapp_page/icons/why04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Security First Solutions",
      text:
        "Prioritizing security in dApp development process, we implement robust measures to protect your data and assets.",
    },
    {
      img: "/dapp_page/icons/why05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Proven Track Record",
      text:
        "We have delivered several successful projects and proficiency in delivering exceptional results.",
    },
    {
      img: "/dapp_page/icons/why06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Scalability",
      text:
        " Our dApp solutions are designed to scale with your business, ensuring they grow and adapt as your needs evolve.",
    },
    {
      img: "/dapp_page/icons/why07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Complete Support",
      text:
        "Our customer support team is available all day to ensure your dApps run smoothly and efficiently without any downtime.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Christina Simmons",
      text:
        "The team at LBM Solutions really got what we wanted and gave us a perfect dApp. They were super professional and really knew their stuff. I’d totally recommend them for anyone looking to do cool stuff with blockchain.",
    },
    {
      clientName: "Richard Ramirez",
      text:
        " We were told about LBM Solutions by a friend for our dApp project, and it turned out to be the best choice we could've made. Their team not only made a great product but also gave us smart ideas to make it even better.",
    },
    {
      clientName: "Holly Stewart",
      text:
        "The innovative solutions and attention of LBM’s team to detail surpassed our expectations. Their responsiveness and expertise made the entire process smooth and enjoyable. We couldn't be happier with the results!",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Phillip Barnes",
      text:
        "Working with LBM on our dApp project was like having friends help us out. They know all about blockchain and used that knowledge to make everything smooth. It felt like they really cared about making our project a success. ",
    },
    {
      clientName: "Alicia Foster ",
      text:
        "These guys were super professional, but they also had a friendly touch that made working with them a breeze. They totally got what we wanted and made it happen without any fuss. It felt like dealing with friends rather than a big company. ",
    },
    {
      clientName: "Dennis Coleman",
      text:
        "Exceptional service! LBM Solutions delivered a flawless dApp solution, understanding our needs. Its team of developers was professional and their expertise was admirable. I recommend this company for innovative blockchain projects.",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is dApp Development?",
      body:
        "dApp development refers to the creation of decentralized applications (dApps). These applications run on a decentralized network instead of on a single entity or central authority. dApps provide transparency and resistance to control.",
    },
    {
      eventKey: "1",
      header: " What are the benefits of dApps?",
      body:
        "dApps are operated on decentralized networks to offer enhanced security, transparency, and user control. They eliminate single points of failure and data manipulation. Their open-source code provides collaboration, innovation, and trust among users.",
    },
    {
      eventKey: "2",
      header: " What is required to build a dApp?",
      body:
        "Building a dApp requires proficiency in blockchain technology, programming languages like Solidity, smart contract development, knowledge of decentralized networks, and familiarity with frameworks like Ethereum or EOSIO.",
    },
    {
      eventKey: "3",
      header: "How much does it cost to build a dApp?",
      body:
        "The cost to develop dApp lies in $60,000-$80,000. Moreover, the pricing can be changed according to complexity, features, development team rates, and platform used. ",
    },
    {
      eventKey: "4",
      header: "How much time does it take to devise a dApp?",
      body:
        "Four to nine months are required to develop a simple dApp. However, complicated and customized dApp can take a year or more.",
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
                  textA="  "
                  clrtext=" Dapp"
                  textB="Development Company"
                  heading="banner_h"
                />
                <BannerText text="Build scalable" 
                 LinkHref={"/mobile-app-development-services"} LinkData={"decentralized applications"}
                 textData={"to empower your financial freedom and propel your business into a decentralized market."} />

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
                <img src="/dapp_page/banner.png" alt="USA based dapp development company" className="img-fluid" />
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
          paraText1={section.paraText1} Link_href={section.Link_href} Link_data={section.Link_data}
        />
      ))}

      <section className="crypt_wallet" ref={bottomSectionRef}>
        <div className="container">
          <div className="row ">
            <div className="col-sm-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Our "
                  clrtext="dApp Development Services"
                  textB=""
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="Our veteran dApp developers harness their deep development skills to craft innovative and impactful business solutions. We offer diverse dApp development services, from initial creation to expert consultancy and dedicated support."
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
                  textA="Step-by-Step"
                  clrtext="dApp Development Process"
                  textB=""
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="Leveraging more than 10 years of experience, we specialize in developing scalable and reliable decentralized applications, fine-tuned to align with evolving blockchain industry standards."
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
                textA="Enterprises"
                clrtext="Benefit of Our"
                textB="Decentralized Application"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
              />

              <ParaText
                f_custome=""
                para_text="Our dApps development solutions boast features to surpass traditional applications and offer enhanced safety, transparency, reduced downtime, and no central control, making them ideal for modern digital solutions."
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

      <section className="  ">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="inner_text">
                <Heading_h2
                  textA="dAppp"
                  clrtext=" Development Platforms,"
                  textB="We Work"
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="We provide tailored dApp development solutions across several platforms, ensuring your specific requirements for security, reliability and scalability are met, enhancing your business's technological infrastructure."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="currencyes bg-black">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Top dApp "
                  clrtext="Development Platforms"
                  textB="We Work On "
                  heading="heading_h2 text-white"
                />

                <ParaText
                  f_custome="text-white"
                  para_text="With our defi dApp development services, we build dApp solutions on different platforms that meet your specific needs of security, reliability, and scalability."
                />
              </div>
            </div>
            <div className="row text-center jusify-content-center">
              <Card CardData={teachnolgy} />
            </div>

            
          </div>
        </div>
      </section>

      <section className="crafting">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Different "
                  clrtext="Industries Application "
                  textB="of dApps"
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Our services cater to diverse industries leveraging the unique capabilities of blockchain technology. We provide customized dApp development solutions for Fintech and beyond, according to your business needs."
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
                  textA="Why choose "
                  clrtext="LBM Solutions as your "
                  textB="dApp development company?"
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="At LBM Solutions, our expert team of dApp developers crafts customized, industry-leading dApp development solutions, enhancing security, reducing costs, and boosting efficiency across various sectors."
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
              <ParaText para_text="At LBM Solutions, we take immense pride in our dedication to excellence in dApp development. But don't just take our word for it. You can hear directly from the clients who have experienced the innovation, reliability, and expertise our team in dApp development." />
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
