import React from 'react'
import {FaTwitter, FaFacebook, FaGoogle} from 'react-icons/fa';
const Teammember=(props) =>{
    return (
      <>
           <div className="col-md-6 team-member">
        <img className="img-fluid rounded" src={props.image}/>
        <h1>{props.name}</h1>
      </div>
      </>
    )
}
export default Teammember;
