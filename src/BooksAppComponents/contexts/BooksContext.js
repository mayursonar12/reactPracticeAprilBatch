import { createContext, useState } from "react";

const BooksContext = createContext();

function CustomProviderByMayur({children}) {
    // Here you can put all the states and Logic of callback
    // The children that you receive here is BookApp Component

    const [books, setBooks] = useState([]);

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

    const editBook = () => {

    }

    var contextObjToShare = {
        books: books,
        createBook: createBook,
        deleteBookUsingContext: deleteBook,
        onEditClick: editBook,
    }

    return (
        <>
        <BooksContext.Provider value={contextObjToShare}>
            {children}
        </BooksContext.Provider>
        </>
    )
}

export {CustomProviderByMayur};
export default BooksContext;
