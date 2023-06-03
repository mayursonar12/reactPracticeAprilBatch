import React, { useState } from 'react'
import BookEdit from './BookEdit';

const BookShow = ({book , onDelete}) => {

    const [showEdit, setShowEdit] = useState(false);

    function handleDeleteClick() {
        onDelete(book);
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