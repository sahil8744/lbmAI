import React from "react";
import Heading from "../../app/components/Heading";
import Heading_h2 from "../../app/components/Heading_h2";
import ParaText from "../components/ParaText";
import Commonbttn from "../../app/components/CommonBtn";
const OurTeam = () => {
    const TeamMeamber=[
        {
            img:"team_leader01.webp",
            leader_name:"Manjit Parmar"
        },
        {
            img:"team_leader02.webp",
            leader_name:"Sahil Partyal"
        },
        {
            img:"team_leader03.webp",
            leader_name:"Charil Saini"
        },
        {
            img:"team_leader04.webp",
            leader_name:"Amanpreet Singh"
        },
        {
            img:"team_leader05.webp",
            leader_name:"Dimpal     Thakur"
        },
        {
            img:"team_leader06.webp",
            leader_name:"Brahmjeet Singh"
        },
        {
            img:"team_leader07.webp",
            leader_name:"Samiksha Jagdev"
        },
        {
            img:"team_leader08.webp",
            leader_name:"Aman Chaudhary"
        },
    ]
  return (
    <>
      <section className="our_team">
        <div className="container custome_h d-flex align-items-center">
          <div className="row position-relative">
            <div className="col-12">
              <Heading
                textA="  Meet Our Champions, Passionate Pioneers of Driving Success!"
                clrtext=""
                textB=""
                heading="banner_h text-white"
              />
              <h4 className="text-white fw-bold display-6"></h4>
            
            </div>
          </div>
        </div>
      </section>

      <section className="team_leaders ">
        <div className="container ">
        <div className="row justify-content-center mb-md-4">
                <div className="col-10 text-center">
                <Heading_h2
                textA="Our Visionary Leaders"
                clrtext=""
                textB=""
                heading="heading_h2"
              />
                <ParaText
                  f_custome=""
                  para_text="Our strategic team drives innovation and excellence in blockchain and software development, shaping a future of technological advancement and seamless digital solutions"
                />
                </div>
            </div>
          <div className="row justify-content-center">
            {TeamMeamber.map((val,i)=>{
                return(
                    <>
                    <div className="col-6 col-sm-4 col-lg-3">
                        <div className="img_box">
                            <div className="img">
                            <img src={`/about_page/${val.img}`} alt="image" className="img-fluid" />
                            </div>
                            <div className="leader_name">
                                <p className="text-white text-center p-3 ">{val.leader_name}</p>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })}
          </div>
        </div>
      </section>
      <section className="">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="inner_text">
                <Heading_h2
                  textA="Join Us and  "
                  clrtext="Shape the Future!"
                  textB=""
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0 "
                />
                <ParaText
                  f_custome=""
                  para_text="Our dynamic culture, growth pathways, and collaborative spirit attract top talents for innovation and success. "
                />
                <div className="mt-4">
                  <Commonbttn
                    btn_name="Get Free Consultation"
                    path="/contact"
                    commonbtn="btn_cls"
                    img_cls="d-none"
                    add_cls="d-none"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="inner_text ">
                <div className="col-12 ms-5 ps-5" style={{width:"166%"}}>
                  <div className="row">
                    <div className="col-5">
                      <img
                        src="/ourteam_page/team_a.jpg"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-6">
                      <img
                           src="/ourteam_page/team_a.jpg"
                        className="img-fluid mb-4"
                      />
                      <img
                            src="/ourteam_page/team_b.jpg"
                        className="img-fluid"
                      />
                    </div>
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
export default OurTeam;
