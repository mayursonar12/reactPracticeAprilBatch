import React from 'react'
import ImageShow from './ImageShow'

const ImageList = ({images, noObjects}) => {

  console.log(images);
  console.log(noObjects);


  // This is an array of components.
  // If I get 10 mages from the API call, Then I will create 10 ImageShow components
  let renderedComponents = images.map((image)=>{
      return <ImageShow key={image.id} imageDetails={image}/>;
  })

  // How do we now create a list of ImageShow components?
  // Every imageShow component has a different image

  return (
    <div>
      {renderedComponents}
    </div>
  )
}

export default ImageList