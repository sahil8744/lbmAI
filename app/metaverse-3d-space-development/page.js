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
        "Create Your Metaverse Space with LBM's Expert Metaverse Developers",
      paraText1:
        "We are a renowned metaverse 3D space development company with expert",
        paraText:"to transform your virtual ideas with our advanced metaverse space solutions. We craft 3D spaces to maximize your business potential.",
        Link_href:"/metaverse-development-company",
        Link_data:"metaverse developers",
        imgSrc: "/metaverse_3d/teach_img.png",
      imgAlt: "Hire expert metaverse developer",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Gaming Space Development",
      text1:"with intriguing 3D environments featuring play-to-earn features and customizable tools.",
      text:
        " Our metaverse developers create",
        LinkHref : "/metaverse-game-development",
        LinkData:"metaverse games",
      },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate Platforms",
      text:
        "Our services craft spectacular real estate platforms, integrating AR and VR technologies that allow you to explore and invest in real estate.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "NFT Marketplace Development",
      text:
        "We create dynamic 3D metaverse spaces for  ",
   text1:"enhancing user interaction and enabling digital asset tokenization and trading.",
        LinkHref : "/nft-marketplace-development-company ",
        LinkData:"NFT marketplaces,",
             isLink: true,
      linkUrl: "/nft-marketplace-development-company ",
    
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Social Media Platforms ",
      text:
        "Our team provides stunning 3D virtual spaces and media, enhancing social media projects for user interactions in the dynamic digital realm.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Event Hosting Platforms",
      text:
        "We designed ideal metaverse 3D spaces for hybrid events, offering 360-degree experiences and supporting audience engagement for all participants.",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/metaverse_3d/icons/process01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Consultation Phase",
    },
    {
      img: "/metaverse_3d/icons/process02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Discovery Phase",
    },
    {
      img: "/metaverse_3d/icons/process03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Requirement Gathering ",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/metaverse_3d/icons/process06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Testing and QA",
    },
    {
      img: "/metaverse_3d/icons/process05.png",
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
      img: "/metaverse_3d/icons/process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Design Phase",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/metaverse_3d/icons/process07.png",
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
      heading: "Advanced Customization ",
      text:
        "We tailor virtual spaces to your business needs, ensuring unique and brand-aligned 3D spaces that captivate and engage users.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Seamless Integration",
      text:
        " Our metaverse development solutions incorporate metaverse 3D spaces into existing digital platforms, enhancing functionality and user experience.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Enhanced Interactivity ",
      text:
        "We introduce interactive elements in metaverse spaces that allow users to explore, connect, and participate actively within the 3D space. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Visualization",
      text:
        "We utilize advanced graphics and rendering techniques to create visually stunning 3D spaces that leave a lasting impression on users.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Compatibility",
      text:
        "Our services ensure your 3D spaces work smoothly on all devices and platforms, offering a consistent experience for users. ",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Real-Time Rendering",
      text:
        "Our team employs advanced rendering techniques to generate high-quality visuals instantly, providing smooth, lifelike interactions within the virtual space.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "AI Integration",
      text:
        "We incorporate artificial intelligence to enhance user interactions, personalize experiences, and automate various aspects of the metaverse environment. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Blockchain Security",
      text:
        " We deploy blockchain technology to ensure secure transactions and data integrity, enhancing trust and transparency in the metaverse.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "3D Modeling and Animation",
      text:
        "We create detailed and dynamic 3D models and animations, enhancing realism and user engagement.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "AR/VR Integration",
      text:
        "Our solutions combine AR and VR technologies to create metaverse spaces that blend the digital and physical worlds. ",
    },
  ];

  const sectionsData_a = [
    {
      heading: "Our High-Tech Frameworks for Metaverse Project Development",
      paraText:
        "Our metaverse developers have expertise in innovative technology to provide 3D design for metaverse spaces, rendering enhanced user interaction. We leverage adaptable solutions to create scalable virtual environments for various applications. ",
      imgSrc: "/metaverse_3d/teach_img01.png",
      imgAlt: "high-tech stack for metaverse 3d space development",
    },
  ];

  const Crafting = [
    {
      img: "/metaverse_3d/icons/sourceses01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Art and Culture",
      text:
        "Our solutions craft virtual galleries and exhibitions to provide artists with new platforms to showcase their work, reaching a global audience.",
    },
    {
      img: "/metaverse_3d/icons/sourceses02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate",
      text:
        "We create virtual tours and property showcases to enhance the buying and renting experience, allowing buyers to explore properties in a realistic setting.",
    },
    {
      img: "/metaverse_3d/icons/sourceses03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Education ",
      text:
        "We develop virtual 3D classrooms with engaging learning environments, enhancing understanding and retention.",
    },
    {
      img: "/metaverse_3d/icons/sourceses04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Metaverse NFT marketplace",
      text:
        "Our NFT marketplaces enable secure trading and",
        text1:"of virtual assets, offering new revenue opportunities in the expanding virtual economy.",
        LinkHref : "/crypto-token-development-company",
        LinkData:"tokenization",
      },
    {
      img: "/metaverse_3d/icons/sourceses05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Healthcare ",
      text:
        "Our metaverse 3D spaces provide virtual consultations, realistic simulations for medical training, and interactive treatment plans.",
    },
    {
      img: "/metaverse_3d/icons/sourceses06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Entertainment",
      text:
        "We craft attractive 3D spaces to elevate user experiences, enabling more engaging and interactive gaming and entertainment options.",
    },
    {
      img: "/metaverse_3d/icons/sourceses07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Tourism ",
      text:
        "The metaverse spaces allow users to explore destinations from their homes, providing immersive tours of landmarks, museums, and cultural sites.",
    },
    {
      img: "/metaverse_3d/icons/sourceses08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Event Management   ",
      text:
        "We provide hybrid events with 3D virtual spaces, offering virtual booths, networking opportunities, and interactive sessions.",
    },
    {
      img: "/metaverse_3d/icons/sourceses09.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Social Media",
      text:
        " Our metaverse 3D space development solutions provide adaptable spaces to interact, share, and engage, enhancing online social experiences.",
      // background: "/cryptwalletImg/wallet_features.png",
    },
    {
      img: "/metaverse_3d/icons/sourceses10.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Automotive ",
      text:
        "We craft virtual showrooms and interactive 3D models to explore and customize vehicles in a realistic setting, improving the buying experience.",
    },
  ];

  const AboutLbm = [
    {
      img: "/metaverse_3d/icons/why01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Expertise",
      text:
        "We have a team of 200+ metaverse developers to create metaverse 3D spaces, ensuring innovative and high-quality virtual environments. ",
    },
    {
      img: "/metaverse_3d/icons/why02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Custom Solutions",
      text:
        "We offer custom metaverse 3D space development solutions, designing unique 3D spaces that fit seamlessly with your brand and project needs.",
    },
    {
      img: "/metaverse_3d/icons/why03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Scalable Solutions",
      text:
        "Our infrastructure supports flexible development, allowing your virtual environment to grow flawlessly according to your user base.",
    },
    {
      img: "/metaverse_3d/icons/why04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Innovation Approach",
      text:
        "We utilize current technologies and trends, delivering progressive features that set your metaverse 3D space project apart.",
    },
    {
      img: "/metaverse_3d/icons/why05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Cost-Effective Solutions",
      text:
        "We provide competitive pricing without compromising quality, delivering high-value metaverse 3D spaces that fit within your budget.",
    },
    {
      img: "/metaverse_3d/icons/why06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Timely Delivery",
      text:
        "Our efficient metaverse 3D space development services guarantee timely project completion, enabling a swift launch.",
    },
    {
      img: "/metaverse_3d/icons/why07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Responsive Support",
      text:
        "We guarantee the smooth operation and maintenance of your 3D spaces, offering regular updates to keep your virtual environments up-to-date.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Caroline Ward",
      text:
        "Our experience with LBM Solutions was good for metaverse 3D space development. They delivered a high-quality virtual environment that transformed our business.",
    },
    {
      clientName: "Jacob William Morris",
      text:
        "Our education platform needs an innovative metaverse 3D space in a limited time limit. LBM’s timely delivery of our project was admirable. Their professional team delivered a stunning 3D space that exceeded our expectations. ",
    },
    {
      clientName: "Ann Peterson",
      text:
        "The team at LBM provided creative design and innovative features of our 3D space and took user engagement to the next level. The team’s expertise in metaverse development was evident in every detail. ",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Matthew Rivera",
      text:
        "The support services provided by LBM were excellent. They were always available to assist us and kept our virtual environment running smoothly. Their ongoing updates ensured our 3D space remains up-to-date and engaging ",
    },
    {
      clientName: "Lily Hughes",
      text:
        "We were impressed by LBM's affordable pricing and high-quality output. They delivered exceptional value for money, creating a beautiful and functional virtual space that aligns perfectly with our brand ",
    },
    {
      clientName: "Robert Foster)",
      text:
        " LBM Solutions developed 3D spaces for us, which were incredibly user-friendly and immersive. Our users were raving about the new experience, and we saw a significant increase in engagement since the launch. ",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is the 3D metaverse? ",
      body:
        "3D metaverse is a virtual environment where users can interact in immersive, three-dimensional spaces. It combines digital and physical worlds to enable social interactions, commerce, and entertainment within a fully interactive virtual universe.",
    },
    {
      eventKey: "1",
      header: "What is the difference between VR and metaverse? ",
      body:
        "Virtual Reality (VR) immerses users in simulated environments via headsets. The metaverse, a broader concept, includes interconnected virtual spaces for interaction, work, and socializing, with VR being one of the many access technologies utilized. ",
    },
    {
      eventKey: "2",
      header: " What 3D software is used for metaverse?",
      body:
        "Unity is a popular 3D software for the metaverse. However, Unreal Engine, Blender, and Autodesk Maya are other tools that help create immersive virtual environments, realistic models, and interactive experiences crucial for developing metaverse applications.",
    },
    {
      eventKey: "3",
      header: "How much time is required to develop a metaverse 3D space?",
      body:
        "A metaverse 3D space can be developed in months or a year according to complexity and features. The timeline can range from three to six months, involving design, development, testing, and optimization stages.",
    },
    {
      eventKey: "4",
      header: "What are the 7 top technologies for metaverse development?",
      body:
        "You can connect users globally and position your business at the forefront of digital innovation, investing in a metaverse platform that brings growth, immersive experiences, and new revenue.",
    },
    {
      eventKey: "5",
      header:
        "The top seven technologies for metaverse development are Virtual Reality (VR), Augmented Reality (AR), blockchain, AI, 3D modeling, spatial computing and cloud computing. ",
      body:
        "Yes, you can build your own metaverse using development tools like Unity or Unreal Engine, programming languages like C+ or JavaScript, and incorporating VR/AR technologies and blockchain for enhanced features.",
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
                  textA="Future-Proofing"
                  clrtext=" Metaverse 3D Space Development "
                  textB=""
                  heading="banner_h"
                />
                <BannerText text="Craft immersive virtual environments with our exceptional metaverse 3D space development solutions to explore interactive experiences. " />

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
                  src="/metaverse_3d/banner.png"
                  alt="metaverse 3d space creation"
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
            <div className="col-sm-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Our Advanced "
                  clrtext=" Metaverse 3D Space"
                  textB="Development Services"
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Our top-tier metaverse 3D space development solutions provide highly captivating and engaging virtual environments, utilizing 3D reconstruction and visualization to elevate user experiences to exceptional levels of innovation."
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
                  textA="How We Bring "
                  clrtext="Metaverse 3D Spaces to Life"
                  textB=""
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="Our solutions follow an innovative metaverse development process, ensuring stunning 3D spaces. We integrate advanced technologies to create dynamic, interactive virtual worlds that elevate user experiences and engagement."
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
                textA="How Our  "
                clrtext="Metaverse 3D Space Development"
                textB="Services Benefit You?"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
              />

              <ParaText
                f_custome=""
                para_text="Our metaverse 3D space development solutions revolutionize virtual experiences with advanced technology. We create coherent metaverse spaces that elevate user interaction, combining advanced visualization techniques."
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

      <section className="crafting">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="The Impact of"
                  clrtext="Metaverse 3D Space on Industry Futures"
                  textB=""
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="The future of metaverse 3D spaces promises transformative experiences across industries, enhancing interactivity, realism, and involvement and revolutionizing different sectors with progressive virtual environments."
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
                  textA="Why Does LBM Solutions Lead as"
                  clrtext=" Metaverse 3D Space Development Company?"
                  textB=""
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="As a premier metaverse development company in US with over a decade of experience, we have expert metaverse developers who deliver ideal metaverse 3D space solutions and handle large-scale projects tailored to diverse business needs. "
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
              <ParaText para_text="We have delivered top-notch metaverse 3D space development solutions providing exceptional realism and engaging user experiences. Our clients value our creative solutions and technical proficiency, which effectively bring their virtual visions to vibrant life." />
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
