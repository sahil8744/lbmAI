"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import contactNumber from "../../contactNumber.json";
import Image from "next/image";
import { Icon } from "@iconify/react";

function Search({ serPars, btn_cls, flagsCodess, showServiceField }) {
  const [serPar, setSerPar] = useState();
  // Load `fromPage` from localStorage when component mounts
  useEffect(() => {
    const savedValue = window.localStorage.getItem("fromPage") || "";
    setFormData((prevFormData) => ({
      ...prevFormData,
      fromPage: savedValue, // Store it in formData state
    }));
  }, []);

  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    countryCode: "",
    title: "",
    fromPage: "", // Add fromPage here
    service: "", // Added service field
    subService: "", // Added subService field
  });
  const [selectedSubService, setSelectedSubService] = useState("");
  const [subServiceOptions, setSubServiceOptions] = useState([]);

  const [numberError, setNumberError] = useState("");
  const [checkNumberLength, setCheckNumberLength] = useState(10);

  const [showFlags, setShowFlags] = useState(false);
  const [flagsCode, setFlagsCode] = useState({
    flag: "US",
    code: "+1",
  });

  const [inputSearch, setInputSearch] = useState("");

  // const router = useRouter();
  const [loader, setLoader] = useState(false);

  const contactNumberFilter = contactNumber?.filter((item) => {
    if (
      item?.country_name?.toLowerCase().includes(inputSearch?.toLowerCase())
    ) {
      return item;
    }
  });

  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // If service changes, update subServices
    if (name === "service") {
      const selectedService = formServices.find(
        (service) => service.value === value
      );
      setSubServiceOptions(selectedService ? selectedService.subServices : []);
    }

    // If subService changes, update the selected sub-service
    if (name === "subService") {
      setSelectedSubService(value);
    }
  };

  const handleOnClick = () => {
    setShowFlags(!showFlags);
  };

  const handleOnClickCode = (item) => {
    setCheckNumberLength(item.phone_number_length);
    setFlagsCode({ ...flagsCode, flag: item?.flag, code: item?.country_code });
    setShowFlags(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { name, email, mobile, service, subService } = formData || "";
    // if (!formData.service) {
    //   return alert("Please select a service");
    // }

    if (isNaN(mobile) === true) {
      return setNumberError("Invalid Mobile Number");
    }
    if (
      mobile.length > checkNumberLength ||
      mobile.length < checkNumberLength
    ) {
      return setNumberError(`Maximum Length is Mobile No ${checkNumberLength}`);
    }
    setLoader(true);
    let data = JSON.stringify({
      leaddata: {
        fromPage: formData.fromPage || serPars, // Use the available value
        // fromPage: serPars,
        name: name,
        phonenumber: mobile,
        country_code: flagsCode?.code,
        email: email,
        service: formData.service, // Send selected service
        subService: formData.subService, // Send selected subService
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
        if (response?.data?.status === "success") {
          // Clear 'fromPage' from localStorage after successful submission
          localStorage.removeItem("fromPage");
          // Clear all data from localStorage if required
          // localStorage.clear(); // Optionally clear everything
          router.push("/thanku");
        } else {
          setLoader(false);
          setNumberError(response?.data?.msg);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // let titleValue = "LBM Solution - " + formData.fromPage;
    let titleValue = `"LBM Solution" - ${formData.fromPage}, "services" - ${formData.service}, "Sub-Service" - ${formData.subService}`;

    let configs = {
      method: "get",
      maxBodyLength: Infinity,
      // url: `https://lbm.bitrix24.in/rest/151/znnmc0tdqpcsv7m8/crm.lead.add.json?FIELDS[TITLE]=${"LBM Solution"}&FIELDS[NAME]=${name}&FIELDS[EMAIL][0][VALUE]=${email}&FIELDS[PHONE][0][VALUE]=${mobile}`,
      url: `https://lbm.bitrix24.in/rest/151/znnmc0tdqpcsv7m8/crm.lead.add.json?FIELDS[TITLE]=${titleValue}&FIELDS[NAME]=${formData.name}&FIELDS[EMAIL][0][VALUE]=${formData.email}&FIELDS[PHONE][0][VALUE]=${flagsCode.code}${formData.mobile}`,

      headers: {
        Cookie: "b24_crm_guest_id=gj74griav1zq7s6gjgp3ketyoo6ro3o6",
      },
    };

    axios
      .request(configs)
      .then((response) => {
        if (response?.data?.status === "success") {
          // Clear 'fromPage' from localStorage after successful submission
          localStorage.removeItem("fromPage");
          router.push("/thanku");
        } else {
          setLoader(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formServices = [
    {
      value: "Mobile App Development",
      subServices: [
        { value: "Custom Mobile App Development" },
        { value: "Cross-Platform App Development" },
        { value: "iOS App Development" },
        { value: "Android App Development" },
        { value: "Flutter App Development" },
        { value: "React Native App Development" },
        { value: "Clone Script App Development" },

        // Add more sub-options here
      ],
    },
    {
      value: "Software Development",
      subServices: [
        { value: "Custom Software Development" },
        { value: "CRM Software Development" },
        { value: "Offshore Software Development" },
        { value: "Enterprise Software Development" },
      ],
    },
    {
      value: "Blockchain Development",
      subServices: [
        { value: "Blockchain Development" },
        { value: "Token Development" },
        { value: "Crypto Coin Development" },
        { value: "Smart Contract Development" },
        { value: "Metaverse Development" },
        { value: "Crypto Wallet Development" },
        { value: "NFT Development" },
        { value: "Crypto Exchange Development" },
        { value: "dApp Development" },
        // Add more sub-options here
      ],
    },
    {
      value: "Digital Marketing",
      subServices: [{ value: "Digital Marketing " }],
    },
    {
      value: "Website Development",
      subServices: [{ value: "Website Development" }],
    },
    {
      value: "Our Products",
      subServices: [
        { value: "Emonitrix" },
        { value: "TapDapp" },
        { value: "Builditnow" },
        { value: "Corise" },
      ],
    },
    // Add other services here
  ];
  return (
    <Form onSubmit={handleFormSubmit}>
      <div>
        <h5 className="fw-bold"></h5>
      </div>

      <div className="row ">
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
              className="rounded-1"
            />
          </Form.Group>
        </div>

        <div className="col-12">
          <Form.Group className="mb-4 w-100" controlId="">
            <Form.Label>Phone Number</Form.Label>

            <div className="d-flex align-items-center border rounded-1 position-relative tel">
              <div>
                <div
                  className="d-flex align-items-center px-2 pointer"
                  onClick={handleOnClick}
                >
                  <Image
                    className="me-2"
                    src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${flagsCode?.flag}.svg`}
                    width={20}
                    height={20}
                    alt="Picture of the author"
                  />
                  <p
                    style={{ marginBottom: "0px" }}
                    className="d-flex align-items-center"
                  >
                    {flagsCode?.code}{" "}
                    <Icon
                      icon="mdi:arrow-down-drop"
                      width="1.2em"
                      height="1.2em"
                    />
                  </p>
                </div>
                {showFlags && (
                  <div
                    style={{
                      background: "white",
                      height: "auto",
                      maxHeight: "300px",
                      overflowY: "scroll",
                      position: "absolute",
                      left: "0px",
                      top: "48px",
                      width: "100%",
                      padding: "10px",
                      borderRadius: ".3rem",
                      boxShadow: "0px 0px 12px 0px #0002",
                    }}
                  >
                    <div
                      style={{
                        position: "sticky",
                        top: "0px",
                        background: "white",
                        zIndex: "999",
                        marginBottom: "5px",
                      }}
                    >
                      <Form.Control
                        type="text"
                        placeholder="Search"
                        onChange={(e) => setInputSearch(e.target.value)}
                        className="rounded-1"
                      />
                    </div>
                    {contactNumberFilter?.length === 0
                      ? "No Data Found"
                      : contactNumberFilter?.map((item, i) => {
                          return (
                            <div
                              style={{
                                display: "flex",
                                gap: "5",
                                alignItems: "center",
                                marginBottom: "5px",
                                marginTop: "5px",
                                padding: "10px",
                                cursor: "pointer",
                              }}
                              onClick={() => handleOnClickCode(item)}
                            >
                              <Image
                                src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${item?.flag}.svg`}
                                width={20}
                                height={20}
                                alt="Flags"
                              />
                              <p
                                key={i}
                                value={item?.phone_number_length}
                                style={{ marginBottom: "0px" }}
                              >
                                {item?.country_code} ({item?.country_name})
                              </p>
                            </div>
                          );
                        })}
                  </div>
                )}
              </div>

              <Form.Control
                type="text"
                name="mobile"
                placeholder="Enter your mobile"
                value={formData?.mobile}
                onChange={handleOnChange}
                required
              />
            </div>
            {numberError && (
              <p className="text-danger fs-6" style={{ fontSize: "14px" }}>
                {numberError}
              </p>
            )}
          </Form.Group>
        </div>
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
              className="rounded-1"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </div>
        {showServiceField && (
          <div className="col-12">
            <Form.Group className="mb-4" controlId="formBasicService">
              <Form.Label>What service you are looking for ?</Form.Label>
              <Form.Select
                name="service"
                value={formData.service}
                onChange={handleOnChange}
                className="select_bx rounded-2"
              >
                <option value="">Select a Service</option>
                {formServices.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.value}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>
        )}

        {/* Sub-Service Dropdown */}
        {subServiceOptions.length > 0 && (
          <div className="col-12">
            <Form.Group className="mb-4" controlId="formBasicSubService">
              <Form.Label>Sub-Service</Form.Label>
              <Form.Select
                name="subService"
                value={formData.subService}
                onChange={handleOnChange}
                className="select_bx rounded-2"
              >
                <option value="">Select a Sub-Service</option>
                {subServiceOptions.map((subService) => (
                  <option key={subService.value} value={subService.value}>
                    {subService.value}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>
        )}
      </div>
      <Button
        className={`fw-bold fs-6 submit mt-4 ${btn_cls}`}
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
  );
}

function ContactForm({ serPar, flagsCode, btn_cls, showServiceField }) {
  return (
    <Suspense>
      <Search
        serPars={serPar}
        flagsCodess={flagsCode}
        showServiceField={showServiceField}
        btn_cls={btn_cls}
      />
    </Suspense>
  );
}

export default ContactForm;
