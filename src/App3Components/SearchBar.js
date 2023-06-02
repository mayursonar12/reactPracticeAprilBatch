import React, { useState } from 'react'

const SearchBar = ({cb}) => {

  // Step 1: Create a state
    const [searchTerm, setSearchTerm] = useState("");

    function handleClick(evt) {
      // Accessing the value from search box directly from DOM
       // let searchTerm = document.getElementById('inpBox').value;

       // The default behaviour of 'Enter' press is to REFRESH the complete webpage
       // This will lead to complete re-rendering of page
       // hence everything will be blank.
       // To prevent that, we use the following line
       evt.preventDefault();

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
        {searchTerm}
      <form onSubmit={handleClick}>
        <input value={searchTerm}  id='inpBox' onChange={handleInputChange}></input>
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchBar


