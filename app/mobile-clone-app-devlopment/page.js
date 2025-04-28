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

const MobileAppCloneScript = () => {
  const bottomSectionRef = useRef(null);

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover ",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Taxi Booking",
      text:
        " We render custom cloned scripts for taxi booking apps to ensure a user-friendly experience for seamless transportation services.",
        // isLink: true,
        // linkUrl: "",
   },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Food Businesses ",
      text:
        "We provide readymade clone scripts to develop Zomato clone apps, ensuring user-friendly interfaces. ",
        // isLink: true,
        // linkUrl: "",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Delivery Businesses ",
      text:
        "We specialize in providing AI powered readymade clone scripts for delivery businesses to enhance customer satisfaction.",
        // isLink: true,
        // linkUrl: "",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate Businesses",
      text:
        "Our solutions for real estate are planned to replicate leading market models, ensuring high-performance apps. ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Social Media Platforms",
      text:
        "Our Onlyfans and Tinder clone app development solutions offer scalable social media apps with innovative features.",
    },
   
  ];

  const BasicFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "User Authentication",
      text:
        "Our clone app development solutions ensure secure access by verifying user credentials through methods like two-factor authentication.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "User Profiles",
      text:
        "We create cloned script based mobile apps which allow users to create and customize their profiles to enhance personalization. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Analytics Dashboard",
      text:
        "We deploy reporting tools to create clone phone apps that provide insights into user behavior and help administrators in making decisions.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Payment Integration",
      text:
        "Our cloner apps facilitate secure in-app transactions with support for multiple payment gateways, like credit cards and digital wallets.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-md-4",
      p_opacity: "opacity-100",
      heading: "Geo-Location Services",
      text:
        "We integrate GPS in clone app development to offer location-based services, such as nearest shop locations or location-specific content. ",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "API Integration",
      text:
        " Our clone apps provide connectivity with third-party services and platforms through APIs for higher functionality and usability.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Customizable UI/UX Design",
      text:
        "Our clone app developers offer versatile user interfaces that can be tailored to match specific branding.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Scalable Architecture",
      text:
        "We create viable clone script apps with expanded functionality and handle more users without sacrificing performance. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Cross-Platform Compatibility",
      text:
        " We develop cloner apps suitable to different operating systems, like iOS, android, and web, to enhance user experience. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Multi-language Support ",
      text:
        " Our clone phone app development solutions support multiple languages, broadening the user base across different regions.",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/mobile_clone_app/icons/01.png",
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
      img: "/mobile_clone_app/icons/02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Customization Strategy  ",
    },
    {
      img: "/mobile_clone_app/icons/03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Clone App Design ",
    },
  ];

  const DevelopmentProcess_b = [
    
  
    {
      img: "/mobile_clone_app/icons/06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Deployment ",
    },
    {
      img: "/mobile_clone_app/icons/05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "QA & Testing ",
    },
    {
      img: "/mobile_clone_app/icons/04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Development Phase",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/mobile_clone_app/icons/07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Support & Maintenance",
    },
    {
      img: "/mobile_clone_app/icons/08.png",
      svg_cls: "d-none",
      add_class: "opacity-0",
      columns: "col-sm-6 col-md-4 ",
      heading: "Crypto Exchange Implementation",
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

  const Crafting = [
    {
      img: "/mobile_clone_app/icons/crypto_ex01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Food and Beverage ",
      text:
        "We offer clone app development for food delivery, replicating successful platforms like Zomato for efficient management for businesses.",
    },
    {
      img: "/mobile_clone_app/icons/crypto_ex02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Ride-Hailing",
      text:
        "We create ride-hailing clone apps based on Uber with real-time tracking and secure payment integration to provide a reliable service.",
    },
    {
      img: "/mobile_clone_app/icons/crypto_ex03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Social Networking",
      text:
        "Our clone app development solutions utilize Onlyfans clone script and Tinder clone app scripts to provide interactive platforms.",
    },
    {
      img: "/mobile_clone_app/icons/crypto_ex04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "E-commerce",
      text:
        " We provide e-commerce clone scripts to create seamless mobile apps with product listings and shopping cart features, making online retail profitable.",
    },
    {
      img: "/mobile_clone_app/icons/crypto_ex05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Online Learning ",
      text:
        "Our mobile app developers create online learning cloner apps to make education interactive for both instructors and learners.",
    },
    {
      img: "/mobile_clone_app/icons/crypto_ex06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Health & Fitness ",
      text:
        "We craft fitness clone apps containing workout tracking and fitness plans to help users maintain a healthy lifestyle with ease.",
    },
    {
      img: "/mobile_clone_app/icons/crypto_ex07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate ",
      text:
        "Our clone app development team offers pre-built solutions to develop real estate apps, simplifying the property search process.",
    },
    {
      img: "/mobile_clone_app/icons/crypto_ex08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Grocery Delivery ",
      text:
        "We develop grocery delivery clone apps with features like product search and order tracking to make grocery shopping hassle-free.",
      // background: "/cryptwalletImg/wallet_features.png",
    },
    {
      img: "/mobile_clone_app/icons/crypto_ex09.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Event Management ",
      text:
        "We render AI powered readymade clone scripts to build event management clone apps, helping organizers manage events efficiently.",
    },
    {
      img: "/mobile_clone_app/icons/crypto_ex10.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Logistics & Delivery  ",
      text:
        " We create logistics and delivery clone apps for efficient delivery management for businesses and convenience for customers.",
    },

  ];



  const AboutLbm = [
    {
      img: "/mobile_clone_app/icons/cions_01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Expert Team",
      text:
        "We have more than 200 mobile app developers with extensive proficiency in building robust cloner apps that exceed industry standards.  ",
    },
    {
      img: "/mobile_clone_app/icons/cions_02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Clone App Script ",
      text:
        " We provide reliable mobile app clone scripts to ensure your app operates smoothly and keeps you ahead of the competitive curve. ",
    },
    {
      img: "/mobile_clone_app/icons/cions_03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "White Label Solutions",
      text:
        "Our white-label clone app development solutions offer complete customization for elevating your business. ",
    },
    {
      img: "/mobile_clone_app/icons/cions_04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "User-Centric Approach",
      text:
        " We focus on creating apps using custom clone scripts that prioritize user needs and preferences, enhancing the overall user experience.",
    },
    {
      img: "/mobile_clone_app/icons/cions_05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "User-Friendly Design",
      text:
        "Our clone app designers implement adaptable interfaces in clone apps to enhance engagement, making your app accessible to a wide audience.",
    },
    {
      img: "/mobile_clone_app/icons/cions_06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Customized Solutions",
      text:
        " We tailor our clone app development with unique features that align with your goals and market needs, ensuring a personalized solution.",
    },
    {
        img: "/mobile_clone_app/icons/cions_01.png",
        svg_cls: "d-none",
        add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
        columns: "col-sm-6 col-lg-4 mb-4",
        p_opacity: "",
        custome_col_a: "col-2",
        heading: "Advanced Technology ",
        text:
          "Our clone app development integrates cutting-edge tools using the latest technologies to deliver secure cloner apps.",
      },
  ];

  const ClientData_aa = [
    {
      clientName: "Daniel Brown",
      text:
        "We selected LBM to create a mobile app using the Zomato clone script. Their team customized and integrated the app, including all the essential features. The support team was responsive, ensuring our launch went smoothly.",
    },
    {
      clientName: "Grace Taylor",
      text:
        "Our experience with LBM for taxi booking clone app creation was fantastic. They set up the app and provided seamless functionalities. Our app ran smoothly, and their customer support was exceptional.",
    },
    {
      clientName: "Lucas Martinez",
      text:
        "LBM Solutions offered cost-effective solutions for our social media clone app development. They followed a straightforward process from customization to launch. The support team was always available to help and built a convenient social media platform ",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Aria Young",
      text:
        "The development team of LBM turned our concept into a robust clone app. They gave proper attention to our project, which made the entire process smooth and effective. The finished product perfectly aligned with our business needs.",
    },
    {
      clientName: "Noah Martin",
      text:
        "We were impressed by the expertise of LBM for our custom clone app development. The developers were highly skilled and extremely responsive to our needs. They designed a high-quality app that met our expectations.",
    },
    {
      clientName: "Ella Wright",
      text:
        " The level of expertise shown by the developers at LBM Solutions was admirable. They delivered a well-designed, adaptable app that enhanced user engagement and satisfaction.",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is a Clone App?",
      body:
        "A clone app is a replica of an existing application, which is rebranded and customized to serve new functions while maintaining the original app's core features.",
    },
    {
      eventKey: "1",
      header: "How much does it cost to clone an app?",
      body:
        "The cost to clone an app varies widely, ranging from $10,000 to $50,000, depending on the complexity, features, and customization required.",
    },
    {
      eventKey: "2",
      header: "How to create a clone app? ",
      body:
        "A clone app is created using different phases. In these phases, the original app's key features are recognized, a similar interface is designed, and the app is customized to fit new requirements through coding and development.",
    },
    {
      eventKey: "3",
      header:
        "Are cloned apps safe?",
      body:
        "Yes, cloned apps are safe if they are developed by reputable companies adhering to security standards. However, unauthorized clones may pose security risks and violate copyright laws.Create High-Quality Clone Apps Tailored to Your Needs, Leveraging Custom Clone Scripts with Us!",
    },
    {
      eventKey: "4",
      header: "Expertise ",
      body:
        "Our clone app developers specialize in clone app development and meeting specific needs and industry trends.",
    },
    {
      eventKey: "5",
      header: "Ongoing Support ",
      body:
        "Our clone app development team is dedicated to providing reliable, responsive service, ensuring your app remains functional.",
    },
    {
      eventKey: "6",
      header: "Tailored Solutions ",
      body:
        "We develop clone phone apps to match your unique business requirements, customizing features and functionalities.",
    },

  ];

  const sectionsData = [
    {
      heading: "Our Skilled Mobile App Developers Create Advanced Cloner App For You ",
      paraText:
        "Recognized as the best clone app development company, our team consists of 50+ veteran mobile app developers. We excel in creating top-notch clone scripts and clone phone apps tailored to your requirements.",
        imgSrc: "/mobile_clone_app/teach_img.png",
      imgAlt: "our app developers builds advance cloner app",
    },
  ];
  const sectionsData_a = [
    {
      heading: "Our Tech Stack Approach to Clone Phone App Development",
      paraText:
        "We utilize innovative programming languages and mobile app development platforms to create secure and efficient clone apps using iOS mobile clone scripts. Our cloner apps ensure high performance to meet our clients' diverse needs.",
      imgSrc: "/mobile_clone_app/teach_img_a.png",
      imgAlt: "advance tech stack for clone app development",
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
                  textA="Specialized On-Demand Clone App"
                  clrtext="Development Company"
                  textB=""
                  // heading="heading_class"
                  heading="banner_h "
                />
                <BannerText text="We provide expert clone app development solutions, delivering the best clone scripts for your business needs." />

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
                  src="/mobile_clone_app/banner.png"
                  alt="on-demand cloner app development company "
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
            <div className="col-sm-10">
              <div className="inner_text">
                <Heading_h2
                  textA="We Have Clone App Solutions"
                  clrtext="Designed to Fit Your Business Needs "
                  textB=" "
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="We offer comprehensive clone app development services, providing advanced clone scripts designed to enhance your business operations with flawless functionality and innovative features, ensuring a high-performance experience."
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


      <section className="devel_process">
        <div className="container">
          <div className="row mb-4 mb-lg-5 ">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="A Look at Our  "
                  clrtext="Clone Phone App Development Process"
                  textB=""
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="Our expert clone app developers follow a comprehensive clone app development strategy to build user-friendly apps, utilizing iOS and mobile clone scripts. We provide customized, pre-built solutions for clone phone apps that meet your unique business needs."
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
          <div className="row">
            <div className="col-12">
              <Heading_h2
                textA=" Why Clone Apps Matter for  "
                clrtext="Your Business/Startup Growth?"
                textB=""
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0 "
              />

              <ParaText
                f_custome=""
                para_text="At the forefront of clone app development, we enhance business growth through clone app development, offering customizable solutions. We use readymade clone scripts to deliver scalable apps, streamlining your startup’s path to success."
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

      {/* <TechSection /> */}
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
                  textA="We Provide"
                  clrtext="Clone App Development Services"
                  textB="for Different Industries"
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="At LBM Solutions, we specialize in tailored e-commerce clone script apps for various industries. Our skilled mobile app designers and developers create customized clone apps that replicate features of existing apps while incorporating unique enhancements."
                />
              </div>
            </div>
          </div>
          <div className="row ">
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
                  textA="Why Choose Us As"
                  clrtext="Your Clone App Development Company?"
                  textB=""
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="Being a leading USA-based clone app development company, we combine advanced technology to provide clone app development services. We offer efficient scripts, white-label options, and on-time project delivery, depending on the client’s needs.  "
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
              <ParaText para_text="We have experience over 10 years and have delivered countless successful clone apps. Our collaborative team makes clients feel like family. We consistently receive praise for exceptional functionality and flawless design of our clone apps developed by our team. Let’s see how our services transform diverse businesses." />
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

export default MobileAppCloneScript;
