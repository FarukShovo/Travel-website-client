import React from "react";
import "./Packages.css";
import { useEffect, useState } from "react";
import Package from "../Package/Package";
import { useHistory } from "react-router";
const Packages = () => {
  const [packages, setPackages] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("https://cryptic-plains-76285.herokuapp.com/places")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  const handleBookNowButton = id => {
    history.push(`/placeorder/${id}`);
    console.log(id);
  }

  return (
    <div style={{ marginTop: 90 }}>
      <h2 className="text-center bg-primary p-3">Packages</h2>
      <div className="row row-cols-md-3 g-3">
        {packages.map((p) => (
          <Package key={p._id}
            package={p}
            handleBookNowButton={handleBookNowButton}
          ></Package>
        ))}
      </div>
    </div>
  );
};

export default Packages;
