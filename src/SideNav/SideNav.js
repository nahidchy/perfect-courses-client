import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/pngtree-vector-programming-icon-png-image_757435.jpg';
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from '../AuthProvider/AuthProvider';
const SideNav = () => {
  const {user,LogOut}=useContext(AuthContext);
  const handleLogOut=()=>{
     LogOut()
     .then(()=>{})
     .catch(error=>console.error(error))
  }
    return (

        <div className=' w-80 h-full bg-[#1A0923] '>
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
            <p className='text-2xl semibold mt-5'><Link to='/blog'>Blog</Link></p>
            <p className='text-2xl semibold mt-5'><Link to='/faq'>FAQ</Link></p>
            <p className='text-2xl semibold mt-5'><Link to='/register'>Register</Link></p>
            <p className='text-2xl semibold mt-5'><Link to='/login'>Login</Link></p>
           <div className='flex flex-col gap-6 justify-start items-start mt-5'>
           {
             user?.displayName?<><p className='text-xl semibold mt-5 text-white'>{user?.displayName}</p>
             </> 
             :<FaUserAlt className='w-6 h-6'></FaUserAlt>
            }
            {
              user?.photoURL?<img className='rounded-full' src={user?.photoURL} alt=''/>:<>No Image</>
            }
            {
           user?<button onClick={handleLogOut}>Logout</button>:<></>
            }

           </div>
            </div>
        </div>
    );
};

export default SideNav;