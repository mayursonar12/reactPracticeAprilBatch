import React from "react";
import RestaurantCard from "./RestaurantCard";
import SampleComponent1 from "./SampleComponent1";
import AlexaImage from './images/alexa.jpg'
import './App.css'

 // Normal JS code can be written here

var App = () => {
    
    // Normal JS code can be written here
    return (
        <div className="cardDisplay">     
        {/* RestaurantCard is a component which can be reused. To have each unique card
        we can pass props to every card       */}
            <RestaurantCard description="KFC description" title="KFC" imageUrl="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT89.jpg?ver=29.13"/>
            <RestaurantCard title="McDonalds" description="McDonalds description" imageUrl="https://www.shutterstock.com/image-photo/ayutthayathailand-march-7-2018-view-260nw-1181606473.jpg" />
            <RestaurantCard title="SubWay" description="SubWay description" imageUrl="https://i.pinimg.com/originals/4b/eb/2a/4beb2a37a5810f9eacc37e3c6234889c.png" />
            
        </div>
    );
}



export default App;

