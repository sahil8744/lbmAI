import React from "react";
import Heading from "../components/Heading";
import ParaText from "../components/ParaText";
import AnimSvg from "../thanku_svg/page";

const ThankuPage = () => {
  return (
    <>
      <section className="thanku">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-sm-8">
              <div className="inner_text">
                <Heading
                  textA="Thank You !"
                  clrtext=""
                  textB=""
                  heading="sectoin_h"
                />
                <ParaText
                  f_custome=""
                  para_text="Thank you for reaching out! We’ll be in touch shortly to discuss your inquiry and explore how blockchain can revolutionize your needs. "
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="svg my-md-5">
                <AnimSvg />
              </div>

              <div className="text">
                <h4 className="fw-bold  text-black">Check your email</h4>
               <p className="fs-5 text-black">if you did not receive any email contact lbmsolution.com <a href="mailto:info@lbmsolution.com">info@lbmsolution.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankuPage;
