"use client";
import { useEffect, useRef, createContext, useContext } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScrollerContext = createContext();
export const useSmoothScroller = () => useContext(SmoothScrollerContext);

export default function ScrollContext({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.06, // Adjust for smoother motion (default is 0.1)
      wheelMultiplier: 1, // Adjust scrolling speed
      infinite: false, // Set to true for infinite looping scroll
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup to prevent memory leaks
    };
  }, []);

  return (
    <SmoothScrollerContext.Provider value={lenisRef.current}>
      {children}
    </SmoothScrollerContext.Provider>
  );
}
