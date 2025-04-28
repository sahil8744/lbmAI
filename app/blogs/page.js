"use client";
import React, { useEffect, useState } from "react";
import useContentful from "../lib/useContentful";
import ShowBlogs from "../components/ShowBlogs";
import MainBlogsBanner from "../components/MainBlogsBanner";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Blogs = () => {
  // section banner loop

  const [displayLimit, setDisplayLimit] = useState(6);
  const { getBlogs } = useContentful();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const blogData = await getBlogs();
      const sortedBlogs = blogData.sort(
        (a, b) =>
          new Date(b.fields.date).getTime() - new Date(a.fields.date).getTime()
      );
      setBlogs(sortedBlogs);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  const blogBannerData = [
    {
      title: "Blogs",
      backgroundImage: "url('/blos_page/banner.png')",
    },
  ];

  return (
    <>
      {/* banner components */}
      <MainBlogsBanner bannerData={blogBannerData} />
      <section className="blogs_content">
        <div className="container-fluid px-xxl-5">
          <div className="row justify-content-center flex-column-reverse flex-lg-row">
            <div className="col-12 col-lg-9 pe-xxl-5">
              <ShowBlogs
                initialDisplayLimit={displayLimit}
                setDisplayLimit={setDisplayLimit}
                loading={loading}
                setLoading={setLoading}
              />
            </div>
            <div className="col-12 col-sm-8 col-md-12 col-lg-3 mx-auto mb-5 mb-xl-0">
              <div className="recent_posts p-4 p-lg-3 p-xx-4 rounded-2">
                <h5 className="fw-semibold">Recent Posts</h5>
                <ul className="p-0 mt-4">
                  {loading
                    ? Array.from({ length: 6 }).map((_, i) => (
                        <p className="text mb-3" key={i}>
                          <Skeleton height={20} count={2} />
                        </p>
                      ))
                    : blogs.slice(0, 6).map((data, i) => (
                        <li className="mb-3 d-flex" key={data.sys.id || i}>
                          <span className="fs-3 me-3 d-lg-none d-xxl-block">
                            •
                          </span>
                          <Link
                            href={{
                              pathname: `/blogs/${data?.fields.pageUrl
                                ?.split(" ")
                                ?.join("-")
                                ?.toLowerCase()}`,
                            }}
                          >
                            {data?.fields?.heading}
                          </Link>
                        </li>
                      ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
