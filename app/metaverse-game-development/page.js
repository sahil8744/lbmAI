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
      heading:
        "Hire Our Metaverse Developer to Make Your Metaverse Gaming Better",
      paraText1:
        "Leveraging over a decade of expertise, we have a team of 200+",
     paraText:"to craft unique Metaverse game platforms with blockchain technology, enhancing privacy for superior user engagement and success.",
        Link_href:"/metaverse-development-company",
        Link_data:"metaverse developers",
           imgSrc: "/metagaming_page/tech_img.png",
      imgAlt: "hire expert metaverse developers from LBM ",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Custom Game Development",
      text:
        "Our metaverse developers build custom games with 3D worlds tailored to specific industry needs, ensuring engaging experiences.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Play to Earn Game Development ",
      text:
        "We specialize in developing web3-based metaverse games where players earn real-world valued assets.",
        isLink: true,
        linkUrl: "/play-to-earn-game-development",
      },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Metaverse NFT Game Development",
      text:
        " Our team excels in creating NFT metaverse games with in-game trading opportunities, boosting your gaming business to new heights.",
        isLink: true,
        linkUrl: "/nft-game-development",
      },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Metaverse 3D Avatar/Space  Development",
      text:
        " We provide hyper-realistic 3D avatars for diverse metaverse applications, ensuring a lifelike metaverse journey for all users. ",
        isLink: true,
        linkUrl: "/metaverse-avatar-development",
      },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Metaverse Marketplace Development ",
      text:
        "We build attractive metaverse marketplaces, transforming concepts into futuristic virtual models for diverse business domains. ",
    },
  ];

  const technology = [
    {
      img: "/metagaming_page/carimg_01.png",
      alt_value:"role-playing metaverse rpg game development",
      img_class: "rounded-3",
      svg_cls: "d-none",
      add_class: "text_img_card rounded-3 text-start p-3 h-100",
      columns: "col-md-6 col-lg-4 mb-4 ",
      custome_col_a: "overflow-hidden ",
      heading_h5: "text-white mb-0 mt-3",
      heading: "Adventure Games ",
      text:
        "Our metaverse developers build visual adventure games, blending thrilling narratives and realistic 3D visuals, offering players unique experiences with every mission.",
      p_opacity: "text-white fs-5",
    },
    {
      img: "/metagaming_page/carimg_04.png",
      alt_value:"role-playing metaverse rpg game development",
      img_class: "rounded-3",
      svg_cls: "d-none",
      add_class: "text_img_card rounded-3 text-start p-3 h-100",
      columns: "col-md-6 col-lg-4 mb-4 ",
      custome_col_a: "overflow-hidden ",
      heading_h5: "text-white mb-0 mt-3",
      heading: "Casino Games",
      text:
        "In metaverse casino game development, we integrate creative design, 3D modeling, and blockchain expertise to build engaging casino gaming platforms.",
      p_opacity: "text-white fs-5",
    },
    {
      img: "/metagaming_page/carimg_05.png",
      alt_value:"role-playing metaverse rpg game development",
      img_class: "rounded-3",
      svg_cls: "d-none",
      add_class: "text_img_card rounded-3 text-start p-3 h-100",
      columns: "col-md-6 col-lg-4 mb-4 ",
      custome_col_a: "overflow-hidden ",
      heading_h5: "text-white mb-0 mt-3",
      heading: "Sports Games ",
      text:
        "We specialize in creating realistic 3D characters with movements and emotions for racing and sports games, utilizing metaverse components.",
      p_opacity: "text-white fs-5",
    },
  
    {
      img: "/metagaming_page/puzzle.png",
      alt_value:"role-playing metaverse rpg game development",
      img_class: "rounded-3",
      svg_cls: "d-none",
      add_class: "text_img_card rounded-3 text-start p-3 h-100",
      columns: "col-md-6 col-lg-4 mb-4 ",
      custome_col_a: "overflow-hidden ",
      heading_h5: "text-white mb-0 mt-3",
      heading: "Puzzle Games",
      text:
        " We develop appealing metaverse puzzle games, combining intricate challenges with 3D environments that allow players to solve puzzles, collect NFT rewards, and trade assets.",
      p_opacity: "text-white fs-5",
    },
    
    {
      img: "/metagaming_page/card.png",
      alt_value:"role-playing metaverse rpg game development",
      img_class: "rounded-3",
      svg_cls: "d-none",
      add_class: "text_img_card rounded-3 text-start p-3 h-100",
      columns: "col-md-6 col-lg-4 mb-4 ",
      custome_col_a: "overflow-hidden ",
      heading_h5: "text-white mb-0 mt-3",
      heading: "Card Game",
      text:
        "We design metaverse NFT card games where players own unique, tradable cards with blockchain-secured ownership, ensuring an automated gaming ecosystem.",
      p_opacity: "text-white fs-5",
    },
    {
      img: "/metagaming_page/carimg_02.png",
      alt_value:"role-playing metaverse rpg game development",
      img_class: "rounded-3",
      svg_cls: "d-none",
      add_class: "text_img_card rounded-3 text-start p-3 h-100",
      columns: "col-md-6 col-lg-4 mb-4 ",
      custome_col_a: "overflow-hidden ",
      heading_h5: "text-white mb-0 mt-3",
      heading: "Metaverse Racing Games",
      text:
        "Our metaverse development solutions create immersive racing games with dynamic tracks, customizable vehicles, and interactive environments.",
      p_opacity: "text-white fs-5",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/metagaming_page/icons/devprocess01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Initial Discussion ",
    },
    {
      img: "/metagaming_page/icons/devprocess02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Frame Storyboard",
    },
    {
      img: "/metagaming_page/icons/devprocess03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Art and Design Production",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/metagaming_page/icons/devprocess06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Release & Testing",
    },
    {
      img: "/metagaming_page/icons/devprocess05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Prepare Storyboard ",
    },
 
    {
      img: "/metagaming_page/icons/devprocess04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Game development",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/metagaming_page/icons/devprocess07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Support and Updates",
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
      heading: "Digital Assets and NFTs",
      text:
        " Our",
        LinkHref : "/nft-development-company",
        LinkData:" NFT development,",
        text1: "services provide unique metaverse games that allow the creation and sale of unique in-game items, like skins, weapons, etc., as NFTs.",
      },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Virtual Real Estate",
      text:
        " Developers can sell or lease virtual land to users and businesses for building custom environments or hosting events. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Cross-Platform Integration ",
      text:
        "Allow users to access the game from various devices and enable assets to be used across different games within the metaverse ecosystem.  ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Blockchain Integration",
      text:
        "Our metaverse game development solutions allow your users to participate in decision-making processes through token-based voting. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-md-4",
      p_opacity: "opacity-100",
      heading: "Economic Systems",
      text:
        "Our play to earn game development services allow users to earn real-world value through gameplay, attracting numerous users.",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "3D Graphics ",
      text:
        "We provide metaverse realistic 3D models, textures, and environments that ensure smooth and responsive graphics performance.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Virtual Reality and Augmented Reality ",
      text:
        "Our metaverse solutions deploy VR headsets and integrate AR technology which overlaps virtual components onto the realistic realm.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "AI-Driven NPCs ",
      text:
        "Our metaverse game development allow intelligent non-player characters (NPCs) to react and interact with players in realistic ways.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Scalable Infrastructure ",
      text:
        " The cloud-based infrastructure in metaverse game supports a large number of concurrent users.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Interoperable Assets",
      text:
        "The standards and protocols we deploy in metaverse development allow you to deploy assets across different games and platforms. ",
    },
  ];

  const Crafting = [
    {
      img: "/metagaming_page/icons/icon01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Gaming ",
      text:
        "As a leading metaverse game studio, we develop immersive games and virtual concerts to involve users in new and thrilling ways.",
    },
    {
      img: "/metagaming_page/icons/icon02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Education ",
      text:
        "Our metaverse gaming development solutions provide virtual classrooms and training simulations for interactive and engaging learning experiences.",
    },
    {
      img: "/metagaming_page/icons/icon03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate",
      text:
        "Our metaverse games offer virtual property tours and attractive architectural visualizations for potential buyers and investors.",
    },
    {
      img: "/metagaming_page/icons/icon04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Fashion ",
      text:
        "We render virtual property tours and immersive architectural visualizations for potential buyers and investors.",
    },
    {
      img: "/metagaming_page/icons/icon05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Tourism ",
      text:
        " Avail virtual travel opportunities that provide a glimpse of destinations, hotels, and attractions from anywhere in the world.",
    },
    {
      img: "/metagaming_page/icons/icon06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Healthcare",
      text:
        " Our metaverse development solutions facilitate virtual consultations and telehealth services to provide remote medical assistance and advice.",
    },
    {
      img: "/metagaming_page/icons/icon07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "E-Commerse ",
      text:
        "We create virtual shopping stores from which the customers can explore products in a new way.",
    },
    {
      img: "/metagaming_page/icons/icon08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Social Media",
      text:
        " Build virtual social platforms for people to connect, interact, and engage in community events. ",
      // background: "/cryptwalletImg/wallet_features.png",
    },
    {
      img: "/metagaming_page/icons/icon09.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Corporate and Business",
      text:
        " Host virtual conferences and business meetings to connect professionals across the globe with our metaverse marketspace development solutions.",
    },
    {
      img: "/metagaming_page/icons/icon10.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Automotive ",
      text:
        "Virtual car showrooms and test drives allow customers to explore and experience vehicles.",
    },
    {
      img: "/metagaming_page/icons/icon11.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Art and Culture",
      text:
        "Create virtual museums and art galleries to showcase cultural heritage and contemporary works to a global audience.",
    },
  ];

  const AboutLbm = [
    {
      img: "/metagaming_page/icons/icons_a.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Exceptional Service",
      text:
        " We deliver excellence in metaverse game development, leveraging blockchain technology to create robust gaming experiences.",
    },
    {
      img: "/metagaming_page/icons/icons_b.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Experienced Team",
      text:
        " We have a team of expert blockchain developers capable of handling even the most complex projects to deliver innovative and engaging gaming solutions.",
    },
    {
      img: "/metagaming_page/icons/icons_c.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Enhanced Gaming ",
      text:
        "Avail absolute gaming solutions that elevate your gameplay to new heights. Enjoy cutting-edge, immersive adventures like never before.",
    },
    {
      img: "/metagaming_page/icons/icons_d.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Modern Infrastructure",
      text:
        "Harnessing the power of blockchain technology, we create secure, transparent, and scalable gaming experiences that set a new industry standard.",
    },
    {
      img: "/metagaming_page/icons/icons_e.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Highly Secured Solutions",
      text:
        " Prioritizing player data protection, we utilize advanced encryption and robust security protocols, safeguarding your game and its assets.",
    },
    {
      img: "/metagaming_page/icons/icons_f.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Quick Launching",
      text:
        "Our team accelerates your metaverse game development, bringing your vision to life. We ensure rapid deployment without compromising quality, getting your game to market faster.",
    },
    {
      img: "/metagaming_page/icons/icons_g.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "After-Sales Support",
      text:
        " We ensure that your metaverse game remains robust and efficient. Our team assists you 24/7 in constantupdates, issue resolution, and performance improvements.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Shannon Cooper",
      text:
        "I had an incredible experience with LBM Solutions. Their expertise and dedication to our metaverse NFT gaming project were obvious from day one. They delivered our game on time.",
    },
    {
      clientName: "Patrick Ward",
      text:
        "Our collaboration with the metaverse developers of LBM was professional. During game development, their team handled every challenge with ease. Their ongoing support was fantastic, helping us navigate post-launch issues quickly.",
    },
    {
      clientName: "Kelly Turner",
      text:
        " The team at LBM understood our needs and created something beyond our wildest dreams. The game developed by them is not only visually stunning but also highly interactive and fun to play. ",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Brandon Rivera",
      text:
        "I was amazed by the level of creativity and technical expertise of LBM brought to our racing game. They delivered a game that has received rave reviews from our users. Their dedication to post-launch support has ensured our game continues to run smoothly. ",
    },
    {
      clientName: "Christina Hayes",
      text:
        " Choosing LBM for our metaverse game development was the best decision we made. The game they developed has been a huge hit. Our users successfully participate and collaborate in live events.",
    },
    {
      clientName: "Nicholas Sanchez",
      text:
        "LBM Solutions provided us with outstanding metaverse game development. They delivered a high-quality game that met all our specifications and more. We highly recommend their metaverse and blockchain development services to everyone.",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is metaverse game development?",
      body:
        "Metaverse game development is the process of creating appealing, interconnected virtual worlds where players can interact, explore, and engage in various activities. Unlike traditional games, metaverse games leverage advanced technologies like virtual reality (VR), augmented reality (AR), and blockchain to create interactive experiences.",
    },
    {
      eventKey: "1",
      header: "How much does it cost to make a metaverse game?",
      body:
        "On average, $30,000 to $300,000 is the cost to develop a metaverse game. Factors including game complexity, graphics quality, technology, and team expertise may impact this cost.",
    },
    {
      eventKey: "2",
      header:
        "How to choose the best metaverse gaming platform development company?",
      body:
        "One can choose the best metaverse game platform development agency by considering its experience, portfolio, technology, client reviews, and support services.  ",
    },
    {
      eventKey: "3",
      header: "What is the most popular metaverse?",
      body:
        "Roblox has attained a lot of popularity from numerous users. This metaverse platform provides several items, such as games, virtual goods, and its currency. It allows users to design and sell virtual clothes, accessories, and animations for avatars, creating a vibrant marketplace for digital creations. ",
    },
    {
      eventKey: "4",
      header: "What is Metaverse Game Clone Development?",
      body:
        "In metaverse game clone development, an imitation of an existing successful metaverse game is created. It is similar to features, gameplay, and mechanics, allowing businesses to launch similar platforms quickly and leveraging proven concepts to attract and engage players effectively.",
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
                  textA=" Metaverse Game "
                  clrtext="Development Company"
                  textB=""
                  // heading="heading_class"
                  heading="banner_h"
                />
                <BannerText text="We, as an outstanding Metaverse game development company, render complete metaverse game solutions for virtual worlds." />

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
                  src="/metagaming_page/banner.png"
                  alt="best metaverse game development company"
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
                  textA="Our Range of "
                  clrtext="Metaverse Game Development Services"
                  textB=""
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text1="
                  As an esteemed metaverse game development company, we provide a global metaverse game development studio to develop customizable, "
                  para_text="that revolutionize the gaming industry."
                  LinkData="blockchain-based games"
                  LinkHref="/blockchain-game-development-company"
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

      {/* Add new section Metaverse Game Development  */}
      <section className="meta_game bg-black">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Types of "
                  clrtext="Metaverse Game Development Solutions"
                  textB=" We Provide"
                  // heading="heading_class"
                  heading=" heading_h2 text-white"
                />
                <ParaText
                  f_custome="text-white"
                  para_text="Our metaverse game development solutions uniquely merge real, augmented, and virtual realities, enabling users to trade, create 3D avatars, and seamlessly navigate through diverse interconnected virtual worlds."
                />
              </div>
            </div>
          </div>
          <div className="row text-center mt-5">
            <Card CardData={technology} />
          </div>
        </div>
      </section>

      <section className="devel_process">
        <div className="container">
          <div className="row mb-4 mb-lg-5 ">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Our Metaverse "
                  clrtext="Game Development Process"
                  textB=""
                  heading="heading_h2 mb-0"
                />
                <ParaText
                  f_custome=""
                  para_text="Our Metaverse game development process includes tokenizing avatars, awards, and assets, ensuring immersive, blockchain-secured experiences. We transform gaming, allowing players to earn while playing in this billion-dollar, untapped industry."
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
            <div className="col-12">
              <Heading_h2
                textA="How Our"
                clrtext=" Metaverse Game Development Services"
                textB="Benefits Businesses"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
              />
              <ParaText
                f_custome=""
                para_text1="Being global leaders in Metaverse game platform development, we tokenize avatars, awards, and more, transforming the gaming experience. Our"
                LinkHref ="/blockchain-development-company"
                   LinkData="blockchain developers"
                  para_text="create engaging, lucrative games in this billion-dollar, untapped industry."
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

      <section className="crafting">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="LBM Solutions "
                  clrtext="Expertly Offers Metaverse Development"
                  textB=" for Various Industries"
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Our custom game development solutions seamlessly integrate advanced technology to transform your vision into a dynamic, virtual reality experience and cater to various industries.  "
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
                  textA="Why Are We The "
                  clrtext="Best Choice for Metaverse Game "
                  textB=" Development Company?"
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="As a leading metaverse game development company in the USA, LBM Solutions provides unparalleled support. Our seasoned metaverse developers craft unique Metaverse gaming platforms tailored to meet your specific business needs."
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
              <ParaText para_text="Having experience over a decade, we have delivered several metaverse gaming solutions. Here we showcase what our satisfied clients said about our metaverse game development services. They highlight our dedication to quality, timely execution, and outstanding support" />
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
