"use client";
import React, { useRef } from "react";

import Heading from "../components/Heading";
import Heading_h2 from "../components/Heading_h2";
import Commonbttn from "../components/CommonBtn";

import BannerText from "../components/BannerText";
import ParaText from "../components/ParaText";

import Cta from "../components/Cta";
import GetInTouch from "../components/GetInToch";
import Tabs from "../components/Tabs";

import Client from "../components/Client";
import ClutchGoogle from "../components/ClutchGoggle";



const LandingPage = () => {
  const bottomSectionRef = useRef(null);

  const CardsData = [
    {
      id: "a",
      id: "active",
      card: "hover_box1",
      img: "light",
      h_name: "Leading <br/> Innovation",
    },
    {
      id: "b",
      card: "hover_box2",
      img: "professiona",
      h_name: " In-House<br/> Professional",
    },
    {
      id: "c",
      card: "hover_box1",
      img: "future",
      h_name: "Future-<br/>Focused",
    },
    {
      id: "d",
      card: "hover_box4",
      img: "client",
      h_name: " 100% Client<br/> Approval Score",
    },
  ];

  const TeachData = [
    {
      img: "boostrap.svg",
      name: "Bootstrap",
    },
    {
      img: "sql.svg",
      name: "MySql",
    },
    {
      img: "nodejs.svg",
      name: "Node Js",
    },
    {
      img: "mongo.svg",
      name: "Mongo DB",
    },
    {
      img: "html.svg",
      name: "HTML 5",
    },
    {
      img: "php.svg",
      name: "PHP",
    },
    {
      img: "css.svg",
      name: "CSS 3",
    },
    {
      img: "jquery.svg",
      name: "Jquery",
    },
  ];

  const IndustrieData = [
    {
      img: "healthcare.svg",
      name: "Healthcare",
    },
    {
      img: "finance.svg",
      name: "Finance",
    },
    {
      img: "restaurant.svg",
      name: "Restaurant",
    },
    {
      img: "logistics.svg",
      name: "Logistics",
    },
    {
      img: "banking.svg",
      name: "Banking",
    },
    {
      img: "travel.svg",
      name: "Travel",
    },
    {
      img: "entertainment.svg",
      name: "Entertainment",
    },
    {
      img: "fintech.svg",
      name: "Fintech",
    },
    {
      img: "ecommerce.svg",
      name: "Ecommerce",
    },
    {
      img: "insurance.svg",
      name: "Insurance",
    },
    {
      img: "restaurant.svg",
      name: "Real estate",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Jane Doe",
      comName: "Layla Jane Freeman",
      text:
        "We reached LBM Solutions for smart contract development. Their team created a seamless smart contract that ensured secure, automated transactions, optimizing our business processes flawlessly.",
    },
    {
      clientName: "Sophia Andrews",
      comName: "Blockchain Ventures",
      text:
        "LBM served us with innovative NFT solutions that empowered unique digital assets, enhancing engagement and revenue streams. They combined creativity with technical precision, making our NFT launch a resounding success. ",
    },
    {
      clientName: "Mike Brown",
      comName: "Ruth Kennedy",
      text:
        "The team at LBM had deep expertise in blockchain development. They developed the DEX exchange platform, which provided higher security and excellent trading experiences. We appreciated their intuitive interface for our cryptocurrency transactions. ",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Emily Clark",
      comName: "Faith Lane",
      text:
        " We were impressed with the outstanding ICO services of LBM. Their team guided us through a successful fundraising journey, from planning to execution. They offered strategic insights and compliance expertise, ensuring project success.",
    },
    {
      clientName: "Alex Johnson",
      comName: "Marie Lloyd",
      text:
        "We needed CRM software, and LBM was a suitable company for that purpose. Their CRM software transformed patient management with tailored solutions and HIPAA compliance. It offered higher efficiency and patient satisfaction.",
    },
    {
      clientName: "David Smith",
      comName: "Elizabeth Barber",
      text:
        " I selected LBM for our mobile app development. Their team crafted an intriguing food delivery app, which maximized our restaurant's reach with user-friendly features and real-time updates. ",
    },
    {
      clientName: "Rachel Green",
      comName: "Grace Dean",
      text:
        " We really admired the expertise of LBM’s team. Their team utilized an innovative and reliable approach to creating our blockchain software. They tackled industry challenges using the latest technology, providing a scalable solution that went beyond our expectations. ",
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
                  textA="We Help  "
                  clrtext="Businesses Grow Via IT "
                  textB="Advancement"
                  heading="banner_h"
                />
                <BannerText
                  text=" Developing Blockchain / Mobile App / Custom Software with end to
                                    end solutions and niche specific expertise."
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
                  src="/homeImg/banner.png"
                  alt="banner"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="row justify-content-between align-items-center pt-5 mt-xl-5 d-none">
            <div className="col-lg-4 col-md-5 col-sm-6 col-9 ">
              <div className="row">
                <div className="col-5">
                  <img
                    src="/homeImg/clutch.svg"
                    alt="banner"
                    className="img-fluid"
                  />
                </div>
                <div className="col-5">
                  <img
                    src="/homeImg/google.svg"
                    alt="banner"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 d-none d-sm-block">
              <div className="position-relative pointer">
                <img
                  src="/homeImg/text_img.png"
                  alt="textimg"
                  className="text_img ms-auto text-end img-fluid "
                />
                <img
                  src="/homeImg/downarrow.png"
                  alt="arrow"
                  className="arrow img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* import the Clutch Google components */}
      <ClutchGoogle bottomSectionRef={bottomSectionRef} />

      <section className="custome_soft" ref={bottomSectionRef}>
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-md-12 col-lg-6">
              <div className="row">
                {CardsData.map((val, i) => {
                  return (
                    <div
                      className={`col-6 col-md-6 col-lg-6 ${val.card}`}
                      key={i}
                    >
                      <div className={`card_box ${val.id}`}>
                        <div className="row align-items-center ">
                          <div className="col-7 col-sm-4 col-md-4">
                            <img
                              src={`/homeImg/${val.img}.svg`}
                              alt="bootstrap"
                              className="img-fluid"
                            />
                          </div>
                          <div className="  col-sm-8 col-md-8">
                            <h4
                              dangerouslySetInnerHTML={{ __html: val.h_name }}
                              className="mt-2 mt-md-0 mb-0"
                            ></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-12  col-lg-6">
              <div className="inner_text ps-lg-5 ">
                <Heading_h2
                  textA="Custom  "
                  clrtext="Technology Solutions"
                  textB="for Business"
                  heading="heading_h2"
                />
                <ParaText para_text="LBM has a skilled team that helps you get the most out of your technology investments. We make sure our custom software solutions fit your long-term goals and help your business grow. Our services are all about building practical, personalized software, mobile apps, and blockchain solutions that meet your exact needs." />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="soft_services">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Heading_h2
                textA="Customized   "
                clrtext="Services for Every Business"
                textB="Needs"
                heading="heading_h2"
              />
              <ParaText
                f_custome=""
                para_text="We render personalized development and integration solutions that meet specific client needs optimize the platform’s scalability and enhance user experiences, leveraging advanced technologies. "
              />
            </div>
            <Tabs />
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <Cta />
        </div>
      </section>

      <section className="technology bg-black">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Heading_h2
                textA="Innovative "
                clrtext="Technology Expertise for "
                textB="Development"
                heading="text-white heading_h2"
              />
              <ParaText
                f_custome="text-white"
                para_text="Being a pioneer of blockchain technology, our team deploys advanced tech stacks to meet the modern demands of digital transformation. We focus on creating scalable and efficient solutions customized to clients' needs, ensuring optimal performance and growth."
              />
            </div>
          </div>

          <div className="row mt-4 mt-lg-5 pt-xl-5">
            {TeachData.map((val, i) => {
              return (
                <div
                  className="col-6 col-sm-4 col-md-3 col-xl-2 margin_btm mx-auto mx-xl-0"
                  key={i}
                >
                  <div className="inner_content text-center h-100">
                    <img
                      src={`/homeImg/${val.img}`}
                      alt="bootstrap"
                      className="img-fluid tech_img mx-auto"
                    />
                    <h5
                      className="text-white fw-bold mt-3 mb-0"
                      style={{ fontFamily: "Proxima Nova Semibold" }}
                    >
                      {val.name}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="industries">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Heading_h2
                textA="Our Specializations in"
                clrtext=" Diverse Industries"
                textB=" "
                heading="heading_h2"
              />
              <ParaText para_text="We are a prominent firm in digital solutions, specializing in crafting customized platforms for global enterprises. Our team of over 250 full-stack developers and designers has delivered flawless services across various industries." />
            </div>
          </div>
          <div className="row  justify-content-center mt-4 mt-lg-5">
            {IndustrieData.map((val, i) => {
              return (
                <div className="col-6 col-sm-4 col-md-3 col-lg-3 mb-4" key={i}>
                  <div className="inner_content text-center d-flex align-items-center justify-content-center h-100 rounded box_shadow">
                    <div className="">
                      <div className="bg_clr">
                        <div className="img d-inline-block">
                          <img
                            src={`/homeImg/${val.img}`}
                            alt="bootstrap"
                            className="img-fluid tech_img mx-auto"
                          />
                        </div>
                        <div></div>
                      </div>
                      <h5
                        className="mt-4 mb-0"
                        style={{ fontFamily: "Proxima Nova Semibold" }}
                      >
                        {val.name}
                      </h5>
                    </div>
                    <span></span>
                  </div>
                </div>
              );
            })}
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
              <ParaText
                para_text=" Learn from our clients about their positive experiences working
                                with us. They share stories of how our partnership helped their
                                businesses thrive, giving you a clear view of the benefits and
                                results we deliver. "
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

      <GetInTouch
        getinTocch="Get Expert Advice and Grow Your Business with LBM's Blockchain Solutions!"
        path="/contact"
        targett="_blank"
        btn_name="Book Now"
        cls_nm="fw-bold"
      />
    </>
  );
};
export default LandingPage;
