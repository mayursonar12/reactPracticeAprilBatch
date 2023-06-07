import React from 'react'
import BookShow from './BookShow'

import { useContext } from 'react';
import BooksContext from './contexts/BooksContext';

const BookList = () => {

  const value = useContext(BooksContext);
  var bookList = value.books;
    // You bookList should create BookShow components as per the #books in list

    // To create LIST of Components
    // How do we do it?
    // We use for loop or map
    const bookShowList = [];
    for (let i = 0; i<bookList.length; i++) {
        bookShowList.push(<BookShow book={bookList[i]}/>);
    }

  return (
    <div>
        {bookShowList}
        
    </div>
  )
}

export default BookList