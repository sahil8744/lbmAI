"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, text, activeClass }) => {
  const path = usePathname();
  const isActive = path === href;
  return (
    
      <Link className={`${isActive ? activeClass : ""}`} href={href}>{text}</Link>

  );
};

export default NavLink;
