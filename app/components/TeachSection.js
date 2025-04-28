import React from "react";
import Heading_h3 from "./heading_h3";
import ParaText from "../components/ParaText";

const TechSection = ({ heading, paraText, imgSrc, imgAlt,margin,paraText1,Link_href,Link_data }) => (
  <section className="teachnology_sec mx-2 mx-md-0">
    <div className="container">
      <div className="row background_color overflow-hidden">
        <div className="col-sm-12 col-lg-6 p-0 p-md-start">
          <div className="inner_content position-relative z-1">
            <Heading_h3 text={heading}  custome_hd={`margin_top ${margin}`}  />
            <ParaText para_text1={paraText1} LinkHref={Link_href} LinkData={Link_data} f_custome="text-white color_white" para_text={paraText}  />
          </div>
        </div>
        <div className="col-sm-6 d-none d-lg-block">
          <div className="img_box">
            <img
              src={imgSrc}
              alt={imgAlt}
              className="img-fluid object-fit-contain cover_img"
            />
          
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TechSection;
