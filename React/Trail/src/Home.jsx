import { useNavigate } from "react-router-dom"

export const Home =()=>{
    const navigate=useNavigate()
    const data={
        name:"vivek",
        age:20
    }
    function handleClick(){
        navigate("/profile",{state:data})
    }
    return(
        <>
        <h1>Home Page</h1>
        <button onClick={handleClick}>profile</button>
        </>
    )
}