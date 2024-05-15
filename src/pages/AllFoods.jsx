import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import FoodCard from "../components/FoodCard";
import axios from "axios";

const AllFoods = () => {
  const allFoods = useLoaderData();
  const [search, setSearch] = useState('');
  useEffect(()=>{
    const getData = async () => {
      const {data} = await axios(
        `${import.meta.env.VITE_API_URL}allFoods?search=${search}`
      )
    }
    getData()
  }, [search])

  const handleSearch = e => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
  }
  console.log(search);
  return (
    <div className="min-h-[calc(100vh-668px)]">
      <Helmet>
        <title>DineEase | All Foods</title>
      </Helmet>
      <Navbar></Navbar>

      <div className="font-mulish w-11/12 mx-auto">
        <div
          className="hero bg-cover bg-center bg-no-repeat rounded-xl mt-5"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-white">All Foods</h1>
            </div>
          </div>
        </div>

        <form onSubmit={handleSearch}>
          <div className="w-96 mx-auto mt-8 flex justify-between p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Enter Food Title"
              aria-label="Enter Food Title"
            />

            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-orange-700 focus:bg-orange-500 focus:outline-none">
              Search
            </button>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
          {allFoods.map((foods) => (
            <FoodCard key={foods._id} foods={foods}></FoodCard>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllFoods;
