import React from 'react'

const BookEdit = ({book}) => {

    function handleSaveClick() {
        
    }

    return (
        <>
        <input value={book}></input>
        <button onClick={handleSaveClick}>Save</button>
        </>
    )
}

export default BookEdit;
