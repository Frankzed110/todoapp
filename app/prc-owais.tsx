// we can yse tag without names like in this case above with Hello Zahid. and these are called React fragments; when you get error for client component write use client. for Onchange we use 'use client'. data fetching from API, when data already there it is server there but if loader occurs then its not fetching from server. So, next js is doing this of eradicating loader. Mostly things on Next js we use server but in instances like onChange we use client use 
"use client";

import { useState } from "react";

export default function PracOwais() {
  // const val = "hello";

  const [val, setVal] = useState('Hello Zahid');//This is called use-state hook and it is necessary to update the value of variable
  const [val2, setVal2] = useState('Hello Frank');


  const onChangeHandler = (e: any) => {
    console.log("e is", e.target.value);
    setVal(e.target.value);
  };
  const onChangeHandler2 = (e: any) => {
    console.log("e is", e.target.value);
    setVal2(e.target.value);
  };
  return (
  <>
  <input type = "text" value={val} onChange={onChangeHandler}/>;
  <br />
  <input type = "text" value={val2} onChange={onChangeHandler2}/>;
  <br />
  <br />
  Length of String Zahid: {val.length}
  <br />
  Length of String Frank: {val2.length}
  </>
  );
}