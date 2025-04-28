"use client";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
// import ParaText from "./ParaText";

function LeftTabsExample() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="mt-4 mt-lg-5 justify-content-center">
                <Col xl={4} className="">
                    <Nav variant="pills" className="flex-column clickTab h-100">
                        <Nav.Item>
                            <Nav.Link eventKey="first"> Smart Contracts </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second"> programming languages </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third" className="border-0">frameworks </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="forth" className="border-0">Databases </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fifth" className="border-0">Wallets </Nav.Link>

                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="sixth" className="border-0">ERC Tokens </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col xl={8} className=" mt-4 mt-xl-0 ">
                    <Tab.Content className="">
                        <Tab.Pane eventKey="first">
                        <span className="title">Smart Contracts</span>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="p-0 m-0">
                                        <li>
                                            <a href="">
                                                <span></span> Truffle</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span> OpnZeppline
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span>HardHat
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span> Infura
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span> Alchemy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span> Quicknode
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="p-0 m-0">
                                        <li>
                                            <a href="">
                                                {" "}
                                                <span></span> Ganache
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span>Pinata{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span> Metamask{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span>Geth
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span>Chainlink
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="second">
                        <span className="title">programming languages</span>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="p-0 m-0">
                                        <li>
                                            <a href="">
                                                <span></span> Solidity
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span>Vyper
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span> Rust 
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span> Python 
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span> C++ 
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="third">
                            <span className="title">frameworks</span>
                           
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="p-0 m-0">
                                        <li>
                                            <a href="">
                                                <span></span>  Node.Js
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span>Ether.Js
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span> Web3.Js
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span> React.Js
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span> Angular.Js
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span> Next.Js
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="forth">
                            <span className="title">Databases</span>
                           
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="p-0 m-0">
                                        <li>
                                            <a href="">
                                                <span></span>  The Graph
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span>MongoDB
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span>CouchDB
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                            <span className="title">Wallets</span>
                           
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="p-0 m-0">
                                        <li>
                                            <a href="">
                                                <span></span> Metamask
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span> Trust Wallet
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span>Binance
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span>Coinbase
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span>WalletConnect
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="sixth">
                            <span className="title">ERC Tokens</span>
                           
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="p-0 m-0">
                                        <li>
                                            <a href="">
                                                <span></span> ERC-1155
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span> ERC-20
                                                </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span> ERC-721
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span>Coinbase
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span></span>WalletConnect
                                            </a>
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
