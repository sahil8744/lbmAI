"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from 'next/image';

const CommonBtn = ({
  path,
  btn_name,
  targett,
  commonbtn,
  img_cls,
  p_content,
  add_cls,
  canonical,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const navigate = (name) => {
    name !== "" && router.push(`${name}`);
    localStorage.setItem("fromPage", window.location.href.split("/")[3]);
  };


  return (
    <>
     <button
          onClick={() => navigate(`${path}`)}
          className={`border-0 ${commonbtn}`}
          target={targett}
          rel={canonical && "canonical"}
        >
          {btn_name}
          <Image
            src="/headerImg/white-logo.png"
            alt="logo"
            className={`img-fluid ${img_cls}`}
            width={0} 
            height={0} 
            sizes="100vw"
            style={{ width: "auto", height: "auto", }} 
            priority
            quality={100}
          />
          <p className={`text-black btn_content mb-0 ${add_cls}`}>
            {p_content}
          </p>
        </button>
    </>
  );
};
export default CommonBtn;
