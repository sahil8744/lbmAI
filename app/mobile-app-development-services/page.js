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
      heading: "Hire Dedicated Mobile App Developers for Your Project",
      paraText:
        "As a leading  mobile app development company in the USA, our expert developers create custom apps that align with your unique business needs, enhancing productivity and providing outstanding, user-friendly experiences.",
      imgSrc: "/mobile_app_page/teach_img.png",
      imgAlt: "hire expert mobile app developers for your project",
    },
  ];

  const CardLoop = [
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "opacity-100",
      heading: "Custom Mobile App Development Services",
      text:
        "Our AI-driven app solutions deliver transformative, personalized experiences across Android and iOS platforms.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Cross-Platform App Development",
      text:
        "We build flexible apps that work seamlessly across Android and iOS, ensuring a consistent user experience",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "iOS App Development",
      text:
        "We build flexible apps that work seamlessly across Android and iOS, ensuring a consistent user experience.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Android App Development ",
      text:
        "Our expert developers build secure and fast Android apps compatible with the latest OS versions and future upgrades.",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Flutter App Development",
      text:
        "We create scalable, rich UI/UX apps that work flawlessly across all platforms, ensuring a consistent experience",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "React Native Mobile App Development",
      text:
        "Our team excels in delivering apps using React Native, ensuring superior delivery speed and enhanced user experience",
    },
    {
      img_class: "d-none",
      svg_cls: "",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Clone Scripts",
      text:
        "We specialize in creating feature-rich",
        LinkHref : "/clone-script-app-development",
        LinkData:" clone scripts,",
        text1: "and mobile apps tailored to elevate your business.",
      
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
      heading: "Idea Validation  ",
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
      heading: "Design Prototyping  ",
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
      heading: "Application Development ",
    },
  ];

  const DevelopmentProcess_b = [
    {
      img: "/mobile_app_page/icons/process06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-12 col-md-4  mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Launch and Marketing ",
    },
    {
      img: "/mobile_app_page/icons/process05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "App Deployment",
    },

    {
      img: "/mobile_app_page/icons/process04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-sm-6 col-md-4 mb-4 ",
      text: "",
      p_opacity: "d-none",
      custome_col_a: "col-2 col-sm-3",
      custome_col_b: "col-10 col-sm-9",
      heading: "Quality Assurance ",
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
      heading: "Post-Service Support ",
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
      heading: "User Authentication",
      text:
        "We implement secure login systems to protect your users' data and ensure that only authorized individuals can access the app.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Payment Integration",
      text:
        "Our apps feature reliable payment gateways that support multiple methods, ensuring smooth transactions for your users.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Push Notifications",
      text:
        "Engage users with timely updates, personalized messages, and alerts that keep them coming back.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "GPS and Location Services ",
      text:
        "Enhance user engagement with location-based features like real-time tracking, navigation, and local offers.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Customizable User Interfaces",
      text:
        "We create adaptable, visually appealing interfaces that reflect your brand's personality and enhance user experience.",
    },
  ];

  const TechnicalFeatures = [
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Cross-Platform Development",
      text:
        "Our apps are designed to work seamlessly across both iOS and Android, ensuring a wider reach and consistency.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Backend APIs",
      text:
        "We integrate powerful APIs to streamline communication between your app’s frontend and backend, optimizing performance.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Responsive Design",
      text:
        "Our apps are designed to adapt perfectly to different screen sizes and devices, offering a seamless user experience. ",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Custom Widgets ",
      text:
        "We create reusable widgets to maintain consistency and ensure efficient development across the app.",
    },
    {
      img_class: "d-none",
      svg_cls: "d-none",
      add_class: "h-100 on_hover",
      columns: "col-sm-6 col-lg-3 mb-4",
      p_opacity: "opacity-100",
      heading: "Automated Testing",
      text:
        "We use cutting-edge testing tools to ensure your app is bug-free, reliable, and ready for a smooth launch.",
    },
  ];

  const technology = [
    {
      img: "/mobile_app_page/icons/tech01.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Swift ",
    },
    {
      img: "/mobile_app_page/icons/tech02.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Objecitve C",
    },
    {
      img: "/mobile_app_page/icons/tech03.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "CocoaPods",
    },
    {
      img: "/mobile_app_page/icons/tech04.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: " mx-auto mb-0 mt-3",
      heading: "X Code",
    },
    {
      img: "/mobile_app_page/icons/tech05.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Realm",
    },
    {
      img: "/mobile_app_page/icons/tech06.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: " mx-auto mb-0 mt-3",
      heading: "Core Data",
    },
    {
      img: "/mobile_app_page/icons/tech07.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: " mx-auto mb-0 mt-3",
      heading: "Kotlin",
    },
    {
      img: "/mobile_app_page/icons/tech08.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Avalanche",
    },
    {
      img: "/mobile_app_page/icons/tech09.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Android Studio",
    },
    {
      img: "/mobile_app_page/icons/tech10.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Firebase",
    },
    {
      img: "/mobile_app_page/icons/tech11.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Gradle",
    },
    {
      img: "/mobile_app_page/icons/tech12.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Room",
    },
    {
      img: "/mobile_app_page/icons/tech13.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Flutter",
    },
    {
      img: "/mobile_app_page/icons/tech14.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "React Native",
    },
    {
      img: "/mobile_app_page/icons/tech15.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Kotlin Platform",
    },
    {
      img: "/mobile_app_page/icons/tech16.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Xamarin",
    },
    {
      img: "/mobile_app_page/icons/tech17.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Polymer",
    },
    {
      img: "/mobile_app_page/icons/tech18.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Qasar",
    },
    {
      img: "/mobile_app_page/icons/tech19.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Pwa Builder",
    },
    {
      img: "/mobile_app_page/icons/tech20.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "React",
    },
    {
      img: "/mobile_app_page/icons/tech21.png",
      svg_cls: "d-none",
      add_class: "",
      columns: "col-6 col-sm-4 col-lg-2 mb-4 margin_btm",
      heading_h5: "mx-auto mb-0 mt-3",
      heading: "Angular",
    },
  ];

  const Crafting = [
    {
      img: "/mobile_app_page/icons/sourceses01.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Healthcare ",
      text:
        "We develop apps that streamline patient management, enable telemedicine, and provide easy access to medical records, improving healthcare delivery.",
    },
    {
      img: "/mobile_app_page/icons/sourceses02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Finance and Banking ",
      text:
        "Our secure mobile apps allow users to manage their finances, track investments, and complete transactions with ease.",
    },
    {
      img: "/mobile_app_page/icons/sourceses03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Education",
      text:
        "We offer mobile learning platforms that enhance engagement with interactive content, virtual classrooms, and personalized learning experiences.",
    },
    {
      img: "/mobile_app_page/icons/sourceses04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Retail ",
      text:
        "Our retail apps boost e-commerce with features like virtual try-ons, personalized shopping, and simplified checkout processes.",
    },
    {
      img: "/mobile_app_page/icons/sourceses05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Entertainment",
      text:
        "We develop mobile apps to stream video, music, and interactive content, providing personalized media experiences to users globally.",
    },
    {
      img: "/mobile_app_page/icons/sourceses06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Travel and Hospitality",
      text:
        "Our solutions improve booking, navigation, and personalized travel experiences, enhancing convenience for travelers.",
    },
    {
      img: "/mobile_app_page/icons/sourceses07.png",
      svg_cls: "d-none",
      add_class: "bg_light_pink p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Real Estate ",
      text:
        "We develop apps that simplify property searches, virtual tours, and transactions, fostering seamless communication between buyers and sellers.",
    },
    {
      img: "/mobile_app_page/icons/sourceses08.png",
      svg_cls: "d-none",
      add_class: "bg_ligh_see h-100 rounded-3 p-4",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Transportation ",
      text:
        "We offer route optimization, real-time vehicle tracking, and booking services, improving logistics and transportation efficiency. ",
      // background: "/cryptwalletImg/wallet_features.png",
    },
    {
      img: "/mobile_app_page/icons/sourceses09.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Gaming ",
      text:
        "Our gaming apps engage users with interactive, fun and immersive experiences that cater to various interests.",
    },
    {
      img: "/mobile_app_page/icons/sourceses10.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Agriculture  ",
      text:
        "We craft apps that assist farmers with crop management, weather tracking, and providing farming advice, boosting productivity.",
    },
    {
      img: "/mobile_app_page/icons/sourceses11.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen p-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      heading: "Environmental Services",
      text:
        "We design apps that promote sustainability with features like recycling information, environmental impact tracking, and conservation tips.",
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
      heading: "Experienced Team",
      text:
        " With over 10 years of expertise, our team has successfully delivered hundreds of mobile apps across multiple platforms.",
    },
    {
      img: "/mobile_app_page/icons/why02.png",
      svg_cls: "d-none",
      add_class: "bg_dark_cream px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "Customized Solutions",
      text:
        "We customize solutions to your unique business needs, ensuring scalability and long-term success.",
    },
    {
      img: "/mobile_app_page/icons/why03.png",
      svg_cls: "d-none",
      add_class: "bg_light_blander px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "",
      custome_col_a: "col-2",
      heading: "User-Centric Design ",
      text:
        "We prioritize user experience, focusing on intuitive interfaces that enhance usability and engagement.",
    },
    {
      img: "/mobile_app_page/icons/why04.png",
      svg_cls: "d-none",
      add_class: "bg_light_red px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Security Measures ",
      text:
        "Our apps are built with advanced security protocols to protect user data and ensure secure transactions. ",
    },
    {
      img: "/mobile_app_page/icons/why05.png",
      svg_cls: "d-none",
      add_class: "bg_light_yellowgreen px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Proven Track Record ",
      text:
        " We have successfully worked with startups, mid-sized businesses, and large enterprises across various industries.",
    },
    {
      img: "/mobile_app_page/icons/why06.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Technical Expertise ",
      text:
        "Our team is well-versed in cutting-edge technologies, ensuring your app is built using the most advanced tools and platforms available.",
    },
    {
      img: "/mobile_app_page/icons/why07.png",
      svg_cls: "d-none",
      add_class: "bg_light_sky px-lg-4 h-100 rounded-3",
      columns: "col-sm-6 col-lg-4 mb-md-4",
      p_opacity: "mb-0",
      custome_col_a: "col-2",
      heading: "Post-Launch Support",
      text:
        "We provide continuous support, ensuring your app stays updated, secure, and optimized after launch.",
    },
  ];

  const ClientData_aa = [
    {
      clientName: "Whitney James",
      text:
        "  Working with LBM was an incredible experience. They transformed our initial idea into a fully functional, intuitive, and user-friendly mobile app. Their team was creative, attentive, and skilled, delivering a product that exceeded all expectations",
    },
    {
      clientName: "Gregory Brooks",
      text:
        "LBM Solutions turned our rough mobile app idea into a polished Android application. Their professionalism and expertise were evident throughout the process, as they delivered exactly what we envisioned, addressing all our requirements with ease and precision ",
    },
    {
      clientName: "Monica Bailey",
      text:
        "We chose LBM for our mobile app development, and it was the best decision. They fully understood our industry and target audience, creating an app that reflected our vision. The result was an intuitive, user-centric product that delivered",
    },
  ];

  const ClientData_bb = [
    {
      clientName: "Justin Bell",
      text:
        " LBM Solutions developed our app on time, within budget, and with exceptional quality. Their team worked closely with us, refining features and functionalities to align perfectly with our business goals. The final app exceeded our expectations",
    },
    {
      clientName: "Erica Phillips",
      text:
        "LBM Solutions successfully tackled our complex educational app project, which other developers had turned down. Their team’s expertise in handling challenging requirements resulted in an app that surpassed our expectations, offering innovative solutions and a flawless user experience",
    },
    {
      clientName: "Adam Foster",
      text:
        "LBM helped us bring our iOS app vision to life with meticulous attention to detail. Their team’s dedication to delivering a beautifully designed, functional app ensured that it met our needs and was well-received by our users",
    },
  ];

  const Faq = [
    {
      eventKey: "0",
      header: "How long does it take to develop a mobile app? ",
      body:
        "The development time varies, typically ranging from 2 to 6 months. Factors like app complexity, features, and platform requirements influence the timeline. A detailed plan and proper resources can accelerate the process.",
    },
    {
      eventKey: "1",
      header: "What is the Cost of Mobile App Development? ",
      body:
        "App development costs depend on complexity, design, and functionality. Custom features, cross-platform support, and app size significantly impact the final cost. A clear scope helps estimate accurately.",
    },
    {
      eventKey: "2",
      header:
        "What is an app template?",
      body:
        "An app template is a pre-built framework or design used to accelerate app development. It provides a starting point for functionality, UI/UX elements, and core features, allowing developers to customize it as per project needs.",
    },
    {
      eventKey: "3",
      header: "What is the difference between native and cross-platform development?",
      body:
        "Native development uses platform-specific languages (e.g., Swift for iOS, Kotlin for Android), offering optimal performance. Cross-platform development allows a single codebase for both platforms, reducing development time and cost while maintaining performance and compatibility.",
    },
    {
      eventKey: "4",
      header: "What are the key considerations for ensuring app security? ",
      body:
        "Key considerations include secure data storage, user authentication, encryption protocols, and regular security updates. It's essential to follow best practices for API security, code obfuscation, and protection against common threats like SQL injection and malware.",
    },
    {
      eventKey: "5",
      header: "How do I choose a mobile app development company?",
      body:
        "Choose a company with a strong portfolio, expertise in your industry, clear communication, and a proven track record. Assess their technical skills, development process, and post-launch support to ensure they align with your business goals.",
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
                  textA="Build "
                  clrtext="Future-Ready Mobile Apps  "
                  textB=" for Your Business"
                  heading="banner_h"
                />
                <BannerText text="At LBM Solutions, we craft powerful custom mobile apps which aligns with your business vision and ensure continuous growth." />

                <div className="mt-4 mt-md-5">
                  <Commonbttn
                    btn_name="Secure Your Free Consultation"
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
                  src="/mobile_app_page/banner.png"
                  alt="future-proof mobile app development for businesses"
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
                  textA="Explore Our Comprehensive"
                  clrtext=" Mobile App Development "
                  textB="Solutions"
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="We provide end-to-end mobile app development services that evolve with your business. From concept to deployment, our apps are designed for seamless performance, high usability, and maximum ROI."
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
                  textA="Effective Strategies for "
                  clrtext="Mobile App Development Success (Process)  "
                  textB=""
                  heading="heading_h2 mb-0"
                />

                <ParaText
                  f_custome=""
                  para_text="Our process ensures your mobile app stands out in a competitive market. We integrate features like authentication, GPS, and payment processing to enhance engagement and growth."
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
                textA="Why Choose a "
                clrtext="Mobile App Development Agency?"
                textB=""
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0"
              />

              <ParaText
                f_custome=""
                para_text="Choosing an experienced mobile app development agency like LBM Solutions offers several advantages, including tailored solutions, advanced technical expertise, and ongoing support. Our dedicated team ensures your app is both functional and user-centric."
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

      <section className="currencyes bg-black">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Advanced  "
                  clrtext="Mobile App Development"
                  textB="Platforms"
                  heading="heading_h2 text-white"
                />

                <ParaText
                  f_custome="text-white"
                  para_text="We integrate the latest technologies to develop innovative mobile applications that deliver optimal performance, security, and user engagement. Our tech stack is designed to ensure your app's scalability and future-proofing."
                />
              </div>
            </div>
          </div>

          <div className="row text-center">
            <Card CardData={technology} />
          </div>
        </div>
      </section>

      <section className="crafting">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-12">
              <div className="inner_text">
                <Heading_h2
                  textA="Mobile App "
                  clrtext="Development Software for "
                  textB="Diverse Industries"
                  heading="heading_h2"
                />
                <ParaText
                  f_custome=""
                  para_text="At LBM Solutions, we cater to a wide range of industries, providing custom mobile app development that drives business growth, enhances user engagement, and increases operational efficiency."
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
                  textA="What Sets Us Apart as a "
                  clrtext="Mobile App Development Company?"
                  textB=""
                  heading="heading_h2"
                />

                <ParaText
                  f_custome=""
                  para_text="LBM Solutions is your trusted partner in creating high-performing, secure, and beautifully designed mobile apps. With a focus on user-centric design and innovative solutions, we deliver results that exceed expectations."
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
              <ParaText para_text="Our clients’ success stories are a testament to our dedication, expertise, and innovation in mobile app development. Here’s what some of them have to say about working with us:" />
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
