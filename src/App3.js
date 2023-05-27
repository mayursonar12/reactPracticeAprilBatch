import React, { useState } from "react";
import './App.css'
import ImageList from "./App3Components/ImageList";
import SearchBar from "./App3Components/SearchBar";
import searchImages from "./api";

 // Normal JS code can be written here

 // If we want the component to re-render itself based on change in some variable (in this case: 'count').
 // Then we need to make that variable a 'state' and then update that state through function.
 // This will help React to understand that you would like to re-render the component.

var App3 = () => {

    const [imageList, setImages] = useState([]);
    const [numberOfImages, setnumberOfImages] = useState(0);

    async function callMe (searchTerm){
        console.log("Call me function is called....")
        console.log("Query param is :"+ searchTerm);
        const response = await searchImages(searchTerm);
        //console.log(response.data.results);

        // This call will take care of re-rendering this App3 component.
        // And the updated imageList will be sent to ImageList component
        setImages(response.data.results);

        setnumberOfImages(response.data.results.length);

    }

    // Next steps: to call the fetch function and pass it the searchTerm
    // It should return us some imag list
    // Pass this imageList to ImageList component
    
    //var images =[];

    return (
        <>
            <SearchBar cb={callMe}/>
            <ImageList images={imageList} noObjects={numberOfImages}/>
        </>
    )
}

//export default App3;
export {App3}

