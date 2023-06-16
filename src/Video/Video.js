import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactPlayer from 'react-player';
const Video = () => {
    const course=useLoaderData();
    const videos=course.videos;
    return (
        <div className='flex flex-col'>
            {
                videos.map((video,id)=><div key={id} className='mb-10'>
                  <ReactPlayer url={video.url} controls={true}>

                  </ReactPlayer>
                </div>)
            }
        </div>
    );
};

export default Video;
