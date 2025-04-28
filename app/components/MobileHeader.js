"use client";
import { Icon } from "@iconify/react";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Logo from "../../app/components/Logo";
import Link from "next/link";

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [isFadeInDown, setIsFadeInDown] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setIsSticky(isScrolled);
      setIsFadeInDown(isScrolled);
      setIsAnimated(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`mobile_header d-lg-none bg-white ${
        isSticky ? "sticky" : ""
      } ${isFadeInDown ? "fadeInDown" : ""} ${isAnimated ? "animated" : ""}`}
    >
      <Navbar className={`container`}>
        <NavItem>
          <DropdownMenu />
        </NavItem>
      </Navbar>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar border-bottom py-0">
      <ul className="navbar-nav w-100">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState("mdi:menu");

  const handleToggle = () => {
    setOpen(!open);
    setIcon(open ? "mdi:menu" : "mdi:close"); // Toggle icon
  };

  const closeDropdown = () => {
    setOpen(false);
    setIcon("mdi:menu");
  };

  // Dynamically calculate class based on open state
  const navItemClass = `nav-item d-flex align-items-center justify-content-between p-0 w-100 ${
    open ? "open" : ""
  }`;

  return (
    <li className={navItemClass}>
      <a
        href="javascript:void(0)"
        className="icon-button"
        onClick={handleToggle}
      >
        <Icon icon={icon} />
      </a>
      <Logo path="/" img_cls="header_logo" logo="black-logo" />
      <a href="tel:+91-8448443318" className={`text-white  tel`}>
        <Icon
          icon="ic:baseline-phone"
          width="1.5em"
          height="1.5em"
          className="text-black trin-trin position-absolute"
        />
        {/* +91-8448443318 */}
      </a>
      {open && React.cloneElement(props.children, { closeDropdown })}
    </li>
  );
}

