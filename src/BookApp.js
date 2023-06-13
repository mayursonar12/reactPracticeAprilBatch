import React, { useState } from "react";
import BookCreate from "./BooksAppComponents/BookCreate";
import BookList from "./BooksAppComponents/BookList";

// Normal JS code can be written here

var BookApp = () => {
    
    

    // The child component <BookCreate/> is creating a new book
    // And my BookApp component should know the name of this new book after creation
    // So to get the value from Child component
    // We will pass a callBack function as prop




    // Normal JS code can be written here
    return (
        <>
        
        
            <BookCreate />
            <BookList />
        </>
    );
}



export default BookApp;

