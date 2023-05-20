import React from 'react'


const RestaurantCard = ({title, description, imageUrl}) => {

   // console.log(props);
   // const {title, description, imageUrl} = props;

  return (
    <div className='restaurantCardDisplay'>
        <img className='restImg' alt="imageTag" src={imageUrl}/>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default RestaurantCard
