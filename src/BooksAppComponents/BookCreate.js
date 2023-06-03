import React, {useState} from 'react'

const BookCreate = ({onCreate}) => {

  const [bookTitle, setBookTitle] = useState('');

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
      onCreate(bookTitle);
      setBookTitle('');
    }
  }

  return (
    <div>        
        <input value={bookTitle} placeholder='Enter Book Title' onChange={handleTitleChange}></input>
        <button onClick={handleClick}>Add Book to List</button>
    </div>
  )
}

export default BookCreate;

