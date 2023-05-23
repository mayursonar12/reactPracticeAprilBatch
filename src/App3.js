import React from "react";
import { useState } from "react";

import './App.css'
import AnimalShow from "./App2Components/AnimalShow";

 // Normal JS code can be written here

 // If we want the component to re-render itself based on change in some variable (in this case: 'count').
 // Then we need to make that variable a 'state' and then update that state through function.
 // This will help React to understand that you would like to re-render the component.


 const animalList = ['bird', 'dog', 'horse', 'gator', 'cat'];

 var randomNumber = Math.random();
 var myRange = randomNumber*animalList.length;
 var myIndex = Math.floor(myRange);
console.log(myIndex);


var App3 = () => {
    var counter = 0;

    const [animalCount, setAnimalCount] = useState(0);

    //var animalArray = [<AnimalShow/>, <AnimalShow/>];
    var animalArray = [];
    for (let i = 0; i< animalCount; i++) {
        animalArray.push(<AnimalShow type={animalList[myIndex]} key={i}/>);
    }

    function increment () {
        counter += 1;   // counter = counter +1;
        setAnimalCount(animalCount+1);
    }

    return (
        <>
            App3
            <br></br>
            {animalCount}
            <br></br>
            <button onClick={increment}>Add Animal</button>
            <br></br>
            {animalArray}
        </>
    )
}

//export default App3;
export {App3}

