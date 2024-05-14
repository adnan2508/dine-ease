import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const MyOrderedFood = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}purchase?email=${user?.email}`
    );
    setOrders(data);
  };
  console.log(orders);

  const handleDelete = async id => {
    try{
        const {data} = await axios.delete(`http://localhost:5000/purchase/${id}`)
        console.log(data);
        toast.success('Deleted Item')
        getData()
    } catch(err) {
        console.log(err.message)
        toast.message(err.message)
    }
  }

  return (
    <div>
      <Navbar />
      <div className="w-11/12 mx-auto">
        <section className="container px-4 mx-auto pt-12">
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 ">My Purchase</h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
              {orders?.length} Orders
            </span>
          </div>

          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>Title</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <span>Date</span>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Price</span>
                          </button>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          Quantity
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          Added By
                        </th>

                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200 ">
                      {orders?.map((order) => (
                        <tr>
                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {order.foodName}
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {order.date}
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            ${order.price}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {order.quantity}
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              <p className="px-3 py-1 rounded-full text-blue-500 bg-blue-100/60 text-xs">
                                {order.name}
                              </p>
                            </div>
                          </td>

                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <button 
                            onClick={()=>handleDelete(order._id)}
                              title="Mark Complete"
                              className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none disabled:cursor-not-allowed" >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MyOrderedFood;
