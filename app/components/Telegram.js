"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Telegram = () => {
  return (
    <>
    <div className="pulse-container d-none d-md-block">
        <div className="pulse01"></div>
        <div className="pulse01"></div>
        <div className="pulse01"></div>
      </div>
      <Link
        style={{ color: "#fff" }}
        target="_blank"
        href="https://t.me/lbmsolutions0"
        className="telegram-info d-none d-md-block"
      >
        <span className="telegram ">
          <Icon icon="mingcute:telegram-fill" width="1em" height="1em" />
        </span>
      </Link>
    </>
  );
};

export default Telegram;
