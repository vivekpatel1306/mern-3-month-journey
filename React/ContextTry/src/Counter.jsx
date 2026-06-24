import { useContext } from "react";
import { Context } from "./Context";
import Child from "./Child";
export default function Counter(){
    let {count,setCount}=useContext(Context)
const increase=()=>{
    setCount(count+1)
}
const decrease=()=>{
    setCount(count-1)
}
    return(
        <>
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <Child count={count}/>
        </>
    )
}