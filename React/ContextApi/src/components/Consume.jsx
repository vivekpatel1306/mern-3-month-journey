import { useContext } from "react"
import { Craete } from "../App"
export default function Consume() {
    const data=useContext(Craete)
    return(
        <>
       <h1>NAme :- {data.name}</h1> <br/>
       <h1>Role :- {data.role}</h1> <br/>
        </>
    )

}