import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import OurLocation from "../components/OurLocation";
import OurService from "../components/OurService";

const Home = () => {
  const topFoods = useLoaderData();
  console.log(topFoods);

  return (
    <div>
      <Helmet>
        <title>DineEase | Home</title>
      </Helmet>
      <Navbar></Navbar>

      <div className="w-11/12 mx-auto mt-5">
        <Banner></Banner>

        {/* Top foods section */}
        

        <div className="flex justify-center items-center">
          <Link
            to="/allFoods"
            className="btn my-5 bg-orange-500 text-white font-mulish rounded-3xl px-8 hover:bg-orange-700"
          >
            See All
          </Link>
        </div>

        <div className="w-11/12 mx-auto my-5 font-mulish">
          <h2 className="text-3xl font-semibold text-center">Our Locations</h2>
          <OurLocation />
        </div>
        <OurService/>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
