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
        "Hire LBM's Crypto Marketing Experts to Boost Your Crypto Project ",
      paraText:
        "Being a prominent marketing agency for crypto projects, our marketing experts are proficient in developing and executing crypto marketing strategies that effectively promote and support cryptocurrency projects and enhance visibility and engagement. ",
      imgSrc: "/marketing_agency/teach_img.png",
      imgAlt: "teach_img",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Community Management ",
      text:
        "We build and nurture your Discord, Whatsapp and Telegram tribes to manage updates and engage followers. ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Crypto Content Marketing & PR",
      text:
        "We craft compelling content and utilize strategic media relations to attract an audience and boost brand awareness.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Crypto Social Media Marketing",
      text:
        " Our services help to engage audiences and build communities based on trend monitoring on social media.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Crypto Influencers & Videos",
      text:
        " We have crypto influencers to boost credibility and educate users about your project, expanding your customer base.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Ads & Promotions",
      text:
        "Our crypto marketing firm considers native platforms to optimize conversion rates for global impact through paid advertising.",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/marketing_agency/icons/process01.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Product Understanding",
    },
    {
      img: "/marketing_agency/icons/process02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Growth Metrics",
    },
    {
      img: "/marketing_agency/icons/process03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Channel Activation",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/marketing_agency/icons/process06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Launch PR & Promotion",
    },
    {
      img: "/marketing_agency/icons/process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Community Building",
    },

    {
      img: "/marketing_agency/icons/process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Consistent Optimization",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/marketing_agency/icons/process07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Sustainable Scaling",
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
      heading: "Target Audience Identification ",
      text:
        " Our crypto marketing experts recognize and understand the demographics interested in blockchain to tailor marketing strategies.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Content Creation",
      text:
        "We have a team of expert crypto copywriters to create engaging, informative, and relevant content that communicates the project's value proposition. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Social Media Strategy",
      text:
        "Our crypto marketing services utilize diverse platforms like Twitter, Telegram, and Whatsapp to share updates and foster discussions.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "SEO Optimization ",
      text:
        " We deploy strategic keyword usage, content optimization, and backlinking to attract organic traffic, which enhances online visibility.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Event Participation ",
      text:
        " Our crypto marketing experts attend and host events, webinars, and conferences to network to showcase the project and learn industry trends. ",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Blockchain Analytics",
      text:
        "We utilize tools to analyze blockchain data, which helps to refine marketing strategies and measure campaign effectiveness.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "NFT Utilization",
      text:
        "Our crypto marketing strategies use non-fungible tokens to create unique rewards, which enhance user engagement and provide marketing opportunities.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Social Tokenization",
      text:
        "Our solutions issue tokens to reward loyal followers and create a sense of ownership and participation within the community.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Geo-Targeting",
      text:
        "We deliver localized marketing content tailored to specific geographic regions, enhancing relevance and engagement with regional audiences.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Performance Analytics",
      text:
        "Our crypto marketing experts continuously track and analyze marketing efforts using blockchain data to refine strategies and improve ROI.",
    },
  ];

  const AboutLbm = [
    {
      img: "/marketing_agency/icons/why01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Expert team",
      text:
        "Our organic growth specialists and community managers execute tailored digital techniques to boost crypto projects.",
    },
    {
      img: "/marketing_agency/icons/why02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Crypto copywriters ",
      text:
        "Our crypto writers craft accurate and engaging content to convey complex ideas clearly while enhancing brand presence.",
    },
    {
      img: "/marketing_agency/icons/why03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "RoI-based Solutions ",
      text:
        "We focus on generating assessable returns on investment for clients, ensuring every initiative expands returns and drives business growth.",
    },
    {
      img: "/marketing_agency/icons/why04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Crypto PPC expertise",
      text:
        "We implement top-notch PPC strategies for the crypto sector, and craft targeted campaigns for boosting ROI.",
    },
    {
      img: "/marketing_agency/icons/why05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Data-Driven Strategies ",
      text:
        "Our services provide data analytics to inform decision-making, ensuring that every initiative is targeted and aligned with client goals.",
    },
    {
      img: "/marketing_agency/icons/why06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Proven Track Record",
      text:
        "Our success in executing ROI-driven campaigns with measurable results showcases our ability to drive progress and deliver value to clients.",
    },
    {
      img: "/marketing_agency/icons/why07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Client-Centric Solutions",
      text:
        "Being a prominent crypto marketing firm, we develop personalized strategies that address challenges and drive promising results.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Jean Curtis",

      text:
        "We hired LBM for cryptocurrency marketing and saw our project's visibility and engagement. Their expertise in Telegram community building was invaluable. It lead to a substantial increase in followers and investor interest.",
    },
    {
      clientName: "May Fisher",
      text:
        "I approached LBM for marketing of my NFT project, and it was a game-changer. Their strategic marketing approach and deep industry knowledge resulted in increased NFT token sales and flourishing community engagement.",
    },
    {
      clientName: "Aurora Schneider",
      text:
        "LBM Solutions offered innovative marketing strategies for the promotion of our crypto coin project that proved transformative. They covered everything from content creation to influencer partnerships, which resulted in higher engagement and more investment inquiries.",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Leigh McCoy",
      text:
        "Their team understood our needs for crypto social media marketing and crafted tailored campaigns that significantly boosted our online presence and expanded our community via Telegram or Twitter. Their professionalism and results exceeded were admirable.",
    },
    {
      clientName: "Sophia Harper",
      text:
        "We got huge growth in the crypto space after partnering with LBM. Their knowledge of the crypto and effective marketing tactics helped us gain traction for our NFT project. Our project's reputation was improved by attracting more users and investors",
    },
    {
      clientName: "Brooklyn Warren",
      text:
        "We contacted LBM Solutions for the PR of our DeFi project. Their strategic guidance and marketing efforts enhanced our project’s visibility, leading to increased interest from clients and a more engaged community.",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "How to choose a crypto marketing agency? ",
      body:
        "A crypto marketing agency can be selected by considering their industry experience, success case studies, range of services, client reviews, and understanding of regulatory compliance and target audience specifics.",
    },
    {
      eventKey: "1",
      header: "How does crypto marketing work?",
      body:
        "Crypto marketing focuses on promoting digital currencies through strategies like social media, influencer partnerships, content creation, community building, and SEO to increase awareness, trust, and user engagement.",
    },
    {
      eventKey: "2",
      header: "What is crypto content marketing?",
      body:
        "In crypto content marketing, valuable, informative content about cryptocurrencies is created and shared to educate, engage, and attract potential users, investors, and stakeholders, enhancing brand visibility and trust.",
    },
    {
      eventKey: "3",
      header: "What is the cost range for hiring a crypto marketing agency?  ",
      body:
        "Hiring a crypto marketing agency ranges between $500 and $3500 per month. This cost may vary according to the range of services. ",
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
                  textA="Best Crypto "
                  clrtext="Marketing Agency - ROI-Focused"
                  textB=""
                  heading="banner_h"
                />
                <BannerText text="We specialize in promoting crypto projects to enhance brand visibility and drive user engagement via digital strategies. " />

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
                  src="/marketing_agency/banner.png"
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
            <div className="col-sm-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Promotional Crypto Marketing Services for"
                  clrtext=" Cryptocurrency Ventures"
                  textB=""
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Our crypto marketing solutions cater to promoting crypto projects through various marketing channels and techniques tailored to the crypto industry's unique needs. Our team aims to maximize your project's adoption and ROI."
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
                  textA="Our Unique "
                  clrtext="Crypto Marketing Delivery Model for Your Project"
                  textB=""
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="Our crypto marketing plan aims to advertise cryptocurrency projects to the desired audience effectively. We develop captivating messaging, select suitable channels, and analyze performance to drive project adoption and growth."
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
                textA="How Our  "
                clrtext=" Crypto Marketing Strategies Propel Your Project"
                textB=" In The Blockchain World?"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0 "
              />

              <ParaText
                f_custome=""
                para_text="Our marketing team adopts a coherent crypto marketing strategy that promotes and sustains crypto projects, collectively enhancing the engagement, visibility, and success of your cryptocurrency in the competitive crypto market."
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

      <section className="about_lbm">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="What Makes "
                  clrtext=" LBM Solutions Stand Out as the"
                  textB="Best Crypto Marketing Agency?"
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="We at LBM Solutions are a reputable crypto digital marketing agency in USA. We have a veteran team of crypto marketing experts with deep industry expertise to deliver tailored campaigns, ensuring higher engagement and driving organic traffic."
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
              <ParaText
                para_text="Our clients are greatly satisfied with our crypto marketing services. We have helped various brands grow and succeed in the crypto world. Let's see how our crypto marketing solutions have boosted their visibility and engagement, and elevated their business.
              "
              />
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
