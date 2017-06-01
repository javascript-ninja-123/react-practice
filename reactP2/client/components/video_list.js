import React from 'react';
import videoListItem from './video_list_item';



const VideoList =(props) =>{
    const VideoItem = props.video.map((video) =>{
      return <videoListItem video = {video}/>
    })
  return(
    <div className='col-md-4'>
      <ul className="list-group">
        {VideoItem}
      </ul>
    </div>
  )
}

export default VideoList;
