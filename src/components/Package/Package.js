import React from "react";
import { Link } from "react-router-dom";

import "./Package.css";

const Package = (props) => {
  const { _id, img, name, description, price } = props.package;
  const { handleBookNowButton } = props;

  return (
    <div className="col service-card">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />

        <div className="card-body">
          <h3 className="text-center">{name}</h3>
          <h5>Description:{description}</h5>
          <h5>Price:$ {price}</h5>

          <button onClick={() => handleBookNowButton(_id)} className="btn btn-warning p-3">Book now</button>


        </div>
      </div>
    </div>
  );
};

export default Package;
