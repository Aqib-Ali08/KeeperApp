import React from 'react';
import Favourites from '../assets/icons/favourites';
const card = () => {
    return (
        <a href='#'>
        <div className='mt-4 max-w-fit'>
            <div className=' w-64 rounded-3xl border-t border-l border-r border-white aspect-square bg-cover bg-center' style={{ backgroundImage: 'url(https://www.justwatch.com/images/backdrop/306622021/s1440/oppenheimer)' }}>
            <button className='bg-white rounded-md h-7 w-7 flex items-center justify-center relative top-6 left-52'><Favourites/></button>
                <div className='flex flex-col bg-white  opacity-90 relative top-48 py-3 pl-5 rounded-b-3xl'>
                    <span className='text-base mb-1 font-bold text-black'>Oppenheimer</span>
                    <span className='text-xs '>2023 | Biopic</span>
                </div>
            </div>
        </div>
        </a>
    );
};

export default card;

{/* <img className="" src='https://www.justwatch.com/images/backdrop/306622021/s1440/oppenheimer'></img> */ }