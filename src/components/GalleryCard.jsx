import React from "react";

const GalleryCard = ({gallery}) => {
  return (
    <div>
      <a className="group relative block bg-black">
        <img
          alt=""
          src={gallery.photo}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
            {gallery.foodName}
          </p>

          <p className="text-xl font-bold text-white sm:text-2xl">{gallery.name}</p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                {gallery.feedback}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default GalleryCard;
