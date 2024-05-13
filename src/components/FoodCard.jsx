import React from "react";

const FoodCard = ({ foods }) => {
  console.log(foods);
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5">
        <figure>
          <img
            src={foods.foodImage}
            alt={foods.foodName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{foods.foodName}</h2>
          <p>Category: {foods.category}</p>
          <p>{foods.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
