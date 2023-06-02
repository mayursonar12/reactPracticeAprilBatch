import React, {useState} from 'react'

const BookCreate = ({onCreate}) => {

  const [bookTitle, setBookTitle] = useState('');

  function handleTitleChange(eventDetails) {
    //eventDetails.target.value // This will have your new enetered value in input box
    // This value, we will update in our state
        setBookTitle(eventDetails.target.value);
  }

  function handleClick() {
    onCreate(bookTitle);
  }

  return (
    <div>        
        <input value={bookTitle} placeholder='Enter Book Title' onChange={handleTitleChange}></input>
        <button onClick={handleClick}>Add Book to List</button>
    </div>
  )
}

export default BookCreate;

