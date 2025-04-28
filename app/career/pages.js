import Commonbttn from "../../app/components/CommonBtn";
import Heading_h2 from "../../app/components/Heading_h2";
import ParaText from "../components/ParaText";
import Image from 'next/image';

const Career = () => {
  return (
    <>
      <section className="jelly-donuts pt-0">
        <div className="slide position-relative">
          <div
            style={{ backgroundImage: "url(/career_page/slider_a.jpg)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(/career_page/slider_b.jpg)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(/career_page/slider_c.jpg)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(/career_page/slider_d.jpg)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(/career_page/slider_e.jpg)" }}
          ></div>
        </div>

        <div className="container position-absolute top-50 start-0 end-0 mx-atuo ">
          <div className="content">
            <h1 className="text-white position-relative z-3 display-1">
              Seeking <br />
              innovative minds!
            </h1>
            <div className="mt-4 position-relative">
              <Commonbttn
                btn_name="Fuel Your Ambition Here!"
                path="/contact"
                commonbtn="btn_cls"
                img_cls="d-none"
                add_cls="d-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="row d-none">
            <div className="col-12">
              <Heading_h2
                textA="Why LBM for Your "
                clrtext="Career Growth?"
                textB=""
                heading="heading_h2 mb-4 mb-lg-5 mb-xl-0 "
              />

              <ParaText
                f_custome=""
                para_text="We believe in creating a workplace where collaboration and innovation flourish together. Join our team to grow professionally, work with innovative technologies, and make a significant
                impact in a supportive and forward-thinking environment."
              />
              <ParaText
                f_custome=""
                para_text="From supportive leadership to collaborative projects, we ensure every voice is heard and valued. Discover your potential with us."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-7">
              <div className="inner_text">
                <Heading_h2
                  textA="Why LBM for Your "
                  clrtext="Career Growth?"
                  textB=""
                  heading="heading_h2 mb-4 mb-lg-5 mb-xl-0 "
                />
                <ParaText
                  f_custome=""
                  para_text="We believe in creating a workplace where collaboration and innovation flourish together. Join our team to grow professionally, work with innovative technologies, and make a significant
impact in a supportive and forward-thinking environment."
                />
                <ParaText
                  f_custome=""
                  para_text="From supportive leadership to collaborative projects, we ensure every voice is heard and valued. Discover your potential with us."
                />
              </div>
            </div>
            <div className="col-5">
              <div className="inner_text"></div>
            </div>
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
                <div className="col-12" style={{ width: "147%" }}>
                  <div className="row">
                    <div className="col-6">
                      <Image
                        src="/career_page/slider_b.jpg"
                        className="img-fluid"
                           width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                      />
                    </div>
                    <div className="col-6">
                      <Image
                        src="/career_page/slider_b.jpg"
                        className="img-fluid mb-4"
                           width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                      />
                      <Image
                        src="/career_page/slider_b.jpg"
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
