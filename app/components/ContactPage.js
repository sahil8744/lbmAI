"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Heading from "../components/Heading";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from 'next/image';

import IntlTelInput from "intl-tel-input/react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    countryCode: "",
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [itiInstance, setItiInstance] = useState(null);
  let iti;
  // useEffect(() => {
  //   const input = document.querySelector("#mobile_code");
  //   iti = intlTelInput(input, {
  //     initialCountry: "in",
  //     separateDialCode: true,
  //     utilsScript:
  //       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  //   });
  //   console.log(iti, ",-----------------");
  //   setItiInstance(iti?.selectedCountryData);

  //   const handleBlur = () => {
  //     setIsValid(iti.isValidNumber());
  //     setPhoneNumber(iti.getNumber());
  //   };

  //   input.addEventListener("blur", handleBlur);

  //   return () => {
  //     input.removeEventListener("blur", handleBlur);
  //   };
  // }, [iti]);
  // console.log(itiInstance, "itiInstance");
  const router = useRouter();
  const [loader, setLoader] = useState(false);
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
  // console.log(formData, "formData");
  const handleFormSubmit = async (e) => {
    const { name, email, mobile, countryCode } = formData || "";
    // console.log(formData, "ff");
    setLoader(true);
    e.preventDefault();
    let data = JSON.stringify({
      leaddata: {
        fromPage: "Metaverse",
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
        // console.log(JSON.stringify(response.data));
        if (response.data.status === "success") {
          router.push("/thanku");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="contact_form">
      <div className="container">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-md-6 ">
            <div className="content text-white">
              <div className="pe-md-5">
                <Heading
                  textA="we are dedicated to providing  "
                  clrtext="top-notch crypto wallet development services"
                  textB=""
                  heading="sectoin_h text-black text-capitalize"
                />
              </div>

              <div className="row mt-5">
                {contactData.map((val, i) => {
                  return (
                    <div className="col-md-11 col-xl-8 col-12 mb-4" key={i}>
                      <div className="d-flex">
                        <div className="">
                          <Image
                            src={`/contactIcon/${val.svg}`}
                            alt="svg"
                            className="img-fluid w-75"
                            width={0} 
                            height={0} 
                            sizes="100vw"
                            style={{  height: "auto", }} 
                            priority
                            quality={100}
                          />
                        </div>
                        <div className="text-black ps-3">
                          <h5 className="fw-bold">{val.heading}</h5>
                          <p>{val.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-5 mb-md-0">
            <Form onSubmit={handleFormSubmit}>
              <div>
                <h5 className="fw-bold"></h5>
              </div>

              <Heading
                textA=" Our team of experts is here to "
                clrtext="assist you !"
                textB=""
                heading="text-capitalize pe-md-5 me-md-5"
              />

              <div className="row mt-4 mt-lg-5">
                <div className="col-12">
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData?.name}
                      onChange={handleOnChange}
                      required
                    />
                  </Form.Group>
                </div>

                <div className="col-12">
                  <Form.Group className="mb-4 w-100" controlId="">
                    <Form.Label>Phone Number</Form.Label>
                    {/* <input
                      type="phone"
                      name="mobile"
                      id="mobile_code"
                      // placeholder="+18147525518"
                      placeholder="Enter your Phone no."
                      value={formData?.mobile}
                      onChange={handleOnChange}
                      pattern="[0-9]*"
                      min="10000000"
                      max="1000000000000000"
                      required
                      className="w-100"
                    /> */}
                    <IntlTelInput
                      initialValue={formData?.mobile}
                      onChangeNumber={handleOnNumber}
                      onChangeValidity={setIsValid}
                      // onChangeErrorCode={setErrorCode}
                      // any initialisation options from the readme will work here
                      initOptions={{
                        initialCountry: "in",
                        separateDialCode: true,
                        utilsScript:
                          "/intl-tel-input/js/utils.js?1716383386062",
                      }}
                    />
                  </Form.Group>
                </div>

                {/*   <div className="col-12 d-none">
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="number"
                      name="mobile"
                      id="mobile_code"
                      className={`form-control ${
                        !isValid && phoneNumber ? "is-invalid" : ""
                      }`}
                      placeholder="Phone Number"
                      value={phoneNumber}
                      required
                    />
                    {!isValid && phoneNumber && (
                      <div className="invalid-feedback">
                        Invalid phone number
                      </div>
                    )}
                  </Form.Group>

           
                </div> */}

                <div className="col-12">
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData?.email}
                      onChange={handleOnChange}
                      required
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </div>
              </div>
              <Button
                className="fw-bold fs-6 submit"
                type="submit"
                disabled={loader}
              >
                {loader ? (
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  "Submit"
                )}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}



export default ContactPage;
