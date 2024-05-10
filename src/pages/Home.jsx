import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto">
        <h2 className="">This is Home!</h2>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
