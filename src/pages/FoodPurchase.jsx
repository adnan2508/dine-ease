import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const FoodPurchase = () => {
    const food = useLoaderData();
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
//   const timeElapsed = Date.now();
//   const today = new Date(timeElapsed);
  
  const handlePurchase = async e => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.food_name.value;
    const price = parseFloat(form.price.value);
    const quantity = parseFloat(form.quantity.value);
    if(quantity > food.quantity || quantity==0) return toast.error('Item not available')
    const name = form.name.value;
    const email = form.email.value;
    const date = startDate;
    const status = 'pending' 
    
    const purchaseData = {
        foodName, 
        price, 
        quantity, 
        name, 
        email, 
        date, 
        status
    }
    try{
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}purchase`, purchaseData)
        console.log(data);
        toast.success('Purchase complete');
    } catch(err) {
        console.log(err);
    }
  }


  return (
    <div>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto my-8 font-mulish">
        <section className="p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
          <h2 className="text-2xl font-bold text-gray-700 capitalize ">
            Purchase Food
          </h2>

          <form onSubmit={handlePurchase}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 " htmlFor="food_name">
                  Food Name
                </label>
                <input
                  id="food_name"
                  type="text"
                  name="food_name"
                  defaultValue={food.foodName}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="price">
                  Price
                </label>
                <input
                  id="price"
                  type="text"
                  name="price"
                  defaultValue={food.price}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="quantity">
                  Quantity
                </label>
                <input
                  id="quantity"
                  type="text"
                  name="quantity"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 " htmlFor="name">
                  Buyer Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  disabled
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="emailAddress">
                  Buyer Email
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  disabled
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              {/* <div>
                <label className="text-gray-700 " htmlFor="comment">
                  Comment
                </label>
                <input
                  id="comment"
                  name="comment"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div> */}
              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700">Buying Date</label>
                {/* {today.toDateString()} */}

                {/* <input
                  id="date"
                  name="date"
                  type="text"
                //   defaultValue={today.toLocaleDateString()}
                //   className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                /> */}
                {/* Date Picker Input Field */}
                <DatePicker className="border-2 p-2 rounded-md"
                selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-orange-700 focus:outline-none focus:bg-orange-600"
              >
                Purchase
              </button>
            </div>
          </form>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default FoodPurchase;
