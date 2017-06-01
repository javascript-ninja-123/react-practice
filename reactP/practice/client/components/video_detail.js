import React from 'react';


const VideoDetail = (props) =>{
  if(!props.detail){
    return <div>Loading...</div>
  }
  const title = props.detail.snippet.title;
  const description = props.detail.snippet.description;
  const videoId = props.detail.id.videoId;
  const url = 'http://www.youtube.com/embed/' + videoId;
return(
  <div className="video-detail col-md-12">
    <div className='embed-responsive embed-responsive-16by9'>
      <iframe className="embed-responsive-item" src={url}></iframe>
    </div>
    <div className='details'>
      <div className='row'>
          <div className="col-md-12 text-left">
            <div>{title}</div>
            <div>{description}</div>
          </div>
      </div>
    </div>
  </div>
)
};

export default VideoDetail;
