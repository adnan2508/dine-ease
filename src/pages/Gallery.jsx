import React from 'react';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';

const Gallery = () => {
    return (
        <div>
            <Helmet><title>DineEase | Gallery</title></Helmet>
            <Navbar></Navbar>
            
            <div className='w-11/12 mx-auto'>
            <h2>This is Gallery!</h2>
            </div>
            
            <Footer/>
        </div>
    );
};

export default Gallery;