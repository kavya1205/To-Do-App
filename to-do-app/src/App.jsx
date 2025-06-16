import { useState } from 'react'
import './App.css'
import ToDoApp from './components/ToDoApp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDoApp/>
    </>
  )
}

export default App
