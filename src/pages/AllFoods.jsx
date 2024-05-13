import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router-dom";

const AllFoods = () => {
  const allFoods = useLoaderData();
  console.log(allFoods);
  return (
    <div className="min-h-[calc(100vh-668px)]">
      <Navbar></Navbar>

      <div className="font-mulish w-11/12 mx-auto">
        <h2>This is All foods!</h2>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AllFoods;
