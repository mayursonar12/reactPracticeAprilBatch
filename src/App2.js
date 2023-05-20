import React from "react";
import { useState } from "react";

import './App.css'
import AnimalShow from "./App2Components/AnimalShow";

 // Normal JS code can be written here

 // If we want the component to re-render itself based on change in some variable (in this case: 'count').
 // Then we need to make that variable a 'state' and then update that state through function.
 // This will help React to understand that you would like to re-render the component.



var App2 = () => {

    var [animalCount, setCount] = useState(0);


    // function useMyState (initialValue) {
    //     var array1 = [];
    //     var func1 = function () {};
    //     array1.push(initialValue);
    //     array1.push(func1);
    //     return array1;
    // }
    // console.log(useMyState(30));


    // Normal JS code can be written here
    // function handleClick () {
    //     // Code to be executed on every button click
    //     setCount(animalCount+1);
    // }

    // If you want to show a list of REACT COMPONENT, the we should create an ARRAY of these component
    // Example:   var componentList = [<AnimalShow/>, <AnimalShow/>, <AnimalShow/>, <AnimalShow/>, <AnimalShow/>, <AnimalShow/>]
    var componentList = [];
    for (let i =0; i<animalCount; i++) {
        componentList.push( <AnimalShow/>);
    }

    return (
       <>
        <button onClick={() => setCount(animalCount+1)}> Add Animal</button>
        {componentList}
       </>
    );
}



//export default App2;
export {App2}