function DropdownMenu({ closeDropdown }) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <div className="dropdown" ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            href="/about"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            <div className="d-flex align-items-center justify-content-between w-100">
              <div>About</div>
            </div>
          </DropdownItem>
          <DropdownItem
            href="/blogs"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            <div className="d-flex align-items-center justify-content-between w-100">
              <div>Blogs</div>
            </div>
          </DropdownItem>
          <DropdownItem
            href="/contact"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            <div className="d-flex align-items-center justify-content-between w-100">
              <div>Contact Us</div>
            </div>
          </DropdownItem>
          <DropdownItem goToMenu="tab1" setActiveMenu={setActiveMenu}>
            <div className="d-flex align-items-center justify-content-between w-100">
              <div>Mobile App Development</div>
              <div>
                <Icon
                  icon="flowbite:angle-right-outline"
                  width="20"
                  height="20"
                />
              </div>
            </div>
          </DropdownItem>

          <DropdownItem goToMenu="tab2" setActiveMenu={setActiveMenu}>
            <div className="d-flex align-items-center justify-content-between w-100">
              <div>Software Development </div>
              <div>
                <Icon
                  icon="flowbite:angle-right-outline"
                  width="20"
                  height="20"
                />
              </div>
            </div>
          </DropdownItem>

          <DropdownItem goToMenu="tab3" setActiveMenu={setActiveMenu}>
            <div className="d-flex align-items-center justify-content-between w-100">
              <div>Blockchain Development</div>
              <div>
                <Icon
                  icon="flowbite:angle-right-outline"
                  width="20"
                  height="20"
                />
              </div>
            </div>
          </DropdownItem>
          <DropdownItem goToMenu="tab7" setActiveMenu={setActiveMenu}>
            <div className="d-flex align-items-center justify-content-between w-100">
              <div>Metaverse Service</div>
              <div>
                <Icon
                  icon="flowbite:angle-right-outline"
                  width="20"
                  height="20"
                />
              </div>
            </div>
          </DropdownItem>
          <DropdownItem goToMenu="tab5" setActiveMenu={setActiveMenu}>
            <div className="d-flex align-items-center justify-content-between w-100">
              <div>Website Development</div>
              <div>
                <Icon
                  icon="flowbite:angle-right-outline"
                  width="20"
                  height="20"
                />
              </div>
            </div>
          </DropdownItem>
          <DropdownItem goToMenu="tab6" setActiveMenu={setActiveMenu}>
            <div className="d-flex align-items-center justify-content-between w-100">
              <div>Digital Marketing </div>
              <div>
                <Icon
                  icon="flowbite:angle-right-outline"
                  width="20"
                  height="20"
                />
              </div>
            </div>
          </DropdownItem>

          <DropdownItem goToMenu="tab4" setActiveMenu={setActiveMenu}>
            <div className="d-flex align-items-center justify-content-between w-100">
              <div>Our Products</div>
              <div>
                <Icon
                  icon="flowbite:angle-right-outline"
                  width="20"
                  height="20"
                />
              </div>
            </div>
          </DropdownItem>
        </div>
      </CSSTransition>

      {/* Tab first start */}
      <CSSTransition
        in={activeMenu === "tab1"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" setActiveMenu={setActiveMenu}>
            <span>
              <Icon icon="flowbite:angle-left-outline" /> Back
            </span>
          </DropdownItem>
          <DropdownItem
            href="/mobile-app-development-services"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            Custom Mobile App Development
          </DropdownItem>

          {/* <DropdownItem
            href="javascript:void(0)"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            Cross-Platform App Development
          </DropdownItem> */}
          {/* <DropdownItem
            href="javascript:void(0)"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            iOS App Development
          </DropdownItem>
          <DropdownItem
            href="javascript:void(0)"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            Android App Development
          </DropdownItem>
          <DropdownItem
            href="javascript:void(0)"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            Flutter App Development
          </DropdownItem>
          <DropdownItem
            href="javascript:void(0)"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            React Native App Development
          </DropdownItem> */}
          <DropdownItem
            // href="javascript:void(0)"
            href="/clone-script-app-development"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            Clone Script App Development
          </DropdownItem>
        </div>
      </CSSTransition>

      {/* Tab Second start */}
      <CSSTransition
        in={activeMenu === "tab2"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" setActiveMenu={setActiveMenu}>
            <span>
              <Icon icon="flowbite:angle-left-outline" /> Back
            </span>
          </DropdownItem>
          <DropdownItem
            href="/custom-software-development-service"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            Custom Software Development
          </DropdownItem>
          <DropdownItem
            href="/custom-crm-software-development"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            CRM Software Development
          </DropdownItem>

          {/* <DropdownItem
            href="javascript:voio(0)"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            Offshore Software Development
          </DropdownItem>
          <DropdownItem
            href="javascript:voio(0)"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            Enterprise Software Development
          </DropdownItem> */}
        </div>
      </CSSTransition>

      {/* Tab Third start */}
      <CSSTransition
        in={activeMenu === "tab3"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" setActiveMenu={setActiveMenu}>
            <span>
              <Icon icon="flowbite:angle-left-outline" /> Back
            </span>
          </DropdownItem>
          <DropdownItem
            href="/blockchain-development-company"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            Blockchain Development
          </DropdownItem>

          <DropdownItem
            href="/crypto-token-development-company"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            Token Development
          </DropdownItem>
          <DropdownItem
            href="/crypto-coin-development-company"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            Crypto Coin Development
          </DropdownItem>
          <DropdownItem
            href="/smart-contract-development-company"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            Smart Contract Development
          </DropdownItem>
          <DropdownItem
            href="/metaverse-development-company"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            Metaverse Development
          </DropdownItem>
          <DropdownItem
            href="/crypto-wallet-development-company"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            Crypto Wallet Development
          </DropdownItem>
          <DropdownItem
            href="/nft-development-company"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            NFT Development
          </DropdownItem>
          <DropdownItem
            href="/cryptocurrency-exchange-development-company"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            Crypto Exchange Development
          </DropdownItem>
          <DropdownItem
            href="/dapp-development-services"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            dApp Development
          </DropdownItem>
        </div>
      </CSSTransition>
    {/* Tab seven start */}
      <CSSTransition
        in={activeMenu === "tab7"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" setActiveMenu={setActiveMenu}>
            <span>
              <Icon icon="flowbite:angle-left-outline" /> Back
            </span>
          </DropdownItem>
          <DropdownItem
            href="/metaverse-development-company"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            Metaverse Development 
          </DropdownItem> 
          <DropdownItem
            href="/metaverse-game-development"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            Metaverse Game Development
          </DropdownItem>
          <DropdownItem
            href="/play-to-earn-game-development"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
           Metaverse Play-to-Earn Development
          </DropdownItem>
          <DropdownItem
            href="/metaverse-avatar-development"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
           Metaverse 3D Avatar Development
          </DropdownItem>
          <DropdownItem
            href="/metaverse-3d-space-development"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
          Metaverse 3D Space Developmen
          </DropdownItem>
        </div>
      </CSSTransition>
      {/* Tab fifth start */}
      <CSSTransition
        in={activeMenu === "tab5"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" setActiveMenu={setActiveMenu}>
            <span>
              <Icon icon="flowbite:angle-left-outline" /> Back
            </span>
          </DropdownItem>
          <DropdownItem
            href="/website-development"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            Website Development
          </DropdownItem>
        </div>
      </CSSTransition>

      {/* Tab sixth start */}
      <CSSTransition
        in={activeMenu === "tab6"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" setActiveMenu={setActiveMenu}>
            <span>
              <Icon icon="flowbite:angle-left-outline" /> Back
            </span>
          </DropdownItem>
          <DropdownItem
            href="/digital-marketing-agency"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            Digital Marketing
          </DropdownItem>
        </div>
      </CSSTransition>

      {/* Tab forth start */}
      <CSSTransition
        in={activeMenu === "tab4"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" setActiveMenu={setActiveMenu}>
            <span>
              <Icon icon="flowbite:angle-left-outline" /> Back
            </span>
          </DropdownItem>
          <DropdownItem
            href="https://www.emonitrix.ai/"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            Emonitrix
          </DropdownItem>
          <DropdownItem
            href="https://www.tapdapp.io/"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            TapDapp
          </DropdownItem>
          <DropdownItem
            href="Javascript:void(0)"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            Builditnow
          </DropdownItem>
          <DropdownItem
            href="https://corise.ai/"
            setActiveMenu={setActiveMenu}
            closeDropdown={closeDropdown}
          >
            CoRise
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

// function DropdownItem(props) {
//   return (
//     <Link
//       href={props.href || "#"}
//       className="menu-item"
//       onClick={(e) => {
//         if (props.goToMenu) {
//           e.preventDefault();
//           props.setActiveMenu(props.goToMenu);
//         }
//       }}
//     >
//       {props.children}
//     </Link>
//   );
// }
function DropdownItem({
  href,
  goToMenu,
  setActiveMenu,
  closeDropdown,
  children,
}) {
  return (
    <Link
      rel="canonical"
      href={href || "#"}
      className="menu-item"
      onClick={(e) => {
        if (goToMenu) {
          e.preventDefault();
          setActiveMenu(goToMenu);
        }
        closeDropdown();
      }}
    >
      {children}
    </Link>
  );
}

export default App;
