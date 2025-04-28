"use client";
import Link from "next/link";
import React from "react";
import CounterCard from "../components/CounterCard ";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);
const AboutUs = () => {
  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width:992px)", () => {
      // banner animation code
      let tl0 = gsap.timeline({});
      tl0
        .to(".banner", {
          duration: 1,
          backgroundSize: "110",
        })
        .to(".banner .hidden span", {
          y: 0,
          duration: 0.7,
          stagger: 0.4,
        })
        .to(".pointer a", {
          opacity: 1,
        });

      // brands animatin code
      let tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".brands",
          markers: false,
          start: "center 86%",
          end: "center 30%",
        },
      });

      tl1.to(".brands", {
        top: 0,
        duration: 0.8,
      });

      // about
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".our_company",
          markers: false,
          start: "top 86%",
          end: "top 30%",
        },
      });

      tl2.to(".our_company .hidden span", {
        y: 0,
        duration: 0.5,
        stagger: 0.2,
      });

      let tl02 = gsap.timeline({
        scrollTrigger: {
          trigger: ".meet",
          markers: false,
          start: "top 74%",
          end: "top 30%",
        },
      });

      tl02.to(".meet .hidden span", {
        y: 0,
        duration: 0.5,
        stagger: 0.2,
      });

      // collaboration
      let tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: " .collaboration",
          markers: false,
          start: "top 70%",
          end: "top 30%",
        },
      });

      tl3.to(".collaboration .hidden span", {
        y: 0,
        duration: 0.5,
        stagger: 0.2,
      });

      // meet_people
      let tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: " .meet_people",
          markers: false,
          start: "top 70%",
          end: "top 30%",
        },
      });

      tl4.to(".meet_people .hidden span", {
        y: 0,
        duration: 0.5,
        stagger: 0.2,
      });
      tl4.to(".meet_people .img_box", {
        height: "auto",
        duration: 0.5,
      });

      // team_leaders

      let tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: ".team_leaders",
          markers: false,
          start: "24% 70%",
          end: "30% 40%",
          // scrub: true,
        },
      });
      tl5
        .to(".team_leaders .hidden span", {
          y: 0,
          duration: 0.5,
          stagger: 0.2,
        })
        .to(".team_leaders p .hidden span", {
          delay: 0.3,
        });

      // reveal_type effects
      const element = document.querySelector(".reveal_type");

      if (element) {
        // Initialize SplitType for the selected element
        const text = new SplitType(element, { types: "chars" });

        // Apply GSAP animation to each character in the element
        gsap.to(text.chars, {
          scrollTrigger: {
            trigger: element, // Trigger animation on the specific element
            start: "top 90%",
            end: "top 30%",
            markers: false, // Show markers for debugging
            scrub: true, // Smooth scrubbing during scroll
          },
          opacity: 1,
          stagger: 0.6,
          duration: 1,
        });
      }
    });
  });

  const TeamLeader = [
    {
      img: "manjit_parmar.webp",
      name: "Manjit Parmar",
      lead: "CTO",
    },

    {
      img: "deepali_pandit04.webp",
      name: "Deepali Pandit",
      lead: "Senior HR Manager",
    },
   
    {
      img: "sahil_partyal.webp",
      name: "Sahil Partyal",
      lead: "Designing Head",
    },

    {
      img: "priya_sharma02.webp",
      name: "Priya  Sharma",
      lead: "Product Manager",
    },
    // {
    //   img: "vineet_dwivedi",
    //   name: "Vineet Dwivedi",
    //   lead: "Marketing Head",
    // },
    {
      img: "shweta_syal06.webp",
      name: "Shweta Syal",
      lead: "Team Leader ( Flutter )",
    },
    // {
    //   img: "dimpal_kumar",
    //   name: " Dimpal Kumar",
    //   lead: "Team Leader ( Developing ) ",
    // },
    // {
    //   img: "deepak_sahu09",
    //   name: "Deepak Sahu",
    //   lead: "Team Leader ( Digital Marketing )",
    // },
    {
      img: "gurpal.jpg",
      name: "Gurpal Singh Maan",
      lead: "Global Sales Head",
    },
    {
      img: "pahul_singh.webp",
      name: "Pahul Singh Bhogal",
      lead: "Team Leader ( Coordination )",
    },

    // {
    //   img: "akshay_kumar10",
    //   name: "Akshay Kumar",
    //   lead: "Team Leader ( Digital Marketing )",
    // },
  ];

  return (
    <>
      {/* <section className="pincard">
        <div className="container">
          <div className="row">
            <img src="/about_us/metting.jpg" alt="image" className="img-fluid meet_img" />
            <img src="/about_us/metting.jpg" alt="image" className="img-fluid meet_img" />
            <img src="/about_us/metting.jpg" alt="image" className="img-fluid meet_img" />
            <img src="/about_us/metting.jpg" alt="image" className="img-fluid meet_img" />
          </div>
        </div>
      </section> */}

      <div className="about_uss">
        <div className="banner position-relative">
          <div className="container h-100">
            <div className="content position-relative zh-1 h-100 ">
              <div className="d-flex align-items-center justify-content-start h-100">
                <div>
                  <h1 className=" w-100 text-capitalize">
                    <div className="hidden start">
                      <span className="">Welcome to the frontier</span>
                    </div>
                    <div className="hidden center">
                      <span className="">of innovation</span>
                    </div>
                  </h1>
                  <p>
                    <div className="hidden mt-4">
                      <span>
                        where every line of code shapes the future of digital
                        <br className="d-none d-md-inline-block" />
                        trust and decentralized possibilities.
                      </span>
                    </div>
                  </p>

                  <div className="pointer ms-auto d-table pe-xxl-5 me-xxl-5">
                    <Link href="/contact" className="position-relative ">
                      <span className="mb-2">
                        <Image src="../about_us/arrow.png" alt="img"  width={30} 
        height={30} 
        priority 
        quality={80} 
        />
                      </span>
                      LET'S DISCUSS
                      <br /> YOUR PROJECT
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="brands pt-0">
          <div className="container-fluid">
            <div className="row text-center align-items-center position-relative border-bottom border-dark">
              <div className="col-4 col-sm-3 px-0">
                <div className="our_brands ">
                  <h2 className="text-white m-0">Our Brands</h2>
                </div>
              </div>
              <div className="col-8 col-sm-9 overflow-hidden">
                <div className="d-flex position-relative">
                  <div className=" d-flex align-items-center  moving">
                    <span>
                    <Image
                        src="/about_page/lbm_logo.webp"
                        alt="image"
                        width={0} 
                        height={0} 
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }} 
                        priority
                        quality={80}
                      />
                    </span>
                    <span>
                             <Image
                        src="/about_page/logo_teqo.webp"
                        alt="image"
                         width={0} 
                        height={0} 
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }} 
                        priority
                        quality={100}
                      />
                    </span>
                    <span>
                             <Image
                        src="/about_page/blockchain_logo.webp"
                        alt="image"
                         width={0} 
                        height={0} 
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }} 
                        priority
                        quality={100}
                      />
                    </span>
                  </div>
                  <div className=" d-flex align-items-center moving ">
                    <span>
                             <Image
                        src="/about_page/lbm_logo.webp"
                        alt="image"
                         width={0} 
                        height={0} 
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }} 
                        priority
                        quality={100}
                      />
                    </span>
                    <span>
                             <Image
                        src="/about_page/logo_teqo.webp"
                        alt="image"
                         width={0} 
                        height={0} 
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }} 
                        priority
                        quality={100}
                      />
                    </span>
                    <span>
                             <Image
                        src="/about_page/blockchain_logo.webp"
                        alt="image"
                         width={0} 
                        height={0} 
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }} 
                        priority
                        quality={100}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="our_company">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="h2 mb-4">
                  <div className="hidden">
                    <span className="text-black">Life At Lbm</span>
                  </div>
                </h2>
                {/* <p className="reveal_type">
                  <div className="hidde ">
                    <span className="reveal_type"></span>
                  </div>
                </p> */}
                <p className="reveal_type">
                  “Our philosophy is to value collaboration and creativity.”
                  <br className="mb-3" /> LBM is an exciting place to work, with
                  a tone of voice that is creative, professional, inspiring, and
                  enticing. We provide a modern and innovative work culture that
                  is perfect for those who want to be at the forefront of new
                  technologies. The company has a team-oriented philosophy that
                  values collaboration and creativity. Employees at LBM are
                  given the best opportunities to learn and grow in their
                  careers.
                  {/* <div className="hidde ">
                    <span className="reveal_type"></span>
                  </div> */}
                </p>
              </div>
            </div>
            <CounterCard />
          </div>

          <div className="b-section">
            <div className="b-section-marquee-box">
              <h2 className="marquee-text  m-0">
                UI/UX Design • Web Design • Metaverse • Blockchain • IOS •
                Android • NFT • Development •
              </h2>
              <h2 className="marquee-text m-0">
                UI/UX Design • Web Design • Metaverse • Blockchain • Android •
                IOS • NFT • Development •
              </h2>
            </div>
          </div>
        </section>

        <section className="meet">
          <div className=" container-fluid p-xl-0">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="text_bx">
                  <h2 className="h2 mb-4">
                    <div className="hidden">
                      <span className="text-black"> About Us</span>
                    </div>
                  </h2>
                  {/* <h2
                    className="
                  mb-4"
                  >
                    About Us
                  </h2> */}
                  <p>
                    <div className="hidden">
                      <span>
                        “We believe that by working together we can achieve
                        anything”
                      </span>
                    </div>
                  </p>
                  <p>
                    <div className="hidden">
                      <span>
                        LBM Solutions is a market leader in providing innovative
                        Software Solutions and services to business and
                        government organizations throughout the world. For more
                        than 5 years , we have been helping our clients solve
                        their most complex business challenges and improve their
                        performance.
                      </span>
                    </div>
                  </p>
                  <p>
                    <div className="hidden">
                      <span>
                        At our company, we pride ourselves on creating unique
                        and innovative software solutions that help our clients
                        stay ahead of the competition. Our team of Dedicated
                        Professionals is committed to providing the highest
                        quality products and services, and our company culture
                        is one of collaboration and creativity
                      </span>
                    </div>
                  </p>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="img_box position-relative">
                  {/* <div className="hidden_txt">
                    <h2>About Us</h2>
                  </div> */}
                  <Image
                    src="/about_us/metting.jpg"
                    alt="image"
                    className="img-fluid meet_img"
                    width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }} 
                    priority
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="collaboration">
          <div className="container">
            <div className="row align-items-end flex-column flex-lg-row">
              <div className="col-lg-4">
                <p className="opacity-75 fs-5 text-decoration-underline">
                  What We Believe
                </p>
                <h2 className="h2 mb-4">
                  <div className="hidden">
                    <span className="text-black ">Our Company </span>
                  </div>
                  <div className="hidden">
                    <span className="text-black ">is all about</span>
                  </div>
                  <div className="hidden">
                    <span className="text-black ">people</span>
                  </div>
                </h2>
              </div>
              <div className="col-lg-8">
                <p>
                  <div className="hidden">
                    <span>
                      LBM Solutions is a market leader in providing innovative
                      Software Solutions and services to business and government
                      organizations throughout the world. For more than 5 years
                      , we have been helping our clients solve their most
                      complex business challenges and improve their performance.
                    </span>
                  </div>
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-4">
                <div className="img_bx ">
                  <Image
                    src="/about_us/all_about01.png"
                    alt="image"
                    className="img-fluid meet_img"
                    width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto",filter: "drop-shadow(0px 1px 2px rgba(19, 19, 19, 0.21))" }} 
                    priority
                    quality={100}
                   
                  />
                </div>
              </div>
              <div className="col-8">
                {/* <p>
                  Our company is all about people. Individuals who are
                  passionate a about their work and dedicated to making a
                  difference. Our culture is one of collaboration and respect.
                  We value diverse perspectives and talents, and believe that by
                  working together we can achieve great things. Our company Bio
                  showcases our company’s core values, commitment to excellence,
                  and dedication to our customers.
                </p> */}
                <p className="mt-lg-5">
                  <div className="hidden">
                    <span>
                      It tells the story of who we are, what we do, and why we
                      do it. The bio showcases our people, our products, and our
                      services. It gives an overview of our history, highlights
                      our milestones, and defines what sets us apart from other
                      companies in the industry.
                    </span>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="meet_people ">
          <div className="container">
            <div className="row justify-content-between flex-column-reverse flex-md-row-reverse">
              <div className="col-md-6 col-lg-5">
                <div className="img_box mt-5 d-none d-md-block">
                  <Image
                    src="/about_us/recp01.jpg"
                    alt="image"
                    className="img-fluid meet_img rounded-3"
                    width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                  />
                </div>
                <p className="mt-5">
                  <div className="hidden">
                    <span>
                      LBM offers a creative, professional, and inspiring work
                      environment, ideal for those passionate about innovation
                      and new technologies. With a team-focused culture, we
                      prioritize collaboration, creativity, and provide
                      excellent career growth opportunities.
                    </span>
                  </div>
                </p>
              </div>
              <div className="col-md-6 col-lg-5">
                <h2 className="h2 mb-4">
                  <div className="hidden">
                    <span className="text-black ">Meet Our People</span>
                  </div>
                </h2>
                <p className="fs_14">
                  <div className="hidden">
                    <span>
                      “Our philosophy is to value collaboration and creativity.”
                    </span>
                  </div>
                </p>

                <div className="img_box mt-5">
                  <Image
                    src="/about_us/d_leader01.jpg"
                    alt="image"
                    className="img-fluid meet_img rounded-3 w-100"
                    width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="director">
