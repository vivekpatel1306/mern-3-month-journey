import Parent from "./components/Parent"
import Counter from "./components/COunter"
import InputForm from "./components/InputForm"
import { useState } from "react"
function App() {
  const [count, setCount] = useState(0)   
  const isLoggedIn=false

  return (
    <>
    {/* <Parent/> */}
    {isLoggedIn? <Counter/>:<InputForm/>}
    {/* <Counter/>
    <InputForm/> */}
    </>
  )
}

export default App
