import React, { useReducer, useState } from 'react'

const CounterAppForReducer = () => {
    // Stste variables
    // const [count, setCount] = useState(0);
    // const [inputValue, setInputValue] = useState('');

    // Here we start using useReducer hook

    function reducer(state, action) {
        console.log("Reducer function called.."); 
        if (action.type1 === 'increment'){
            return {
                ...state,
                count: state.count+1
            }
        }  

        if (action.type1 === 'decrement'){
            return {
                ...state,
                count: state.count-1
            }
        }  
    }

    const[state, dispatch] = useReducer(reducer, {
        count: 0,
        inputValue: 0
    })

    
    console.log(state);


    // Button callbacks
    const incrementCounter = () => {
        //setCount(count+1);
        dispatch({
            type1: 'increment'
        })
    }

    const decrementCounter = () => {
        // setCount(count-1);
        dispatch({
            type1: 'decrement'
        })
    }

    // Input box callback
    const handleInputChange = (eventDetails) =>{
        // setInputValue(eventDetails.target.value);
        dispatch();
    }

    // Add button callback
    const handleAddClick = () =>{
        // Since we need only integers
        // const inputNumToAdd = parseInt(inputValue);

        // if (!isNaN(inputNumToAdd)) {
        //     // setCount(count+inputNumToAdd);
        //     // setInputValue('');
        // }

    }
  return (
    
    <>
        <h1>Counter: {state.count}</h1>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <br/>
        <input type='number' value={state.inputValue} onChange={handleInputChange}/>
        <button onClick={handleAddClick}>Add</button>
    </>
    
  )
}

export default CounterAppForReducer