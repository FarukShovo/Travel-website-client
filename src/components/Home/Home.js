import React from "react";
import { Link } from "react-router-dom";
import Gallery from "../Gallery/Gallery";
import Packages from "../Packages/Packages";
import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://image.freepik.com/free-photo/woman-with-hat-sitting-chairs-beach-beautiful-tropical-beach-woman-relaxing-tropical-beach-koh-nangyuan-island_335224-1111.jpg")`
      }}
      className="home-bg"

    >
      <section className="home" id="home">
        <div className="content">
          <h3 className="text-dark">Travel the world!</h3>
          <p className="text-success fw-bold">
            No matter where you're going to start && where you're going to stop!
          </p>

        </div>
      </section>
      <Packages></Packages>
      <Services></Services>
      <Gallery></Gallery>
    </div >
  );
};

export default Home;
