import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      {/* <section className="relative bg-[url(https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat rounded-xl">
        <div className="absolute inset-0 bg-white/75 from-white/95 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold font-mulish sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-orange-500">
                {" "}
                Forever Home.{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link to='/allFoods'
                className="block w-full rounded bg-orange-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto" >
                Explore Items
              </Link>
            </div>
          </div>
        </div>
      </section> */}

<div className="hero h-96 lg:h-[600px] bg-cover bg-center bg-no-repeat rounded-3xl" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to DineEase</h1>
      <p className="mb-5">Welcome to DineEase. This is where foods get served easily for you and your companion. Our expert chefs are always at your service and making sure you're having quality food.</p>
      <Link to='/allFoods'>
      <button className="btn bg-orange-500 hover:bg-orange-700 border-none text-white">Explore Items</button>
      </Link>
    </div>
  </div>
</div>

    </div>
  );
};

export default Banner;
