import React, { useEffect, useState } from "react";
import { Form, Tab, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  AiFillPlayCircle,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsArrowDownCircle } from "react-icons/bs";

import { ImLoop2 } from "react-icons/im";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import ReactSwipe from "react-swipe";
import Select, { components } from "react-select";
import Chart from "../components/Chart";

const options = [
  { value: "Bitcoin", label: " BitCoin", icon: "bitcoin-btc-logo.svg" },
  { value: "Ethrum", label: "Ethrum", icon: "ethereum-eth-logo.svg" },
];

const { Option } = components;
const IconOption = (props) => (
  <Option {...props}>
    <img
      src={`img/${props.data.icon}`}
      style={{ width: 20 }}
      alt={props.data.label}
    />
    {props.data.label}
  </Option>
);

const Home = () => {
  let reactSwipeEl;

  return (
    <>
      <div className="container px-4 pb-60">
        <div className="row px-3">
          <div className="col-md-7 mt-0 mb-4 mt-md-5 info-text">
            <h1>Transform Your Idea Into Reality with Densik</h1>
            <p className="mt-4 d-none d-md-block">
              The entire Densik team knows what's good with Traded and you can
              too with 1 week and a good attitude.
            </p>
            <div className="d-none d-md-block">
              <a href="#" className="play-button">
                <AiFillPlayCircle className="play-icon" />{" "}
                <span>Watch Demo </span>{" "}
                <HiOutlineArrowNarrowRight className="text-light" />
              </a>
              <ul className="sponsor-img mt-10">
                <li>
                  <img src="img/image0.png" />
                </li>
                <li>
                  <img src="img/image1.png" />
                </li>
                <li>
                  <img src="img/image3.png" />
                </li>
                <li>
                  <img src="img/image4.png" />
                </li>
                <li>
                  <img src="img/image5.png" />
                </li>
                <li>
                  <img src="img/image6.png" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5 crypto-box">
            {/* form start */}
            {/* <h3 className="small-title">Buy/Sale Crypto</h3> */}
            <div className="custom-tabs">
              <Tabs
                defaultActiveKey="n1"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab
                  eventKey="n1"
                  title="Exchange Crypto"
                  className=" shoaib tab-btn"
                >
                  <div className="exchange-box">
                    <form action="">
                      <div className="custom-form-group">
                        <label>Pay</label>
                        <br />

                        <Select
                          className="select-box"
                          defaultValue={options[0]}
                          options={options}
                          components={{ Option: IconOption }}
                        />
                        <input
                          type="text"
                          name=""
                          className="select-text"
                          placeholder="0"
                        />
                      </div>
                      <div className="custom-form-group text-center mt-4">
                        <BsArrowDownCircle className="arrow-icon" />
                      </div>

                      <div className="custom-form-group">
                        <label>Receive (Estimated)</label>
                        <br />

                        <Select
                          className="select-box"
                          defaultValue={options[1]}
                          options={options}
                          components={{ Option: IconOption }}
                        />
                        <input
                          type="text"
                          name=""
                          className="select-text"
                          placeholder="0"
                        />
                      </div>
                      <div className="custom-form-group mt-4">
                        <p>
                          1 BUSD = 1.0005 USDC{" "}
                          <ImLoop2 className=" text-light" />{" "}
                        </p>
                        <button className="btn-block btn-blue">Hello</button>
                      </div>
                    </form>
                  </div>
                </Tab>
                <Tab eventKey="n2" title="Buy / Sell Crypto">
                  <div className="exchange-box">
                    <form action="">
                      <div className="custom-form-group">
                        <label>Pay</label>
                        <br />

                        <Select
                          className="select-box"
                          defaultValue={options[0]}
                          options={options}
                          components={{ Option: IconOption }}
                        />
                        <input
                          type="text"
                          name=""
                          className="select-text"
                          placeholder="0"
                        />
                      </div>
                      <div className="custom-form-group text-center mt-4"></div>

                      <div className="custom-form-group">
                        <label>Receive (Estimated)</label>
                        <br />

                        <Select
                          className="select-box"
                          defaultValue={options[1]}
                          options={options}
                          components={{ Option: IconOption }}
                        />
                        <input
                          type="text"
                          name=""
                          className="select-text"
                          placeholder="0"
                        />
                      </div>
                      <div className="custom-form-group mt-4">
                        <p>
                          1 BUSD = 1.0005 USDC{" "}
                          <ImLoop2 className=" text-light" />{" "}
                        </p>
                        <button className="btn-block btn-blue">Hello</button>
                      </div>
                    </form>
                  </div>
                </Tab>
              </Tabs>
            </div>

            {/* form end */}
          </div>
        </div>
        <div className="d-block d-md-none mt-5">
          <a href="#" className="play-button">
            <AiFillPlayCircle className="play-icon" /> <span>Watch Demo </span>{" "}
            <HiOutlineArrowNarrowRight className="text-light" />
          </a>
          <p className="mt-4 d-block d-md-none watch-now-text">
            The entire Densik team knows what's good with Traded and you can too
            with 1 week and a good attitude.
          </p>
          <ul className="sponsor-img mt-10">
            <li>
              <img src="img/image0.png" />
            </li>
            <li>
              <img src="img/image1.png" />
            </li>
            <li>
              <img src="img/image3.png" />
            </li>
            <li>
              <img src="img/image4.png" />
            </li>
            <li>
              <img src="img/image5.png" />
            </li>
            <li>
              <img src="img/image6.png" />
            </li>
          </ul>
        </div>
      </div>
      <Chart />
      <section className="container  pb-60 mt-50 text-center mx-auto">
        <div className="row">
          <div className="col-md-4 mb-5 earning-box">
            <img src="img/c1.png" />
            <h3>Available Currency</h3>
            <h1>56K</h1>
          </div>

          <div className="col-md-4  mb-5 earning-box active-earning-box">
            <img src="img/c2.png" />
            <h3>Trading Volume</h3>
            <h1>879K</h1>
          </div>

          <div className="col-md-4 earning-box">
            <img src="img/c3.png" />
            <h3>Available Currency</h3>
            <h1>$742,311</h1>
          </div>
        </div>
      </section>
      {/* earning box end */}

      <section className="blog">
        <div className="container">
          <div className="text-center">
            <h1 className="font-24">WHAT MAKES US DIFFERENT</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="row mx-auto mt-50">
            <div className="col-md-4 blog-thumb">
              <img src="img/photo0.png" />
            </div>
            <div className="col-md-8  blog-desc mb-4 mt-4">
              <h1>24/7 CUSTOMER SUPPORT</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500. Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's
              </p>
              <a href="#" className="mt-10 btn-blue">
                Buy Crypto
              </a>
            </div>
          </div>
          <div className="row mx-auto mt-50">
            <div className="col-md-4 blog-thumb mt-5">
              <img src="img/photo1.png" />
            </div>
            <div className="col-md-8 blog-desc mb-5 mt-4">
              <h1>LITTLE TO NO COMMISSION</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500. Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's
              </p>
              <a href="#" className="mt-10 btn-blue">
                Buy Crypto
              </a>
            </div>
          </div>

          <div className="row mx-auto mt-100">
            <div className="col-md-4 blog-thumb">
              <img src="img/photo2.png" />
            </div>
            <div className="col-md-8 blog-desc mb-4 mt-4">
              <h1>INSTANT CRYPTO EXCHANGE</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500. Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's
              </p>
              <a href="#" className="mt-10 btn-blue">
                Buy Crypto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* map start */}
      <section className="container text-center map-section mt-100 pb-60">
        <h1>"Trusted All Over West Africa"</h1>
        <img src="img/mapbase.png" className="map-img" />
        <h2>We Accept</h2>
        <div className="  map-sponser text-center">
          <img src="img/image1.png" />
          <img src="img/image3.png" />
          <img src="img/image4.png" />
          <img src="img/image5.png" />
          <img src="img/image6.png" />
        </div>
      </section>
      <section className="blog">
        <div className="container mt-50">
          <div className="row">
            <div className="col-md-6 review-desc">
              <h1>Read All Reviews From Densik Fans</h1>
              <a href="#">Simple Dummay text</a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                obcaecati dolores quo? Voluptatibus dolores error aut atque.
                Nesciunt
              </p>
            </div>
            <div className="col-md-6">
              <ReactSwipe
                className="carousel"
                swipeOptions={{ continuous: false }}
                ref={(el) => (reactSwipeEl = el)}
              >
                <div>
                  <div className="carousel-desc">
                    <h4>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </h4>
                  </div>
                </div>
                <div>
                  <div className="carousel-desc">
                    <h4>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </h4>
                  </div>
                </div>
                <div>
                  <div className="carousel-desc">
                    <h4>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </h4>
                  </div>
                </div>
              </ReactSwipe>
              <AiOutlineArrowLeft
                className="arrows"
                onClick={() => reactSwipeEl.prev()}
              />
              <AiOutlineArrowRight
                className="arrows"
                onClick={() => reactSwipeEl.next()}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="blog px-4">
        <div className="container artwork">
          <div className="row">
            <div className="col-md-5">
              <img src="img/artwork.png" className="img-fluid" />
            </div>
            <div className="col-md-7">
              <div className="artwork-desc text-center text-md-left">
                <h1>24/7 Support Available</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  ab repudiandae dolore quos, commodi harum voluptatibus ea. Ad
                  accusant.
                </p>
                <a className="btn-blue" href="#">
                  Drop Us a Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* map end */}
      <footer className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 footer-desc px-4 text-center text-md-left pb-60 mt-50">
              <h1>Calculate Your Crypto And Payment.</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>
            <div className="col-md-6 text-light">
              <div className="mt-4 crypto-box">
                {/* form start */}
                {/* <h3 className="small-title">Buy/Sale Crypto</h3> */}
                <div className="custom-tabs footer-tabs">
                  <Tabs
                    defaultActiveKey="n1"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab
                      eventKey="n1"
                      title="Exchange Crypto"
                      className=" shoaib tab-btn"
                    >
                      <div className="exchange-box">
                        <form action="">
                          <div className="custom-form-group">
                            <label>Pay</label>
                            <br />

                            <Select
                              className="select-box"
                              defaultValue={options[0]}
                              options={options}
                              components={{ Option: IconOption }}
                            />
                            <input
                              type="text"
                              name=""
                              className="select-text"
                              placeholder="0"
                            />
                          </div>
                          <div className="custom-form-group text-center mt-4">
                            <BsArrowDownCircle className="arrow-icon" />
                          </div>

                          <div className="custom-form-group">
                            <label>Receive (Estimated)</label>
                            <br />

                            <Select
                              className="select-box"
                              defaultValue={options[1]}
                              options={options}
                              components={{ Option: IconOption }}
                            />
                            <input
                              type="text"
                              name=""
                              className="select-text"
                              placeholder="0"
                            />
                          </div>
                          <div className="custom-form-group mt-4">
                            <p>
                              1 BUSD = 1.0005 USDC{" "}
                              <ImLoop2 className=" text-light" />{" "}
                            </p>
                            <button className="btn-block btn-blue">
                              Hello
                            </button>
                          </div>
                        </form>
                      </div>
                    </Tab>
                    <Tab eventKey="n2" title="Buy / Sell Crypto">
                      <div className="exchange-box">
                        <form action="">
                          <div className="custom-form-group">
                            <label>Pay</label>
                            <br />

                            <Select
                              className="select-box"
                              defaultValue={options[0]}
                              options={options}
                              components={{ Option: IconOption }}
                            />
                            <input
                              type="text"
                              name=""
                              className="select-text"
                              placeholder="0"
                            />
                          </div>
                          <div className="custom-form-group text-center mt-4"></div>

                          <div className="custom-form-group">
                            <label>Receive (Estimated)</label>
                            <br />

                            <Select
                              className="select-box"
                              defaultValue={options[1]}
                              options={options}
                              components={{ Option: IconOption }}
                            />
                            <input
                              type="text"
                              name=""
                              className="select-text"
                              placeholder="0"
                            />
                          </div>
                          <div className="custom-form-group mt-4">
                            <p>
                              1 BUSD = 1.0005 USDC{" "}
                              <ImLoop2 className=" text-light" />{" "}
                            </p>
                            <button className="btn-block btn-blue">
                              Hello
                            </button>
                          </div>
                        </form>
                      </div>
                    </Tab>
                  </Tabs>
                </div>

                {/* form end */}
              </div>
            </div>
          </div>

          {/* bottom row start */}
          <div className="row mt-5">
            {/* payment section on mobile */}
            <div className="col-lg-4 col-md-4 col-sm-12 d-block d-md-none my-4 text-center">
              <h5 className="text-white px-5">
                We Accept Following Payment Systems
              </h5>
              <div className=" bottom-sponser footer-payment-cards text-center">
                <img src="img/image1.png" />
                <img src="img/image3.png" />
                <img src="img/image4.png" />

                <img src="img/image5.png" />
                <img src="img/image6.png" />
              </div>
            </div>
            {/* payment secction ends  */}
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
              <img
                src="img/logo.png"
                alt=""
                className="img-fluid text-left d-block my-3"
              />
              <p className="text-white text-left mt-3">
                It's crafted with the latest trend of &amp; coded with modern
                approaches
              </p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 bottom-menu">
              <h3>Quick Link</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About US</a>
                </li>
                <li>
                  <a href="#">Assets</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Buy Crypto</a>
                </li>
                <li>
                  <a href="#">Sell Crypto</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 bottom-menu">
              <h3>Legal</h3>
              <ul>
                <li>
                  <a href="#">Terms Of Use</a>
                </li>
                <li>
                  <a href="#">Account Policy</a>
                </li>
                <li>
                  <a href="#">Privacy Poicy</a>
                </li>
                <li>
                  <a href="#">AML/KYC Policy</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
                <li>
                  <a href="#">Risk Disclosure</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 d-none d-md-block">
              <h2 className="text-white">
                We Accept Following Payment Systems
              </h2>
              <div className=" bottom-sponser text-center">
                <img src="img/image1.png" />
                <img src="img/image3.png" />
                <img src="img/image4.png" />

                <img src="img/image5.png" />
                <img src="img/image6.png" />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p className="text-white">©@2021 DENSIK. All Rights Reserved</p>
            </div>
            <div className="col-md-6 text-md-right col-sm-12 text-white text-center  footer-icon">
              <a href="#">
                <AiFillFacebook />
              </a>
              <a href="#">
                <AiFillYoutube />
              </a>
              <a href="#">
                <AiFillInstagram />
              </a>
              <a href="#">
                <AiFillTwitterSquare />
              </a>
              <a href="#">
                <AiFillLinkedin />
              </a>
            </div>
          </div>
          {/* bottom row end */}
        </div>
      </footer>
    </>
  );
};
export default Home;
