import React, {useState} from 'react'
import { useBookContext } from './customHooks/useBookContext';

const BookCreate = () => {



  const [bookTitle, setBookTitle] = useState('');

  const value = useBookContext();

  function handleTitleChange(eventDetails) {
    //eventDetails.target.value // This will have your new enetered value in input box
    // This value, we will update in our state
        setBookTitle(eventDetails.target.value);
  }

  // ["HP1", "HP2"]
  // [
  //   {
  //     'id': 1,
  //     'title': "HP1"
  //   },
  //   {
  //     'id': 2,
  //     'title': "HP2"
  //   },
  //   {
  //     'id': 3,
  //     'title': "HP3"
  //   },
  // ]

  function handleClick() {
    if (bookTitle !== "") {
      //onCreate(bookTitle);
      value.createBook(bookTitle);
      setBookTitle('');
    }
  }

  return (
    <div className='book-create'>        
        <input className="input" value={bookTitle} placeholder='Enter Book Title' onChange={handleTitleChange}></input>
        <button className='button' onClick={handleClick}>Add Book to List</button>
    </div>
  )
}

export default BookCreate;

