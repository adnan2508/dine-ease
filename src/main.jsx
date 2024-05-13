import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import AllFoods from './pages/AllFoods.jsx';
import Gallery from './pages/Gallery.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { Toaster } from 'react-hot-toast';
import AddFood from './pages/AddFood.jsx';
import FoodDetails from './pages/FoodDetails.jsx';
import FoodPurchase from './pages/FoodPurchase.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch(`${import.meta.env.VITE_API_URL}foods`),
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },
  {
    path: "/allFoods",
    element: <AllFoods></AllFoods>,
    loader: () => fetch(`${import.meta.env.VITE_API_URL}foods`),
  },
  {
    path: "/food/:id",
    element: <FoodDetails></FoodDetails>,
    loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}food/${params.id}`),
  },
  {
    path: "/foodPurchase/:id",
    element: <FoodPurchase></FoodPurchase>,
    loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}food/${params.id}`),
  },
  {
    path: "/gallery",
    element: <Gallery></Gallery>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/addFood",
    element: <AddFood></AddFood>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <Toaster/>
    </AuthProvider>
  </React.StrictMode>,
)
