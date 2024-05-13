import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const AllFoods = () => {
  const allFoods = useLoaderData();
  console.log(allFoods);
  return (
    <div className="min-h-[calc(100vh-668px)]">
      <Helmet>
        <title>DineEase | All Foods</title>
      </Helmet>
      <Navbar></Navbar>

      <div className="font-mulish w-11/12 mx-auto">
        <div
          className="hero bg-cover bg-center bg-no-repeat rounded-xl mt-5"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-white">All Foods</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllFoods;
