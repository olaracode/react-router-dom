import React from "react";
import Jumbotron from "../component/home/Jumbotron.jsx";
import Card from "../component/Card.jsx";

const Home = () => {
  return (
    <>
      <Jumbotron />
      <div className="d-flex justify-content-md-between flex-wrap justify-content-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Home;
