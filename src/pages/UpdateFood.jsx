import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateFood = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const food = useLoaderData();
    console.log(food);

    const handleSubmit= async e => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.food_name.value;
        const category = form.category.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const updateData={
            foodName,
            category,
            price,
            photo,
            description,
            admin : {
                email: user?.email,
                name: user?.displayName,
                photo: user?.photoURL,
            },
        }
        try{
            const {data} = await axios.put(`${import.meta.env.VITE_API_URL}foods/${food._id}`, updateData)
            console.log(data);
            toast.success('Updated Successfully');
            navigate('/myAddedFood');
        } catch(err) {
            console.log(err);
            toast.error(err.message);
        }
    }

  return (
    <div>
        <Helmet><title>DineEase | Update Food</title></Helmet>
        <Navbar></Navbar>
      <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
        <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
          <h2 className="text-lg font-semibold text-gray-700 capitalize ">
            Update Food
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 " htmlFor="food_name">
                  Food Name
                </label>
                <input
                  id="food_name"
                  name="food_name"
                  defaultValue={food.foodName}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 " htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  disabled
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              {/* <div className="flex flex-col gap-2 ">
                <label className="text-gray-700">Deadline</label> */}

                {/* Date picker input field */}
              {/* </div> */}

              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700 " htmlFor="category">
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="border p-2 rounded-md"
                >
                  <option value="Fast Food">Fast Food</option>
                  <option value="Fruit">Fruit</option>
                  <option value="Juice">Juice</option>
                </select>
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="min_price">
                Price
                </label>
                <input
                  id="price"
                  name="price"
                  defaultValue={food.price}
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 " htmlFor="photo">
                  Photo
                </label>
                <input
                  id="photo"
                  name="photo"
                  defaultValue={food.foodImage}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label className="text-gray-700 " htmlFor="description">
                Description
              </label>
              <textarea
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                name="description"
                defaultValue={food.description}
                id="description"
                cols="30"
              ></textarea>
            </div>
            <div className="flex justify-end mt-6">
              <button onClick={() => handleSubmit()}
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-orange-500 rounded-md hover:bg-orange-700 focus:outline-none focus:bg-orange-500">
                Update
              </button>
            </div>
          </form>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default UpdateFood;
