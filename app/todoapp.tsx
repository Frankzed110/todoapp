"use client";
import React, { useState } from "react";

export default function TodoApp() {
  const [toDo1, settoDo1] = useState ("");
  const [toDo, settoDo] = useState([
    {todoText: "Todo 1", completed: false},
    {todoText: "Todo 2", completed: true},
    {todoText: "Todo 3", completed: false},
    {todoText: "Todo 4", completed: true},
    
    ]);//useState is client component so we are ought to write use client at the beginning 
  const onClickHandler = (myelm: any) => {
    console.log("myelm", myelm);

    //map runs on array and returns an array
    const newTodo = toDo.map((toDo) => {
      console.log("toDo: ", toDo);
      if (toDo.todoText == myelm.todoText) {
        toDo.completed = !toDo.completed; //false will be true and true will be false with this command 
      }
      return toDo;
    });
    console.log(newTodo);
    settoDo(newTodo);
  };
  const addtoDo1 = () => {
const newtoDo1 = {todoText: toDo1, completed: false};
const newTodo = [...toDo, newtoDo1];
settoDo(newTodo);
settoDo1("");
  };
  const deletetoDo =(myTodo: any) => {
    const newTodo = toDo.filter((toDo) => {
      if (toDo.todoText == myTodo.todoText) return false;
      return true;
    });
    console.log("old toDo", toDo, "new toDo", newTodo);
    settoDo(newTodo);// never compare object with object directly rather compare string with string like todo=myTodo is wrong, it should be todo.todoText=Mytodo.todoText.
  }
    return (
    <>
      <div>ToDo List</div>
      <input 
      placeholder="add ToDo text"
      value={toDo1} 
      onChange={(e) => {
        settoDo1(e.target.value);
      }}
      />
      <button onClick={addtoDo1}>Add</button>
      <ul>
        {/* <li>{toDo[0]}</li>
    <li>{toDo[1]}</li>
    <li>To the new Task of</li>
    <li>Next.JS</li> */}
        {toDo.map((elm) => {
          return (
            <li 
            style={{ 
              color: elm.completed ? "green" : "orange", 
              fontStyle: "oblique",
              listStyle: "none",
        }}
        key={elm.todoText}
        > 
        <input type="checkbox" 
        checked={elm.completed}
        onChange={() => { 
          onClickHandler(elm);
        }}
        />
        {elm.todoText} 
        <button onClick={() =>{deletetoDo(elm)}}>
          {" "}
          Delete this from List
          </button>
        </li>
          );
        })}
      </ul>
    </>
  ); // now the above array and list can be done via loop as well
  //for loop here we use map and for rendering sake 'key' is used, elm is element
  //ctrl+D will select same word across the page
}
