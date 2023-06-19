import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    return (
       <div>
         <div className='lg:flex gap-5 items-center pb-10'>
         <div className='w-full lg:w-1/2'>
         <img className='rounded w-50 mb-4' src={course.img} alt=''></img>
         </div>
            <div className='w-full lg:w-1/2'>
                <h3 className='text-3xl text-orange-400 font-semibold'>{course.title}</h3>
                <h3 className='text-white'>{course.description.slice(0,400)}</h3>
                  <Link to={`/courses/${course.id}`}><button className='bg-indigo-500 px-3 py-2 rounded mt-3 text-white'>Start learn</button></Link>
                  <Link to={`/course/${course.id}`}><button className='bg-indigo-500 px-3 py-2 rounded mt-3 text-white ms-2'>Details</button></Link>
            </div>
        </div>
       </div>
    );
};

export default Course;