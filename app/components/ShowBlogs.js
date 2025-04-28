// Blogs.js
import React, { useEffect, useState } from "react";
import useContentful from "../lib/useContentful";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ShowBlogs = ({
  initialDisplayLimit,
  setDisplayLimit,
  showMore_btn,
  margin_class,
  loading,
  setLoading,
}) => {
  const { getBlogs } = useContentful();
  const [blogs, setBlogs] = useState([]);
  const [displayLimit, setDisplayLimitState] = useState(
    initialDisplayLimit || 6
  );

  useEffect(() => {
    const fetchBlogs = async () => {
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

  // Function to handle "Show More" button click
  const handleShowMore = () => {
    setDisplayLimitState((prevLimit) => prevLimit + 6);
    setDisplayLimit(displayLimit + 6);
    // console.log(displayLimit, "displayLimit");
  };

  return (
    <>
      <div className="row">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div
                className={`col-sm-8 col-md-6 col-xl-4 mb-5 ${margin_class}`}
                key={i}
              >
                <div className="showBlogContent">
                  <div className="img">
                    <Skeleton height={200} />
                  </div>
                  <div className="content_box">
                    <h4 className="title">
                      <Skeleton count={3} />
                    </h4>
                    <p className="text">
                      <Skeleton count={5} />
                    </p>
                    <p className="text mb-0">
                      <Skeleton width={`30%`} height={12} />
                    </p>
                  </div>
                  <div className="dated mb-0">
                    <Skeleton width={`40%`} height={14} />
                  </div>
                </div>
              </div>
            ))
          : blogs.slice(0, displayLimit).map((data, id) => {
              // console.log("blogs", blogs);
              return (
                <div
                  className={`col-sm-8 col-md-6 col-xl-4 mb-5 ${margin_class}`}
                  key={data?.sys?.id}
                >
                  <Link
                    href={{
                      pathname: `/blogs/${data?.fields.pageUrl
                        ?.split(" ")
                        ?.join("-")
                        ?.toLowerCase()}`,
                    }}
                  >
                    <div className="content">
                      <div className="img">
                        <img
                          src={`https:${data?.fields?.image?.fields?.file?.url}`}
                          alt={data?.fields?.image?.fields?.title}
                          className="img-fluid"
                        />
                      </div>
                      <div className="content_box">
                        <h4 className="title">{data?.fields?.heading}</h4>
                        <p className="text truncate-3">{data?.fields?.para}</p>
                        <Link
                          href={{
                            pathname: `/blogs/${data?.fields.pageUrl
                              ?.split(" ")
                              ?.join("-")
                              ?.toLowerCase()}`,
                          }}
                          className="border-0 bg-transparent read_more"
                        >
                          {data?.fields?.button}
                        </Link>
                      </div>
                      <div className="dated">
                        <span>{data?.fields?.date}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
      </div>
      {displayLimit < blogs.length && (
        <div className="text-center">
          <button
            className={`${showMore_btn} btn_cls border-0 px-4`}
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
};

export default ShowBlogs;
