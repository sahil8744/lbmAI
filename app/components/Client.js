import React from "react";
import Image from 'next/image';

const Client = ({ ClientData_a, ClientData_b, ClientData_c }) => {
  return (
    <>
      {ClientData_a?.map((val, i) => {
        return (
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0" key={i}>
            <div className="inner_txt h-100 box_shadow">
              <Image
                src="/homeImg/star.svg"
                alt="banner"
                className="me-4  img-fluid"
                width={0} 
                height={0} 
                sizes="100vw"
                style={{ width: "auto", height: "auto", }} 
                priority
                quality={100}
              />
              <p className="para lh-base mt-4">{val.text}</p>
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <Image
                    src="/homeImg/user.png"
                    alt="user"
                    className="w-25 img-fluid"
                    width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                  />
                  <span className="ms-2" style={{ fontFamily: "LatoBold" }}>
                    {val.clientName}
                  </span>
                </div>
                <p className="m-0">{val.comName}</p>
              </div>
              <span></span>
            </div>
          </div>
        );
      })}

      {ClientData_b?.map((val, i) => {
        return (
          <div className="col-md-6 col-lg-3 d-none d-xxl-block" key={i}>
            <div className="inner_txt h-100 box_shadow">
              <Image
                src="/homeImg/star.svg"
                alt="start"
                className="me-4  img-fluid"
                width={0} 
                height={0} 
                sizes="100vw"
                style={{ width: "auto", height: "auto", }} 
                priority
                quality={100}
              />
              <p className="para lh-base mt-4">{val.text}</p>
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <Image
                    src="/homeImg/user.png"
                    alt="user"
                    className="w-25 img-fluid"
                    width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100} 
                  />
                  <span className="ms-3" style={{ fontFamily: "LatoBold" }}>
                    {val.clientName}
                  </span>
                </div>
                <p className="m-0">{val.comName}</p>
              </div>
              <span></span>
            </div>
          </div>
        );
      })}
      
      {ClientData_c?.map((val, i) => {
        return (
          <div className="col-md-6 col-lg-3 d-none d-xxl-block" key={i}>
            <div className="inner_txt h-100 box_shadow">
              <Image
                src="/homeImg/star.svg"
                alt="start"
                className="me-4  img-fluid"
                width={0} 
                height={0} 
                sizes="100vw"
                style={{ width: "auto", height: "auto", }} 
                priority
                quality={100}
              />
              <p className="para lh-base mt-4">{val.text}</p>
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <Image
                    src="/homeImg/user.png"
                    alt="user"
                    className="w-25 img-fluid"
                    width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100}
                  />
                  <span className="ms-3" style={{ fontFamily: "LatoBold" }}>
                    {val.clientName}
                  </span>
                </div>
                <p className="m-0">{val.comName}</p>
              </div>
              <span></span>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Client;
