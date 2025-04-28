"use client";
import React, { useRef } from "react";

import Heading from "../../app/components/Heading";
import Heading_h2 from "../../app/components/Heading_h2";

import ParaText from "../components/ParaText";
import BannerText from "../components/BannerText";

import Commonbttn from "../../app/components/CommonBtn";

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
      heading: "Meet Your Strategic Software Development Partner ",
      paraText:
        "Whether you're a startup seeking MVP development or an enterprise requiring scalable platforms, our team of 200+ developers delivers custom software with enterprise-grade security that fuels business growth. ",
      imgSrc: "/software_dev_Page/teach_img.png",
      imgAlt: "trust our software development experts",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "CRM Software Development",
      text:
        "Our software solutions transform customer relationships with AI, tailored to your sales, marketing, and support workflows.",
      isLink: true,
      linkUrl: "/custom-crm-software-development   ",
    },

    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Blockchain MLM Software Development ",
      text:
        " Build interoperable",
        LinkHref : "/blockchain-development-company",
        LinkData:" blockchains,",
        text1: "on Ethereum, Hyperledger, or Solana with smart contracts and crypto payment gateways.",
    
      },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Offshore Software Development",
      text:
        " Our software developers deliver customized solutions for startups and Fortune 500s alike, reducing costs and overheads.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Enterprise Software Development",
      text:
        "We build legacy systems with cloud-based ERP, supply chain management, and data analytics platforms, enhancing business efficiency.  ",
      isLink: true,
      // linkUrl: "/mobile-app-development-services",
      linkUrl: "#",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover ",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Mobile App Software Development ",
      text:
        "We craft customized ",
        LinkHref : "/mobile-app-development-services",
        LinkData:" iOS/Android apps,",
        text1: "with cross-platform frameworks like Flutter or React Native for faster delivery.",
      },
  ];

  const BasicFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Tailored Solutions ",
      text:
        "We develop softwares which align with your workflows and help enterprises eliminate inefficiencies and automate 70% of manual tasks.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Exclusive Ownership ",
      text:
        "Our software creation solutions offer full IP rights, code control, and agile scalability without any vendor lock-ins and hidden fees.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Improved Customer Experience ",
      text:
        "We introduce personalized UX, real-time support, and AI-powered recommendations to craft software, which helps boost user retention. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Scalability  ",
      text:
        "Our solutions utilize modular architecture that scales with your business, from startup MVPs to enterprise-grade global deployments.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-md-4",
      p_opacity: "opacity-100",
      heading: "Enhanced Security",
      text:
        "We prioritize robust security measures with compliant frameworks, penetration testing, and encryption tools to safeguard business data 24/7.",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Modular Architecture ",
      text:
        "Our microservices design lets startups add features fast, upgrade their legacy systems while meeting evolving business needs and boosting ROI.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "API Integrations ",
      text:
        "Our extensive API integrations facilitate to connect your CRM, ERP, payment gateways, and other platforms for automated workflows. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Mobile Responsiveness   ",
      text:
        "We help businesses build software using Flutter/React Native, enabling offline sync and AR features with 95% device compatibility.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Blockchain Integration  ",
      text:
        "Our methodologies adopt blockchain to create audit-ready smart contracts, crypto payments, and tamper-proof ledgers for fintech/MLM startups.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Real-Time Processing",
      text:
        "our services deliver software with real-time processing abilities for businesses that require immediate data processing and output, such as financial trading platforms.",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/software_dev_Page/icons/process01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Understanding Needs",
    },
    {
      img: "/software_dev_Page/icons/process02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Analysis and Planning ",
    },
    {
      img: "/software_dev_Page/icons/process03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "UI/UX Design",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/software_dev_Page/icons/process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Software Development",
    },
    {
      img: "/software_dev_Page/icons/process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Minimum viable product  ",
    },
    {
      img: "/software_dev_Page/icons/process06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Product Specification",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/software_dev_Page/icons/process07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Testing & Launch",
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

  const Crafting = [
    {
      img: "/software_dev_Page/icons/soft01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Banking  ",
      text:
        " Our software solutions simplify transactions, automate operations, maintain compliance, and deliver tailored banking experiences to enhance user satisfaction.",
      // background: "/cryptwalletImg/wallet_features.png",
    },
    {
      img: "/software_dev_Page/icons/soft02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Healthcare  ",
      text:
        "We develop custom software for managing patient records, scheduling appointments, enabling telemedicine, and integrating seamlessly with existing healthcare systems.",
    },
    {
      img: "/software_dev_Page/icons/soft03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Education ",
      text:
        "Custom software helps educational institutions manage courses, student data, remote learning, and administrative processes, improving operational efficiency.",
    },
    {
      img: "/software_dev_Page/icons/soft04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Supply Chain",
      text:
        "We automate supply chain management, covering inventory control, order processing, logistics, and tracking to optimize your business operations. ",
    },
    {
      img: "/software_dev_Page/icons/soft05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Logistics  ",
      text:
        "Our software solutions improve route optimization, fleet management, real-time tracking, and scheduling, ensuring smoother logistics operations.",
    },
    {
      img: "/software_dev_Page/icons/soft06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate ",
      text:
        "We offer software that handles property listings, client management, transactions, and virtual property tours, improving client engagement. ",
    },
    {
      img: "/software_dev_Page/icons/soft07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Fintech  ",
      text:
        "We build innovative payment solutions leveraging blockchain, ",
   
        LinkHref : "/smart-contract-development-company",
        LinkData:" smart contracts,",
        text1: "and secure transactions, offering faster, more efficient financial services.",
         },
    {
      img: "/software_dev_Page/icons/soft08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Manufacturing ",
      text:
        "Our solutions automate production processes, inventory management, and quality control to streamline operations and improve productivity.",
      // background: "/cryptwalletImg/wallet_features.png",
    },
    {
      img: "/software_dev_Page/icons/soft09.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Hospitality ",
      text:
        "Custom software enables seamless booking, customer relationship management, event coordination, and integration with tourism services for a flawless experience.",
    },
    {
      img: "/software_dev_Page/icons/soft10.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Technology and IT   ",
      text:
        "Our custom software enhances project management, process automation, performance tracking, and IT service management, driving efficiency.",
    },
    {
      img: "/software_dev_Page/icons/soft12.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Startups   ",
      text:
        "We empower startups with agile software development, helping them iterate quickly and adapt to market demands with scalable, innovative solutions.",
    },
  ];

  const AboutLbm = [
    {
      img: "/software_dev_Page/icons/icon01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Expertise ",
      text:
        "With over a decade of experience, our team delivers powerful software solutions tailored to your business’s exact needs. ",
    },
    {
      img: "/software_dev_Page/icons/icon02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Security Solutions",
      text:
        "We place a high priority on security, using advanced encryption techniques and thorough risk assessments to protect your software and sensitive data. ",
    },
    {
      img: "/software_dev_Page/icons/icon03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "End-to-end Development",
      text:
        "From ideation to deployment, we provide complete custom software development services, with continuous support throughout the journey.",
    },
    {
      img: "/software_dev_Page/icons/icon04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Customized Solutions",
      text:
        ":Our solutions are built to scale and are designed to address the distinct needs of startups, mid-sized businesses, and large enterprises.",
    },
    {
      img: "/software_dev_Page/icons/icon05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Quality Assurance ",
      text:
        "We apply rigorous testing methods to ensure every software solution meets the highest standards for performance and reliability.",
    },
    {
      img: "/software_dev_Page/icons/icon06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Cutting-Edge Technology ",
      text:
        "We stay ahead of the curve, incorporating the latest technologies such as AI, AR, VR, and blockchain to bring innovative ideas to life.",
    },
    {
      img: "/software_dev_Page/icons/icon07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Responsive Support",
      text:
        "Our dedicated support team is available 24/7 to ensure that your software operates smoothly and efficiently post-launch.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Cassandra Diaz",
      text:
        "One of the standout qualities of LBM is its excellent supportive skills. They kept us updated at every stage of the software development, addressed our concerns, and were always available to discuss our needs. ",
    },
    {
      clientName: "Benjamin Price",
      text:
        "We were impressed by LBM's project management capabilities. In the entire software development process, they ensured that everything stayed on track. They helped us meet our deadlines and stay within budget",
    },
    {
      clientName: "Chelsea Collins",
      text:
        "LBM Solutions rendered quality work for our custom software. They paid close attention to every aspect of the project, from design to implementation. The custom real estate software developed by them met our demands ",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Samuel Powell",
      text:
        " The professionalism, expertise, and commitment of LBM’s team to customer satisfaction set them apart from other software development companies. We would highly recommend them to anyone in need of custom software solutions.",
    },
    {
      clientName: "Lindsay Morgan",
      text:
        "Even after the launch of our project, LBM Solutions continued to impress us with its exceptional support. They were quick to address any post-launch issues and provided timely updates and maintenance. Their dedication towards our project was truly commendable",
    },
    {
      clientName: "Jonathan Ross",
      text:
        "Working with LBM Solutions was amazing! Their team has deep expertise in various programming languages and technologies for developing customized software solutions. ",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is the Cost of Custom Software Development for Startups?",
      body:
        "The cost of custom software development varies based on project scope, complexity, features, technology stack, and timeline. Each solution is priced according to the specific requirements and goals of your startup.",
    },
    {
      eventKey: "1",
      header: "How Long Does It Take to Build Custom Software?",
      body:
        "The timeline for custom software development typically ranges from several months to a year, depending on complexity, features, and technology. More intricate projects may require additional time to ensure quality and scalability.",
    },
    {
      eventKey: "2",
      header:
        "Can I hire a dedicated software development engineer for custom software  development?",
      body:
        "Absolutely! Hiring a dedicated software engineer is perfect for complex projects that need focused attention, continuous development, and flexibility to adapt to evolving requirements throughout the software lifecycle.",
    },
    {
      eventKey: "3",
      header: "What is the most popular methodology for software development?",
      body:
        "Agile is the most popular methodology for custom software development, known for its iterative approach, flexibility, and emphasis on constant feedback, enabling faster delivery and continuous enhancement of software features.",
    },
    {
      eventKey: "4",
      header: "What is the difference between SDLC and Agile?",
      body:
        "SDLC is a structured, step-by-step process for software development, while Agile is an adaptable framework within SDLC that prioritizes rapid delivery, flexibility, and frequent adjustments based on feedback and changing needs.",
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
                  textA="AI-Driven Software "
                  clrtext="Development Company to Scale "
                  textB="Your Startup"
                  heading="banner_h"
                />
                <BannerText
                  text="Being a premier custom software development agency, we help 200+ businesses grow with innovative tech solutions.
"
                />

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
                  src="/software_dev_Page/banner.png"
                  alt="grow business with our custom software development"
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
                  textA="Our Custom "
                  clrtext="Software Development"
                  textB="Services"
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="At LBM Solutions, our major objective is to address your business challenges and deliver reliable software solutions that improve user experiences and ensure sustainable growth in today’s competitive market."
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

      <section className="cta">
        <div className="container">
          <Cta />
        </div>
      </section>

      <section className="wallet_features bg-black">
        <div className="container">
          <div className="row  ">
            <div className="col-12 ">
              <Heading_h2
                textA="How Our  "
                clrtext="Custom Software Solution Deliver "
                textB="10X ROI  for Clients"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0 text-white"
              />

              <ParaText
                f_custome="text-white"
                para_text="Our software development services optimze workflows, reduce costs, accelerate processes, and deliver adaptable, future-proof software to maximize your profits, support consistent business success and competitive market advantage."
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

      <section className="devel_process">
        <div className="container">
          <div className="row mb-4 mb-lg-5 ">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Our 6-Step Agile"
                  clrtext="Software Development Process"
                  textB="for Startups"
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="We adopt a structured approach to create user-centric software solutions after understanding business needs and prioritizing features, which ensure flexibility and long-term success for enterprises."
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

      <section className="crafting">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Custom Software"
                  clrtext="Development for Every"
                  textB="Startup Industry"
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Custom software development plays a crucial role in solving industry-specific challenges. Our solutions are designed to meet the unique demands of each sector, driving growth and efficiency across various business operations."
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
                  textA="Why Are We the No.1 "
                  clrtext="Software Development Company in USA?"
                  textB=" "
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="LBM Solutions is a renowned CRM software development company, trusted by startups and enterprises alike. Our custom software solutions offer scalability, performance, and the flexibility needed to meet your specific business challenges."
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
              <ParaText para_text="With the successful delivery of several customized software, our clients love working with us! Let’s read what our clients said about our custom software solutions which were provided them to fulfil their business needs." />
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
