import Gchild from "./Gchild.jsx"
export default function Child(b){
    return(
        <>
        Helloo child
        <Gchild name={b.name} age={b.age}/>
        </>
    )
}
