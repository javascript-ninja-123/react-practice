//create our image list component

//import React
import React from 'react';
import ImageDetail from './image_detail';
import Bootstrap from 'bootstrap';


//create our component
const ImageList = (props) => {
  const validImages = props.images.filter(function(image){
    return !image.is_album;
  }).map(function(image){
    return <ImageDetail key={image.title} image={image}/>
  })

  return(
      <div>
        <h1 className="text-center">Image Directory</h1>
        {validImages}
      </div>
  );
}

//Export our component
export default ImageList;
