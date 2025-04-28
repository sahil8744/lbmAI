"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect, useState } from "react";
const CounterCard = ({ label, start, end, interval }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let current = start;
    const intervalId = setInterval(() => {
      setCount(current);
      if (current >= end) {
        clearInterval(intervalId);
      } else {
        current++;
      }
    }, interval);

    return () => clearInterval(intervalId);
  }, [start, end, interval]);

  useGSAP(() => {});

  return (
    <div className="column">
      <div className="cards">
        <h2 className="counter fw-bold">
          <div className="hidden">
            <span className="text-black">{count} +</span>
          </div>
        </h2>
        <p className="mb-0">
          <div className="hidden">
            <span>{label}</span>
          </div>
        </p>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const cardData = [
    {
      label: "Digital Experts",
      start: 1,
      end: 200,
      interval: 2,
    },
    {
      label: "Projects ",
      start: 1,
      end: 1000,
      interval: 2,
    },
    {
      label: "Years of experience",
      start: 1,
      end: 10,
      interval: 2,
    },
  ];

  return (
    <section className="our_company py-3">
      <div className="container">
        <div className="row  abs">
          {cardData.map((card, index) => (
            <div className="col-4 position-relative" key={index}>
              <CounterCard
                key={index}
                label={card.label}
                start={card.start}
                end={card.end}
                interval={card.interval}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
