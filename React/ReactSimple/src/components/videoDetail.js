import React from 'react';

const videoDetail = ({video}}) =>{
  const videoId = video.id.videId;
  
  return(
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item'></iframe>
    </div>
    <div className='details'>
      <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>
    </div>
  )
};

export default videoDetail;
