import { useLocation } from "react-router-dom"

export const Profile=()=>{
    const location=useLocation();
    const user=location.state
    return(
        <>
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        </>
    )
}