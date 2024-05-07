import React from 'react';
import SignUpBG from '../assets/signup-bg.jpg'
import Login from '../components/login';
import Signup from '../components/signup';
const welcomepage = () => {
    return (
        <div>
            <img
                src={SignUpBG}
                alt="Background "
                className="fixed top-0 left-0 w-screen h-screen object-cover z-0"
            />
            <div className='h-screen w-screen bg-purple-950 opacity-95 relative z-10 flex flex-col justify-center items-center'>
                <span className='text-white text-2xl font-mono font-bold'>WATCH</span>
                <span className='text-xs text-white mb-10'>Enjoy The Newest Movies</span>
                <button className=' px-14 py-2 rounded-xl  bg-purple-600 text-white'>Login</button>
                <div className=' text-white mt-2'>
                    <span className=' text-xs'>No Account? </span><a href='#' className='underline text-sm'>SignUp</a>
                </div>
                <div style={{ display: 'none' }}>
                    <Login />
                </div>
                <div style={{ display: 'none' }}>
                    <Signup/>
                </div>

            </div>

        </div>

    );
};

export default welcomepage;