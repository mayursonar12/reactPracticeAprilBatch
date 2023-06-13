import React from 'react'
import { Outlet , Link} from 'react-router-dom'
import Navbar from './Navbar'


const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
     
    </div>
  )
}

export default HomePage
