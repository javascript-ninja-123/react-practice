import React from 'react';
import Bootstrap from 'bootstrap';
import ImageScore from './image_score';
import ImageTag from './image_tag';

const ImageDetail = (props) =>{

return (
    <div>
      <div className="row">
        <div className="col-md-12">
            <img  src={props.image.link}/>
            <h4>
            {props.image.title}
            </h4>
            <p>
            {props.image.description}
            </p>
            <p>
            view: {props.image.views}
            </p>

            <ImageScore ups={props.image.ups} downs={props.image.downs}/>
            <ImageTag tag={props.image.points}/>
        </div>
      </div>
    </div>
);
};

export default ImageDetail
