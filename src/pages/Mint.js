import React,{useState} from 'react'
import {Navbar,Nav,Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaTwitter, FaFacebook, FaGoogle} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import Card from '../components/Card';
import Accordion from 'react-bootstrap/Accordion'
import Teammember from '../components/Teammember';
const Mint=() =>{

    return (
        <>
        <section className="container mt-40 text-center">
        <p class="title main-title">WE WILL SEND 1 LUCKY SPACE BUM TO SPACE. FOR REAL.</p>
        <div className="mint-text-section">
            <h3>Space Bums is <span>SOLD OUT!</span></h3>
            <h3>Follow us on <a href="#">Discord</a> and <a href="#">Twitter</a>.</h3>
            <p className="text-white">Connect to view your bums</p>
            <a className="blue-button  space-bums-button" href="#">CONNECT WALLET</a>
        </div>
        <div className="mint-marketplace-container">
    <div class="title">Missed the mint but still want to join the community?</div>
    <p>It's not too late! Anyone that is interested and wants to participate in all future events, giveaways, and
        tournaments can by simply holding a Space Bums NFT. You can buy a Space Bum on a secondary marketplace such as
        Solanart, FTX, or MagicEden.</p>
</div>
<div className="mt-40">
    {/* GOAL  start */}
<div className="row">
<div className="col-md-5 goal-explainer">
        <p className="title">GOAL OF THE
          SPACE MISSION</p>
        <div>
          <div>
            <p style={{fontWeight: 'bold', marginBottom: 0}} className="goal-description">I) Be the greatest community in the
              Galaxy</p>
            <p className="goal-description">We will let our community decide which planets to visit next, what types of air
              drops you want, and most importantly, a vote on who will represent Space Bums in a space mission.</p>
          </div>
          <div>
            <p style={{fontWeight: 'bold', marginBottom: 0}} className="goal-description">II) To send someone to space</p>
            <p className="goal-description">We will send 1 lucky community member to space once we have sold out from the
              mint. We need the community to vote on which deserving member will have the opportunity to explore the
              stars as a Space Bum.</p>
          </div>
          <div>
            <p style={{fontWeight: 'bold', marginBottom: 0}} className="goal-description">III) Explore new planets and ecosystems
              through partnerships and development of the Space Bums galaxy</p>
            <p className="goal-description">We will keep building out our galaxy as we explore new frontiers and intend on
              groundbreaking collaborations with other NFT projects and Web3 developers.</p>
          </div>
        </div>
      </div>


      <div className="col-md-5 goal-explainer">
        <p className="title">HOW WILL WE SEND
          SOMEONE TO SPACE?</p>
        <div>
          <div>
            <p className="goal-description">Once we complete our sale of Space Bums, we will open our submission process for
              applications to be reviewed and potentially selected as a short list of Space Bums NFT holders to vote
              on who should go to space.</p>
          </div>
          <div>
            <p className="goal-description">We will reserve the equivalent of one ticket to space via Virgin Galactic
              ($500,000) from the sale of the Space Bums NFTs.</p>
          </div>
          <div>
            <p className="goal-description">Each NFT holder will be assigned one vote.</p>
          </div>
        </div>
      </div>
</div>
{/* GOAL  end */}
</div>

<div className="intro-container text-center">

<img src="images/rocket.gif" class="rocket-gif"/>

</div>
        </section>
        </>
    )
}
export default Mint;
