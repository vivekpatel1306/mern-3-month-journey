import { useState } from "react";

export default function InputForm(){
    const[input,updateInput]=useState({
        name:"",
        email:""
    })
    const update=(event)=>{
        updateInput({...input,
            [event.target.name]:event.target.value
        })
        console.log(input.name)
        console.log(input.email)
    }
    const Submit=(e)=>{
        e.preventDefault()
        sessionStorage.setItem("input",
            JSON.stringify(input)
        )
    }
    return(
        <>
        <form onSubmit={Submit}>
        <input type="email" name="email" onChange={update} placeholder="ENter mail" />
        <input type="text" name="name" onChange={update} placeholder="Enter name" />
        <button type="" >Submit</button>
        </form>
       <h1>{input.name}</h1>
       <h1>{input.email}</h1>
        </>
    )
}