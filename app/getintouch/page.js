"use client";

import Heading from "../components/Heading";
import { Suspense, useEffect, useRef, useState } from "react";
import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import "intl-tel-input/build/css/intlTelInput.css";

import lbmjson from "../json/lbm.json";

import ContactForm from "../components/ContactForm";


function Search() {
  const searchParams = useSearchParams();
  const usePathnames = usePathname();

  const [serPar, setSerPar] = useState();
  useEffect(() => {
    const savedValue = window.localStorage.getItem("fromPage");

    setSerPar(savedValue?.split("?")[0]);
  }, []);

  // console.log(serPar, "------");
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    countryCode: "",
  });

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [itiInstance, setItiInstance] = useState(null);
  const [numberError, setNumberError] = useState("");
  const [checkNumberLength, setCheckNumberLength] = useState(10);

  const [showFlags, setShowFlags] = useState(false);
  const [flagsCode, setFlagsCode] = useState({
    flag: "IN",
    code: "+91",
  });

  let iti;
  const [loader, setLoader] = useState(false);

  const contactlbmdata = lbmjson.filter((val) => val?.fromPage === serPar);

  const contactData = [
    {
      svg: "blockchain.svg",
      heading: "Expertise in Crypto Wallet Development:",
      text:
        "Our experienced developers specialize in creating secure and user-friendly crypto wallets.",
    },
    {
      svg: "development.svg",
      heading: "Custom Solutions:",
      text:
        "We tailor our services to meet your specific requirements, ensuring a perfect fit for your business.",
    },
    {
      svg: "support.svg",
      heading: "Comprehensive Support:",
      text:
        "From initial consultation to post-launch support, we are with you every step of the way.",
    },
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleOnNumber = (e) => {
    // console.log(e, "eee");

    const sdsd = document.querySelectorAll("[data-intl-tel-input-id]")[0].value;
    const codecu = document.getElementsByClassName("iti__selected-dial-code")[0]
      .innerHTML;
    // console.log(codecu, "ppp");
    setFormData({ ...formData, mobile: sdsd, countryCode: codecu });
  };

  const handleOnClick = () => {
    setShowFlags(!showFlags);
  };

  const handleOnClickCode = (item) => {
    setCheckNumberLength(item.phone_number_length);
    setFlagsCode({ ...flagsCode, flag: item?.flag, code: item?.country_code });
  };

  // console.log(formData, "formData");
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { name, email, mobile, countryCode } = formData || "";
    // console.log(isNaN(mobile), "=======================");
    if (isNaN(mobile) === true) {
      return setNumberError("Invalid Mobile Number");
    }
    if (
      mobile.length > checkNumberLength ||
      mobile.length < checkNumberLength
    ) {
      return setNumberError(`Maximum Length is Mobile No ${checkNumberLength}`);
    }
    // console.log(formData, "ff");
    setLoader(true);
    let data = JSON.stringify({
      leaddata: {
        fromPage: serPar,
        name: name,
        phonenumber: mobile,
        country_code: countryCode,
        email: email,
        status: "",
        source: "",
      },
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://login.lbmsolutions.in/Leads/addlead",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response);
        if (response?.data?.status === "success") {
          router.push("/thanku");
        } else {
          setLoader(false);
          setNumberError(response?.data?.msg);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const imgRefs = useRef([]);

  // useEffect(() => {
  //   imgRefs.current.forEach((el) => {
  //     const animate = () => {
  //       gsap.to(el, {
  //         x: Math.random() * (window.innerWidth - 50),
  //         y: Math.random() * (window.innerHeight - 50),
  //         duration: 10,
  //         ease: "power1.inOut",
  //         onComplete: animate,
  //       });
  //     };
  //     animate();
  //   });
  // }, []);

  const images = [
    "/contact/star.png",
    "/contact/polygon01.png",
    "/contact/polygon02.png",
    "/contact/star.png",
    // "/contact/polygon02.png",
  ];

  return (
    <section className="contact_form  single overflow-hidden" id="new_form">
      {images.map((src, i) => (
        <img
          key={i}
          ref={(el) => (imgRefs.current[i] = el)}
          src={src}
          alt="image"
          className={`abstract abstract0${i + 1} img-fluid`}
          style={{
            position: "absolute",
            width: "auto", // Adjust size as needed
            zIndex: 2,
            // top: "auto",
            // left: "auto",
          }}
        />
      ))}

      <span className="form_cirlcle aa"></span>
      <span className="form_cirlcle bb"></span>
      <span className="form_cirlcle cc"></span>
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="position-relative">
              <Heading
                textA="Get in touch"
                clrtext=""
                textB=""
                heading=" pe-md-5 me-md-5 fw-bold"
              />
              <p className="text-black">
                Our team of experts is here to assist you !
              </p>
              <div className="mt-4 mt-lg-5">
              </div>
                <ContactForm
                  serPar={serPar}
                  flagsCode={flagsCode}
                  showServiceField={true}
                  btn_cls=" d-block mx-auto w_full"
                />
            </div>
          </div>
          <div className="col-lg-6 text-end d-none d-lg-block ">
            <div className="content text-white position-relative z-1 bg_abstract ">
              <img src="/contact/3d_03.png" alt="image" className="img-fluid" />
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <Suspense>
      <Search />
    </Suspense>
  );
}

export default Contact;
