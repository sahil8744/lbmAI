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
import CounterCard from "../components/CounterCard "

const DigitalMarketing = () => {
  const bottomSectionRef = useRef(null);

  const sectionsData = [
    {
      dynamic_col: "col-xl-5",
      custome_hd:"mt-0",
      heading:
        "Hire Our Dedicated Digital Marketing Specialist for Data-Driven Results",
      paraText:
        "We have a team of 100+ digital marketing experts who specialize in enhancing online traffic, generating leads, and increasing revenue through growth-focused marketing strategies, elevating your business growth. ",
      imgSrc: "/digital_marketing_agency/teach_img.png",
      imgAlt: "teach_img",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Search Engine Optimization Services ",
      text:
        " We enhance your SERP visibility through comprehensive keyword research and on-page and off-page optimization, driving targeted traffic.",
      isLink: true,
      linkUrl: "javascript:void(0)",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Pay Per Click (PPC) Management",
      text:
        "Our PPC experts design targeted ad campaigns to maximize profits and monitor ROI for lead generation, raising revenue.",
      isLink: true,
      linkUrl: "javascript:void(0)",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Content Marketing & Copywriting Services ",
      text:
        " We adopt SEO-optimized content strategy to enhance your online presence, drive organic traffic, and build industry authority.",
      isLink: true,
      linkUrl: "javascript:void(0)",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Social Media Marketing Services ",
      text:
        "We offer organic and non-organic strategies from account set-up to analytics for engaging the community and enhancing online presence.",
      isLink: true,
      linkUrl: "javascript:void(0)",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Email Marketing Services",
      text:
        "Our experts create personalized email campaigns to engage subscribers, enhance deliverability, and drive conversions through strategic content.",
      isLink: true,
      linkUrl: "javascript:void(0)",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover pointer",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Google Business Profile Optimization",
      text:
        "We optimize your GBP to attract local customers and drive engagement through strategic information and keyword utilization.",
      isLink: true,
      linkUrl: "javascript:void(0)",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/digital_marketing_agency/process01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Analysis And Research ",
    },
    {
      img: "/digital_marketing_agency/process02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Strategy & Planning  ",
    },
    {
      img: "/digital_marketing_agency/process03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Content Creation ",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/digital_marketing_agency/process06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Reporting and Review ",
    },

    {
      img: "/digital_marketing_agency/process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Monitoring & Optimization ",
    },

    {
      img: "/digital_marketing_agency/process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Product Marketing",
    },
  ];

  const BasicFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Customized Strategies",
      text:
        "Our professional digital marketing services focus on custom strategies to ensure effective outreach and maximize your ROI.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Market Research ",
      text:
        "We conduct thorough market research to understand industry trends and customer preferences to develop strong strategies, driving results.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Brand Development",
      text:
        "Our marketing services prioritize establishing a strong online brand identity for customer loyalty through consistent posting.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Lead Generation",
      text:
        "We use targeted marketing strategies to attract and nurture potential customers, converting them into loyal clients.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Cost Efficiency",
      text:
        "We provide affordable digital marketing services to deliver measurable results through optimized strategies according to your objectives.",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Paid Advertising",
      text:
        " We implement custom digital marketing strategy to increase website traffic, reach specific demographics, and optimize return on ad spend.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Technical SEO ",
      text:
        "We utilize technical SEO practices to optimize your website and improve its speed, ensuring search engines easily crawl and index it.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Performance Tracking ",
      text:
        "Our experts use performance tracking tools to deliver real-time insights and data analysis for informed decision-making.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Retargeting Campaigns",
      text:
        "Our retargeting strategies help to reconnect with previous visitors and serve them tailored ads, increasing conversion rates",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Content Management",
      text:
        "We create valuable, relevant content to attract and retain customers, driving engagement and building authority within your industry.",
    },
  ];

  const Crafting = [
    {
      img: "/digital_marketing_agency/resouceses01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Ecommerce ",
      text:
        "Our e-commerce digital marketing solutions focus on driving sales and increasing brand loyalty through targeted campaigns for online stores.",
    },
    {
      img: "/digital_marketing_agency/resouceses02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Healthcare",
      text:
        "We create result-driven internet marketing strategies for healthcare businesses to ensure better patient outreach, reliability, and industry growth.",
    },
    {
      img: "/digital_marketing_agency/resouceses03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Technology",
      text:
        "Being a top web marketing company, we plan customized strategies for tech companies to enhance brand visibility and customer engagement.",
    },
    {
      img: "/digital_marketing_agency/resouceses04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate",
      text:
        "We offer real estate online marketing solutions designed to showcase properties visually and attract potential buyers and renters via targeted ads.",
    },
    {
      img: "/digital_marketing_agency/resouceses05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Banking & Finance",
      text:
        "Our marketing solutions for finance professionals enhance client relationships with SEO strategies to reach prospective clients.",
    },
    {
      img: "/digital_marketing_agency/resouceses06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Education",
      text:
        "Our targeted marketing services and online engagement strategies help educational institutions attract students and enhance enrollments.",
    },
    {
      img: "/digital_marketing_agency/resouceses07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Fitness  ",
      text:
        "We offer extensive healthcare digital marketing services to enhance patient engagement and improve accessibility across various platforms.",
    },
    {
      img: "/digital_marketing_agency/resouceses08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Travel ",
      text:
        "We help traveling agencies reach a broader audience, promoting unique experiences with engaging content and meta Ads across multiple platforms.",
    },
    {
      img: "/digital_marketing_agency/resouceses09.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Automotive",
      text:
        "We specialize in automotive digital marketing to drive dealership traffic and increase vehicle sales through a strategic online presence.",
    },
    {
      img: "/digital_marketing_agency/resouceses10.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Hospitality ",
      text:
        "Our marketing strategies include engaging content and social media marketing to increase bookings and customer loyalty.",
    },
    {
      img: "/digital_marketing_agency/resouceses11.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Retail",
      text:
        "Our SEO, PPC, and social media strategies assist retail industries in driving foot traffic and online sales for maximum impact.",
    },
  ];

  const AboutLbm = [
    {
      img: "/digital_marketing_agency/why01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Marketing Experts",
      text:
        "With 10+ years of experience, our digital marketing specialists have deep expertise in PPC, SEO, SMO, and ASO to drive measurable results.",
    },
    {
      img: "/digital_marketing_agency/why02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Data-Driven Approach ",
      text:
        "Our internet marketing services deliver targeted messages on the right platform. We analyze SWOT to create data-driven insights.",
    },
    {
      img: "/digital_marketing_agency/why03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Custom Framework",
      text:
        "Our marketing solutions cover every aspect of online growth, analyze strategies, set KPIs, define brand identity, and enhance customer experiences",
    },
    {
      img: "/digital_marketing_agency/why04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Omnichannel Personalization ",
      text:
        "We identify audience needs and create tailored strategies that attract customers, increase revenue, and strengthen brand loyalty.",
    },
    {
      img: "/digital_marketing_agency/why05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Campaign Evaluation",
      text:
        "Our experts track campaign metrics, analyze data, refine strategies, and enhance audience targeting to improve your financial success. ",
    },
    {
      img: "/digital_marketing_agency/why06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Proven Results",
      text:
        "With a history of successful campaigns, we consistently deliver measurable growth and impactful results for businesses like yours.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Ashley Turner",
      text:
        " We struggled with paid ads before, but the PPC expertise of LBM changed everything. Their every campaign targeted the right audience, generating high-quality leads. Our costs stayed low, and revenue increased.",
    },
    {
      clientName: "James Richardson",
      text:
        " Our website was lost in search results, and organic traffic barely existed. LBM took over, and within months, we ranked on the first page. Now, customers find us easily, and our business keeps growing.",
    },
    {
      clientName: "Lauren Walker",
      text:
        "LBM completely changed our social media presence. Before working with them, engagement was low, and our posts barely reached people. But, their SMO experts team created content that felt personal and sales increased by 50X! ",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Matthew Harris",
      text:
        " LBM’s marketing experts turned our boring email campaigns into powerful sales tools. They created messages that people read and responded to. Their strategies enhanced the open rates by 3X, and we started converting leads easily. ",
    },
    {
      clientName: "Olivia Scott",
      text:
        "LBM is the best digital marketing agency we’ve worked with. They handle everything: SEO, ads, emails—and deliver real results. Our brand has grown faster than we imagined, and their team always keeps us in the loop.",
    },
    {
      clientName: "Brandon Lewis",
      text:
        "The SEO strategies of LBM didn’t just improve our rankings; they gave our business an identity online. Their solutions brought in high-quality leads, and our organic traffic grew by 60%.",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "How To Choose Digital Marketing Agency?",
      body:
        "To choose a digital marketing agency, analyze their experience, read client reviews, check their services, and see if they understand your business goals. ",
    },
    {
      eventKey: "1",
      header: "How Much Do You Charge For Digital Marketing Services?",
      body:
        "Our digital marketing services are customized to meet client needs, as our pricing depends on the services selected, project scope, and duration.",
    },
    {
      eventKey: "2",
      header: "Is It Worth To Hire A Digital Marketing Agency?",
      body:
        "Yes, hiring a digital marketing agency can boost your online presence, save time, and provide expert insights. Their strategies drive more traffic, increase conversions, and deliver long-term success.",
    },
    {
      eventKey: "3",
      header: "How Much Is Digital Marketing For A Small Business?",
      body:
        "Digital marketing for a small business typically ranges from $500 to $5,000 per month. This cost may vary as per cost including the services you need (like SEO, social media, or PPC), expertise and the scope of your marketing goals. ",
    },
    {
      eventKey: "4",
      header:
        "What Is The Difference Between Digital And Traditional Marketing?",
      body:
        "Digital marketing utilizes online channels, while traditional marketing uses offline methods like print and broadcast. Digital marketing offers real-time engagement, measurable results, and broader audience reach.",
    },
    {
      eventKey: "5",
      header: "How Do I Hire A Digital Marketing Expert?",
      body:
        "Contact us to hire a digital marketing specialist, communicate your business goals to our experts, get introduced to top professionals within 24 hours, and start working with your chosen talent immediately.",
    },
  ];

  return (
    <>
      <section className="banner Digital_Marketing ">
        <div className="container">
          <div className="row flex-column-reverse flex-md-row align-items-center">
            <div className="col-md-7 mt-4 mt-md-0">
              <div className="inner_text">
                <Heading
                  textA="Brand Reimagined:"
                  clrtext="Digital Marketing Agency for"
                  textB=" Business Growth"
                  heading="banner_h"
                />
                <BannerText text="As an esteemed web marketing company, we deliver tailored digital marketing services to elevate your brand’s online presence." />


             <div className="d-none d-xl-block">   <CounterCard/></div>

                <div className="mt-4 mt-md-5 d-flex">
                  <div className="me-4">
                    <Commonbttn
                      btn_name=" Free Demo! "
                      path="/contact"
                      commonbtn="btn_cls"
                      img_cls="d-none"
                      add_cls="d-none"
                    />
                  </div>
                  <div className="">
                    <Commonbttn
                      btn_name="Expert talk"
                      path="/contact"
                      commonbtn="btn_cls"
                      img_cls="d-none"
                      add_cls="d-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9 col-sm-8 col-md-5 mx-auto ">
              <div className="img ">
                <img
                  src="/digital_marketing_agency/banner.png"
                  alt="banner"
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
      <div className="teachnology_sec">
        {sectionsData.map((section, index) => (
          <TechSection
            key={index}
            custome_hd={section.custome_hd}
            dynamic_col={section.dynamic_col}
            heading={section.heading}
            paraText={section.paraText}
            imgSrc={section.imgSrc}
            imgAlt={section.imgAlt}
          />
        ))}

        <style jsx>
          {`
            .teachnology_sec .inner_content h2.heading_h3 {
              margin-top: 0 !important;
            }
          `}
        </style>
      </div>

      <section className="crypt_wallet" ref={bottomSectionRef}>
        <div className="container">
          <div className="row ">
            <div className="col-sm-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Our  "
                  clrtext="Professional Digital Marketing  "
                  textB="Services"
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
                />
                <ParaText
                  f_custome=""
                  para_text1="Recognized as the best digital marketing agency for startups, our experts provide customized strategies and"
                  LinkData="website development"
                  LinkHref="/website-development"
                  para_text=" to elevate your brand reliability. Our internet marketing services help drive traffic and boost conversion rates."
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

      <section className="devel_process  digital_marketing_agency ">
        <div className="container">
          <div className="row mb-4 mb-lg-5 ">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA=""
                  clrtext="Our Unique Marketing Services Delivery"
                  textB="  Model for Your Project"
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="At the forefront of digital marketing, we deliver innovative strategies and data-driven insights to enhance brand recognition, connect with target audiences, and establish lasting relationships that lead to sustainable business growth."
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

          <div className="mt-4 mt-md-4 d-flex">
              <div className="me-4">
                <Commonbttn
                  btn_name="Hire our experts"
                  path="/contact"
                  commonbtn="btn_cls"
                  img_cls="d-none"
                  add_cls="d-none"
                />
              </div>
              <div className="">
                <Commonbttn
                  btn_name="Free Consultation"
                  path="/contact"
                  commonbtn="btn_cls"
                  img_cls="d-none"
                  add_cls="d-none"
                />
              </div>
            </div>
        </div>
      </section>

      <section className="wallet_features">
        <div className="container">
          <div className="row  ">
            <div className="col-12 ">
              <Heading_h2
                textA="How Our   "
                clrtext="Digital Marketing Strategy Propels"
                textB="Your Business In The Digital World?"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
              />

              <ParaText
                f_custome=""
                para_text="We offer complete digital marketing solutions to enhance brand loyalty and increase sales. Our digital market specialists help businesses adapt to market trends, improve customer satisfaction, and achieve measurable results in a competitive environment."
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
                  textA=""
                  clrtext="We Provide Marketing Services "
                  textB="For Different Industries "
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="As a prestigious USA-based digital marketing company, we provide tailored solutions across various sectors, including custom digital marketing for financial services to healthcare. We ensure that each client achieves their unique goals and maximizes their online potential."
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
                  textA="What Makes "
                  clrtext="LBM Solutions Stand Out as the Best   "
                  textB="Digital Marketing Agency?"
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text1="Being a pre-eminent web marketing and"
                  LinkData="app development"
                  LinkHref="/mobile-app-development-services"
                  para_text="company in the USA, we have a team of 100+ digital marketers to cater to you with tailored solutions. Our internet digital marketing services ensure targeted results, elevating your brand presence."
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
              <ParaText para_text="Being an esteemed digital marketing company, we have delivered solutions that generate real business impact. Businesses trust us for strategies that increase visibility, attract customers, and drive results." />
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

export default DigitalMarketing;
