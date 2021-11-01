import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PlaceOrder = () => {
  const { id } = useParams();

  const [orders, setOrders] = useState({});
  useEffect(() => {
    fetch(`https://cryptic-plains-76285.herokuapp.com/places/${id}`)
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [])

  return (
    <div className="container text-center">
      {/* {const { _id, img, name, description, price } = props.package;} */}
      <h2>Place order {id}</h2>
      <div style={{ marginTop: 100 }}>
        <img src={orders.img} alt="" />
        <h3>Name: {orders.name}</h3>
        <p>description:{orders.description}</p>
        <h5>Price: {orders.price} </h5>

      </div>

    </div>
  );
};

export default PlaceOrder;
