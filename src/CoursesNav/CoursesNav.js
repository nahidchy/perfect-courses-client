import { findAllByAltText } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CoursesNav = ({setCourses}) => {
 
    const [data , setdata] = useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/courses")
        .then(res=>res.json())
        .then(data=>{
            setdata(data.courses)})
    },[])

    const handleSearch = (e)=>{
        if(e.target.innerText === "6 weeks"){
        const coursesData = data.filter(d=>d.duration === e.target.innerText);
        return  setCourses(coursesData)
     }
        if(e.target.innerText === "4 week Courses"){
        const coursesData = data.filter(d=>d.duration === "4 weeks");
        return  setCourses(coursesData)
     }
        if(e.target.innerText === "All Courses"){
        return  setCourses(data)
     }
    }
    return (
        <div className='text-orange-400 flex justify-center items-center gap-5 mb-10 mt-3 text-xl'>
            <button onClick={(e)=>handleSearch(e)} className='border-2 border-indigo-500 rounded-lg p-2'  ><Link to="/courses">All Courses</Link></button>
            <button onClick={(e)=>handleSearch(e)} className='border-2 border-indigo-500 rounded-lg p-2' >6 weeks</button>
            <button onClick={(e)=>handleSearch(e)} className='border-2 border-indigo-500 rounded-lg p-2'>4 week Courses</button>
        </div>
    );
};

export default CoursesNav;