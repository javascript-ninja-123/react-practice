import React from 'react';


const VideoListItem = (props) =>{
  const video = props.item;
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  const description = video.snippet.description;
  const onVideoSelect = props.onVideoSelect;
return(
    <li
      onClick = {() => onVideoSelect(video)}
      className= 'list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">
            <div className='row'>
              <div className="col-md-12 text-left">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
)
}
export default VideoListItem;
