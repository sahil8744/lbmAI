"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import CommonBtn from "../components/CommonBtn";
// import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SliderComponent from "../components/SliderComponent";
import MapInstruction from "../components/MapInstruction";
import { Icon } from "@iconify/react";
import SplitType from "split-type";
import Cta from "../components/Cta";
import ScrollContext from "../components/ScrollContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import useContentful from "../lib/useContentful";

gsap.registerPlugin(ScrollTrigger);

const HomePageNew = () => {
  const [activeCard, setActiveCard] = useState(3); // Track active card
  const [play, setPlay] = useState(false);
  const [loading, setLoading] = useState(true);

  const { getBlogs } = useContentful();
  const [blogs, setBlogs] = useState([]);
  const handleCardClick = (i) => {
    setActiveCard(i === activeCard ? null : i); // Toggle active state
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogData = await getBlogs();
      const sortedBlogs = blogData.sort(
        (a, b) =>
          new Date(b.fields.date).getTime() - new Date(a.fields.date).getTime()
      );

      setBlogs(sortedBlogs);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  useGSAP(() => {
    gsap.to(".hidden span", {
      y: 0,
      duration: 0.7,
      stagger: 0.4,
    });
    gsap.to("a", {
      opacity: 1,
    });

    gsap.to(".awwards .parent_hidden img", {
      y: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".awwards",
        markers: false,
        start: "top 90%",
        end: "bottom 90%",
      },
    });

    // who we are section start

    // who we are section end

    // lead_magnet section animation start

    const elements = document.querySelectorAll(".animate_heading");

    elements.forEach((el) => {
      const typeSplit = new SplitType(el, {
        types: "lines, words, chars",
        tagName: "span",
      });

      gsap.from(typeSplit.words, {
        y: "100%",
        opacity: 0,
        rotationZ: 10,
        duration: 0.2,
        ease: "power1.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 90%", // Start animation when 80% of element is in view
          end: "center 90%",
          scrub: 3,
          markers: false, // Show start and end markers (remove in production)
        },
      });
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".lead_magnet",
        markers: false,
        start: "top 70%",
        end: "center 70%",
        scrub: 3,
      },
    });

    tl2.from(".lead_magnet .description", {
      y: 100,
      duration: 0.5,
      opacity: 0,
    });
    tl2.from(".lead_magnet .btn", {
      y: 100,
      duration: 0.5,
      opacity: 0,
    });

    // lead_magnet section animation end

    // section.tabs animation start

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: "section.tabs",
        markers: false,
        start: "top 70%",
        end: "bottom 70%",
      },
    });
    tl3.from("section.tabs .heading_01", {
      y: 100,
      opacity: 0,
      duration: 0.5,
    });

    tl3.from("section.tabs #fill-tab-example", {
      y: 100,
      opacity: 0,
      duration: 0.5,
    });
    tl3.to(
      "section.tabs .anim_top",
      {
        y: 0,
        duration: 0.8,
      },
      "same"
    );
    tl3.to(
      "section.tabs .anim_bottom",
      {
        y: 0,
        duration: 0.8,
      },
      "same"
    );

    // const tl4 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "section.teach_stack", 
    //     markers: false,
    //     start: "top 80%",
    //     end: "center 80%",
    //   },
    // });

    // tl4.from("section.teach_stack .heading_01", {
    //   y: 100,
    //   opacity: 0,
    //   duration: 0.5,
    // });

    

    // tl4.from("section.teach_stack .card_bx .inner_text img", {
    //   scale: 0,
    //   duration: 0.1,
    //   stagger: 0.1,
    // });

    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: "section.achievement_wpr", 

        markers: false,
        start: "top 80%",
        end: "center 80%",
      },
    });
    tl5.from("section.achievement_wpr .heading_01", {
      y: 100,
      opacity: 0,
      duration: 0.5,
    });
    tl5.from("section.our_products .origin_app", {
      transformOrigin: "10% 0",
      rotation: -40, // Correct way to rotate
      // duration: 0.1, // Always specify a duration
      ease: "bounce",
    });

    const tl8 = gsap.timeline({
      stagger: 0.2,
      scrollTrigger: {
        trigger: "section.experties",
        markers: false,
        start: "top 70%",
        end: "bottom 70%",
      },
    });

    tl8.from("section.experties .heading_01", {
      y: 100,
      opacity: 0,
      duration: 0.5,
    });
    tl8.from("section.experties .min_h", {
      y: -100,
      opacity: 0,
      duration: 0.2,
      stagger: 0.1,
    });

    // section.tabs animation end
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Roadmap",
        markers: false,
        start: "top 70%",
        end: "bottom 70%",
        // scrub: 1,
      },
    });

    tl.from(".Roadmap small", {
      y: 100,
      opacity: 0,
      duration: 0.4,
    });
    tl.from(".Roadmap .heading_01", {
      y: 100,
      opacity: 0,
      duration: 0.4,
    });
    tl.from(".Roadmap .description", {
      y: 100,
      opacity: 0,
      duration: 0.4,
    });

    const tl11 = gsap.timeline({
      scrollTrigger: {
        trigger: ".Roadmap",
        markers: false,
        start: "top 70%",
        end: "150% 70%",
        scrub: 1, // Smooth transition on scroll
      },
    });

    tl11.to(".overlay_roadmap", {
      height: 0,
      duration: 80,
    });
    tl11.to(".overlay_roadmap", {
      display: "none",
    });

    gsap.from(".Fnd_Card", {
      opacity: 0,
      right: 140,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".Fnd_Card",
        markers: false,
        start: "top 68%",
        end: "top 68%",
        scrub: 5,
      },
    });
    gsap.from(".Snd_Card", {
      opacity: 0,
      left: 140,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".Snd_Card",
        markers: false,
        start: "top 70%",
        end: "top 70%",
        scrub: 5,
      },
    });
    gsap.from(".Trd_Card", {
      opacity: 0,
      right: 140,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".Trd_Card",
        markers: false,
        start: "top 70%",
        end: "top 70%",
        scrub: 5,
      },
    });
    gsap.from(".Fth_Card", {
      opacity: 0,
      left: 140,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".Fth_Card",
        markers: false,
        start: "top 70%",
        end: "top 70%",
        scrub: 5,
      },
    });
    gsap.from(".Fifth_Card", {
      opacity: 0,
      right: 140,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".Fifth_Card",
        markers: false,
        start: "top 70%",
        end: "top 70%",
        scrub: 5,
      },
    });
    gsap.from(".Sixth_Card", {
      opacity: 0,
      left: 140,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".Sixth_Card",
        markers: false,
        start: "top 68%",
        end: "top 68%",
        scrub: 5,
      },
    });
    gsap.from(".Seventh_Card", {
      opacity: 0,
      right: 140,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".Seventh_Card",
        markers: false,
        start: "top 60%",
        end: "top 60%",
        scrub: 5,
      },
    });
    gsap.from(".Eightth_Card", {
      opacity: 0,
      left: 140,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".Eightth_Card",
        markers: false,
        start: "top 60%",
        end: "top 60%",
        scrub: 5,
      },
    });

    gsap.from(".plus01", {
      scale: 0,
      duration: 1,
      ease: "in-out",
      scrollTrigger: {
        trigger: ".plus01",
        markers: false,
        start: "top 90%",
        end: "center 90%",
        scrub: 2,
      },
    });
    gsap.from(".plus02", {
      scale: 0,
      duration: 1,

      scrollTrigger: {
        trigger: ".plus02",
        markers: false,
        start: "top 84%",
        end: "center 84%",
        scrub: 2,
      },
    });
    gsap.from(".plus03", {
      scale: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".plus03",
        markers: false,
        start: "top 84%",
        end: "center 84%",
        scrub: 2,
      },
    });
    gsap.from(".plus04", {
      scale: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".plus04",
        markers: false,
        start: "top 84%",
        end: "center 84%",
        scrub: 2,
      },
    });
    gsap.from(".plus05", {
      scale: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".plus05",
        markers: false,
        start: "top 84%",
        end: "center 84%",
        scrub: 2,
      },
    });
    gsap.from(".plus06", {
      scale: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".plus06",
        markers: false,
        start: "top 84%",
        end: "center 84%",
        scrub: 2,
      },
    });
    gsap.from(".plus07", {
      scale: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".plus07",
        markers: false,
        start: "top 84%",
        end: "center 84%",
        scrub: 2,
      },
    });
    gsap.from(".plus08", {
      scale: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".plus08",
        markers: false,
        start: "top 70%",
        end: "center 70%",
        scrub: 2,
      },
    });

    // testimonials
    const tll4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials",
        markers: false,
        start: "top 70%",
        end: "bottom 70%",
      },
    });
    tll4.from(".testimonials .heading_01", {
      y: 100,
      opacity: 0,
      duration: 0.4,
    });

    // testimonials end

    const tll5 = gsap.timeline({
      scrollTrigger: {
        trigger: "section.blogs",
        markers: false,
        start: "top 70%",
        end: "bottom 70%",
      },
    });
    tll5.from("section.blogs .heading_01", {
      y: 100,
      opacity: 0,
      duration: 0.4,
    });

    // Scroll Animations with Rotation
    const animateElements = [
      { className: ".awards_bg", x: -500, rotate: -15 },
      { className: ".projects_bg", x: 500, rotate: 15 },
      { className: ".creative_bg", x: -500, rotate: -15 },
      { className: ".experience_box", x: 500, rotate: 15 },
    ];

    animateElements.forEach((item) => {
      gsap.fromTo(
        item.className,
        { x: item.x, rotate: item.rotate, opacity: 0 },
        {
          x: 0,
          rotate: 0,
          opacity: 1,
          duration: 2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: item.className,
            start: "top 80%",
            end: "bottom 80%",
            scrub: true,
            markers: false,
          },
        }
      );
    });

    // gsap.from(".blog-card", {
    //   background: "red",
    //   opacity: 0,
    //   y: 50,
    //   stagger: 0.2,
    //   duration: 1,
    //   ease: "power3.out",
    //   scrollTrigger: {
    //     trigger: ".blogs",
    //     start: "top 70%",
    //     end: "bottom 70%",
    //     markers: true,
    //     scrub: true,
    //   },
    // });
  }, []);

  // const [activeIndex, setActiveIndex] = useState(0);
  // useGSAP(() => {
  //   let sections = document.querySelector(".Anm_slider");

  //   let trigger = ScrollTrigger.create({
  //     trigger: sections,
  //     start: "top center",
  //     end: "bottom center",
  //     scrub: 1,
  //     markers: false,
  //     onUpdate: (self) => {
  //       let newIndex = Math.min(
  //         Math.floor(self.progress * AnmSlider.length),
  //         AnmSlider.length - 1
  //       );
  //       setActiveIndex(newIndex);
  //     },
  //   });

  //   return () => trigger.kill();
  // }, []);
  // testimonials code start
  const [current, setCurrent] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    if (slideRef.current) {
      gsap.fromTo(
        slideRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5 }
      );
    }
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slides every 5 seconds

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    gsap.to(slideRef.current, {
      opacity: 0,
      x: 20,
      duration: 0.3,
      onComplete: () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      },
    });
  };
  // testimonials code end

  // lead_magnet start
  const [isModalOpen, setModalOpen] = useState(false);
  let modalOpened = false;

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".lead_magnet",
      start: "top center",
      onEnterBack: () => {
        if (!modalOpened) {
          setModalOpen(false);
          modalOpened = true;
        }
      },
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup
  }, []);
  // lead_magnet start end

  const BarndsLogo = [
    {
      img: "google",
    },
    {
      img: "clutch",
    },
    {
      img: "good_firms",
    },
    {
      img: "android",
    },
    {
      img: "google",
    },
    {
      img: "clutch",
    },
  ];

  const products = [
    {
      id: 1,
      img: "emonitrix.png",
      path: "https://www.emonitrix.ai/",
      title: "Emonitrix",
      description:
        "Employee monitoring tool to enhance business efficiency with employee activity monitoring and real-time AI-driven performance reports.",
    },
    {
      id: 2,
      img: "tapdap.png",
      path: "https://www.tapdapp.io/",
      title: "TapDapp",
      description:
        "A multichain crypto wallet to simplify asset management with Web 3.0 Browser, ensure security and track market trends.",
    },
    {
      id: 3,
      img: "builditnow.png",
      path: "javascript:void(0)",
      title: "Builditnow",
      description:
        "Empower enterprises to create custom software anytime without coding skills and reduce costs, enhancing scalability",
    },
    {
      id: 4,
      img: "corise.jpg",
      path: "https://corise.ai/",
      title: "CoRise",
      description:
        "A platform that connects with cofounders, entrepreneurs, startups, and investors globally for funding and business growth.",
    },
  ];

  const Experties = [
    {
      className: "bg-black",
      name: "Healthcare ",
      value: "01",
      color: "text-white",
      // backgroundImage: "../home_page/healthcare.jpg",
      backgroundColor: "#84a5f2",
      title: "Healthcare",
      description:
        "Our solutions streamline patient care, enhance medical operations, and improve service efficiency, contributing to better healthcare delivery.",
      points: [
        "Electronic Health Records (EHR)",
        "Telemedicine Solutions",
        "Data Security & Compliance",
        "AI-driven Diagnostics",
        "Patient Management Systems",
        "Mobile Health Apps",
        "Appointment Scheduling Systems",
        "Health Data Analytics",
      ],
    },
    {
      className: "lavender ",
      name: "Retail",
      value: "02",
      color: "text-black",
      // backgroundImage: "../home_page/retail.jpg",
      backgroundColor: "#84a5f2",
      title: "Retail",
      description:
        "We empower retail businesses with custom tech solutions to optimize inventory, improve customer experience, and increase sales.",
      points: [
        "Inventory Management Systems",
        "E-commerce Platform Development",
        "Customer Loyalty Programs",
        "Point of Sale (POS) Systems",
        "Retail Analytics Tools",
        "Omnichannel Integration",
        "Mobile Shopping Solutions",
        "Data-driven Customer Insights",
      ],
    },

    {
      className: "bg-black",
      name: "Finance",
      value: "03",
      color: "text-white",
      // backgroundImage: "../home_page/finance.jpg",
      backgroundColor: "#84a5f2",
      title: "Finance",
      description:
        "Our innovative solutions help financial institutions streamline operations, improve security, and enhance customer experience through technology.",
      points: [
        "Digital Banking Solutions",
        "Blockchain for Finance",
        "Fintech Apps",
        "Payment Gateway Integration",
        "Mobile Wallet Solutions",
        "Fraud Prevention Solutions",
        "Asset Management Systems",
        "Cryptocurrency Integration",
      ],
    },
    {
      className: "lavender ",
      name: "Transportation",
      value: "04",
      color: "text-black",
      // backgroundImage: "../home_page/transportation.jpg",
      backgroundColor: "#84a5f2",
      title: "Transportation",
      description:
        "We provide technology solutions that optimize transportation logistics, improve fleet management, and deliver enhanced customer experiences.",
      points: [
        "Fleet Management Solutions",
        "Route Optimization",
        "Vehicle Tracking Systems",
        "Logistics Management Platforms",
        "Delivery Tracking Apps",
        "E-commerce Delivery Integration",
        "Mobile Ride-Hailing Apps",
        "Automated Billing Solutions",
      ],
    },
    {
      className: "bg-black",
      name: "Education",
      value: "05",
      color: "text-white",
      // backgroundImage: "../home_page/education.jpg",
      backgroundColor: "#84a5f2",
      title: "Education",
      description:
        "We help educational institutions innovate with digital tools, e-learning platforms, and data-driven solutions to enhance learning.",
      points: [
        "E-Learning Platforms",
        "Learning Management Systems (LMS)",
        "Metaverse Learning Platforms",
        "Online Examination Systems",
        "Mobile Learning Apps",
        "Student Information Systems",
        "School Administration Systems",
        "Virtual Classrooms",
      ],
    },
    {
      className: "lavender ",
      name: "Manufacturing",
      value: "06",
      color: "text-black",
      // backgroundImage: "../home_page/manufacturing.jpg",
      backgroundColor: "#84a5f2",
      title: "Manufacturing",
      description:
        "Our tech solutions assist manufacturers in optimizing production, improving quality control, and reducing operational costs.",
      points: [
        "Automated Production Systems",
        "IoT-Enabled Manufacturing Solutions",
        "Supply Chain Optimization",
        "Quality Control Systems",
        "ERP Solutions for Manufacturing",
        "Inventory Tracking Systems",
        "Manufacturing Analytics Tools",
        "Predictive Maintenance",
      ],
    },
    {
      className: "bg-black ",
      name: "Technology",
      value: "07",
      color: "text-white",
      // backgroundImage: "../home_page/technology.jpg",
      backgroundColor: "#84a5f2",
      title: "Technology",
      description:
        "We provide versatile digital solutions that help businesses stay competitive and secure in a rapidly evolving market.",
      points: [
        "Cloud Computing Solutions",
        "Custom Software Development",
        "AI & Machine Learning",
        "Cybersecurity Solutions",
        "Blockchain Development",
        "IT Infrastructure Management",
        "SaaS Solutions",
        "Digital Transformation Strategies",
      ],
    },
    {
      className: "lavender",
      name: "Real Estate",
      value: "08",
      color: "text-black",
      // backgroundImage: "../home_page/real_estate.png",
      backgroundColor: "#84a5f2",
      title: "Real Estate",
      description:
        "We enable real estate companies to streamline property management, enhance client experiences, and optimize operational workflows.",
      points: [
        "Property Management Software",
        "Real Estate CRM",
        "Virtual Property Tours",
        "Real Estate Listings Platforms",
        "Mobile Apps for Agents",
        "Online Property Auctions",
        "Payment Gateway Integration",
        "Lease Management Systems",
      ],
    },
  ];

  // const BlogsData = [
  //   {
  //     img: "blog_01",
  //     title:
  //       "Business Startup Idea Validation Framework That Reduce Failure Risk",
  //     description:
  //       "A clear idea validation model helps cover essential steps like market research, competitor analysis, customer feedback, and prototyping.",
  //     dated: "January 29, 2025",
  //     path:
  //       "https://www.lbmsolution.com/blogs/startup-idea-validation-framework-to-minimize-risk",
  //   },
  //   {
  //     img: "blog_02",
  //     title: "Why Startups Should Consider Template-Based App Development?",
  //     description:
  //       "Mobile app templates are pre-designed structures that simplify the process of app development. They provide a ready-made foundation with customizable elements.",
  //     dated: "January 23, 2025",
  //     path:
  //       "https://www.lbmsolution.com/blogs/why-app-templates-work-for-startups",
  //   },
  //   {
  //     img: "blog_03",
  //     title: "A Step-by-Step Guide to Validate Your Startup Idea in 30 Days",
  //     description:
  //       "Startup validation is the key to ensuring your idea aligns with market needs, reducing risks, and increasing the chances of success.",
  //     dated: "January 22, 2025",
  //     path:
  //       "https://www.lbmsolution.com/blogs/validate-your-startup-idea-in-30-days",
  //   },
  // ];

  const tabData = [
    {
      eventKey: "home",
      title: "App Development",
      heading: "App Development",
      description:
        "We create high-performing iOS and Android apps tailored to startups’ needs. Our solutions enhance user engagement, accelerate sales and drive revenue, empowering them to achieve long-term growth with user-centric designs.",
      services: [
        {
          name: "Custom Mobile App Development",
          path: "/custom-software-development-services",
        },
        { name: "Cross-Platform App Development", path: "javascript:void(0)" },
        { name: "Clone App Development", path: "javascript:void(0)" },
        { name: "iOS and Android App Development", path: "javascript:void(0)" },
      ],
      imgSrc: "/home_page/app_dev.jpg",
    },
    {
      eventKey: "profile",
      title: "Software Development",
      heading: "Software Development",
      description:
        "Our software developers focus on creating custom, scalable, and secure solutions. We design software that helps businesses solve complex challenges and drive digital transformation with technology and strategic innovation.",
      services: [
        {
          name: "Custom Software Development",
          path: "/custom-software-development-services",
        },
        {
          name: "CRM Software Development",
          path: "/custom-crm-software-development",
        },
        { name: "Offshore Software Development", path: "javascript:void(0)" },
        {
          name: "Enterprise Software Development",
          path: "javascript:void(0)",
        },
      ],
      imgSrc: "/home_page/solfdev.jpg",
    },
    {
      eventKey: "longer-tab",
      title: "Blockchain Development",
      heading: "Blockchain Development",
      description:
        "We design and create scalable blockchain solutions, enabling transparency, automation, and efficiency. Our expertise helps enterprises enhance security, reduce costs, and unlock new growth opportunities in the decentralized digital economy.",
      services: [
        {
          name: "Token Development",
          path: "/crypto-token-development-company ",
        },
        {
          name: "Crypto Coin Development",
          path: "/crypto-coin-development-company",
        },
        {
          name: "Smart Contract Development",
          path: "/smart-contract-development-company",
        },
        {
          name: "Metaverse Development",
          path: "/metaverse-development-company ",
        },
        {
          name: "Crypto Wallet Development",
          path: "/crypto-wallet-development-company",
        },
        { name: "NFT Development", path: "/nft-development-company" },
        {
          name: "Crypto Exchange Development",
          path: "/cryptocurrency-exchange-development-company",
        },
        { name: "dApp Development", path: "/dapp-development-services" },
      ],
      imgSrc: "/home_page/blockchain.jpg",
    },
    {
      eventKey: "marketing ",
      title: "Marketing Solutions ",
      heading: "Marketing Solutions ",
      description:
        "Our service goes beyond product launch. We deliver expert marketing solutions that drive growth, establish credibility, and create market value for your tech product. We ensure to place your brand for consistent success.",
      services: [
        {
          name: "Search Engine Optimization (SEO)",
          path: "javascript:void(0)",
        },
        { name: "Social Media Optimization (SMO)", path: "javascript:void(0)" },
        { name: "PPC Marketing", path: "javascript:void(0)" },
        { name: "GMB Management", path: "javascript:void(0)" },
        { name: "Reputation Management", path: "javascript:void(0)" },
        { name: "Content Marketing ", path: "javascript:void(0)" },
      ],
      imgSrc: "/home_page/marketing.jpg",
    },
    {
      eventKey: "website_development ",
      title: "Website Development",
      heading: "Website Development",
      description:
        "We provide tailored website development solutions based on your unique business needs. Our team creates user-friendly, responsive websites that enhance your online presence and grow your business digitally.",
      services: [
        { name: "Custom Web Development ", path: "javascript:void(0)" },
        { name: "UI UX Design Services​ ", path: "javascript:void(0)" },
        { name: "Custom Web App Development", path: "javascript:void(0)" },
        { name: "Custom Ecommerce Development", path: "javascript:void(0)" },
        { name: "CMS Development Services", path: "javascript:void(0)" },
        { name: "Web Portal Development", path: "javascript:void(0)" },
      ],
      imgSrc: "/home_page/website_development.jpg",
    },
  ];

  const testimonials = [
    {
      quote:
        "Partnering with LBM was a game-changer for us. Their team delivered tailored software solutions that truly addressed our needs, improving efficiency and user experience. We couldn't be happier!. ",
      name: "John Doe",
      // role: "Operations Manager",
      // company: "51-200 Employees, Technology",
      rating: 4,
      image: "/home_page/testimonial01.png",
    },
    {
      quote:
        "We were impressed with the outstanding ICO services of LBM. Their team guided us through a successful fundraising journey, from planning to execution. They offered strategic insights and project success.",
      name: " Michael Anderson",
      // role: "CEO",
      // company: "Startup, AI Solutions",
      rating: 4,
      image: "/home_page/testimonial02.png",
    },
    {
      quote:
        "LBM developed our taxi booking app, and the results were incredible. It's intuitive, fast, and had significantly enhanced our customer satisfaction and service efficiency. ",
      name: "Alex Johnson",
      // role: "CEO",
      // company: "Startup, AI Solutions",
      rating: 4,
      image: "/home_page/testimonial03.png",
    },
  ];

  const map_Instruction = [
    {
      phase: "01",
      title: "Ideation",
      description: "Define the problem and conceptualize your product idea.",
      mapClassName: "Fnd_Card",
      pulsCls: "plus01",
    },
    {
      phase: "02",
      title: "Validation",
      description: "Analyze market trends and validate the product concept.",
      mapClassName: "Snd_Card ",
      pulsCls: "plus02 even",
    },
    {
      phase: "03",
      title: "MVP",
      description:
        "Build a minimum viable product (MVP) to test user response.",
      mapClassName: "Trd_Card ",
      pulsCls: "plus03",
    },
    {
      phase: "04",
      title: "Design",
      description:
        "Create wireframes and prototypes to optimize user experience.",
      mapClassName: "Fth_Card ",
      pulsCls: "plus04 even",
    },
    {
      phase: "05",
      title: "Development",
      description:
        "Code the product, ensuring functionality and feature integration.",
      mapClassName: "Fifth_Card odd",
      pulsCls: "plus05",
    },
    {
      phase: "06",
      title: "Testing",
      description:
        "Conduct thorough testing to confirm quality and performance.",
      mapClassName: "Sixth_Card ",
      pulsCls: "plus06 even",
    },
    {
      phase: "07",
      title: "Deployment",
      description:
        "Launch and deploy the product in market for initial feedback.",
      mapClassName: "Seventh_Card ",
      pulsCls: "plus07 odd",
    },
    {
      phase: "08",
      title: "Support",
      description: "Provide maintenance, updates, and scale based on demand.",
      mapClassName: "Eightth_Card  ",
      pulsCls: "plus08 even",
    },
    // Add more objects if needed
  ];

  const industriesData = [
    {
      key: "healthcare",
      title: "Healthcare",
      img: "ind_01.png",
      description:
        "Our solutions streamline patient care, enhance medical operations, and improve service efficiency, contributing to better healthcare delivery.",
      features: [
        "Electronic Health Records (EHR)",
        "Telemedicine Solutions",
        "Data Security & Compliance",
        "AI-driven Diagnostics",
        "Patient Management Systems",
        "Mobile Health Apps",
        "Appointment Scheduling Systems",
        "Health Data Analytics",
      ],
    },
    {
      key: "retail",
      title: "Retail",
      img: "ind_02.png",
      description:
        "We empower retail businesses with custom tech solutions to optimize inventory, improve customer experience, and increase sales.",
      features: [
        " Inventory Management Systems",
        "E-commerce Platform Development",
        "Customer Loyalty Programs",
        "Point of Sale (POS) Systems",
        "Retail Analytics Tools",
        "Omnichannel Integration",
        "Mobile Shopping Solutions",
        "Data-driven Customer Insights",
      ],
    },
    {
      key: "finance",
      title: "Finance",
      img: "ind_03.png",
      description:
        "Our innovative solutions help financial institutions streamline operations, improve security, and enhance customer experience through technology.",
      features: [
        " Digital Banking Solutions",
        "Blockchain for Finance",
        " Fintech Apps",
        " Payment Gateway Integration",
        "Mobile Wallet Solutions",
        "Fraud Prevention Solutions",
        "Asset Management Systems",
        "Cryptocurrency Integration",
      ],
    },
    {
      key: "transportation",
      title: "Transportation",
      img: "ind_04.png",
      description:
        "We provide technology solutions that optimize transportation logistics, improve fleet management, and deliver enhanced customer experiences.",
      features: [
        " Fleet Management Solutions",
        "Route Optimization",
        "Vehicle Tracking Systems",
        "Logistics Management Platforms",
        "Delivery Tracking Apps",
        "E-commerce Delivery Integration",
        "Mobile Ride-Hailing Apps",
        "Automated Billing Solutions",
      ],
    },
    {
      key: "education",
      title: "Education",
      img: "ind_05.png",
      description:
        "We help educational institutions innovate with digital tools, e-learning platforms, and data-driven solutions to enhance learning.",
      features: [
        "E-Learning Platforms",
        "Learning Management Systems (LMS)",
        "Metaverse Learning Platforms",
        "Online Examination Systems",
        " Mobile Learning Apps",
        " Student Information Systems",
        "School Administration Systems",
        "Virtual Classrooms",
      ],
    },
    {
      key: "manufacturing",
      title: "Manufacturing",
      img: "ind_06.png",
      description:
        "Our tech solutions assist manufacturers in optimizing production, improving quality control, and reducing operational costs.",
      features: [
        " Automated Production Systems",
        " IoT-Enabled Manufacturing Solutions",
        "Supply Chain Optimization",
        "Quality Control Systems",
        "ERP Solutions for Manufacturing",
        "Inventory Tracking Systems",
        " Manufacturing Analytics Tools",
        " Predictive Maintenance",
      ],
    },
    {
      key: "technology",
      title: "Technology",
      img: "ind_07.png",
      description:
        "We provide versatile digital solutions that help businesses stay competitive and secure in a rapidly evolving market.",
      features: [
        "Cloud Computing Solutions",
        "Custom Software Development",
        "AI & Machine Learning",
        "Cybersecurity Solutions",
        "Blockchain Development",
        " IT Infrastructure Management",
        " SaaS Solutions",
        "Digital Transformation Strategies",
      ],
    },
    {
      key: "real_estate",
      title: "Real Estate",
      img: "ind_08.png",
      description:
        "We enable real estate companies to streamline property management, enhance client experiences, and optimize operational workflows.",
      features: [
        " Property Management Software",
        "Real Estate CRM",
        " Virtual Property Tours",
        "Real Estate Listings Platforms",
        "Mobile Apps for Agents",
        "Online Property Auctions",
        "Payment Gateway Integration",
        " Lease Management Systems",
      ],
    },
    {
      key: "hospitality",
      title: "Hospitality",
      img: "ind_09.png",
      description:
        "Our tech solutions enhance guest experiences, optimize operations, and improve service efficiency for superior hospitality services.",
      features: [
        "Reservation Systems",
        "Guest Engagement Systems",
        "Mobile Check-in Tools",
        "Guest Experience Platforms",
        "Event Management",
        "Room and Service Automation",
        "Customer Analytics Tools ",
        "Resource Management Systems",
      ],
    },

    {
      key: "travel",
      title: "Travel",
      img: "ind_10.png",
      description:
        "We build customized digital platforms to enhance bookings, experiences, management, and customer engagement in travel.",
      features: [
        " Booking Management Systems",
        " Trip Planning Tools",
        "Online Reservation System",
        "Itinerary Management Solutions ",
        " Travel Data Analytics",
        " Secure Payment Solutions",
        " Customer Feedback System",
        " Travel Loyalty Programs",
      ],
    },
  ];

  const AnmSlider = [
    {
      img: "/home_page/slider_01.png",
      title: "MNTC Coin for Digital Transactions",
      description:
        "MNTC Coin, a secure cryptocurrency, is designed to enhance digital payment systems and drive widespread adoption in the evolving financial landscape.",
    },
    {
      img: "/home_page/slider_02.png",
      title: "MNTC Coin for Digital Transactions",
      description:
        "MNTC Coin, a secure cryptocurrency, is designed to enhance digital payment systems and drive widespread adoption in the evolving financial landscape.",
    },
  ];

  const [activeKey, setActiveKey] = useState(industriesData[0].key);

  return (
    <>
      {/* <ScrollContext> </ScrollContext> */}
      <div className="latest_home_page">
        <div className="banner_section position-relative overflow-hidden">
          <video
            muted
            loop
            autoPlay
            onCanPlay={() => {
              this.muted = false;
            }}
            className="position-absolute top-0 left-0 "
          >
            <source src="/home_page/bg_banner1.mp4" />
          </video>

          <section className="home_page_banners h-100 position-relative z-3">
            <div className="container-fluid h-100">
              <div className="row align-items-center align-items-center h-100">
                <h1 className=" w-100 text-capitalize text-center my-sm-5 my-lg-0">
                  <div className="hidden start">
                    <span className="uset_ff fs_20 pt-lg-5 mt-lg-5 mb-5 ">
                      {" "}
                      Building Digital Success{" "}
                    </span>
                  </div>
                  <div className="hidden center">
                    <span className="unset_fontfamily fs"> Innovative</span>
                  </div>
                  <div className="hidden center">
                    <span className="unset_fontfamily fs"> Technologies</span>
                  </div>
                  <div className="hidden center">
                    <span className="uset_ff fs_18">
                      {" "}
                      All-in-One Solution for Digital Excellence -
                      <CommonBtn
                        btn_name="FREE CONSULTATION!"
                        path="/contact"
                        commonbtn="bg-transparent anmi_btn lh-1"
                        img_cls="d-none"
                        add_cls="d-none"
                      />
                    </span>
                  </div>
                </h1>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="home_page position-relative ">
        <section className="pb-4">
          <div className="awwards py-4" style={{ backgroundColor: "#FBFBFB" }}>
            <div className="container">
              <div className="row justify-content-between align-items-center">
                {BarndsLogo.map((val, i) => {
                  return (
                    <div
                      className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0"
                      key={i}
                    >
                      <div className="parent_hidden">
                        <img
                          src={`/home_page/${val.img}.png`}
                          alt="image"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-5 col-xl-5">
                <div className="small">
                  {" "}
                  <small className="skyblue animate_heading">Who we are</small>
                </div>
                <h2 className="H2_homepage animate_heading ">
                  {/* heading_01 */}
                  Build market-ready products with us!
                </h2>
              </div>
              <div className="col-3 text-center d-none d-xl-block">
                <div className="img_bx">
                  <img
                    src="../home_page/arrow01.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="inner_text text ">
                  <p className="mt-lg-4 lh-base animate_heading text-lg-end">
                    {/* description */}
                    We understand your vision, study your customers' needs,
                    craft an MVP, and launch a feature-rich digital platform for
                    long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tabs">
          <div className="container">
            <div className="col-12 mb-3 mb-lg-5">
              <h2 className="H2_homepage heading_01 ">
                Market-Ready Product Development Services
              </h2>
            </div>
            <div className="row">
              <div className="col-12">
                <Tabs
                  defaultActiveKey="home"
                  id="fill-tab-example"
                  className="mb-3 no_wrap"
                >
                  {tabData.map((tab) => (
                    <Tab
                      key={tab.eventKey}
                      eventKey={tab.eventKey}
                      title={tab.title}
                    >
                      <div className="row mt-3 mt-lg-5 align-items-center">
                        <div className="col-xl-6 mb-4 mb-xl-0 overflow-hidden">
                          <div
                            className="pt-3 p-4 rounded-4 anim_top"
                            style={{
                              backgroundColor: "#FBFBFB",
                              border: "1px solid #F2F2F2",
                            }}
                          >
                            <h3 className="fw-semibold sky">{tab.heading}</h3>
                            <p className="mt-3 lh-base">{tab.description}</p>
                            <div className="row mt-4">
                              {tab.services.map((service, index) => (
                                <div className="col-sm-6" key={index}>
                                  <p className=" tb_card  rounded-3">
                                    <Link href={service.path}>
                                      {service.name}
                                    </Link>
                                  </p>
                                </div>
                              ))}
                            </div>
                            {/* <CommonBtn
                              btn_name="Develop Your Website"
                              path="/"
                              commonbtn="btn_cls rounded-0 fw-normal mt-4"
                              img_cls="d-none"
                              add_cls="d-none"
                            /> */}
                          </div>
                        </div>
                        <div className="col-xl-6 d-none d-xl-block overflow-hidden">
                          <div className="overflow-hidden rounded-4 anim_bottom">
                            <img
                              src={tab.imgSrc}
                              alt="image"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </Tab>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        <section className="lead_magnet" style={{ backgroundColor: "#E1EBFF" }}>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-7 mx-auto text-center">
                <h2 className="H2_homepage animate_heading">
                  Validate Your Product; Turn it to Market-Ready.
                </h2>
                <p className="mt-4 lh-base description ">
                  You’ve got a great MVP/product idea, but doubts are creeping
                  in. What if the market doesn’t need it? What if it fails?
                  Don’t worry! Our experts assess your product’s feasibility,
                  market positioning, and roadblocks and render a validation
                  report within 24 hours.
                </p>
                <div className="btn">
                  <CommonBtn
                    btn_name="Validate Now"
                    path="/contact"
                    commonbtn="btn_cls rounded-0 fw-normal py-2 rounded-2 mt-3 "
                    img_cls="d-none"
                    add_cls="d-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Modal Box */}
          {isModalOpen && (
            <div className="modal-overlay ">
              <div className="modal-box col-sm-10 col-lg-9 col-xl-8 col-xxl-6  position-relative ">
                <div className="row justify-content-between align-items-center text-center text-md-start">
                  <div className=" col-md-7 col-lg-8 col-xl-7 ">
                    {/* <h3 className="fw-bold sky">Startup Success Kit</h3> */}
                    <h4 className="sky bold">
                      Unlock Exclusive Startup Resources!
                    </h4>
                    <p className="text-white thin">
                      We’ve created free guides and actionable insights to help
                      you scale your business, avoid pitfalls, and accelerate
                      growth. Download now and start building smarter!
                    </p>
                    <div className="col-9 mt-4 mx-auto m-md-0">
                      <CommonBtn
                        btn_name=" Access Expert Insights Now"
                        path="/contact"
                        commonbtn="btn_cls rounded-0 fw-normal py-2 rounded-2 w-100 mt-3"
                        img_cls="d-none"
                        add_cls="d-none"
                      />
                    </div>
                    <button
                      style={{ background: "#017bec" }}
                      onClick={() => setModalOpen(false)}
                      className="btn text-white position-absolute top-0 end-0 m-3 runded-full"
                    >
                      ╳
                    </button>
                  </div>
                  <div className="col-sm-3 col-md-5 col-lg-4 px-lg-5 d-none d-md-block">
                    <img
                      src="/home_page/laed_magnet.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          <style jsx>{`
            .modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.72);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 100;
            }
            .modal-box {
              background: #000;
              padding: 40px;
              border-radius: 10px;
            }
          `}</style>
        </section>

        <section className="Roadmap pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 mx-auto">
                <div className="inner_text text-center">
                  <h2 className="H2_homepage text-center mb-lg-4 heading_01">
                    Our Full-Cycle Product Development Process
                  </h2>
                  <p className="description">
                    Our developers adopt a transparent process to develop your
                    digital platform and ensure smooth transformation of ideas
                    into market-ready solutions with scalability, and continuous
                    support.
                  </p>
                </div>
              </div>
            </div>
            <div className="  roadmap_line mt-lg-5">
              <div className="row">
                <div className="col-4 mx-auto">
                  <div className="d-flex flex-column justify-content-start position-relative">
                    <div className="overlay_roadmap"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 12 12"
                      className="mx-auto"
                    >
                      <path
                        fill="currentColor"
                        d="M5.449 1.105a1.5 1.5 0 0 1 1.102 0l3.5 1.384A1.5 1.5 0 0 1 11 3.884v4.23a1.5 1.5 0 0 1-.949 1.395l-3.5 1.384a1.5 1.5 0 0 1-1.102 0l-3.5-1.384A1.5 1.5 0 0 1 1 8.114v-4.23a1.5 1.5 0 0 1 .949-1.395zm-1.763 2.93a.5.5 0 1 0-.372.93l2.186.874V8a.5.5 0 0 0 1 0V5.839l2.186-.875a.5.5 0 1 0-.372-.928L6 4.96z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="186"
                      height="216"
                      fill="none"
                      viewBox="0 0 186 216"
                      className="text-center mx-auto"
                    >
                      <g clip-path="url(#rm--top)">
                        <path
                          stroke="#030118"
                          stroke-dasharray="6 8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          d="M92.96 4.145v142.778a29.999 29.999 0 0 0 15.024 25.994l59.914 34.521a29.999 29.999 0 0 1 15.023 25.994v171.457a30.001 30.001 0 0 1-15.023 25.995L18.023 517.235A30 30 0 0 0 3 543.229v172.65a30.001 30.001 0 0 0 15.023 25.994l149.875 86.351a30.001 30.001 0 0 1 15.023 25.995v171.461c0 10.72-5.728 20.63-15.023 25.99l-149.875 86.35a30.012 30.012 0 0 0-15.023 26v168.02c0 10.65 5.648 20.51 14.839 25.89l60.17 35.24a29.99 29.99 0 0 1 14.838 25.89v431.35"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="rm--top">
                          <path
                            fill="#fff"
                            d="M0 0h186v216H0z"
                            stroke-width="3"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="186"
                      height="310"
                      fill="none"
                      viewBox="0 0 186 310"
                      className="text-center mx-auto"
                    >
                      <g clip-path="url(#rm--mid)">
                        <path
                          stroke="#030118"
                          stroke-dasharray="6 8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          d="M92.96-211.855v142.778a30 30 0 0 0 15.024 25.994l59.914 34.52a30 30 0 0 1 15.023 25.995v171.457a30.001 30.001 0 0 1-15.023 25.995L18.023 301.235A30 30 0 0 0 3 327.229v172.65a30.001 30.001 0 0 0 15.023 25.994l149.875 86.351a30.001 30.001 0 0 1 15.023 25.995v171.457a29.999 29.999 0 0 1-15.023 25.994L18.023 922.022A29.999 29.999 0 0 0 3 948.016v168.024c0 10.65 5.648 20.51 14.839 25.89l60.17 35.24a29.99 29.99 0 0 1 14.838 25.89v431.35"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="rm--mid">
                          <path
                            fill="#fff"
                            d="M0 0h186v310H0z"
                            stroke-width="3"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="186"
                      height="311"
                      fill="none"
                      viewBox="0 0 186 311"
                      className="text-center mx-auto"
                    >
                      <g clip-path="url(#rm--med)">
                        <path
                          stroke="#030118"
                          stroke-dasharray="6 8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          d="M92.96-521.855v142.778a29.999 29.999 0 0 0 15.024 25.994l59.914 34.521a29.999 29.999 0 0 1 15.023 25.994v171.457a30 30 0 0 1-15.023 25.995L18.023-8.765A30 30 0 0 0 3 17.229v172.65a30.001 30.001 0 0 0 15.023 25.994l149.875 86.351a30.001 30.001 0 0 1 15.023 25.995v171.457a29.999 29.999 0 0 1-15.023 25.994L18.023 612.022A29.999 29.999 0 0 0 3 638.016v168.025a30 30 0 0 0 14.839 25.887l60.17 35.24a30 30 0 0 1 14.838 25.887v431.355"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="rm--med">
                          <path
                            fill="#fff"
                            d="M0 0h186v311H0z"
                            stroke-width="3"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="186"
                      height="310"
                      fill="none"
                      viewBox="0 0 186 310"
                      className="text-center mx-auto"
                    >
                      <g clip-path="url(#rm--mid)">
                        <path
                          stroke="#030118"
                          stroke-dasharray="6 8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          d="M92.96-211.855v142.778a30 30 0 0 0 15.024 25.994l59.914 34.52a30 30 0 0 1 15.023 25.995v171.457a30.001 30.001 0 0 1-15.023 25.995L18.023 301.235A30 30 0 0 0 3 327.229v172.65a30.001 30.001 0 0 0 15.023 25.994l149.875 86.351a30.001 30.001 0 0 1 15.023 25.995v171.457a29.999 29.999 0 0 1-15.023 25.994L18.023 922.022A29.999 29.999 0 0 0 3 948.016v168.024c0 10.65 5.648 20.51 14.839 25.89l60.17 35.24a29.99 29.99 0 0 1 14.838 25.89v431.35"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="rm--mid">
                          <path
                            fill="#fff"
                            d="M0 0h186v310H0z"
                            stroke-width="3"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="186"
                      height="311"
                      fill="none"
                      viewBox="0 0 186 311"
                      className="text-center mx-auto"
                    >
                      <g clip-path="url(#rm--med)">
                        <path
                          stroke="#030118"
                          stroke-dasharray="6 8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          d="M92.96-521.855v142.778a29.999 29.999 0 0 0 15.024 25.994l59.914 34.521a29.999 29.999 0 0 1 15.023 25.994v171.457a30 30 0 0 1-15.023 25.995L18.023-8.765A30 30 0 0 0 3 17.229v172.65a30.001 30.001 0 0 0 15.023 25.994l149.875 86.351a30.001 30.001 0 0 1 15.023 25.995v171.457a29.999 29.999 0 0 1-15.023 25.994L18.023 612.022A29.999 29.999 0 0 0 3 638.016v168.025a30 30 0 0 0 14.839 25.887l60.17 35.24a30 30 0 0 1 14.838 25.887v431.355"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="rm--med">
                          <path
                            fill="#fff"
                            d="M0 0h186v311H0z"
                            stroke-width="3"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="186"
                      height="310"
                      fill="none"
                      viewBox="0 0 186 310"
                      className="text-center mx-auto"
                    >
                      <g clip-path="url(#rm--btm-f)">
                        <path
                          stroke="#030118"
                          stroke-dasharray="6 8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          d="M93.04-1142.86v142.78a30 30 0 0 1-15.024 25.997l-59.914 34.521A29.999 29.999 0 0 0 3.08-913.568v171.457a30.001 30.001 0 0 0 15.023 25.995l149.875 86.351A30 30 0 0 1 183-603.771v172.65a30.001 30.001 0 0 1-15.023 25.994L18.102-318.776A30.001 30.001 0 0 0 3.08-292.781v171.457A30 30 0 0 0 18.102-95.33L167.977-8.978A30 30 0 0 1 183 17.016v168.025a30 30 0 0 1-14.839 25.887l-60.169 35.24a30 30 0 0 0-14.839 25.887v431.351"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="rm--btm-f">
                          <path
                            fill="#fff"
                            d="M186 0H0v310h186z"
                            stroke-width="3"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="186"
                      height="393"
                      fill="none"
                      viewBox="0 0 186 393"
                      className="text-center mx-auto"
                    >
                      <g clip-path="url(#rm--btm-f)">
                        <path
                          stroke="#030118"
                          stroke-dasharray="6 8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          d="M93.04-1452.86v142.78c0 10.73-5.729 20.64-15.024 26l-59.914 34.52a29.984 29.984 0 0 0-15.023 25.99v171.46c0 10.73 5.728 20.64 15.023 25.99l149.875 86.355A30 30 0 0 1 183-913.771v172.65a30.001 30.001 0 0 1-15.023 25.994L18.102-628.776A30.001 30.001 0 0 0 3.08-602.781v171.457a29.999 29.999 0 0 0 15.023 25.994l149.875 86.352A29.999 29.999 0 0 1 183-292.984v168.025a30 30 0 0 1-14.839 25.887l-60.169 35.24a30 30 0 0 0-14.839 25.887v431.351"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="rm--btm-f">
                          <path
                            fill="#fff"
                            d="M186 0H0v393h186z"
                            stroke-width="3"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="">
                  {map_Instruction.map((item, index) => (
                    <MapInstruction
                      key={index}
                      image={item.image}
                      phase={item.phase}
                      title={item.title}
                      description={item.description}
                      mapClassName={item.mapClassName}
                      pulsCls={item.pulsCls}
                      index={index} // Pass index as a prop
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta position-relative pt-0 mb-lg-5">
          <div className="container">
            <Cta />
          </div>
        </section>

        {/* our products */}
        <section className="our_products bg-black d-none">
          <div className="container  text-white">
            <div className="row mb-4 mb-lg-5">
              <div className="col-12">
                <div className="inner_text">
                  <h2 className="H2_homepage text-center heading_01">
                    Our Products
                  </h2>
                </div>
              </div>
            </div>
            <div className="row g-4 mt-4">
              {products.map((product) => (
                <div key={product.id} className="col-sm-6 position-relative">
                  <div className="border rounded-4">
                    <span
                      className="position-absolute translate-middle badge bg-black text-white fs-3 border cards"
                      style={{
                        width: "54px",
                        height: "54px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {product.id}
                    </span>
                    <div className="row align-items-center p-3  ">
                      <div className="col-lg-6 position-relative">
                        <div className="bg-white rounded-4 overflow-hidden origin_app">
                          <Link href={product.path}>
                            <img
                              src={`/home_page/${product.img}`}
                              alt="image"
                              className="img-fluid"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6 mt-4 mt-md-0">
                        <div className="p-md-3">
                          <h4 className="bold">{product.title}</h4>
                          <p className="text-white thin lh-base mt-3">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="achievement_wpr bg-black">
          <div className="container cstm_container">
            <div className="row mb-4 mb-lg-5">
              <div className="col-12">
                <div className="inner_text">
                  <h2 className="H2_homepage text-center heading_01 text-white ">
                    Our Products
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-12 ">
                    <Link href="https://www.tapdapp.io/" target="_blank">
                      <div className="achievement_box awards_bg  position-relative">
                        <div className="show_hover row align-items-center justify-content-center position-absolute top-0 start-0 p-3 h-100">
                          <div className="col-5">
                            <img
                              src="/home_page/tapdap.png"
                              alt="image"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-6">
                            <h4 className="fw-bold text-black">TapDapp </h4>

                            <p className="lh-base text-black">
                              A multichain crypto wallet to simplify asset
                              management with Web 3.0 Browser, ensure security
                              and track market trends.
                            </p>

                            <button className="common_blue text-white p-2 px-4 rounded-2  d-inline-block border-0">
                              {" "}
                              Learn More
                            </button>
                          </div>
                        </div>
                        <div className="hidden_hover">
                          <div className="achievement_tittle d-flex align-items-center justify-content-between">
                            <h2 className="animated_digit mb-0">
                              <span className="text text-nowrap">TapDapp</span>
                              <span className="hover-text text-nowrap">
                                TapDapp
                              </span>
                            </h2>
                            <Link
                              href="https://www.tapdapp.io/"
                              target="_blank"
                            >
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 16 16"
                                className="d-inline-block text-black"
                              >
                                <path
                                  fill="currentColor"
                                  d="M9 15V4.156l4.854 4.107l1.292-1.526L8 .69L.854 6.737l1.292 1.526L7 4.156V15z"
                                />
                              </svg>
                            </Link>
                          </div>
                          <div className="achievement_text text-end">
                            <p className="lh-sm text-black">
                              A multichain crypto wallet to simplify asset
                              management with Web 3.0 Browser, ensure security
                              and track market trends.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="col-lg-12  mt-4">
                    <Link href="javascript:void(0)">
                      <div className="achievement_box creative_bg position-relative">
                        <div className="show_hover01 row align-items-center justify-content-center position-absolute top-0 start-0 p-3 h-100">
                          <div className="col-5">
                            <img
                              src="/home_page/build.png"
                              alt="image"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-6">
                            <h4 className="fw-bold text-black">Builditnow</h4>
                            <p className="lh-base">
                              Empower enterprises to create custom software
                              anytime without coding skills and reduce costs,
                              enhancing scalability
                            </p>

                            <button className="common_blue text-white p-2 px-4 rounded-2  d-inline-block position-relative z-3 border-0">
                              {" "}
                              Learn More
                            </button>
                          </div>
                        </div>
                        <div className="hidden_hover01">
                          <div className="achievement_tittle d-flex align-items-center justify-content-between">
                            <h2 className="animated_digit mb-0">
                              <span className="text text-nowrap">
                                Builditnow
                              </span>
                              <span className="hover-text text-nowrap">
                                Builditnow
                              </span>
                            </h2>
                            <Link
                              href=""
                              className="text-black"
                              target="_blank"
                            >
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 16 16"
                                className="d-inline-block"
                              >
                                <path
                                  fill="currentColor"
                                  d="M9 15V4.156l4.854 4.107l1.292-1.526L8 .69L.854 6.737l1.292 1.526L7 4.156V15z"
                                />
                              </svg>
                            </Link>
                          </div>
                          <div className="achievement_text text-end">
                            <p className="text-black">
                              Empower enterprises to create custom software
                              anytime without coding skills and reduce costs,
                              enhancing scalability
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row achievement_col">
                  <div className="col-lg-12 pe-xl-4">
                    <Link href="https://www.emonitrix.ai/" target="_blank">
                      <div className="achievement_box projects_bg position-relative">
                        <div className="show_hover01 row align-items-center justify-content-center position-absolute top-0 start-0 p-3 h-100">
                          <div className="col-5">
                            <img
                              src="/home_page/emo.png"
                              alt="image"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-6">
                            <h4 className="fw-bold text-black">Emonitrix</h4>
                            <p className="lh-base">
                              Employee monitoring tool to enhance business
                              efficiency with employee activity monitoring and
                              real-time AI-driven performance reports.
                            </p>

                            <button className="common_blue text-white p-2 px-4 rounded-2  d-inline-block position-relative z-3 border-0">
                              Learn More
                            </button>
                          </div>
                        </div>

                        <div className="hidden_hover01">
                          <div className="achievement_tittle d-flex align-items-center justify-content-between">
                            <h2 className="animated_digit mb-0">
                              <span className="text text-nowrap">
                                {" "}
                                Emonitrix
                              </span>
                              <span className="hover-text text-nowrap">
                                Emonitrix
                              </span>
                            </h2>
                            <Link
                              href="https://www.emonitrix.ai/"
                              target="_blank"
                              className="text-black"
                            >
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 16 16"
                                className="d-inline-block"
                              >
                                <path
                                  fill="currentColor"
                                  d="M9 15V4.156l4.854 4.107l1.292-1.526L8 .69L.854 6.737l1.292 1.526L7 4.156V15z"
                                />
                              </svg>
                            </Link>
                          </div>
                          <div className="achievement_text text-end">
                            <p className="text-black">
                              Employee monitoring tool to enhance business
                              efficiency with employee activity monitoring and
                              real-time AI-driven performance reports.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="col-lg-12  mt-4">
                    <Link href="https://corise.ai/" target="_blank">
                      <div className="achievement_box experience_box position-relative">
                        <div className="show_hover01 row align-items-center justify-content-center position-absolute top-0 start-0 p-3 h-100">
                          <div className="col-5">
                            <img
                              src="/home_page/cor.png"
                              alt="image"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-6">
                            <h4 className="fw-bold text-black">CoRise</h4>
                            <p className="lh-base">
                              A platform that connects with cofounders,
                              entrepreneurs, startups, and investors globally
                              for funding and business growth.
                            </p>
                            <button className="common_blue text-white p-2 px-4 rounded-2  d-inline-block position-relative z-3 border-0">
                              Learn More
                            </button>
                          </div>
                        </div>

                        <div className="hidden_hover01">
                          <div className="achievement_tittle d-flex align-items-center justify-content-between">
                            <h2 className="animated_digit mb-0">
                              <span className="text text-nowrap">CoRise</span>
                              <span className="hover-text text-nowrap">
                                CoRise
                              </span>
                            </h2>
                            <Link
                              href="https://corise.ai/"
                              target="_blank"
                              className="text-black"
                            >
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 16 16"
                                className="d-inline-block"
                              >
                                <path
                                  fill="currentColor"
                                  d="M9 15V4.156l4.854 4.107l1.292-1.526L8 .69L.854 6.737l1.292 1.526L7 4.156V15z"
                                />
                              </svg>
                            </Link>
                          </div>
                          <div className="achievement_text text-end">
                            <p className="text-black">
                              A platform that connects with cofounders,
                              entrepreneurs, startups, and investors globally
                              for funding and business growth.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" slider position-relative">
          <SliderComponent />
        </section>

        <section className="testimonials">
          <div className="container">
            <div className="row mb-4 mb-lg-5">
              <div className="col-12">
                <div className="inner_text">
                  <h2 className="H2_homepage text-center heading_01">
                    Customer video testimonials to build trust.
                  </h2>
                </div>
              </div>
            </div>

            <div
              className="row align-items-center rounded-4 overflow-hidden flex-column-reverse flex-lg-row transformOrigin"
              style={{ backgroundColor: "#E1EBFF" }}
            >
              <div className="col">
                <div className="row flex-column-reverse flex-lg-row align-items-center">
                  {/* Left Section - Text Content */}
                  <div
                    className="col-lg-5 p-4 position-relative"
                    ref={slideRef}
                    key={current}
                  >
                    <p className="fs-5 text-black">
                      <span className="quote">“</span>
                      {testimonials[current].quote}
                    </p>
                    <h5 className="semib_bold text-black mb-0 mt-lg-5 mb-1">
                      {testimonials[current].name}, {testimonials[current].role}
                    </h5>
                    <small
                      className="small fw-thin"
                      style={{ fontSize: "12px" }}
                    >
                      {testimonials[current].company}
                    </small>

                    {/* Star Ratings */}
                    <div className="d-flex gap-2 mt-3">
                      {[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          src={
                            i < testimonials[current].rating
                              ? "/home_page/startfill.png"
                              : "/home_page/start.png"
                          }
                          alt="star"
                          className="img-fluid"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right Section - Image with Clip-Path */}
                  <div className="col-lg-7 position-relative pe-md-0">
                    <img
                      src={testimonials[current].image}
                      alt="Testimonial"
                      className="img-fluid "
                      style={{
                        objectFit: "cover",
                        borderRadius: "20px",
                        clipPath:
                          "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)",
                      }}
                    />
                    {/* Play Button */}
                    {/* <button
                      className="btn btn-light rounded-circle position-absolute bottom-0 end-0 m-3 shadow"
                      onClick={nextSlide}
                    >
                      <Icon icon="mdi:play" className="text-dark fs-5" />
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="experties d-none">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="inner_text">
                  <h2 className="H2_homepage text-center mb-4 mb-lg-5 heading_01">
                    Tech Solutions That Drive Growth Across Industries
                  </h2>
                </div>
              </div>
            </div>
            <div className="row d-lg-none overflow-hidden overlflow-x-scroll">
              {Experties.map((val, i) => {
                return (
                  <div className="col-12 col-md-6 " key={i}>
                    <div className="my-2 h-100">
                      <div
                        className="p-3 rounded-3"
                        style={{
                          backgroundColor: val.backgroundColor,
                          // backgroundImage: `url(${val.backgroundImage})`,
                          // backgroundSize: "cover",
                        }}
                      >
                        <div className="glass_ef h-100 p-4 ">
                          <h4 className="bold">{val.title}</h4>
                          <p>{val.description}</p>
                          <ul className="row p-0 ">
                            {Array.isArray(val.points) ? (
                              val.points.map((point, index) => (
                                <li key={index} className="col-12 fs-6">
                                  ◇ &nbsp;{point}
                                </li>
                              ))
                            ) : (
                              <li className="col-12"> {val.points}</li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <style jsx>
                {`
                  .glass_ef {
                    background: rgba(255, 255, 255, 0.57);
                    backdrop-filter: blur(13px);
                    -webkit-backdrop-filter: blur(13px);
                    border-radius: 10px;
                    border: 1px solid rgba(255, 255, 255, 0.18);
                  }
                `}
              </style>
            </div>
            <div className="d-flex gap-2 d-none d-lg-flex overflow-hidden overflow-x-auto pb-4">
              {Experties.map((val, i) => {
                return (
                  <>
                    <div
                      key={i}
                      className={` p-1 rounded-4 min_h position-relative experties_col ${val.className}`}
                    >
                      <div
                        className={`openCard d-flex flex-column align-items-center justify-content-end h-100 ${
                          activeCard === i ? "active_card" : ""
                        }`} // Add 'active_card' class conditionally
                        onClick={() => handleCardClick(i)} // Handle click to toggle active state
                      >
                        <div
                          className="hover_eff rounded-4 "
                          style={{
                            backgroundColor: val.backgroundColor,
                            // backgroundImage: `url(${val.backgroundImage})`,
                            backgroundSize: "cover",
                          }}
                        >
                          <div className="glass_eff h-100 p-4">
                            <h4 className="bold">{val.title}</h4>
                            <p>{val.description}</p>
                            <ul className="row p-0 ">
                              {Array.isArray(val.points) ? (
                                val.points.map((point, index) => (
                                  <li
                                    key={index}
                                    className="col-6 d-flex align-items-center"
                                  >
                                    <span></span>
                                    <div className="ms-2"> {point}</div>
                                  </li>
                                ))
                              ) : (
                                <li className="col-6"> {val.points}</li>
                              )}
                            </ul>
                          </div>
                        </div>
                        <p className={`bold writing_mod  ${val.color}`}>
                          {val.name}
                        </p>
                        <span className="bold bg-white p-4  rounded-4">
                          {val.value}
                        </span>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>

        <section className="Industries tab_sec bg-black">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="inner_text">
                  <h2 className="H2_homepage text-center mb-4 mb-lg-5 pb-xxl-5 heading_01 text-white">
                    Tech Solutions That Drive Growth Across Industries
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="col-12 shadow-sm bg-white overflow-hidden"
              style={{
                borderRadius: "8px",
                boxShadow: "0px 0px 50px #ffffff5e",
              }}
            >
              <Tab.Container
                activeKey={activeKey}
                onSelect={(key) => setActiveKey(key)}
              >
                <Row className="align-items-center">
                  {/* Sidebar Tabs */}
                  <Col sm={12} lg={3}>
                    <Nav
                      variant="pills"
                      className="d-flex flex-lg-column h-100 no_wrap mb-4 mb-lg-0"
                    >
                      {industriesData.map((industry) => (
                        <Nav.Item key={industry.key}>
                          <Nav.Link
                            eventKey={industry.key}
                            className="fs-5 fw-semibold d-flex d-lg-block text-nowrap"
                          >
                            {" "}
                            <img
                              src={`/home_page/${industry.img}`}
                              alt="image"
                              className="me-2"
                            />{" "}
                            {industry.title}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </Col>

                  {/* Content Area */}
                  <Col sm={12} lg={9}>
                    <Tab.Content className="ps-4 pe-xl-5">
                      {industriesData.map((industry) => (
                        <Tab.Pane eventKey={industry.key} key={industry.key}>
                          <h3 className="fw-bold sky mb-4">{industry.title}</h3>
                          <p
                            className="mb-4 text-black fs-5 lh-base"
                            style={{ fontFamily: "unset " }}
                          >
                            {industry.description}
                          </p>
                          <ul className="p-0 row">
                            {industry.features.map((feature, index) => (
                              <li key={index} className="col-md-6 mb-3 ">
                                {" "}
                                <span className="bx"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </section>

        <section className="blogs static">
          <div className="container">
            <div className="row mb-4 mb-lg-5">
              <div className="col-12">
                <div className="inner_text">
                  <h2 className="H2_homepage text-center heading_01">
                    Our Blogs
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              {loading
                ? Array.from({ length: 3 }).map((_, i) => (
                    <div className={`col-md-6 col-lg-4 mb-4`} key={i}>
                      <div
                        className="contain blog-card border  p-3 rounded-4 h-100"
                        style={{ boxShadow: "#d7d7d794 0px 0px 17px" }}
                      >
                        <div className="img border rounded-4 overflow-hidden">
                          <Skeleton height={200} />
                        </div>
                        <div className="content_box">
                          <h4 className="title">
                            <Skeleton count={3} />
                          </h4>
                          <p className="text">
                            <Skeleton count={5} />
                          </p>
                          <p className="text mb-0">
                            <Skeleton width={`30%`} height={12} />
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                : blogs.slice(0, 3).map((data, id) => {
                    return (
                      <>
                        <div
                          className="col-md-6 col-lg-4 mb-4"
                          key={data?.sys?.id}
                        >
                          <Link
                            href={{
                              pathname: `/blogs/${data?.fields.pageUrl
                                ?.split(" ")
                                ?.join("-")
                                ?.toLowerCase()}`,
                            }}
                          >
                            <div
                              className="contain blog-card border  p-3 rounded-4 h-100"
                              style={{ boxShadow: "#d7d7d794 0px 0px 17px" }}
                            >
                              <div className="img border rounded-4 overflow-hidden">
                                <img
                                  src={`https:${data?.fields?.image?.fields?.file?.url}`}
                                  alt={data?.fields?.image?.fields?.title}
                                  className="img-fluid"
                                />
                              </div>
                              <div className="">
                                <h5 className="bold my-4 text-black truncate-2">
                                  {data?.fields?.heading}
                                </h5>
                                <p className="lh-base truncate-3">{data?.fields?.para}</p>
                                <div className="d-flex flex-wrap justify-content-between">
                                  <p className="text-black m-0">
                                    {data?.fields?.date}
                                  </p>
                                  <Link
                                    href={{
                                      pathname: `/blogs/${data?.fields.pageUrl
                                        ?.split(" ")
                                        ?.join("-")
                                        ?.toLowerCase()}`,
                                    }}
                                    className="text-decoration-underline sky"
                                  >
                                    {data?.fields?.button}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </>
                    );
                  })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePageNew;
