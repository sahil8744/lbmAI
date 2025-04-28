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

const MetaVerseDevelopment = () => {
  const bottomSectionRef = useRef(null);

  const sectionsData = [
    {
      heading: "Hire Metaverse Developer",
      paraText1:
        "Being a prominent metaverse",
        paraText:"in USA, our veteran metaverse developers offer a one-stop solution to turn your digital dreams into realities. We render complete solutions to reshape the digital setting. ", 
        Link_href:"/mobile-app-development-services",
         Link_data:"app development company",
        imgSrc: "/cryptwalletImg/teach_img.png",
      imgAlt: "hire our meatverse developers",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Metaverse Game Development Services",
      text:
        "Attain a smooth and error-free evolution into the metaverse gaming world with our top-notch metaverse game development solutions.",
      isLink: true,
      linkUrl: "/metaverse-game-development",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Metaverse Avatar Development Services ",
      text:
        "Our solutions allow users to be expressive and interact with others in a virtual world through avatars.",
      isLink: true,
      linkUrl: "/metaverse-avatar-development",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Metaverse 3D Space Development",
      text:
        "Design and develop enchanting virtual environments that assist in exploring and engaging within the digital era of metaverse. ",
      isLink: true,
      linkUrl: "/metaverse-3d-space-development",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Metaverse NFT Development Services",
      text:
        " Our metaverse developers are capable of developing an",
        LinkHref : "/nft-marketplace-development-company",
        LinkData:" NFT marketplace,",
        text1: "with in-game trading prospects for gamers.",
    
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Metaverse Education Platform Development Services",
      text:
        "We offer an eminent metaverse learning platform to impart education with higher interactive learning experiences.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Metaverse Token Development Services ",
      text:
        "Gain the benefits of metaverse",
        LinkHref : "/crypto-token-development-company",
        LinkData:"token development",
        text1: "solutions for executing transactions securely on specific blockchain networks.",
      },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Play-to-earn Game Development",
      text:
        "Our metaverse game developers create immersive P2E experiences with blockchain integration, NFT assets, and real rewards.",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/metaverseImg/icons/requirements.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Understanding Requirements ",
    },
    {
      img: "/metaverseImg/icons/uxui.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "UI/UX Design",
    },
    {
      img: "/metaverseImg/icons/prototype.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Prototype",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/metaverseImg/icons/deployment.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Deployment  ",
    },
    {
      img: "/metaverseImg/icons/testing.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Testing ",
    },

    {
      img: "/metaverseImg/icons/software.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Software Development",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/metaverseImg/icons/launch.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Post-Launch Support ",
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
      heading: "Enhanced Brand Presence",
      text:
        "Establish a solid and notable presence in the digital realm, fostering deeper connections with customers and stakeholders.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Marketing Channels",
      text:
        "Create innovative ",
        LinkHref : "/digital-marketing-agency",
        LinkData:"marketing campaigns",
        text1: " to engage audiences on a whole new level, driving brand awareness and loyalty.",
      },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Virtual Commerce Opportunities",
      text:
        "Our Metaverse development Services provide virtual commerce, helping businesses sell products and services in virtual environments. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Collaborative Workspaces",
      text:
        "Help teams to visualize, invent, and cooperate in real-time, irrespective of physical location, boosting productivity and efficiency.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-md-4",
      p_opacity: "opacity-100",
      heading: "Cross-platform Integration",
      text:
        "Businesses can integrate their presence across multiple platforms and devices, ensuring consistent branding and experiences for users. ",
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
        "Blockchain platforms ensure secure transactions, ownership verification of virtual assets, and decentralized governance of virtual economies.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Artificial Intelligence",
      text:
        "AI is used to generate dynamic content, customized user experiences, and intelligent virtual assistants, enhancing practicality and interactivity.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Spatial Audio ",
      text:
        "Create immersive soundscapes to experience actual existence within virtual settings with our metaverse development services. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Cross-Platform Compatibility ",
      text:
        " Ensures flawless access and interaction across various devices and platforms, enhancing accessibility and user reach. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Real-Time Adaptation",
      text:
        "We exploit advanced graphics techniques to create unique virtual environments with high-quality visuals and animations. ",
    },
  ];

  const Crafting = [
    {
      img: "/metaverseImg/icons/realestate.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate",
      text:
        "Clients can explore properties through immersive virtual tours, making real estate more accessible, especially for distant buyers.",
    },
    {
      img: "/metaverseImg/icons/retail.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Retail",
      text:
        "Our metaverse development solutions allow retailers to set up shops in virtual environments where customers can browse and try products virtually.  ",
    },
    {
      img: "/metaverseImg/icons/education.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Education",
      text:
        "Create virtual campuses and interactive learning experiences for schools and colleges that engage students more than traditional methods.",
    },
    {
      img: "/metaverseImg/icons/health.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Healthcare",
      text:
        "Medical professionals can train in virtual operating rooms, simulating surgeries and medical procedures with high realism.",
    },
    {
      img: "/metaverseImg/icons/entertainment.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Entertainment",
      text:
        "The gaming industry can expand into fully immersive worlds where players interact within the game environment.",
    },
    {
      img: "/metaverseImg/icons/manufacturing.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Manufacturing",
      text:
        "Our metaverse projects help companies design, test, and modify products in virtual environments at lower time and costs.",
    },
    {
      img: "/metaverseImg/icons/tourism.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Tourism  ",
      text:
        "Develop virtual replicas of real-world destinations for tourists, offering travel experiences without environmental impact.",
    },
    {
      img: "/metaverseImg/icons/finance.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Finance ",
      text:
        "Allow banks to operate virtual branches where customers manage accounts and consult with advisors in a more engaging, personal way. ",
      // background: "/cryptwalletImg/wallet_features.png",
    },
    {
      img: "/metaverseImg/icons/automotive.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Automotive ",
      text:
        "Customers can explore and customize vehicles in a virtual environment, experiencing their choices in real-time.",
    },
    {
      img: "/metaverseImg/icons/legal.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Legal Services",
      text:
        "Legal professionals can conduct mock trials in a simulated environment to train lawyers and familiarize them with courtroom procedures.",
    },
    {
      img: "/metaverseImg/icons/sports.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Sports ",
      text:
        "Athletes can train in virtual settings that simulate real-world conditions, improving their skills without physical limitations.",
    },
  ];

  const AboutLbm = [
    {
      img: "/metaverseImg/icons/professional.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Professional Team  ",
      text:
        "Our team of 200+ metaverse developers assist clients with the preeminent tech strategy to enter the virtual realm as per their requirements.  ",
    },
    {
      img: "/metaverseImg/icons/cross-industry.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Cross-industry Experience",
      text:
        "We have stayed at the top for 10+ years, providing innovative metaverse",
   
        LinkHref : "/custom-software-development-services",
        LinkData:"software development services",
        text1: "to navigate your industry shift with ease.",   },
    {
      img: "/metaverseImg/icons/technical.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Technical Expertise ",
      text:
        "Being a leading",
        LinkHref : "/blockchain-development-company",
        LinkData:"Blockchain development provider,",
        text1: "our developers concentrate on satisfying clients' requirements in the flourishing virtual market.",
      },
    {
      img: "/metaverseImg/icons/rapid.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Rapid Development ",
      text:
        "Our primary goal is to develop customized metaverse software to attract the target audience towards your business.",
    },
    {
      img: "/metaverseImg/icons/wallets.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "E-Wallets",
      text:
        "Our metaverse solutions provide",
        LinkHref : "/crypto-wallet-development-company",
        LinkData:"crypto wallets",
        text1: "and gateways using ultra-modern technologies such as liquidity pools, DeFi integrations and security.",
      },
    {
      img: "/metaverseImg/icons/cutting.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Cutting-Edge Technology",
      text:
        "Our commitment to innovation keeps us equipped with the latest technology in VR, AR, AI, and blockchain for metaverse development.",
    },
    {
      img: "/metaverseImg/icons/support.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Complete Support ",
      text:"Our after-sale services remain active after the launch to ensure continuous operation for your nodes, network, and",
        LinkHref : "/smart-contract-development-company",
        LinkData:" smart contracts.",
      },
  ];

  const ClientData_aa = [
    {
      clientName: "Kristin Morris",
      text:"Our experience with LBM Solutions was exceptional from start to finish. They not only understood our vision but also enhanced it with their innovative technology solutions. Their team was proactive and led our project with great expertise",
    },
    {
      clientName: "Lester Jenkins",
      text:"LBM transformed our educational content with immersive virtual classrooms and interactive learning modules. Their solutions have not only increased student engagement but also improved academic outcomes. Highly recommend their expert team!",
    },
    {
      clientName: "Stacey Sanchez",
      text:"The virtual real estate tours developed by LBM have revolutionized how we showcase properties. The realistic details and smooth navigation have greatly impressed our clients and increased our market reach ",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Leroy Coleman",
      text:"Thanks to LBM Solutions, our virtual concerts have reached global audiences, providing an immersive experience that fans love. Their platform is robust and reliable, handling thousands of simultaneous users without a hitch.",
    },
    {
      clientName: "Teresa Russell",
      text:"LBM developed a virtual healthcare training platform for us that is nothing short of revolutionary. The realistic simulations have greatly enhanced our training programs, reducing costs and improving outcomes. Their technical support team is also top-notch.",
    },
    {
      clientName: "Clifford Taylor",
      text:
        "The virtual team-building experiences created by LBM have greatly improved our remote employee engagement and collaboration. Their custom solutions perfectly matched our needs and exceeded our expectations",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "How will the metaverse be developed?",
      body:
        "The metaverse will be developed using advanced VR and AR technologies, blockchain for security and transactions, and AI to create interactive, immersive, and persistent virtual environments across multiple platforms.",
    },
    {
      eventKey: "1",
      header: "What are the stages of metaverse development?",
      body:
        "Metaverse development stages include concept design, platform selection, environment creation, integration of VR/AR and AI technologies, testing, launch, and ongoing updates for security, features, and user engagement.",
    },
    {
      eventKey: "2",
      header: "What technology is needed for metaverse? ",
      body:
        "The metaverse requires virtual reality (VR), augmented reality (AR), blockchain in its development for secure transactions, artificial intelligence (AI) for dynamic environments, and robust network infrastructure like 5G for real-time interactions.",
    },
    {
      eventKey: "3",
      header: "Which company is leading in metaverse?",
      body:
        "LBM Solutions is one the prominent companies in metaverse development. It has a team of expert metaverse developers who provide advanced solutions using blockchain technology to create a metaverse environment according to the needs of clients.",
    },
    {
      eventKey: "4",
      header: "How much does it cost to develop a metaverse application?",
      body:
        "Generally, a metaverse project ranges between $50,000 - $500,000. This cost can potentially be maximized for large-scale projects, especially if they require custom development and extensive world-building.",
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
                  textA=" Metaverse "
                  clrtext="Development Company"
                  textB=""
                  // heading="heading_class"
                  heading="banner_h"
                />
                <BannerText text="Embrace the future of digital existence with our Metaverse development services according to your requirements.  " />

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
                  src="/metaverseImg/banner.png"
                  alt="USA’s top metaverse software development firm"
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
          paraText1={section.paraText1} Link_href={section.Link_href} Link_data={section.Link_data}
        />
      ))}

      <section className="crypt_wallet" ref={bottomSectionRef}>
        <div className="container">
          <div className="row ">
            <div className="col-sm-10">
              <div className="inner_text">
                <Heading_h2
                  textA="Metaverse "
                  clrtext=" Development Services "
                  textB=""
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="Transforming digital visions into immersive realities, our metaverse development services craft dynamic virtual experiences that captivate audiences and redefine engagement."
                />
              </div>
            </div>
            <div className="col-sm-12  mt-4">
              <div className="row">
                {/* {LoopingCard.map((val, i) => { return ( ); })} */}
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
                  textA=""
                  clrtext="Metaverse Development Process"
                  textB=""
                  heading="heading_h2 mb-0"
                />
                <ParaText
                  f_custome=""
                  para_text="We deal with every metaverse project from the outset to implementation with boundless passion in different stages. We are committed to pioneering novelty in our metaverse development solutions."
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
          <div className="row  flex-column-reverse flex-xl-row">
            <div className="col-10 ">
              <Heading_h2
                textA="Features of"
                clrtext=" Metaverse Platform Development "
                textB=""
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
              />
              <ParaText
                f_custome=""
                para_text="Our metaverse platform development provides innovative technical features with robust security measures and scalable infrastructure to deliver unified interactions and dynamic virtual worlds."
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

      <section className="crafting">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA=""
                  clrtext="Metaverse Development Solutions"
                  textB="For Different Industries"
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="The metaverse app development can vary significantly across various industries, as each has unique requirements and target audiences. We emphasize a transformative approach for metaverse development, focusing on enterprise solutions.  "
                />
              </div>
            </div>
          </div>
          <div className="row">
            <Card CardData={Crafting} />
          </div>
        </div>
      </section>

      <section className="about_lbm">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Why Choose LBM Solutions"
                  clrtext="As Your Metaverse Development Company? "
                  textB=""
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text1="LBM Solutions aims to provide excellent metaverse development solutions using blockchain technology. Our professional metaverse developers create outstanding virtual experiences, blockchain integration, and"
                  LinkHref ="/website-development"
                   LinkData="web solutions"
                  para_text="for metaverse realms."
                
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
              <ParaText para_text="Read firsthand accounts from our satisfied clients about how our advanced technology and metaverse services have revolutionized their industries, enhanced customer interactions, and driven growth in metaverse." />
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

export default MetaVerseDevelopment;
