import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { key } from "localforage";
import GalleryCard from "../components/GalleryCard";
import toast from "react-hot-toast";

const Gallery = () => {
    const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const galleries = useLoaderData();
//   console.log(galleries);

  const handleSave = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const feedback = form.feedback.value;
    const foodName = form.foodName.value;
    const photo = form.photo.value;
    const saveData = {
      name,
      feedback,
      foodName,
      photo,
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}gallery`,
        saveData
      );
      console.log(data);
      toast.success("Added successfully!");
      navigate("/gallery");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Helmet>
        <title>DineEase | Gallery</title>
      </Helmet>
      <Navbar></Navbar>

      <div className="w-11/12 mx-auto">
        <div
          className="hero bg-cover bg-center bg-no-repeat rounded-xl mt-5"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-white">Gallery</h1>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center my-5">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn bg-orange-500 hover:bg-orange-700 active:bg-orange-500 text-white px-8"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Add
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <form onSubmit={handleSave}>
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  placeholder="Name"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label">
                  <span className="label-text">Feedback</span>
                </div>
                <input
                  type="text"
                  name="feedback"
                  placeholder="feedback"
                  className="input input-bordered input-lg w-full max-w-xs"
                />
                <div className="label">
                  <span className="label-text">Food Name</span>
                </div>
                <input
                  type="text"
                  name="foodName"
                  placeholder="Food Name"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label">
                  <span className="label-text">Photo</span>
                </div>
                <input
                  type="text"
                  name="photo"
                  placeholder="Image URL"
                  className="input input-bordered w-full max-w-xs"
                />

                <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-orange-500 text-white px-8">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </dialog>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            galleries.map(gallery => <GalleryCard key={gallery._id} gallery={gallery}></GalleryCard>)
        }
        </div>

        
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
