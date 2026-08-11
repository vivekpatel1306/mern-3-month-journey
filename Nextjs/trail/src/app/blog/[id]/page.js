const singleData=async({params})=>{
    const {id}=await params
    return(
        <>
        <h1>{decodeURIComponent(id)}</h1>
        </>
    )
}
export default singleData