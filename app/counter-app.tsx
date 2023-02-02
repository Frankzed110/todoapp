"use client";
import React, { useState } from 'react'

export default function CounterApp() {
  const [counter, setCounter] = useState(0); //uses of use state
  const decrement = () => {
    console.log("in decrement");
    setCounter(counter - 1); //mo --
  }; // useState() returns an array, and you can access and use those array values inside your component using array destructuring: function HomePage() { const [] = React. useState(); // ... } The first item in the array is the state value , which you can name anything.
  const increment = () => {
    console.log("in increment");
    setCounter(counter + 1); //no ++
  };
    return (
    <>
    <button onClick={decrement}>Decrement</button> 
    {counter}
    <button onClick={increment}>Increment</button>
    </>
  ); // use of on click handler on buttons
}
