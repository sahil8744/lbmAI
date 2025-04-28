import React from "react";
import NavLink from "./NavLink";

const Navigation = () => {
  return (
    <>
      <div className="mx-auto">
        <ul className="p-0 m-0 d-flex align-items-center">
          <li> <NavLink activeclassName="theme_clr" text="Crypto Wallet" href="/cryptowallet" /></li>
            
        </ul>
      </div>
    </>
  );
};

export default Navigation;
