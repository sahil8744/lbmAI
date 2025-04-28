"use client";
import { useEffect, useState } from "react";
const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (!isLoading) return null; // Hides loader when timeout completes

  return (
    <>
      <div className="page_loader">
        <div className="loader">
          <div class="circles">
            <span class="one"></span>
            <span class="two"></span>
            <span class="three"></span>
          </div>
          <div class="pacman">
            <span class="top"></span>
            <span class="bottom"></span>
            <span class="left"></span>
            <div class="eye"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
