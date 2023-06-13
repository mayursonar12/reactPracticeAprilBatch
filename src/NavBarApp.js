import React from 'react'
import './NavBarApp.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './NavBarComponents/HomePage';
import ContactUs from './NavBarComponents/ContactUs';
import AboutUs from './NavBarComponents/AboutUs';
import ErrorPage from './NavBarComponents/ErrorPage';
import ProductDetails from './NavBarComponents/ProductDetails';

const NavBarApp = () => {
  return (
    <>
    <BrowserRouter>
       
        <Routes>
            <Route path="/" element={<HomePage/>} >
              <Route path="contact" element={<ContactUs/>} />
              <Route path="about" element={<AboutUs/>} />
              <Route path="product/:id" element={<ProductDetails/>} />
              <Route path="*" element={<ErrorPage/>} />
            </Route>
          
        </Routes>

    </BrowserRouter>
    </>

  )
}

export default NavBarApp
