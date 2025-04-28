import Image from "next/image";
import React from "react";
import ImgA from "/public/cta_img_a.png";
import ImgB from "/public/cta_img_b.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Cta = () => {
  const pathname = usePathname();
  // console.log(pathname, "---");
  return (
    <>
      <div className="row cta_clr align-items-center justify-between text-center p-4 p-xl-0 mx-1 mx-md-0">
        <div className="col-5 col-sm-4 col-md-2 mx-auto">
          <div className="Image_box">
            <Image src={ImgA} alt="cta-img" className="mx-auto img-fluid" />
          </div>
        </div>

        <div className="col-md-6">
          <div className="inner_txt">
            <h2 className="px-md-4 px-md-0 mt-3 mt-md-0 mb-0">
              Have an Idea in Mind, Lets Connect Our Team
            </h2>
            <Link
              href={{
                pathname: "/contact",
                query: {
                  fromPage: pathname?.split("/")[1],
                },
              }}
              className="btn_bg  d-inline-block  mt-3 mt-xl-4 position-relative"
            >
              <div
                className="btn d-flex align-items-center"
                style={{ alignItems: "center" }}
              >
                <span className="fw-semibold z-1">Get Started</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="z-1"
                >
                  <path
                    fill="currentColor"
                    d="m15.038 6.343l-1.411 1.418l3.27 3.255l-13.605.013l.002 2l13.568-.013l-3.215 3.23l1.417 1.41l5.644-5.67z"
                  ></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>

        <div className="col-md-3 d-none d-md-block">
          <div className="Image_box">
            <Image src={ImgB} alt="cta-img" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Cta;
