
import Child from "./Child.jsx"
export default function Parent() {
    const name="vivek";
const age=90;
    return(
        <>
        {/* hello Parent */}
        <br />
    <Child name={name} age={age}/>
        </>
    )
}