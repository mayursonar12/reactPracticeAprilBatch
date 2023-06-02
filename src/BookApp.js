import React, { useState } from "react";
import BookCreate from "./BooksAppComponents/BookCreate";
import BookList from "./BooksAppComponents/BookList";

 // Normal JS code can be written here

var BookApp = () => {
    
    const [books, setBooks] = useState([]);

    // The child component <BookCreate/> is creating a new book
    // And my BookApp component should know the name of this new book after creation
    // So to get the value from Child component
    // We will pass a callBack function as prop

    function createBook(title) {
        console.log(title);
        // As soon as we crate a new book, we should re-render everything.
        // Because we want to see the new book in our book list
        // So to trigger this re-render, we should update the state.
        const updatedBooks = [...books, title];
        setBooks(updatedBooks);
    }

    // Normal JS code can be written here
    return (
        <>
        <BookCreate onCreate={createBook}/>
        <BookList bookList={books}/>
        </>
    );
}



export default BookApp;

