import React from 'react'

const BookShow = ({book}) => {
  return (
    <div>
        <br/>
        {book}
        <button>Edit</button>
        <button>Delete</button>
    </div>
  )
}

export default BookShow