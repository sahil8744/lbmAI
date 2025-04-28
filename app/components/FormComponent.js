"use client";


import { Suspense, useEffect, useState } from "react";
import { notFound, usePathname } from "next/navigation";
import Image from 'next/image';

import lbmjson from "../json/lbm.json";
import ContactForm from "./ContactForm";
function Search() {
  const [serPar, setSerPar] = useState();
  useEffect(() => {
    const savedValue = window.localStorage.getItem("fromPage");
    setSerPar(savedValue);
  }, []);

  const contactlbmdata = lbmjson.filter((val) => val?.fromPage === serPar);


  const contactData = [
    {
      svg: "British.png",
      heading: "British Columbia",
      text:
        "7404 king George Blvd, suite 200 Surrey British Columbia, V3W 1N6 Canada",
    },
    {
      svg: "Chandigarh.png",
      heading: "Chandigarh ",
      text:
        "Plot No E 275, 3rd Floor, Phase 8-A, Industrial Area, Sahibzada Ajit Singh Nagar,(Mohali) Punjab 140308 ",
    },

    {
      svg: "bengalur.png",
      heading: "Bengaluru",
      text: "Arakere Bannerghatta Road, Arekere, Bangalore, Karnataka – 560076",
    },
  ];

  return (
    <section className={`contact_form bg_blue`} id="hideFormNotFound">
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-lg-5 ">
            <div className="content text-white">
              <div className="pe-md-5">
        
                          </div>

              <div className="row ">
                {contactData.map((val, i) => {
                  return (
                    <div
                      className="col-sm-6  col-lg-12 col-xl-12 col-xxl-10  mb-4 "
                      key={i}
                    >
                      <div className="">
                        <div className="col-4">
                          <Image
                            src={`/contactIcon/${val.svg}`}
                            alt="svg"
                            className="img-fluid px-md-2 px-lg-0 w-75"
                            width={0} 
                            height={0} 
                            sizes="100vw"
                            style={{ height: "auto", }} 
                            priority
                            quality={100}
                          />
                        </div>
                        <div className="text-black">
                          <h5 className="fw-bold text-white">{val.heading}</h5>
                          <p className="text-white">{val.text}</p>
                        </div>
                        <div className=""></div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row mt-4">
                <div className="col-3">
                  <Image
                    src="/homeImg/clutch.png"
                    alt="banner"
                    className="img-fluid"
                    width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                  />
                </div>
                <div className="col-3">
                  <Image
                    src="/homeImg/google.png"
                    alt="banner"
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

          <div className="col-lg-7   mb-5 mb-lg-0">

            <h2 className="text-capitalize  text-white unset_font">We Love to Build! Just Ask and It’s Yours.</h2>
            <p className="text-white fs-5 mb-5">
              {" "}
              Book a Call or Fill Out the Form Below! Our experts are pleased to
              deliver inclusive guidance.
            </p>
            <div className="bg-white p-3 rounded-3">
              {" "}
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForms() {
  const usePathnames = usePathname();
  // console.log(usePathnames, "-----", "ssssss");
  return (
    usePathnames !== "/not-found" &&
    usePathnames !== "/hireus" &&
    usePathnames !== "/contact" &&
    usePathnames !== "/getintouch" &&
    usePathnames !== "/thanku" && (
      <Suspense>
        <Search />
      </Suspense>
    )
  );
}

export default ContactForms;
