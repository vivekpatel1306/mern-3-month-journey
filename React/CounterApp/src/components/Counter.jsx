import { useState } from "react";

export function Counter(){
const[count,setCount]=useState(0)
return(
    <>
    <h1>Count: {count}</h1>
    <button onClick={()=>{setCount(count++)}}>+</button>
    <button onClick={()=>setCount(count-1)}>-</button>
    </>
)
}
