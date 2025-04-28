"use client";

// import { usePathname } from "next/navigation";
// import { useEffect } from "react";

// export const Canonical = () => {
//   const mk = usePathname();
//   return <link rel="canonical" href={mk} />;
// };

import { usePathname } from 'next/navigation';

export const Canonical = () => {
  const baseUrl = "https://www.lbmsolution.com"; 
  const pathname = usePathname();
  const canonicalUrl = `${baseUrl}${pathname}`;

  return <link rel="canonical" href={canonicalUrl} />;
};