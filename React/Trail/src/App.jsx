import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Parent from './components/Parent'
import Child from './components/Child'
import Gchild from './components/Gchild'
import Dashboard from './components/Task'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Dashboard/>
    {/* <Parent/> */}
    {/* <Child/> */}
    {/* <Gchild/> */}
    </>
  )
}

export default App
