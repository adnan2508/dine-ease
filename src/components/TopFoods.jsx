import React from "react";
import { Link } from "react-router-dom";

const TopFoods = ({ foods }) => {
  return (
    <div>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
        <img
          alt=""
          src={foods.foodImage}
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          
            <h3 className="text-lg font-medium text-gray-900">
              {foods.foodName}
            </h3>

            <h3 className="text-lg font-normal mt-4 text-gray-900">
              Category: {foods.category}
            </h3>

            <h3 className="text-lg font-normal mt-4 text-gray-900">
              Price: ${foods.price}
            </h3>

          <Link to={`/food/${foods._id}`}
            className="btn bg-orange-500 hover:bg-orange-700 group mt-4 inline-flex items-center gap-1 text-sm font-medium text-white"
          >
            Find out more
          </Link>
        </div>
      </article>
    </div>
  );
};

export default TopFoods;
