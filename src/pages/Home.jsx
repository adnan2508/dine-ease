import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import OurLocation from "../components/OurLocation";
import OurService from "../components/OurService";
import AllFoods from "./AllFoods";
import TopFoods from "../components/TopFoods";

const Home = () => {
  const topFoods = useLoaderData();
  const [length, setLength] = useState(6);

  return (
    <div>
      <Helmet>
        <title>DineEase | Home</title>
      </Helmet>
      <Navbar></Navbar>

      <div className="w-11/12 mx-auto mt-5">
        <Banner></Banner>

        {/* Top foods section */}
        <h2 className="my-5 text-center font-mulish font-bold text-3xl">Top Foods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topFoods.slice(0, length).map((foods) => (
            <TopFoods key={foods._id} foods={foods}></TopFoods>
          ))}
        </div>

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
        <OurService />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
