import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const val = useParams();
    console.log(val);

  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails