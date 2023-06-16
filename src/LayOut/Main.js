import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';
import { FaBars } from "react-icons/fa";
const Main = () => {
    return (

<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content mx-auto">
  <div className='flex justify-end p-2'>
  <label htmlFor="my-drawer-2" className="btn bg-black drawer-button text-white lg:hidden">
  <FaBars className='w-6 h-6'/>
  </label>
  </div>
  <Outlet></Outlet>
   
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <SideNav></SideNav>
  
  </div>
</div>







        
     
    );
};

export default Main;