import React from 'react'

const ImageShow = ({imageDetails}) => {
  console.log(imageDetails);
  return (
    <div>
      {/* {imageDetails.id} */}
      <img src={imageDetails.urls.small} alt="image"></img>
      {/* ImageShow commponent */}
      </div>
  )
}

export default ImageShow
