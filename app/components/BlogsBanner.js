"use client";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useContentful from "../lib/useContentful";
import { usePathname } from "next/navigation";

const BlogsBanner = ({ para }) => {
  const { getBlogs } = useContentful();
  const [blogs, setBlogs] = useState([]);
  const pa = usePathname();
  useEffect(() => {
    const fetchBlogs = async () => {
      const blogData = await getBlogs();
      const data = blogData?.filter(
        (val) =>
          val?.fields?.pageUrl?.split(" ").join("-")?.toLowerCase() === para
      );
      setBlogs(data);
    };
    fetchBlogs();
  }, []);
  return (
    <>
      {blogs.map((data, i) => {
        return (
          <section
            key={i}
            className="banner blog_banner"
            style={{ backgroundImage: `url('/blos_page/banner_02.png')` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-8 text-center mx-auto py-md-5">
                  <h1 className={`text-white display-1 fs`}>
                    {blogs[0]?.fields?.heading && (
                      <>{blogs[0]?.fields?.heading}</>
                    )}
                  </h1>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

BlogsBanner.propTypes = {
  bannerData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BlogsBanner;
