// import { useState } from "react";

import { useEffect, useState } from "react";

// export default function App(){
//   const [search,setSearch]=useState("");
//   const products=["apple","banana","grapes"]

//   const filteredProducts=()=>{
//     return products.filter((p)=>p.includes(search.toLowerCase()))
//   }

//   return(
//     <>
//     <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
//     {filteredProducts().map((p)=>{
//       return <p>{p}</p>
//     })}
//     </>
//   )
// }

// import { useRef, useState } from "react";

// export default function App() {

//   const countRef = useRef(0);
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>State Count: {count}</h1>
//       <h1>Ref Count: {countRef.current}</h1>

//       <button
//         onClick={() => {
//           countRef.current++;
//           console.log(countRef.current);
//         }}
//       >
//         Increment Ref
//       </button>

//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increment State
//       </button>
//     </>
//   );
// }

export default function App(){
  const [data,setData]=useState({name:"VIvek",role:"SDE"})
  function update(){
    setData({...data,name:"ankit"})
    console.log(data.name)
  }

  return(
    <>
    <h1>{data.name}</h1>
    
    <button onClick={update}>Update</button>
    </>
  )
} 