<div className="container-fluid">
  <h1 className="text-uppercase fs_30">Mr. Rampawan Kumar </h1>
</div>
        </section> */}

        <section className="m_director bg-black  pb-0 mt-xxl-5 mb-5">
          <div className="container">
            <div className="row align-items-center justify-content-between flex-column-reverse flex-md-row">
              <div className="col-md-5">
                <div className="inner_text">
                  <div className="mb-4">
                    <Image
                      src="/about_us/quotes.png"
                      alt="image"
                      className="img-fluid"
                      width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                    />
                  </div>
                  <p className="text-white position-relative">
                    At LBM Solution Company, we believe that success comes from
                    a combination of innovation, hard work, and a commitment to
                    excellence. We are always looking for new and better ways to
                    serve our customers, whether that means investing in new
                    technology, developing new products, or improving our
                    processes and procedures.
                  </p>
                  {/* <p className="text-white">
                    But we also recognize that success is not just about what we
                    do, but how we do it. That’s why we place a strong emphasis
                    on integrity, transparency, and teamwork in all aspects of
                    our business. We believe that by working together with our
                    customers, employees, and stakeholders, we can achieve our
                    goals and create long-term value for everyone involved.
                    </p> */}
                  <span className="hr"></span>
                  <p className=" fw-bold m-0  m-dire">Managing Director</p>
                  <h2 className="h2 ">
                    <span className="text-white ">Mr. Rampawan Kumar </span>
                    <div className="hidden"></div>
                  </h2>
                </div>
              </div>
              <div className="col-6 col-xl-4 text-end">
                <Image src="/about_us/ramsir.png" alt="image" className="img-fluid"    width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100} />
              </div>
            </div>
          </div>
        </section>

        <section className="team_leaders">
          <div className="container-fluid">
            <div className="row justify-content-between  px-lg-5 mx-lg-5 mb-sm-5">
              <div className="col-sm-4 col-lg-3 ">
                <h2 className="h2 mb-4">
                  <div className="hidden">
                    <span className="text-black ">Team </span>
                  </div>
                  <div className="hidden">
                    <span className="text-black "> Leaders</span>
                  </div>
                </h2>
              </div>

              <div className="col-sm-8 col-lg-5">
                <p className="fs_14">
                  <div className="hidden">
                    <span>
                      Our best team leaders ensure success, innovation, and
                      collaboration, while managing operations, achieving goals,
                      and supporting the Western region. Meet our leadership
                      team
                    </span>
                  </div>
                </p>
              </div>
            </div>

            <div className="row row-cols-5 px-lg-5 mx-lg-5 leader_img justify-content-center">
              {TeamLeader.map((val, i) => {
                return (
                  <div className="col-6 col-sm-4 col-md-3 cols" key={i}>
                    <div className="img_bx">
                      <Image
                        src={`/about_us/${val.img} `}
                        alt="image"
                        className="img-fluid d-table"
                        width={0} 
                        height={0} 
                        sizes="100vw"
                        style={{ width: "auto", height: "auto", }} 
                        priority
                        quality={100}
                      />
                      <div className="leader_details">
                        <div className="name">{val.name}</div>
                        <div className="lead d-none d-md-block">{val.lead}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
