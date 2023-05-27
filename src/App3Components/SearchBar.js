import React, { useState } from 'react'

const SearchBar = ({cb}) => {

  // Step 1: Create a state
    const [searchTerm, setSearchTerm] = useState("");

    function handleClick() {
      // Accessing the value from search box directly from DOM
       // let searchTerm = document.getElementById('inpBox').value;


       let searchQuery = searchTerm;
       console.log(searchQuery);

       // This callback is used to send info from child component to Parent component
        cb(searchTerm);
    }

    function handleInputChange(eventDetails) {
      //console.log("Something changed");
      //console.log(eventDetails);
      //console.log(eventDetails.target.value);
      setSearchTerm(eventDetails.target.value);
    }

  return (
    <div>
        <input value={searchTerm}  id='inpBox' onChange={handleInputChange}></input>
        <button onClick={handleClick}>Search</button>
    </div>
  )
}

export default SearchBar


