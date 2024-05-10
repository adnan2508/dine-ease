import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto">
        <h2 className="font-mulish">This is Home!</h2>
      </div>
    </div>
  );
};

export default Home;
