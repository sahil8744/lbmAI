import React from "react";
import Image from 'next/image';

import { useRef } from "react";

const clutchGoogle = ({}) => {
  const internalBottomSectionRef = useRef(null);

  // Function to handle button click and scroll to bottom section
  const scrollToBottom = () => {
    if (internalBottomSectionRef.current) {
      internalBottomSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="pt-0">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-4 col-md-5 col-sm-6 col-9 ">
              <div className="row">
                <div className="col-5">
                  <Image
                    src="/homeImg/clutch.svg"
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
                <div className="col-5">
                  <Image
                    src="/homeImg/google.svg"
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
            <div className="col-md-2 col-sm-3 d-none d-sm-block">
              <div
                className="position-relative pointer"
                onClick={scrollToBottom}
              >
                <Image
                  src="/homeImg/text_img.png"
                  alt="textimg"
                  className="text_img ms-auto text-end img-fluid "
                  width={0} 
                  height={0} 
                  sizes="100vw"
                  style={{ width: "auto", height: "auto", }} 
                  priority
                  quality={100}
                />
                <Image
                  src="/homeImg/downarrow.png"
                  alt="arrow"
                  className="arrow img-fluid"
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
      <div ref={internalBottomSectionRef}>{/* Bottom Section Content */}</div>
    </>
  );
};
export default clutchGoogle;
