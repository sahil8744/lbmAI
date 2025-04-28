"use client";
import React from "react";
import Heading_h2 from "../../app/components/Heading_h2";
import ParaText from "../components/ParaText";
import Image from 'next/image';

const About = () => {
    const TeamMeamber=[
        {
            img:"team_leader01.webp",
            leader_name:"Manjit Parmar"
        },
        {
            img:"team_leader02.webp",
            leader_name:"Sahil Partyal"
        },
        {
            img:"team_leader03.webp",
            leader_name:"Charil Saini"
        },
        {
            img:"team_leader04.webp",
            leader_name:"Amanpreet Singh"
        },
        {
            img:"team_leader05.webp",
            leader_name:"Dimpal     Thakur"
        },
        // {
        //     img:"team_leader06.webp",
        //     leader_name:"Brahmjeet Singh"
        // },
        {
            img:"vineet.webp",
            leader_name:"Vineet Dwivedi"
        },
        {
            img:"shweta.webp",
            leader_name:"Shweta Syal"
        },
    ]
  return (
    <>
      <section
        className="about_banner p-0"
        style={{ width: "100%" }}
      >
        <video
          muted
          loop
          autoPlay
          onCanPlay={() => {
            this.muted = false;
          }}
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        >
          <source src="/about_page/about_video.webm" type="video/webm" />
        </video>
      </section>

      <section className="about_us">
        <div className="container">
          <Heading_h2
            textA="About"
            clrtext="Us"
            textB=""
            heading="heading_h2 mb-md-5 text-md-center"
          />
          <div className="row">
            <div className="col-md-6">
              <div className="inner_content">
                <ParaText
                  f_custome=""
                  para_text="“We believe that by working together we can achieve anything”"
                />
                <ParaText
                  f_custome=""
                  para_text="LBM Solutions is a market leader in providing innovative Software Solutions and services to business and government organizations throughout the world. For more than 5 years , we have been helping our clients solve their most complex business challenges and improve their performance."
                />
                <ParaText
                  f_custome=""
                  para_text="At our company, we pride ourselves on creating unique and innovative software solutions that help our clients stay ahead of the competition. Our team of Dedicated Professionals is committed to providing the highest quality products and services, and our company culture is one of collaboration and creativity"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="img_box">
                <Image
                  src="/about_page/about_img.webp"
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
            </div>
          </div>
        </div>
      </section>

      <section className="believe bg-black">
        <div className="container position-relative">
          <Heading_h2
            textA="What We"
            clrtext="Believe"
            textB=""
            heading="heading_h2 mb-3 mb-md-5 text-md-center text-white"
          />
          <div className="row align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-6">
              <div className="img_box">
                <Image
                  src="/about_page/about_img_02.webp"
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
            </div>
            <div className="col-md-6">
              <div className="inner_content">
                <ParaText
                  f_custome="text-white"
                  para_text="Our company is all about people. Individuals who are passionate a about their work and dedicated to making a difference. Our culture is one of collaboration and respect. We value diverse perspectives and talents, and believe that by working together we can achieve great things. Our company Bio showcases our company’s core values, commitment to excellence, and dedication to our customers."
                />
                <ParaText
                  f_custome="text-white"
                  para_text="It tells the story of who we are, what we do, and why we do it. The bio showcases our people, our products, and our services. It gives an overview of our history, highlights our milestones, and defines what sets us apart from other companies in the industry."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border border-3 border-primary opacity-75" />

      <section className="brands">
        <div className="container">
          <Heading_h2
            textA="Our"
            clrtext="Brands"
            textB=""
            heading="heading_h2 mb-md-5 text-center"
          />
          <div className="row">
            <div className=" col-10 col-md-4 col-sm-6 mx-auto text-center">
              <Image
                src="/about_page/lbm_logo.webp"
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
            <div className="col-10 col-md-4 col-sm-6 mx-auto text-center text-center my-4 my-md-0">
              <Image
                src="/about_page/logo_teqo.webp"
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
            <div className="col-10 col-md-4 col-sm-6 mx-auto text-center">
              <Image
                src="/about_page/blockchain_logo.webp"
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
          </div>
        </div>
      </section>

      <section className="about_us bg-black">
        <div className="container">
          <Heading_h2
            textA="Life At"
            clrtext="LBM"
            textB=""
            heading="heading_h2 mb-md-5 text-md-center text-white"
          />
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="inner_content">
                <ParaText
                  f_custome="text-white"
                  para_text="“Our philosophy is to value collaboration and creativity.”"
                />
                <ParaText
                  f_custome="text-white"
                  para_text="LBM is an exciting place to work, with a tone of voice that is creative, professional, inspiring, and enticing. We provide a modern and innovative work culture that is perfect for those who want to be at the forefront of new technologies. The company has a team-oriented philosophy that values collaboration and creativity. Employees at LBM are given the best opportunities to learn and grow in their careers."
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="img_box">
                <Image
                  src="/about_page/about_img_03.webp"
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
            </div>
          </div>
        </div>
      </section>

      <section className="our_meet">
        <div className="container position-relative">
          <Heading_h2
            textA="Meet Our"
            clrtext="People"
            textB=""
            heading="heading_h2 mb-5 text-center"
          />
          <div className="row align-items-center">
            <div className="col-10 col-md-6 mx-auto">
              <div className="img_box text-center">
                <Image
                  src="/about_page/logo_img.webp"
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
            </div>
            <div className="col-md-6">
              <div className="inner_content">
                <ParaText
                  f_custome=""
                  para_text="“Our philosophy is to value collaboration and creativity.”"
                />
                <ParaText
                  f_custome=""
                  para_text="LBM is an exciting place to work, with a tone of voice that is creative, professional, inspiring, and enticing. We provide a modern and innovative work culture that is perfect for those who want to be at the forefront of new technologies. The company has a team-oriented philosophy that values collaboration and creativity. Employees at LBM are given the best opportunities to learn and grow in their careers."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="managing_director bg-black">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="img_box text-center ">
                <Image
                  src="/about_page/managing_director.webp"
                  alt="image"
                  className="img-fluid rounded-2 img_mrgtop mb-5 mb-md-0"
                  width={0} 
                  height={0} 
                  sizes="100vw"
                  style={{ width: "auto", height: "auto", }} 
                  priority
                  quality={100}
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="inner_content">
                <Heading_h2
                  textA=""
                  clrtext="Mr.Rampawan Kumar"
                  textB=""
                  heading="heading_h2 text-white"
                />
                <p className="text-white mb-3 mb-lg-5 fs-5 fw-semibold">
                  Managing Director
                </p>

                <ParaText
                  f_custome="text-white"
                  para_text="At LBM Solution Company, we believe that success comes from a combination of innovation, hard work, and a commitment to excellence. We are always looking for new and better ways to serve our customers, whether that means investing in new technology, developing new products, or improving our processes and procedures."
                />
                <ParaText
                  f_custome="text-white"
                  para_text="But we also recognize that success is not just about what we do, but how we do it. That’s why we place a strong emphasis on integrity, transparency, and teamwork in all aspects of our business. We believe that by working together with our customers, employees, and stakeholders, we can achieve our goals and create long-term value for everyone involved."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team_leaders ">
        <div className="container mt-5">
          <Heading_h2
            textA="Our Team"
            clrtext="Leaders"
            textB=""
            heading="heading_h2 text-center mb-5"
          />
          <div className="row justify-content-center">
            {TeamMeamber.map((val,i)=>{
                return(
                    <>
                    <div className="col-6 col-sm-4 col-lg-3">
                        <div className="img_box">
                            <div className="img">
                            <Image src={`/about_page/${val.img}`} alt="image" className="img-fluid"
                               width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100} />
                            </div>
                            <div className="leader_name">
                                <p className="text-white text-center p-3 ">{val.leader_name}</p>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
