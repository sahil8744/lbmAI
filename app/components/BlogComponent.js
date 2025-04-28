"use client";
import React, { useEffect, useState } from "react";
import useContentful from "../lib/useContentful";
import RichText from "../lib/RichText";

const BlogoComponent = ({ para }) => {
  const { getBlogs } = useContentful();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogData = await getBlogs();
      const data = blogData?.filter((val) => {
        return (
          val?.fields?.pageUrl?.split(" ").join("-")?.toLowerCase() === para
        );
      });
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    <>
      {blogs.map((data, i) => {
        // console.log(blogs,">>>>>>>")
        return (
          <div className="col-xl-8" key={i}>
            <div className="inner_content">
              <RichText content={data?.fields?.directions} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogoComponent;
