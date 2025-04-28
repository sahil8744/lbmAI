import React from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';

const Logo = ({path,img_cls,logo}) => {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <>
      <button onClick={() => navigate(`${path}`)} className="bg-transparent border-0">
        <Image src={`/headerImg/${logo}.png`} alt="logo" className={`img-fluid ${img_cls}`}   width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: "auto", height: "auto", }} 
                    priority
                    quality={100} />
        {/* white-logo */}
      </button>
    </>
  );
};
export default Logo;
