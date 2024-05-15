import React from "react";

const OurLocation = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <div href="" className="block rounded-lg p-4 shadow-sm shadow-indigo-100 mr-5">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-56 w-full rounded-md object-cover"
        />

        <div className="mt-2">
          <div className="flex justify-center items-center my-5">
            <dd className="font-medium">London, UK</dd>
          </div>
        </div>
      </div>

      <div href="" className="block rounded-lg p-4 shadow-sm shadow-indigo-100 mr-5">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-56 w-full rounded-md object-cover"
        />

        <div className="mt-2">
          <div className="flex justify-center items-center my-5">
            <dd className="font-medium">Paris, France</dd>
          </div>
        </div>
      </div>
      <div href="" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-56 w-full rounded-md object-cover"
        />

        <div className="mt-2">
          <div className="flex justify-center items-center my-5">
            <dd className="font-medium">Rome, Italy</dd>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
