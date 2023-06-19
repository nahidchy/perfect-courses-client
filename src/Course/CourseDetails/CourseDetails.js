import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const details = useLoaderData();
    return (
        <div className='lg:w-2/3 mx-auto py-4'>
       
                    <div className="card w-full bg-base-100 rounded-none shadow-xl">
                        <figure><img src={details.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {details.title}
                            </h2>
                            <p>{details.description}</p>
                        </div>
                    </div>
    
        </div>
    );
};

export default CourseDetails;