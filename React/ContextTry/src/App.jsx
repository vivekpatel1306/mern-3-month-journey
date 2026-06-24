import { useState } from 'react'
import { Context } from './Context'
import Counter from './Counter'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Context.Provider value={{count,setCount}}>
    <Counter/>
   </Context.Provider>
   </>
  )
}

export default App
