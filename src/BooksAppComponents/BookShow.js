import React, { useState } from 'react'
import BookEdit from './BookEdit';

import { useBookContext } from './customHooks/useBookContext';

const BookShow = ({book}) => {

  const booksContextObj  = useBookContext();
  console.log(booksContextObj);

    const [showEdit, setShowEdit] = useState(false);

    function handleDeleteClick() {
        //onDelete(book);
        booksContextObj.deleteBookUsingContext(book);
    }

    function handleEditClick() {
        setShowEdit(!showEdit);
    }

     let contentToDisplay = (book);
    if (showEdit) contentToDisplay = <BookEdit book={book}/>

  return (
    <div>
        <br/>
        {contentToDisplay}
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
    </div>
  )
}

export default BookShow