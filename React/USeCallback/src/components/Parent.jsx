import { Child } from "./Child"

export const Parent=()=>{
const handleData=(data)=>{
    console.log(data)
}
return(
    <Child sendData={handleData}/>
)
}