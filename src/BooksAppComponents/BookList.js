import React from 'react'
import BookShow from './BookShow'

// useBookContext is a custom hook
import { useBookContext } from './customHooks/useBookContext';

const BookList = () => {

  const value = useBookContext();
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