import Link from 'next/link'
const blog=async()=>{
    const post= await fetch("https://jsonplaceholder.typicode.com/posts");
    const data=await post.json();
    // const data=[
    //     {name:"vivek",
    //         age:23
    //     },
    //     {name:"ankit",
    //         age:27
    //     },
    //     {name:"sanidhya",
    //         age:22
    //     },
    // ]
    return(
        <div className='p-5'>
     { data.map((d)=>(
        <div key={d.id} className='border'> 
        <h1>{d.id}</h1>
        <Link className='text-2xl' href={`/blog/${d.title}`}>
        <p className='text-xl text-blue-900'>{d.title}</p>
        </Link>
        <p>{d.body}</p>
        </div>
     ))}
        </div>
    )
}
export default blog;