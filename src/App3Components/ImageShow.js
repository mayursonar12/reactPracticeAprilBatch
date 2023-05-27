import React from 'react'

const ImageShow = ({imageDetails}) => {
  return (
    <div>
      <img src={imageDetails.urls.regular} alt="image"></img>
      </div>
  )
}

export default ImageShow
