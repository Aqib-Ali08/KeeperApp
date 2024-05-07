import React from 'react';
import './components.css'
import Test from '../assets/carousel-img.jpg'
import Navbar from './navbar';
const carousel = () => {
  return (
    <div className='carousel-img min-h-fit pl-9 pr-9 mb-3'>
      <Navbar/>
      <div className='text-white mt-52 mb-6'>
      <span className='text-4xl font-bold'>Insider</span><br/>
      <span className='text-xs'>2022 | Comedy Horror | Season 1</span>
      </div>
      <button type='button' className='bg-purple-800 py-2 px-4 text-xs rounded-lg text-white mb-10'>Watch Now</button>
    </div>
  );
};

export default carousel;