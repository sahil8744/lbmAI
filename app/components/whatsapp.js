"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Whatsapp = () => {
  return (
    <>
      <div className="pulse-container d-none d-md-block">
        <div className="pulse"></div>
        <div className="pulse"></div>
        <div className="pulse"></div>
      </div>
      <Link
        style={{ color: "#fff" }}
        target="_blank"
        href="https://api.whatsapp.com/send?phone=918448443318"
        className="whatsapp-info d-none d-md-block"
      >
        <span className="whatsapp">
          <Icon icon="ic:baseline-whatsapp" width="1.2em" height="1.2em" />
        </span>
      </Link>
    </>
  );
};

export default Whatsapp;
