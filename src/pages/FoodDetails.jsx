import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

const FoodDetails = () => {
  return (
    <div>
      <Helmet>
        <title>DineEase | </title>
      </Helmet>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto mt-8">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Food"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn bg-orange-500 text-white hover:bg-orange-700">Purchase</button>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
};

export default FoodDetails;
