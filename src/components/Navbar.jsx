import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar bg-orange-500 text-white font-mulish">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-500 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/allFoods">All Foods</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">DineEase</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allFoods">All Foods</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </div>
        {!user && (
          <div className="navbar-end">
            <Link to='/login' className="btn px-8 bg-[#FBBF77] border-none text-white">
              Login
            </Link>
            <Link to='/register' className="btn px-8 ml-4 bg-[#B7410e] border-none text-white">
              Register
            </Link>
          </div>
        )}

        {user && (
          <div className="navbar-end">
            
            <div className="dropdown dropdown-end mr-5">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div title={user?.displayName} className="w-16 rounded-full">
                  <img
                  referrerPolicy="no-referrer"
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm bg-orange-500 dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
              >
                <li>
                  <Link to="/myAddedFood">
                  My added food items
                  </Link>
                </li>
                <li>
                  <Link to="/addFood">Add a food item</Link>
                </li>
                <li>
                  <Link to="/myOrderedFood">My ordered food items</Link>
                </li>
              </ul>
            </div>

            <a
            onClick={logOut} 
            className="btn px-8 bg-[#B7410e] border-none text-white">
              Logout
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
