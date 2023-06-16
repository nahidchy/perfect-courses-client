import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import CoursesNav from '../CoursesNav/CoursesNav';
const Courses = () => {
    const prevCourses = useLoaderData();
    const [courses, setCourses] = useState(prevCourses.courses)

    return (
        <div>
            
             <CoursesNav setCourses={setCourses}></CoursesNav>
         <div className='px-4'>
         {
               courses.map(course=><Course key={course.id} course={course}></Course>)
            }
         </div>
        </div>
    );
};

export default Courses;