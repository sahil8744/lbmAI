import React from "react";
import Image from 'next/image';

const Img = ({img,alt,add_cls}) => {
  return (
    <>
      <Image src={img} alt={alt} className={`img-fluid ${add_cls}`}   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100} />
    </>
  );
};
export default Img;
