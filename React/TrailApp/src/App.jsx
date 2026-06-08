import Parent from "./components/Parent"
import Counter from "./components/COunter"

import { useState } from "react"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Parent/> */}
    <Counter/>
    
    </>
  )
}

export default App
