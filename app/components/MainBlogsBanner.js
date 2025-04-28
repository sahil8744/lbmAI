import React from "react";
import PropTypes from "prop-types";

const MainBlogsBanner = ({ bannerData }) => {
  return (
    <>
      {bannerData.map((banner, index) => (
        <section
          key={index}
          className="banner blog_banner"
          style={{ backgroundImage: banner.backgroundImage }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8 text-center mx-auto py-md-5">
                <h1 className={`text-white display-1 ${banner.add_cls}`}>{banner.title}</h1>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

MainBlogsBanner.propTypes = {
  bannerData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MainBlogsBanner;