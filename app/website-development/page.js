"use client";
import React, { useRef } from "react";

import Heading from "../components/Heading";
import Heading_h2 from "../components/Heading_h2";
import BannerText from "../components/BannerText";
import Commonbttn from "../components/CommonBtn";
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

const WebsiteDevelopment = () => {
  const bottomSectionRef = useRef(null);

  const sectionsData = [
    {
      heading: "Our Website Development Experts Powering Your Business",
      paraText1:
        "Being a prominent progressive web ",
        paraText:
        "we craft customer-centric web solutions. Our team of veteran web designers, developers, QAs, and project managers ensures smooth user experiences, high conversions, and business growth.",
        Link_href:"/mobile-app-development-services",
         Link_data:"app development company,",
        imgSrc: "/website-development/tech.png",
      imgAlt: "",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Custom Web Development",
      text:
        " We build stunning websites that meet your business needs, enhance functionality, and support automation for long-term success.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "UI UX Design Services",
      text:
        "We create user-friendly designs with easy navigation to make digital experiences visually appealing and accessible for users.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Custom Web App Development",
      text:
        "Our solutions optimize business workflows and deliver user-friendly web applications to make digital interactions more reliable. ",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Custom Ecommerce Development",
      text:
        "We build feature-rich online stores with scalable microservices architectures to provide smooth shopping experiences to your customers.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "CMS Development Services",
      text:
        "Our developers create responsive CX platforms to manage content efficiently and deliver personalized user experiences.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Web Portal Development ",
      text:
        "We develop interactive web portals with AI chatbots and AR features that offer smooth integration with existing systems.",
    },
  ];

  const DevelopmentProcess_a = [
    {
      img: "/mobile_app_page/icons/process01.png",
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
      img: "/mobile_app_page/icons/process02.png",
      svg_cls: "d-none",
      add_class: "right_arrow",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Wireframing & Planning",
    },
    {
      img: "/mobile_app_page/icons/process03.png",
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
      img: "/website-development/process06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Website Deployment",
    },
    {
      img: "/website-development/process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Quality Assurance",
    },

    {
      img: "/website-development/process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Website Development",
    },
  ];

  const DevelopmentProcess_c = [
    {
      img: "/mobile_app_page/icons/process07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Post-launch Support ",
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
      heading: "Brand Credibility ",
      text:
        "We render well-crafted websites to build brand reputation, create trust, and establish a strong online presence for long-term success.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Intuitive User Experience",
      text:
        "Our custom UI/UX development services build intuitive web apps that attract visitors and drive better customer interactions.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Revenue Opportunities",
      text:
        "Our web solutions help you to create a strategic online presence and open doors to monetization strategies for business expansion.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Affordable Solutions",
      text:
        "Our web developers create high-quality websites and web apps tailored to business needs without exceeding budget constraints.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Market Adaptability",
      text:
        " We create intuitive web platforms that align with changing market trends and competitive landscapes to maintain business relevance.",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Progressive Web Apps",
      text:
        "We craft progressive web apps to ensure fast loading times, offline functionality, and a native-like user experience across devices.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Advanced Security",
      text:
        "Our team utilizes robust security protocols to secure sensitive data, protect against cyber threats, and maintain website integrity.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Cross-Platform Compatibility ",
      text:
        "We design and build websites that function flawlessly across various devices, screen sizes, and operating systems.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "SEO-Friendly Architecture",
      text:
        "Our structured website framework solutions enhance search engine visibility, ranking, and organic traffic for long-term success. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "DevOps-Based Deployment",
      text:
        "Our DevOps-based approach enhances development cycles, automates updates, and improves system stability with continuous integration and delivery.",
    },
  ];

  const technology = [
    {
      img: "/website-development/figma.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "UI/UX",
    },

    {
      img: "/website-development/html.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "HTML/CSS",
    },
    {
      img: "/website-development/react.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "React",
    },
    {
      img: "/website-development/nextjs.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Nextjs",
    },
    {
      img: "/website-development/tech01.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-3 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "WordPress or other CMS",
    },
  ];
  const backedn_technology = [
    {
      img: "/website-development/nodejs.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Nodejs",
    },

    {
      img: "/website-development/flutter.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Flutter(Dart)",
    },
    {
      img: "/website-development/laravel.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-3 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Php / Laravel / codeigniter",
    },
  ];
  const Databases_technology = [
    {
      img: "/website-development/sql.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "MySQL",
    },
    {
      img: "/website-development/mongodv.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "MongoDB",
    },
  ];

  const Crafting = [
    {
      img: "/website-development/sourceses01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Startups  ",
      text:
        " We provide custom web development services with scalable architectures and cost-effective solutions to accelerate business growth and market adaptability.",
    },
    {
      img: "/website-development/sourceses02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Healthcare ",
      text:
        "We craft all-inclusive website apps that offer secure patient portals, appointment scheduling, and online consultation booking for healthcare providers.",
    },
    {
      img: "/website-development/sourceses03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Education",
      text:
        "Our website development solutions create web portals for online courses, student management, and communication to enhance educational accessibility.",
    },
    {
      img: "/website-development/sourceses04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "E-commerce ",
      text:
        "We design and develop websites for e-commerce platforms, integrating product catalogues, payment gateways, and customer management features to boost sales.",
    },
    {
      img: "/website-development/sourceses05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Finance ",
      text:
        "Our custom web application development services build web apps for secure financial transactions, reporting, and portfolio management for financial institutions.",
    },
    {
      img: "/website-development/real_estate.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate",
      text:
        "We create web portals for real estate businesses to offer property listings, virtual tours, and agent management systems for better client engagement.",
    },
    {
      img: "/website-development/sourceses07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Manufacturing  ",
      text:
        "We provide advanced supply chain management solutions, including order tracking and product information sharing on an intuitive platform.",
    },
    {
      img: "/website-development/sourceses08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Hospitality  ",
      text:
        "As a renowned website development firm, we craft web apps for booking systems, restaurant menus, and event management for the hospitality industry.",
      // background: "/cryptwalletImg/wallet_features.png",
    },
    {
      img: "/website-development/sourceses09.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Retail  ",
      text:
        " We build enterprise web apps for retailers with inventory management, online stores, and customer loyalty programs to enhance the retail experience.",
    },
    {
      img: "/website-development/sourceses10.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Entertainment ",
      text:
        "Our solutions offer high-performance streaming, real-time interactions, and secure content management for engaging digital entertainment experiences.",
    },
    {
      img: "/website-development/sourceses11.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Gaming ",
      text:
        "Our tailored gaming website development solutions deliver engaging experiences with multiplayer integration, secure payment gateways, and intuitive UI/UX.",
    },
    {
      img: "/website-development/sourceses12.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Tourism",
      text:
        "We develop travelling websites with booking engines, itinerary planners, and real-time updates to ensure smooth travel experiences and higher engagement.",
    },
  ];

  const AboutLbm = [
    {
      img: "/mobile_app_page/icons/why01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 px-lg-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Expert Team",
      text:
        "We have 200+ experienced developers, having numerous years of expertise in building versatile websites tailored to business requirements.",
    },
    {
      img: "/website-development/why02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "UI & UX Development",
      text:
        " We develop user-friendly interfaces with smooth navigation to boost customer retention and sales growth.",
    },
    {
      img: "/website-development/why03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Cost-Effective Solutions",
      text:
        "We render affordable web development services​, providing higher functionality and performance.",
    },
    {
      img: "/mobile_app_page/icons/why04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Client-Centric Approach",
      text:
        "Our tailored web development strategies address unique business needs that align with long-term objectives and industry demands.",
    },
    {
      img: "/website-development/why05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Technology Expertise",
      text:
        "Our expertise in React, Laravel, WordPress, and PHP website development ensures robust, scalable, and high-performance web solutions",
    },
    {
      img: "/website-development/why06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "100% Customer Satisfaction",
      text:
        "We ensure dedicated support, reliable solutions, and efficient execution for our enterprise website solutions.",
    },
    {
      img: "/website-development/why07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Timely Delivery ",
      text:
        "Our well-structured workflows and clear roadmaps guarantee project completion within deadlines without compromising quality.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Michael Anderson",
      text:
        " Our enterprise website was outdated, but LBM changed everything. They built a fast, secure, and scalable platform that streamlined operations. Now, our team works more efficiently, and clients love the experience! ",
    },
    {
      clientName: "Jessica Thompson",
      text:
        " LBM designed and developed our e-commerce website in a unique and intuitive way. The new design is clean, navigation is simple, and checkout is seamless. Our sales have increased by 40%, and customer retention has significantly improved.",
    },
    {
      clientName: "Daniel Carter",
      text:
        "We struggled with low leads, but after LBM developed our real estate website, everything changed. The advanced search, interactive maps, and mobile responsiveness boosted inquiries.",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Emily Robinson",
      text:
        "Our previous website was slow, which was frustrating for us and our users as well. But, LBM built a progressive web app that loaded instantly, even offline. Now, visitors stay longer, interactions have increased, and our bounce rate has dropped significantly.",
    },
    {
      clientName: "Christopher White",
      text:
        " We needed a robust, scalable website for our growing enterprise, and LBM delivered beyond expectations. Their team understood our complex requirements and built a fast, secure platform. Now, internal processes are smooth, and our clients love the experience.",
    },
    {
      clientName: "Sarah Mitchell",
      text:
        "LBM Solutions delivered us a customized website as per our unique business requirements. The design was intuitive, the performance was top-notch, and the security was unmatched. Managing operations is now smoother than ever.",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "What are web development services?",
      body:
        "Web development services cover designing, developing, and maintaining websites or web applications. Businesses get custom websites, eCommerce platforms, or web portals that improve user experience, security, and online presence while meeting specific business needs.",
    },
    {
      eventKey: "1",
      header: "Who needs web development services?",
      body:
        "Any business, startup, or organization that wants an online presence needs web development services. Whether launching a new website or upgrading an old one, professional development improves performance, security, and user experience.",
    },
    {
      eventKey: "2",
      header: "How long does it take to build a website? ",
      body:
        "The average time to build a website ranges from a few weeks to several months. Simple websites take weeks, while custom or enterprise-level platforms require months. Proper planning, design, and testing make the website reliable and high-performing.",
    },
    {
      eventKey: "3",
      header: "What is the average cost of web development services? ",
      body:
        "The average cost of web development starts from $1,000 and can range up to $150,000. However, features, complexity, and technology may impact its pricing. Getting a professional quote provides accurate cost estimates.",
    },
    {
      eventKey: "4",
      header: "How do I get started with a web development project?",
      body:
        "You can start by defining business needs, target audience, and website features. Discuss ideas with a web development company, finalize project scope, and begin development. Clear communication and expert guidance make the process smooth and stress-free.",
    },
    {
      eventKey: "5",
      header:
        "What are the benefits of custom web development over template-based websites?",
      body:
        "Custom web development offers unique design, better performance, security, and scalability. Template-based websites limit customization, affecting brand identity. Custom solutions meet business requirements precisely, making them future-ready and capable of handling growth efficiently.",
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
                  textA="Trusted Website "
                  clrtext=" Development Company Driving "
                  textB="Digital Success "
                  heading="banner_h"
                />
                <BannerText text="We build high-performance websites and web apps, empowering startups and enterprises to grow their digital presence and increase sales." />

                <div className="mt-4 mt-md-5 d-flex">
                  <div className="me-4">
                    <Commonbttn
                      btn_name="Free Demo"
                      path="/contact"
                      commonbtn="btn_cls"
                      img_cls="d-none"
                      add_cls="d-none"
                    />
                  </div>
                  <div className="">
                    <Commonbttn
                      btn_name=" Expert talk"
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
                  src="/website-development/banner.png"
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
          paraText1={section.paraText1} Link_href={section.Link_href} Link_data={section.Link_data}

        />
      ))}

      <section className="crypt_wallet" ref={bottomSectionRef}>
        <div className="container">
          <div className="row ">
            <div className="col-sm-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Future-Ready "
                  clrtext="Web Development Services to"
                  textB="  Your Needs"
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Leading the industry in website app development, we create customizable web platforms that help businesses RACE (Reach, Attract, Communicate, and Engage) audiences and offer functional websites that align with their goals."
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
                  textA="Website Development Process:"
                  clrtext=" From Idea to Reality"
                  textB=""
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="As a part of our website development solutions, we assist startups, small to medium businesses, and enterprises, from web development consulting to final launch, with mobile responsiveness and ensure timely delivery."
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

          <div className="mt-4 mt-md-5 d-flex">
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
            <div className="col-10 ">
              <Heading_h2
                textA="How Our "
                clrtext="Custom Web Development  "
                textB="Solutions Drive More Sales"
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
              />

              <ParaText
                f_custome=""
                para_text="Our web development experts focus on creating high-performing websites that attract visitors, enhance engagement, strengthen brand presence, and create new revenue opportunities with tailored solutions for businesses."
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
                  clrtext="Enterprise Web Application"
                  textB="Development for Every Industry"
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="Our developers excel in rendering customizable front-end and back-end web solutions for diverse sectors. We develop versatile web apps that adapt to unique challenges, enhance digital presence, and support consistent growth."
                />
              </div>
            </div>
          </div>
          <div className="row">
            <Card CardData={Crafting} />
          </div>
        </div>
      </section>

      <section className="currencyes bg-black">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Optimized Tech Stack  "
                  clrtext="for Website Development Excellence "
                  textB=""
                  heading="heading_h2 text-white"
                />

                <ParaText
                  f_custome="text-white"
                  para_text="At the forefront of technology, we render full-stack web development services that cover suitable front-end, back-end, and database management to deliver scalable and adaptable web apps tailored to business needs."
                />
              </div>
            </div>
          </div>

          <div className="row text-center card_bx bg-transparen">
            <h3 className="text-white text-start mb-4">
              Front End Development{" "}
            </h3>
            <Card CardData={technology} />
          </div>
          <div className="row text-center card_bx bg-transparen my-4">
            <h3 className="text-white text-start mb-4">
              Backend End Development
            </h3>
            <Card CardData={backedn_technology} />
          </div>
          <div className="row text-center card_bx bg-transparen">
            <h3 className="text-white text-start mb-4">Databases</h3>
            <Card CardData={Databases_technology} />
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
                  textA="Why Businesses Trust Our Web "
                  clrtext="Development Agency"
                  textB=""
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="As a renowned Web development Company with over 10+ years of experience, we provide innovative solutions that help businesses achieve growth with expert-driven strategies. Our client-centric solutions offer an online presence in the digital landscape."
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
              <ParaText para_text="Our clients trust us to deliver successful websites that match their vision. With strategic execution and advanced technology, we create digital experiences that drive engagement, conversions, and lasting success. Their testimonials reflect our commitment and expertise." />
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

export default WebsiteDevelopment;
