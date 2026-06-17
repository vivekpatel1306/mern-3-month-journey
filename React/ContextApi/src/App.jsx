import { createContext } from 'react'
import './App.css'
import Consume from './components/Consume'
export const Craete=createContext()

function App() {
 const user={
  name:"Vivek",
  role:"SDE"
 }

  return (
   <Craete.Provider value={user}>
    <Consume/>
   </Craete.Provider>
  )
}

export default App
