import React, { useState } from "react";
import BookCreate from "./BooksAppComponents/BookCreate";
import BookList from "./BooksAppComponents/BookList";

import BooksContext from "./BooksAppComponents/contexts/BooksContext";
import { userContext } from "./BooksAppComponents/contexts/BooksContext";

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

    // Here we will now have a DeleteBook Callback function
    const deleteBook = (bookTitleToDelete) => {
        // This function will delete a book from our books list.
        // Delete logic
        const updatedBooks1 = books.filter((book)=>{
            return book !== bookTitleToDelete;
        })
        setBooks(updatedBooks1);
    }

    var contextObjToShare = {
        deleteBookUsingContext: deleteBook
    }

    // Normal JS code can be written here
    return (
        <>
        <BooksContext.Provider value={contextObjToShare}>
            <userContext.Provider value={'userDetails'}>

                <BookCreate onCreate={createBook}/>
                
                <BookList bookList={books}/>
            </userContext.Provider>
          
        </BooksContext.Provider>
        </>
    );
}



export default BookApp;

