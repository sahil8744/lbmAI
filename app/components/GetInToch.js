import React from "react";

import Commonbttn from "../../app/components/CommonBtn";

const GetInTouch = ({ getinTocch, btn_name, path }) => {
  return (
    <>
      <section className="getintouch bg-black">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="inner_text">
                <h2 className="fw-bold text-center text-md-start text-white">
                  Get In Touch
                </h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="inner_text text-center text-md-end">
                <p className="mb-4 text-white fw-bold">{getinTocch}</p>
                <div className="">
                  <div className="bttn my-classs">
                    <Commonbttn
                      btn_name={btn_name}
                      path={path}
                      img_cls="d-none"
                      commonbtn="btn_cls  px-4 inline-block rounded-md text_clr  bg-white text-black"
                      add_cls="d-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default GetInTouch;
