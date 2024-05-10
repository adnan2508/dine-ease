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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },
  {
    path: "/allFoods",
    element: <AllFoods></AllFoods>,
  },
  {
    path: "/gallery",
    element: <Gallery></Gallery>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
