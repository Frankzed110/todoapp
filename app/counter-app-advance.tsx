"use client";
import React, { useState } from 'react'

export default function CounterAppAdvance() {
  const [counter, setCounter] = useState(0); //uses of use state
  const decrement = (howMuch = 1) => {
    console.log("in decrement");
    setCounter(counter - howMuch); //mo --
  }; // useState() returns an array, and you can access and use those array values inside your component using array destructuring: function HomePage() { const [] = React. useState(); // ... } The first item in the array is the state value , which you can name anything.
  const increment = (howMuch = 1) => {
    console.log("in increment");
    setCounter(counter + howMuch); //no ++
  };
    return (
    <>
    <button onClick={()=>decrement(3)}>Decrement by 3</button> 
    <button onClick={()=>decrement(2)}>Decrement by 2</button> 
    <button onClick={()=>decrement(1)}>Decrement</button> 
    {counter}
    <button onClick={()=>increment(1)}>Increment</button>
    <button onClick={()=>increment(2)}>Increment by 2</button>
    <button onClick={()=>increment(3)}>Increment by 3</button>
    </>
  ); // use of on click handler on buttons/ in on click we can never use decrement(); this invokes function instead we have to send it a reference only like () => increment(1)
  //On approach for increment and decrement by 2 and 3 is to make function for each like we did earlier and use it, it is one approach. Ref in Owais video 
//default we have kept 1 so if you do not pass any value it still has 1 increment 
}
//we can make even only one function for increment and decrement for the above two functions 
