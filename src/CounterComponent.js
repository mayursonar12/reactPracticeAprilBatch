import React, { useState } from 'react';

function CounterComponent() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddButtonClick = () => {
    const numberToAdd = parseInt(inputValue);
    if (!isNaN(numberToAdd)) {
      setCounter(counter + numberToAdd);
      setInputValue('');
    }
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <br />
      <input type="number" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddButtonClick}>Add</button>
    </div>
  );
}

export default CounterComponent;
