import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <navBar>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                   <Link to="contact">Contact us</Link> 
                </li>
                <li>
                    <Link to="about">About us</Link> 
                </li>
                <li>
                    <Link to="product/nike-trouser-92398">Nike product</Link> 
                </li>
            </ul>  
    </navBar>
  )
}

export default Navbar