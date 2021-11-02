import React from 'react'

const Card=(props) =>{
    return (
      <>
     <div className="col-md-4">
  <div className="card custom-card " >
        <img className="card-img-top" src={props.img} alt="Card image cap" />
        {/* <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}

</p>
        
        </div> */}
      </div>

  </div>
      </>
    )
}
export default Card;
