import Gchild from "./Gchild.jsx"
export default function Child(b){
    return(
        <>
        Hellooo child
        <h1>{b.name}</h1>
        <Gchild name={b.name} age={b.age}/>
        </>
    )
}
