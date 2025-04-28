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
      heading: "Hire LBM's Metaverse Developers & Design Your Metaverse Avatar ",
      paraText1:
        "We are a prestigious metaverse avatar development company with a team of 200+",
        paraText:"who specialize in creating lifelike avatars for finance, real estate, fashion, and gaming.",
        Link_href:"/metaverse-development-company",
         Link_data:"metaverse developers",
        imgSrc: "/metaverse_avatar_page/teach_img.png",
      imgAlt: "create your 3d avatar with our metaverse developers",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Metaverse Game Avatars",
      text:
        "As a pioneer metaverse avatar creator, we develop customizable 2D and 3D avatars for metaverse gaming tailored to your needs with visual complexity.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Metaverse Full Body Avatars ",
      text:
        "With VR, AR, and graphics, we design lifelike avatars, enabling secret interactions at events to enhance user engagement. ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Metaverse Chat Avatars",
      text:
        " Our metaverse avatars reflect real-life interactions to facilitate conversations, video calls, and emotional expressions and enhance communication. ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Metaverse NFT Avatars",
      text:
        "We create metaverse avatars that offer unique, customizable digital identities and enable users to own, trade, and personalize their virtual presence.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Avatars For VR Devices",
      text:
        "We build metaverse avatars that mirror real-world interactions, integrating with VR devices to enhance user experience, blending reality with virtuality.",
    },
   
   
  ];

  const DevelopmentProcess_a = [
    {
        img: "/metaverse_avatar_page/icons/process01.png",
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
      img: "/metaverse_avatar_page/icons/process02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Appearance Design",
    },
    {
      img: "/metaverse_avatar_page/icons/process03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Animation & Movement Integration",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/metaverse_avatar_page/icons/process06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Improvement in Accessibility  ",
    },
    {
      img: "/metaverse_avatar_page/icons/process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Blockchain Integration",
    },
   
    {
      img: "/metaverse_avatar_page/icons/process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Avtar Development ",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/metaverse_avatar_page/icons/process07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Post Launch Support",
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
      heading: "Customizable Avatars ",
      text:
        "We create personalized avatars to reflect unique client branding and enhance user engagement through custom features and functionalities.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "360-Degree Vision",
      text:
        "Our metaverse avatar development solutions enable avatars to perceive and interact with their surroundings in all directions, providing a fully immersive experience. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Cross-Platform Integration ",
      text:
        "Our services enable consistent avatar usage across various VR and AR platforms, ensuring consistent user experience and compatibility.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "NFT Integration  ",
      text:
        "We render excellent metaverse avatar development platforms that allow us to create, trade, and monetize avatars as NFTs, adding value and ownership to digital identities.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Advanced Animation",
      text:
        "We implement realistic movements and facial expressions in avatars, providing a more engaging and immersive interaction for users.",
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
        " Our metaverse avatar ensures smooth, high-quality graphics and animations instantly, providing users with an appealing visual experience.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "AI-Powered Facial Recognition",
      text:
        "We utilize advanced AI to capture and replicate realistic facial expressions and emotions, enhancing avatar authenticity and interaction.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "High-Resolution Textures ",
      text:
        "We provide detailed, lifelike appearances for avatars with high-resolution textures, enhancing visual realism and user immersion. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Motion Capture Technology ",
      text:
        "We capture and apply realistic body movements and gestures to avatars, enabling natural and authentic interactions.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Voice Modulation",
      text:
        "Our metaverse avatar development solutions allow avatars to mimic real-time voice changes and lip-syncing for more natural communication. ",
    },
  ];

  const sectionsData_a = [
    {
      heading: "The Tech Behind Creating Your Metaverse 3D Avatar ",
      paraText:
        "Our metaverse development process utilizes advanced technologies to deliver customizable, high-resolution avatars, ensuring an intriguing virtual experience to enhance user engagement.",
      imgSrc: "/metaverse_avatar_page/teach_img01.png",
      imgAlt: "tech behind creating metaverse 3d avatar",
    },
  ];

  const Crafting = [
    {
      img: "/metaverse_avatar_page/icons/sourceses01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Immersive Interaction",
      text:
        "Avatars facilitate seamless navigation of virtual spaces, engaging users in interactive VR and AR activities, transforming the digital realm into a captivating, tangible, and immersive experience.",
    },
    {
      img: "/metaverse_avatar_page/icons/sourceses02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Virtual Trade",
      text:
        " Metaverse avatars facilitate consistent digital buying and selling within the metaverse, enabling secure and efficient transactions. Users can trade virtual goods and services, enhancing the overall virtual economy and user experience.",
    },
    {
      img: "/metaverse_avatar_page/icons/sourceses03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Gameplay",
      text:
        "Avatars are essential to gaming in the metaverse. They allow players to enjoy immersive games, complete quests, and advance in virtual worlds. Avatars can level up, learn new skills, and be personalized with different equipment and options.",
    },
    {
      img: "/metaverse_avatar_page/icons/sourceses04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Virtual Gathering",
      text:
        "Avatars enable exciting digital gatherings like events, conferences, and concerts in the metaverse. Attendees can interact and enjoy immersive experiences, free from physical limitations, by embodying their avatars.",
    },
    {
      img: "/metaverse_avatar_page/icons/sourceses05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Enhanced Security",
      text:
        " Metaverse avatars offer users anonymity, allowing them to explore, interact, and participate in virtual environments without revealing their real identities. This provides freedom and security, improving the digital experience.",
    },
 ];

  const AboutLbm = [
    {
      img: "/metaverse_avatar_page/icons/why01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Expertise in 3D Modeling ",
      text:
        " Our skilled team creates highly detailed and realistic 3D avatars, ensuring lifelike digital representations that stand out in any virtual environment. ",
    },
    {
      img: "/metaverse_avatar_page/icons/why02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Personalized Virtual Identities ",
      text:
        " We create metaverse avatars according to your unique identity, providing a custom experience that caters to your preferences.",
    },
    {
      img: "/metaverse_avatar_page/icons/why03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Engaging Animation ",
      text:
        " Our advanced animation techniques bring your avatars to life with smooth, dynamic movements, enhancing their realism and interactivity in the metaverse.",
    },
    {
      img: "/metaverse_avatar_page/icons/why04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Innovative Solutions ",
      text:
        "Our avatar development solutions offer the latest features and enhancements to keep your avatars ahead of the curve in the rapidly evolving metaverse.",
    },
    {
      img: "/metaverse_avatar_page/icons/why05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Scalable Solutions",
      text:
        " Our avatar development solutions can grow with your needs, letting you expand and adapt your virtual presence easily.",
    },
    {
      img: "/metaverse_avatar_page/icons/why06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Comprehensive Support ",
      text:
        "We offer a free consultation to discuss your metaverse avatar development needs, providing expert advice and personalized solutions to build avatars.",
    },
    {
      img: "/metaverse_avatar_page/icons/why07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Customizable Features",
      text:
        "We provide various customized choices, that enable you to develop avatars perfectly matching your vision and brand.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Aiden Bennett",
      text:
        "LBM provided exceptional creativity and attention to details of our metaverse project. The team was approachable to our ideas and delivered scalable solutions. They served us with tailored and fascinating metaverse solutions.",
    },
    {
      clientName: "Charles Richardson",
      text:
        " From intricate facial features to lifelike animations, LBM provided life to my avatar, and it felt like an extension of myself. The developers were professional and helpful throughout the avatar development process.",
    },
    {
      clientName: "Claire Brooks",
      text:
        " We got an outstanding metaverse avatar design! They translated my vision into a captivating virtual identity, paying meticulous attention to detail and ensuring authenticity throughout the process",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "James Cox",
      text:
        "The expertise of LBM’s team in avatar development was admirable in every aspect of the metaverse avatar development. They provided end-to-end metaverse solutions. We were highly pleased with the outcome. ",
    },
    {
      clientName: "Alexandra Bailey",
      text:
        "The team at LBM demonstrated a deep understanding of virtual identity and brought my avatar to life with precision and flair. Their professionalism and commitment to quality made the entire process smooth and enjoyable.",
    },
    {
      clientName: "Joseph Howard",
      text:
        "LBM rendered top-notch metaverse avatar customization. I was grateful for the team's attention to detail and creativity. Their efforts resulted in a personalized virtual identity that exceeded my expectations..",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "How much does the metaverse avatar cost? ",
      body:
        "The cost of a metaverse avatar ranges from $500-$1500 to several thousand dollars, depending on customization, complexity, and desired features. This pricing can be customized to specific needs and budgets.",
    },
    {
      eventKey: "1",
      header: "What program do you use to design for metaverse avatars? ",
      body:
        "Unity is the most widely utilized program for designing metaverse avatars. However, other programs, such as Blender, Unity, Unreal Engine, and Adobe Fuse, can also be used. ",
    },
    {
      eventKey: "2",
      header: "What programming language is used to create metaverse? ",
      body:
        "Java stands out as a top programming language, empowering developers to create dynamic and robust metaverse applications. Its versatility and extensive libraries make it ideal for building immersive virtual environments.",
    },
    {
      eventKey: "3",
      header: "How do metaverse development services enhance user experiences? ",
      body:
        "Metaverse development services enhance user experiences by creating immersive, interactive virtual environments. These environments enable seamless social interactions, personalized avatars, and engaging activities, thus bridging the gap between digital and real-world experiences.",
    },
    {
      eventKey: "4",
      header: "Why should you invest in a Metaverse Platform?",
      body:
        "You can connect users globally and position your business at the forefront of digital innovation, investing in a metaverse platform that brings growth, immersive experiences, and new revenue.",
    },
    {
      eventKey: "5",
      header: "Can I build my own metaverse? ",
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
                  textA="Metaverse "
                  clrtext="Avatar Development Company"
                  textB=""
                  heading="banner_h"
                />
                <BannerText text="We create custom avatars for metaverse industries, offering virtual world creation, identity creation, and 3D avatar modeling services." />

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
                <img src="/metaverse_avatar_page/banner.png" alt="create custom metaverse 3d avatar" className="img-fluid" />
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
                  textA="Our Metaverse "
                  clrtext=" Avatar Development Services"
                  textB=""
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="We offer metaverse avatar development solutions, such as detailed 3D modeling, virtual identity creation, and captivating animations, enhancing your digital presence with innovative and customized virtual avatars."
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
                  textA="Powerful Development "
                  clrtext=" Process to Build Metaverse Avatar"
                  textB=""
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="Our experienced metaverse avatar creators deploy a comprehensive metaverse avatar development approach, ensuring an exceptional digital identity. We bring your avatar to life with precision and creativity."
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
                textA="Why Our "
                clrtext="3D Metaverse Avatars Meet Your"
                textB="Virtual Needs?"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
              />

              <ParaText
                f_custome=""
                para_text="Metaverse avatar development offers personalized, lifelike avatars for engagement, brand representation, and coherent interaction across virtual realms, unlocking new avenues for expression, connection, and innovation."
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
                  textA="Why Do"
                  clrtext="You Need a Metaverse Avatar for Success? "
                  textB=""
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Achieve success with our Metaverse avatars, offering lifelike interactions, customizable features, and seamless integration. Enhance user engagement and experience with advanced AI and cross-platform compatibility for a truly immersive digital presence."
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
                  textA="Why LBM is "
                  clrtext="Your Trusted Metaverse Avatar "
                  textB="Development Company?"
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="At LBM Solutions, our team of 200+ metaverse developers offers ultimate metaverse avatar development services in US, ensuring high-quality, innovative, and unique avatars that elevate your digital presence."
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
              <ParaText para_text="With successful delivery of several metaverse avatar development projects, our clients rave about our metaverse avatar development services, highlighting the details about our personalized solutions. They appreciate our advanced technology and creative expertise." />
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
