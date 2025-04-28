import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import Image from 'next/image';

const Card = ({ CardData, status }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const cardRefs = useRef([]);
  const router = useRouter();

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle active state
  };

  // tilt effect start
  const handleOnClick = async (val) => {
    if (val?.isLink === true) {
      router.push(`${val?.linkUrl}`);
    }
  };
  // const cardRef = useRef(null);
  var a = status == "false" ? false : true;
  useEffect(() => {
    if (a) {
      cardRefs.current.forEach((cardRef, index) => {
        if (cardRef) {
          VanillaTilt.init(cardRef, {
            // max: 20,
            speed: 400,
            glare: true,
            "max-glare": 0.1,
            perspective: 1000,
          });

          const handleMouseMove = (e) => {
            const glareElement = cardRef.querySelector(".js-tilt-glare");
            if (glareElement) {
              glareElement.style.background = `linear-gradient(${e.clientX}deg, rgba(255,255,255,0.1), rgba(255,255,255,0))`;
            }
          };

          cardRef.addEventListener("mousemove", handleMouseMove);

          return () => {
            if (cardRef) {
              cardRef.vanillaTilt.destroy();
              cardRef.removeEventListener("mousemove", handleMouseMove);
            }
          };
        }
      });
    }
  }, [CardData]);

  // tilt effect end

  return (
    <>
      {CardData.map((val, i) => {
        return (
          <div
            className={`${val.columns}`}
            key={i}
            onClick={() => handleOnClick(val)}
          >
            <div
              ref={(el) => (cardRefs.current[i] = el)}
              className={`card_bx ${val.add_class}   ${
                i === activeIndex ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${val.background})` }}
              onClick={() => handleClick(i)}
            >
              <div className="inner_text ">
                <div className={val.custome_col_a}>
                  <Image
                    src={`${val.img}`}
                    alt={`${val.alt_value}`}
                    className={`img-fluid ${val.img_class}`}
                    width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                  />
                </div>
                <div className={val.custome_col_b}>
                  <div
                    className={`d-flex align-items-center justify-content-between h-100 ${val.content_bx}`}
                  >
                    <h3 className={val.heading_h5}>{val.heading}</h3>
                    <svg
                      className={val.svg_cls}
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="currentColor"
                        d="M8.5 4a.5.5 0 1 1 0-1h8a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4.707L3.854 16.854a.5.5 0 0 1-.708-.708L15.293 4z"
                      />
                    </svg>
                  </div>
                  <p className={val.p_opacity}>{val.text} {val.LinkData && <Link className="px-1 h" href={val.LinkHref}>{val.LinkData}</Link>} {val.text1}  {val.LinkData1 && <Link className="px-1" href={val.LinkHref1}>{val.LinkData1}</Link>} </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Card;
