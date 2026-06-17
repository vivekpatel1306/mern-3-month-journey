import { useContext } from "react"
import {Creates as cd} from "../components/CraeteContext"

export default function Dashboard(){
    const data=useContext(cd)
    return(<>
    <h1>DAshboard</h1>
    <h1>Name:-</h1><p>{data.name}</p>
    <h1>Role:-</h1><p>{data.role}</p>
    <h1>DAshboard</h1>
    </>)
}