import React from "react";
import { useState } from "react";
function Counter() {
  //let count=0;
  const [count,setCount]=useState(0)
  const increase=()=>{
    console.log("+ clicked");
    setCount(count+1);
  }
  const decrease=()=>{
    console.log("- clicked")
    setCount(count-1);
  }

  return <div>
    <button onClick={decrease}>-</button>
    <span style={{fontSize:'30px'}}>{count}</span>
    <button onClick={increase}>+</button>

    
  </div>;
}

export default Counter;
