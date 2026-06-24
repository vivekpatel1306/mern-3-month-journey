import Gchild from "./Gchild"
export default function Child(b){
    return(
        <>
        <Gchild name={b.name} agee={b.age}/>
        <h1>{b.name }</h1>
        </>
    )
}