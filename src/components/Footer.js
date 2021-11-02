import React from 'react'
import { Link } from 'react-router-dom';
import {FaTwitter, FaFacebook, FaDiscord} from 'react-icons/fa';
const Footer=() =>{
    return (
      <>
       <section className="footer text-center">
        <p>© Copyright 2021 SkullVerse </p>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaDiscord /></a>

       </section>
      </>
    )
}
export default Footer;
