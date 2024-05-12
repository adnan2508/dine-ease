import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>DineEase | Home</title>
      </Helmet>
      <Navbar></Navbar>

      <div className="w-11/12 mx-auto mt-5">
        <Banner></Banner>
        <div className="flex justify-center items-center">
        <Link to='/allFoods' className="btn my-5 bg-orange-500 text-white font-mulish rounded-3xl px-8 hover:bg-orange-700">See All</Link>
        </div>
        
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
