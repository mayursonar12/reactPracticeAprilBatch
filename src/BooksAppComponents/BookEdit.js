import React from 'react'

import { useBookContext } from './customHooks/useBookContext';

const BookEdit = ({book}) => {

    const val = useBookContext();
    console.log(val);

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
