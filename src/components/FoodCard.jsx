import React from "react";

const FoodCard = ({ foods }) => {
    const truncatedDescription = foods.description.split(" ").slice(0, 25).join(" ");
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5">
        <figure>
          <img
            src={foods.foodImage}
            alt={foods.foodName}
            className="w-96 h-72"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{foods.foodName}</h2>
          <p className="font-semibold text-xl">Category: {foods.category}</p>
          <p className="font-semibold text-xl">Price: ${foods.price}</p>
          <p className="font-semibold text-xl">Quantity: {foods.quantity}</p>
          <p>{truncatedDescription}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-orange-500 hover:bg-orange-700 text-white">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
