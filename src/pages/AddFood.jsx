import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const AddFood = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddItem = async e => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.food_name.value;
        const foodImage =  form.food_image.value;
        const quantity = form.quantity.value;
        const email = form.email.value;
        const category = form.category.value;
        const foodOrigin = form.food_origin.value;
        const price = form.price.value;
        const description = form.description.value;
        const foodData = {
            foodName,
            foodImage,
            quantity,
            email,
            category,
            foodOrigin,
            price,
            description,
            admin:{
                email,
                name:user?.displayName,
                photo: user?.photoURL
            },
        }
        try{
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}foods`, foodData);
            console.log(data);
            toast.success("Item Added successfully!")
            navigate('/allFoods');
        } catch (err) {
            console.log(err)
        }
    }
  return (
    <div>
        <Helmet>
            <title>DineEase | Add Item</title>
            </Helmet>
        <Navbar></Navbar>
      <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
        <section className="p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
          <h2 className="text-2xl font-bold text-gray-700 capitalize ">
            Add a Food Item
          </h2>

          <form onSubmit={handleAddItem}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 " htmlFor="food_name">
                  Food Name
                </label>
                <input
                  id="food_name"
                  name="food_name"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 " htmlFor="food_image">
                  Food Image
                </label>
                <input
                  id="food_image"
                  name="food_image"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 " htmlFor="quantity">
                  Quantity
                </label>
                <input
                  id="quantity"
                  name="quantity"
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
                  disabled
                  defaultValue={user?.email}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              
              {/* <div className="flex flex-col gap-2 ">
                <label className="text-gray-700">Deadline</label> */}
                {/* Date Picker Input Field */}
              {/* </div> */}

              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700 " htmlFor="category">
                  Food Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="border p-2 rounded-md"
                >
                  <option value="Web Development">Fast Food</option>
                  <option value="Graphics Design">Fruits</option>
                  <option value="Digital Marketing">Juice</option>
                </select>
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="food_origin">
                  Food Origin (Country)
                </label>
                <input
                  id="food_origin"
                  name="food_origin"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 " htmlFor="price">
                 Price
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
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
                id="description">
                </textarea>
            </div>
            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-orange-500 rounded-md hover:bg-orange-700 focus:outline-none focus:bg-orange-600">
                Add Item
              </button>
            </div> 
          </form>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddFood;
