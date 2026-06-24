import { useState } from "react";
import Child from "./Child";
export default function Parent(){
    // const name="vivek";
    // const age=20
    const [data,setData]=useState({
        name:"Vivek",
        age:20
    })
    function update(){
        setData({...data,age:"vishal"})
    }
    return (
        <>
        <h1>name: {data.name}</h1>
        <h1>age: {data.age}</h1>
        <button onClick={update}>update</button>
        <Child name={data.name} age={data.age}/>
        </>
    )
}