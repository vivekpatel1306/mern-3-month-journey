// import { useState } from "react";

import { useEffect, useState } from "react";

import Child from "./components/Child";
import Parent from "./components/Parent";
export default function App(){
  // const [data,setData]=useState({name:"VIvek",role:"SDE"})
  // function update(){
  //   setData({...data,name:"ankit"})
  //   console.log(data.name)
  // }

  return(
    <>
    {/* <h1>{data.name}</h1>
    
    <button onClick={update}>Update</button> */}
    <Parent/>
    <Child/>
    </>
  )
} 
