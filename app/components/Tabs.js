"use client";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import ParaText from "./ParaText";
import Link from "next/link";

function LeftTabsExample() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="mt-4 mt-lg-5 justify-content-center mx-auto">
        <Col xl={4} className="">
          <Nav variant="pills" className="flex-column clickTab h-100">
            <Nav.Item>
              <Nav.Link eventKey="first"> Blockchain Development </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second"> Software Development </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" className="border-0"> Mobile App Development </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col xl={8} className=" mt-4 mt-xl-0 ">
          <Tab.Content className="">
            <Tab.Pane eventKey="first">
              <span className="title">Blockchain Development Services</span>
              <ParaText
                f_custome="lh-base"
                para_text="As a certified blockchain expert, we assist businesses worldwide in creating strong financial systems and successful blockchain projects, all powered by the latest tech innovations. "
              />
              <div className="row">
                <div className="col-md-6">
                  <ul className="p-0 m-0">
                    <li>
                      <Link href="/smart-contract-development-company">
                        <span></span> Smart Contract Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/metaverse-development-company">
                        <span></span> Metaverse Development Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/cryptocurrency-exchange-development-company">
                        <span></span> Exchange Development Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/crypto-wallet-development-company">
                        <span></span> Crypto Wallet Services
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="p-0 m-0">
                    <li>
                      <Link href="/">
                        {" "}
                        <span></span> Blockchain Development Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/crypto-token-development-company">
                        <span></span> Token Development Services{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="/dapp-development-services">
                        <span></span> Dapp Development Services{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="/nft-development-company">
                        <span></span> NFT Development Services
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="second">
              <span className="title">Software Development</span>
              <ParaText
                f_custome="lh-base"
                para_text="We provide reliable and forward-thinking software development services for businesses and startups. Use our technical know-how to get custom-made software that fits your business needs."
              />
              <div className="row">
                <div className="col-md-6">
                  <ul className="p-0 m-0">
                    <li>
                      <Link href="/">
                        <span></span> Perfex CRM
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <span></span>E-monitrix-software
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <span></span> Custom Software Development
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="third">
            <span className="title">Mobile App Development</span>
              <ParaText
                f_custome="lh-base"
                para_text="Our team knows technology and creativity well, so we make excellent mobile applications. Let us handle your mobile app development, creating an app that meets your needs and keeps up with the latest trends. "
              />
              <div className="row">
                <div className="col-md-6">
                  <ul className="p-0 m-0">
                    <li>
                      <Link href="/">
                        <span></span>  Custom Mobile App Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <span></span> Zomato Clone Script
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <span></span>  Bored Ape yacht Club App
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <span></span>  Tinder Clone Script
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LeftTabsExample;
