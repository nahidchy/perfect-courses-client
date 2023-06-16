import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/pngtree-vector-programming-icon-png-image_757435.jpg'
const SideNav = () => {
    return (

        <div className=' w-80 h-full bg-[#1A0923] lg:my-5'>
          <div className='flex justify-start gap-3'>
            <div>
            <img className='w-16 h-14 rounded' src={logo} alt=''></img>
            </div>
            <div>
                <h3 className='text-orange-400 text-xl font-bold'>Perfect <br></br> <span className='ms-5'>Courses</span></h3>
            </div>
          </div>
            <div className='text-orange-400 flex flex-col justify-center lg:items-start items-center mt-10'>
            <p className='text-2xl semibold'><Link to='/'>Home</Link></p>
            <p className='text-2xl semibold mt-5'><Link to='/courses'>Courses</Link></p>
            <p className='text-2xl semibold mt-5'><Link to='/'>Blog</Link></p>
            <p className='text-2xl semibold mt-5'><Link to='/'>FAQ</Link></p>
  
            </div>
        </div>
    );
};

export default SideNav;