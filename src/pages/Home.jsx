import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>DineEase | Home</title>
      </Helmet>
      <Navbar></Navbar>

      <div className="w-11/12 mx-auto mt-5">
        <Banner></Banner>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
