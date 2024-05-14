import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const FoodDetails = () => {
    const food = useLoaderData();
    const {user} = useContext(AuthContext);
    const handleItem = e => {
      if(food?.quantity == 0)
        return toast.error("Item is not available");
    }
  return (
    <div>
      <Helmet>
        <title>{food.foodName} Details</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto mt-8">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={food.foodImage}
            alt={food.foodName}
            className=""
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title font-bold text-3xl">{food.foodName}</h2>
          <p className="mt-8 text-lg font-normal">Category: {food.category}</p>
          <p className="text-lg font-normal">Price: ${food.price}</p>
          <p className="text-lg font-normal">Quantity: {food.quantity}</p>
          <p className="text-lg font-normal">Add By: {food.admin.name}</p>
          <p className="text-lg font-normal">Origin: {food.foodOrigin}</p>
          <p className="mt-4 text-lg font-normal">{food.description}</p>
          <div className="card-actions justify-end">
            <Link 
            onClick={handleItem}
            to={`/foodPurchase/${food._id}`} className="btn bg-orange-500 text-white hover:bg-orange-700">Purchase</Link>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
};

export default FoodDetails;
