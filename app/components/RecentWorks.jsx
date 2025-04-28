import React from "react";
import Image from "next/image";

const RecentWork = () => {
  const Listing = [
    {
      services: "Leading Innovation",
    },
    {
      services: "Future Focused",
    },
    {
      services: "100% Client Approval Score",
    },
    {
      services: "In-House Professional",
    },
  ];

  const Img = [
    {
      pic: "slide_1",
    },
  ];

  return (
    <>
      <section className="recent_works">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <ul>
                {Listing.map((val, i) => (
                  <li key={i}>{val.services}</li>
                ))}
              </ul>
            </div>
            <div className="col-6 d-none">
              {Img.map((val, i) => (
                <Image
                  src={`../home_page/${val.pic}.jpg`}
                  alt="image"
                  key={i}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                  priority
                  quality={100}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          ul {
            li {
              font-size: 80px;
              font-weight: 900;
              //   border-bottom: 1px solid #000;
              //   font-family:Rowdiesbold;
            }
          }
        `}
      </style>
    </>
  );
};

export default RecentWork;
