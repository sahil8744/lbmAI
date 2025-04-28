// import ContactForm from "./ContactForm";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
const hireus = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-12">
          <Link href="/">  <img
              src="/headerImg/black-logo.png"
              alt="logo"
              className="img-fluid"
            /></Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center set_height hireus_page">
          <section
            className={`contact_form bg-warnin p-0`}
            id="hideFormNotFound"
            
          >
            <div className="container">
              <div className="row  align-items-center">
                <div className="col-lg-6 ">
                  <div className="content ">
                    <div className=" pe-lg-5 mb-lg-5">
                      <h1 className="text-capitalize ">
                        Demo Hire Our <span>Dedicated Developers</span>
                      </h1>
                      <p className="text-black fw-bold fs-5 mb-2">
                        Save 40% Cost On Development By Hiring Us
                      </p>
                      <p className="text-black fs-6 mb-5 d-lg-none">
                        Hire Our veteran team of full-stack, web, and mobile
                        developers to develop your projects in React, Flutter,
                        Node JS, Laravel, and other innovative technologies.
                      </p>
                    </div>

                    <div className="row ">
                      <div className=" col-lg-12 col-xl-12 col-xxl-10  mb-4 ">
                        <div className="content ">
                          <div className="row listing_map">
                            <div className="col-md-11 col-xl-12 col-xxl-10 col-12 mb-4 line">
                              <div className="text-black ">
                                <span></span>
                                <h5 className="fw-bold">
                                  Work status Timesheets for Accurate Tracking
                                </h5>
                              </div>
                            </div>
                            <div className="col-md-11 col-xl-12 col-xxl-10 col-12 mb-4 line">
                              <div className="text-black ">
                                <span className="col-1"></span>
                                <h5 className="fw-bold">
                                  IP Rights & NDA (Non-disclosure Agreement)
                                  Protection
                                </h5>
                              </div>
                            </div>
                            <div className="col-md-11 col-xl-12 col-xxl-10 col-12 mb-4 line">
                              <div className="text-black ">
                                <span></span>
                                <h5 className="fw-bold">
                                  100% Quality Assurance & On-Time Delivery
                                </h5>
                              </div>
                            </div>
                            <div className="col-md-11 col-xl-12 col-xxl-10 col-12 mb-4 line">
                              <div className="text-black ">
                                <span></span>
                                <h5 className="fw-bold">
                                  24/7 Availability & Cost-Effective Solutions
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6   mb-5 mb-lg-0">
                  <p className="text-black fs-5 mb-5 d-none d-lg-block ">
                    Hire Our veteran team of full-stack, web, and mobile
                    developers to develop your projects in React, Flutter, Node
                    JS, Laravel, and other innovative technologies.
                  </p>
                  <div className="bg-white p-3 rounded-3">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default hireus;
