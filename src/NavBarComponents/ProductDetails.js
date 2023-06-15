import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const parameterDetails = useParams();

  console.log(parameterDetails);

  // get all the product details that you have saved in context (based on the params)
  // search for your item
  // Display the details on this page

  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails