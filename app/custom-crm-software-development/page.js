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
      heading: "Custom CRM Solutions Development",
      text:
        "Our CRM developers craft customized CRM software, such as Perfex CRM and E-monitrix, to grow the customer base.",
   
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Cloud Based CRM Development",
      text:
        "We excel in crafting CRM solutions based on cloud technology, providing scalable and remotely accessible tools. ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "CRM Mobile App Development ",
      text:
        "Our team creates customized applications for Android and iOS that enable to track sales leads and enhance business productivity.",
        isLink: true,
        linkUrl: "/mobile-app-development-services",

    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "CRM Integration & Migration",
      text:
        "Our CRM software development process combines CRM systems with existing tools and transfers data to enhance functionality.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "CRM Software Maintenance",
      text:
        "We render updates, bug fixes, data management, and user support to ensure optimal performance and customer satisfaction.",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/crm_page/icons/process_01.png",
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
      img: "/crm_page/icons/process_02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Conceptualization",
    },
    {
      img: "/crm_page/icons/process_03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Design and Customization ",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/crm_page/icons/process_06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Testing & QA ",
    },
    
    {
      img: "/crm_page/icons/process_05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "CRM Development",
    },
    {
      img: "/crm_page/icons/process_04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Integration  Phase",
    },
    
  ];

  const DevelopmentProcess_c = [
    {
      img: "/crm_page/icons/process_07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Deployment",
    },
    {
      img: "/crm_page/icons/08.png",
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

  const BasicFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Lead Management",
      text:
        " We develop custom CRM software with a sales pipeline to track and manage leads, which optimizes sales processes and improves conversion rates.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Sales Automation",
      text:
        "Our business development CRM software solutions automate repetitive tasks such as sending emails and updating records to improve efficiency. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Customer Service",
      text:
        "We deploy tools in CRM software development for managing customer inquiries, complaints, and support tickets to enhance customer satisfaction.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Workflow Automation",
      text:
        "Our custom CRM software solutions lead to automating business processes and workflows to reduce errors and ensure consistency.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-md-4",
      p_opacity: "opacity-100",
      heading: "Employee Tracking ",
      text:
        "Our CRM software allows for tracking employee activity, evaluating performance, and improving productivity with task management tools.",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Customizable Data Fields",
      text:
        "Custom CRM software allows to define and customize data fields to capture specific information, ensuring flexibility in data management.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "API Integration",
      text:
        "We provide integration with other applications through APIs, which enable data exchange and automation across the organization's technology stack.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Scalability ",
      text:
        "Our CRM software development services ensure that the software can handle data volumes and user loads as the business expands.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Mobile Accessibility",
      text:
        "Our CRM developers render adaptable mobile apps to enable users to access CRM functionality on the go, improving productivity.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "AI-based solutions",
      text:
        " We incorporate AI capabilities to analyze data, predict customer behavior and automate tasks, enhancing decision-making and efficiency.",
    },
  ];
  const sectionsData_a = [
    {
      heading: "Our Unique Tech Stack Approach to Custom CRM Development",
      paraText:
        "Having expertise in advanced technologies, our CRM developers are capable of providing top-notch customized CRM software development solutions, ensuring optimal performance and workload management. ",
      imgSrc: "/crm_page/teach_img.webp",
      imgAlt: "advanced crm software developement team",
    },
  ];

  const Crafting = [
    {
      img: "/crm_page/icons/sources_01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Start-up",
      text:
        "Our CRM software development solutions help start-ups in customer acquisition, engagement, and retention, driving business growth.",
    },
    {
      img: "/crm_page/icons/sources_02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Banking",
      text:
        "CRM in finance manages client relationships, tracks financial transactions, and ensures regulatory compliance for improved client service.",
    },
    {
      img: "/crm_page/icons/sources_03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Healthcare ",
      text:
        "We craft healthcare CRM to track patient information, appointments, and interactions, improving care coordination, patient engagement, and operational efficiency",
    },
    {
      img: "/crm_page/icons/sources_04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Education",
      text:
        "Our CRM solutions for education manage student information, enrollment, and communication to improve administrative efficiency.",
    },
    {
      img: "/crm_page/icons/sources_05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Manufacturing ",
      text:
        "Our CRM software development services optimize customer orders, inventory management, and production processes for customer satisfaction.",
    },
    {
      img: "/crm_page/icons/sources_06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Telecommunications",
      text:
        "Custom CRM software manages customer accounts, service requests, and marketing campaigns to drive revenue growth.",
    },
    {
      img: "/crm_page/icons/sources_07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate",
      text:
        " Our CRM software services in real estate help manage property listings, client relationships, and sales processes to augment operations.",
    },
    {
      img: "/crm_page/icons/sources_08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Professional Services",
      text:
        "We create customized software enable to manage client relationships, project timelines, and billing processes to improve service delivery.",
      // background: "/cryptwalletImg/wallet_features.png",
    },
    {
      img: "/crm_page/icons/sources_09.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Legal ",
      text:
        "CRM systems in law firms help manage client relationships, track cases, and streamline communications, improving efficiency and client satisfaction.",
    },
    {
      img: "/crm_page/icons/sources_10.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Travel ",
      text:
        "Our CRM solutions allow travel agenciesto track bookings and personalize travel experiences, increasing customer loyalty and referrals.",
    },
  ];

  const AboutLbm = [
    {
      img: "/crm_page/icons/why01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Expertise ",
      text:
        "With a decade of experience in CRM software development, our CRM developers have a deep understanding of CRM systems tailored to your business needs. ",
    },
    {
      img: "/crm_page/icons/why02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Customized Solutions",
      text:
        "We offer fully customized CRM solutions that are designed to meet your specific requirements and goals of business.",
    },
    {
      img: "/crm_page/icons/why03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Seamless Integration ",
      text:
        " We specialize in integrating CRM solutions with your existing systems and processes to ensure minimal disruption to your operations.",
    },
    {
      img: "/crm_page/icons/why04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "End-to-end Solutions",
      text:
        "Our CRM software development team ensures that your CRM solution is always up-to-date with the latest trends and technologies.",
    },
    {
      img: "/crm_page/icons/why05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Client-Centric Approach ",
      text:
        "We prioritize the needs and goals of clients to develop customized CRM software, that aligns with business objectives.",
    },
    {
      img: "/crm_page/icons/why06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Security First Approach",
      text:
        "Our custom CRM software is built with robust security measures to confirm that your data is protected at all times.",
    },
    {
      img: "/crm_page/icons/why07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Affordable Pricing",
      text:
        " We provide comprehensive CRM software development solutions that are accessible to businesses of all sizes without compromising on quality.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Riva Morris",
      text:
        "Working with LBM Solutions for our healthcare CRM software proved the best choice ever. Their team tailored customized CRM software solutions to manage patient data, schedule appointments, and communication. The team's expertise and commitment to our needs were exceptional.",
    },
    {
      clientName: "Lester Jenkins",
      text:
        " LBM transformed our education system with their CRM software development services. This software assisted us in managing student data and interactions easily. Their team's support and personalized approach made the process smooth.",
    },
    {
      clientName: "Stacey Sanchez",
      text:
        " We wanted a customized CRM software for our start-up company to manage all the data of our customers. The team at LBM provided us with extensive CRM software that maximized leads, managed customer data, helping us focus on growth.",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Leroy Coleman",
      text:
        "We hired LBM Solutions for our CRM mobile app development. Their team understood our needs and delivered a tailored mobile app solution, which enhanced our operations and customer satisfaction.",
    },
    {
      clientName: "Teresa Russell",
      text:
        "We were greatly impressed with the expertise of LBM’s team in customer satisfaction. The CRM software they delivered transformed how we managed our business and interacted with our customers. ",
    },
    {
      clientName: "Clifford Taylor",
      text:
        "LBM Solutions built outstanding CRM software for our company. That CRM software was customized to fit our unique requirements, improving our sales process and customer engagement.",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What is a CRM software system?",
      body:
        "A CRM (Customer Relationship Management) software system is a tool used by businesses to manage interactions with current and potential customers, track sales, and streamline marketing and customer service processes.",
    },
    {
      eventKey: "1",
      header: "What are the three types of CRM software?",
      body:
        "The three types of CRM software are operational CRM for sales, marketing, and service automation, analytical CRM for analyzing customer data, and collaborative CRM for improved customer interactions.",
    },
    {
      eventKey: "2",
      header: "How long does it take to build a CRM?",
      body:
        "Developing a CRM can take several weeks to months, depending on the complexity and customization required for the specific business needs.",
    },
    {
      eventKey: "3",
      header:
        "How much does it cost to build a CRM?",
      body:
        "The cost to build a CRM varies widely based on features, customization, and development time. It can range from thousands to millions of dollars for large-scale, enterprise-level CRMs.",
    },
    {
      eventKey: "4",
      header: "Do you need a CRM for a small business?",
      body:
        "Yes, a CRM can benefit small businesses by organizing customer data, improving communication, and enhancing customer relationships, leading to increased efficiency and sales growth.",
    },
    {
      eventKey: "5",
      header: "What programming language is used in CRM?",
      body:
        "The commonly used programming languages in CRM development include JavaScript, Java, Python, and PHP, depending on the technology stack and requirements of the CRM system.",
    },
  ];

  const sectionsData = [
    {
      heading:
        "Our Dedicated Software Development Team Built Advanced CRM Software",
      paraText1:
        "Our CRM developers are proficient in providing top custom CRM ",
        paraText:"services according to client requirements to enhance business efficiency, streamline processes, and improve client interactions.",
        Link_href:"/custom-software-development-services",
        Link_data:" software development",
        imgSrc: "/crm_page/teach_img.webp",
      imgAlt: "customized crm development with our unique tech stack",
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
                  textA="Business's Specific "
                  clrtext="Custom CRM Software Development"
                  textB=""
                  // heading="heading_class"
                  heading="banner_h "
                />
                <BannerText text="We are a prominent CRM software development company that optimizes customer relationship management and business efficiency. " />

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
                  src="/crm_page/banner.png"
                  alt="custom crm software development for your business"
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
                  textA="Our CRM "
                  clrtext="Software Development Services"
                  textB=""
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text="Being a reputable CRM software development company, we provide end-to-end solutions tailored to your business needs, offering expert advice and creating cost-effective custom CRM software to manage customer relationships and optimize sales processes."
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

      <section className="devel_process">
        <div className="container">
          <div className="row mb-4 mb-lg-5 ">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="A Look at "
                  clrtext="Our Secure Software Development Process"
                  textB=""
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="After understanding business needs, our CRM developers deploy end-to-end custom CRM development approaches to create tailored solutions for startups and industries, which enhance customer relationships, manage queries, and analyze data."
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
                textA="How Our "
                clrtext="CRM Software Enhances Your Business Operations"
                textB=""
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0 "
              />

              <ParaText
                f_custome=""
                para_text="Our CRM software development process utilizes innovative software development tools to craft customized CRM software with essential features for businesses to manage customer relationships and boost sales effectively."
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
                  textA="Our Software "
                  clrtext=" Application Development Covers All Industries "
                  textB=""
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="We offer flexible CRM solutions that cater to different domains and are tailored to meet specific requirements, benefiting startups and corporations with customer relationship management, streamlined operations, and enhanced productivity. "
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
                  textA=" What Sets Us Apart as a  "
                  clrtext="CRM Software Development Company?"
                  textB=""
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="As a leading USA based CRM software development company with 200+ CRM developers,  we craft solutions that align with your business goals. Our dedicated team delivers high-quality, innovative CRM systems to drive success.  "
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
              <ParaText para_text="As a top CRM software development service provider, we delivered numerous CRM software according to the client requirement. Let’s see how our tailored solutions have enhanced customer relationships, streamlined processes, and boosted sales for various businesses" />
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
