import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AllFoods = () => {
  return (
    <div className="min-h-[calc(100vh-668px)]">
      <Navbar></Navbar>

      <div className="font-mulish">
        <h2>This is All foods!</h2>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllFoods;
