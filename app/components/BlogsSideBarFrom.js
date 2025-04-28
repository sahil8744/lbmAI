"use client";
import React, { useEffect, useState } from "react";
import useContentful from "../lib/useContentful";
import Link from "next/link";
import Image from 'next/image';

const BlogsSideBarFrom = ({ para }) => {
  const { getBlogs } = useContentful();
  const [blogs, setBlogs] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(6);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogData = await getBlogs();
      const filteredData = blogData?.filter(
        (val) =>
          val?.fields?.pageUrl?.split(" ").join("-")?.toLowerCase() !== para
      );
      setBlogs(filteredData || []);
    };
    fetchBlogs();
  }, [para]);

  return (
    <>
      <ul className="m-0 p-0 mt-4 list-unstyled">
        {blogs
          .slice()
          .slice(0, displayLimit)
          .map((data, i) => (
            <li
              key={i}
              className={`mb-4 pb-4 ${
                i === blogs.length - 1 ? "" : "border-bottom"
              }`}
            >
              <Link
                href={{
                  pathname: `/blogs/${data?.fields.pageUrl
                    ?.split(" ")
                    ?.join("-")
                    ?.toLowerCase()}`,
                }}
                className="text-black"
              >
                <div className="row align-items-center">
                  <div className="col-4">
                    <Image
                      src={`https:${data?.fields?.image?.fields?.file?.url}`}
                      alt={`${data?.fields?.image?.fields?.file?.title}`}
                      className={`img-fluid rounded-2`}
                      width={0} 
                      height={0} 
                      sizes="100vw"
                      style={{ width: "auto", height: "auto", }} 
                      priority
                      quality={100}
                    />
                  </div>
                  <div className="col-8 ps-0">
                    <div className="inner_txt">
                      <h6 className="fw-medium fs-7 lh-base m-0">
                        {data?.fields?.heading}
                      </h6>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default BlogsSideBarFrom;
