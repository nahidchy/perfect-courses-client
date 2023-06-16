import React from 'react';
import Banner from '../Assets/header.jpg';
import ReactIMG from '../Assets/react.jpg';
import Js from '../Assets/JS.jpg';
import Css from '../Assets/CSS.jpg';
import Html from '../Assets/HTML.jpg';
import fireBase from '../Assets/firebase.jpg';
import Mongo from '../Assets/MongoDb.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container w-full h-full p-5 '>
           <div className='w-full'>
           <div>
           <h3 className='lg:text-5xl text-3xl font-bold font-serif text-orange-400'>Expand your Knowledge</h3>
            <h5 className='text-white mb-5'>Over 5+ courses</h5>
            <img className='w-full lg:h-full h-56' src={Banner} alt=''/>
           </div>
           <div className='mt-10'>
            <h2 className='text-4xl font-medium font-serif text-orange-400 mb-4'>Active Courses</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-9 w-full '>
                <div>
                <img src={Html} className='rounded w-full' alt=''></img>
                </div>
                <div>
                <img src={Css} className='rounded w-full' alt=''></img>
                </div>
                <div>
                <img src={Js} className='rounded w-full' alt=''></img>
                </div>
                <div>
                <img src={ReactIMG} className='rounded w-full' alt=''></img>
                </div>
                <div>
                <img src={fireBase} className='rounded w-full' alt=''></img>
                </div>
                <div>
                <img src={Mongo} className='rounded w-full' alt=''></img>
                </div>
            </div>
            <div>
           <Link to='/courses'> <button className="p-5 bg-[#7E39A3] w-full mt-10 text-orange-400 text-2xl font-semibold">Go to start our courses</button></Link>
            </div>
           </div>
           </div>
        </div>
    );
};

export default Home;