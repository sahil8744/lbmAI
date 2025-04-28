"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Heading from "../components/Heading";
import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import IntlTelInput from "intl-tel-input/react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

import lbmjson from "../json/lbm.json";
import contactNumber from "../../contactNumber.json";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
function Search() {
  const searchParams = useSearchParams();
  const usePathnames = usePathname();
  // console.log(
  //   contactNumber,
  //   "contactNumbercontactNumbercontactNumbercontactNumber"
  // );
  // const serPar = searchParams.get("fromPage");
  // const serPar = window.localStorage.getItem("fromPage");
  const [serPar, setSerPar] = useState();
  useEffect(() => {
    const savedValue = window.localStorage.getItem("fromPage");
    // console.log(savedValue?.split("?")[0], "savedValuesavedValuesavedValue");
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

  // console.log(itiInstance, "itiInstance");
  // const router = useRouter();
  const [loader, setLoader] = useState(false);

  const contactlbmdata = lbmjson.filter((val) => val?.fromPage === serPar);

  // console.log("contact", contactlbmdata);
  // console.log("serpar", serPar);
  // console.log("lbmjson", lbmjson);

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

  return (
    <section className="contact_form">
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-lg-6 ">
            <div className="content text-white">
              <div className="pe-md-5">
                <Heading
                  textA="we are dedicated to providing  "
                  clrtext={serPar?.replace(/-/g, " ")}
                  textB=""
                  heading="sectoin_h text-black text-capitalize"
                />
                <p className="text-black">
                  {contactlbmdata[0]?.pageDescription}
                </p>
              </div>

              <div className="row mt-5">
                {contactlbmdata[0]?.data?.map((val, i) => {
                  return (
                    <div
                      className="col-md-11 col-xl-12 col-xxl-8 col-12 mb-4"
                      key={i}
                    >
                      <div className="d-flex">
                        <div className="col-2">
                          <img
                            src={`/contactIcon/${val.icon}`}
                            alt="svg"
                            className="img-fluid px-md-2 px-lg-0 w-75"
                          />
                        </div>
                        <div className="text-black ">
                          <h5 className="fw-bold">{val.heading}</h5>
                          <p>{val.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0">
            <Heading
              textA=" Our team of experts is here to "
              clrtext="assist you !"
              textB=""
              heading="text-capitalize pe-md-5 me-md-5"
            />
            <div className="mt-5">
              <ContactForm serPar={serPar} flagsCode={flagsCode} />
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
