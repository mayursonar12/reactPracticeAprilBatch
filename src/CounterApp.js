import React, { useEffect, useState } from 'react'

const CounterApp = () => {

    // State
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count+1);
    }

    useEffect(()=>{console.log("Call this only once")},[])
    
    useEffect(()=>{
        console.log("Count changed: " + count)
        document.title = `Count: ${count}`;
    },[count])

  return (
    <div>
        Count: {count}
        <button onClick={increment}>Increment</button>

    </div>
  )
}

export default CounterApp