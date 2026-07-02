export const Child=({sendData})=>{
return(
    <button onClick={()=>sendData("hello")}>click</button>
)
}