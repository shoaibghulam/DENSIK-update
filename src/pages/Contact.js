import React,{useEffect,useState} from 'react'
import {Form ,Tab,Tabs} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiFillPlayCircle,AiOutlineArrowRight,AiOutlineArrowLeft, AiFillFacebook, AiFillInstagram , AiFillYoutube, AiFillTwitterSquare, AiFillLinkedin} from 'react-icons/ai';
import {BsArrowDownCircle} from 'react-icons/bs';

import {ImLoop2} from 'react-icons/im';

import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import ReactSwipe from 'react-swipe';
import Select, { components } from "react-select";
import Chart from '../components/Chart';

const options = [
    { value: "Bitcoin", label: " BitCoin", icon: "bitcoin-btc-logo.svg" },
    { value: "Ethrum", label: "Ethrum", icon: "ethereum-eth-logo.svg" }
  ];
  
  const { Option } = components;
  const IconOption = props => (
    <Option {...props}>
      <img
        src={`img/${props.data.icon}`}
        style={{ width: 20 }}
        alt={props.data.label}
      />
      {props.data.label}
    </Option>
  );

const Contact=() =>{
   
  

    return (
        <>
        <section  style={{ 
      backgroundImage: `url("img/contact.png")` 
    }}>
    <div className="container contactus pb-60">

        <div className="row">
            <div className="col-md-6 contact-desc text-center mx-auto">
            
            <h1>Contact Us</h1>
            </div>
            <div className="col-md-6 col-sm-10 mx-auto">
                <div className="contactus-desc">
                    <h1>SUBMIT A REQUEST</h1>
                    <form action="">
                    <div className="contact-group">
                    <input type="text" className="contact-input" placeholder="Your Name" />
                    </div>
                    <div className="contact-group">
                    <input type="text" className="contact-input" placeholder="Your E-Mail" />
                    </div>
                    <div className="contact-group">
                    <input type="text" className="contact-input" placeholder="Your Phone Number" />
                    </div>
                    <div className="contact-group">
                    <input type="text" className="contact-input" placeholder="Your Message" />
                    </div>
                    <button className="btn-block btn-blue">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </section>
    {/* map end */}
    <footer className="text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-6 footer-desc pb-60 mt-50">
                    
                    <h1>Calculate Your Crypto And Payment.</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                  
                   
                </div>
                <div className="col-md-6 text-light">
                <div className="mt-4 ">
             {/* form start */}
            {/* <h3 className="small-title">Buy/Sale Crypto</h3> */}
            <div className="custom-tabs">
        
            </div>

             {/* form end */}
         </div>
                </div>
            </div>

            {/* bottom row start */}
            <div className="row mt-5">
          <div className="col-lg-4 col-md-4 col-sm-12 text-center">
            <img src="img/logo.png" alt="" className="img-fluid" />
            <p className="text-white text-left mt-3">It's crafted with the latest trend of &amp; coded with modern approaches</p>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 bottom-menu">
              <h3>Quick Link</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About US</a></li>
              <li><a href="#">Assets</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Buy Crypto</a></li>
              <li><a href="#">Sell Crypto</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 bottom-menu">
          <h3>Legal</h3>
            <ul>
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">Account Policy</a></li>
              <li><a href="#">Privacy Poicy</a></li>
              <li><a href="#">AML/KYC Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Risk Disclosure</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <h2 className="text-white">We Accept Following Payment Systems</h2>
            <div className=" bottom-sponser text-center">
            
            <img src="img/image1.png"/>
            <img src="img/image3.png"/>
            <img src="img/image4.png"/>
           
            <img src="img/image5.png"/>
            <img src="img/image6.png"/>

        </div> 
          </div>
        </div>
     
        <div className="row mt-5">
          <div className="col-lg-6 col-md-6 col-sm-12">
           
              <p className="text-white">©@2021 DENSIK. All Rights Reserved</p>
              

          </div>
          <div className="col-md-6 text-right col-sm-12 text-white footer-icon">
          


          <a href="#"><AiFillFacebook /></a>
          <a href="#"><AiFillYoutube /></a>
          <a href="#"><AiFillInstagram /></a>
          <a href="#"><AiFillTwitterSquare /></a>
          <a href="#"><AiFillLinkedin /></a>

          </div>
        </div>
            {/* bottom row end */}
        </div>
    </footer>
        </>
    )
}
export default Contact;
