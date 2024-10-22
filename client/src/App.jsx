import React, { useEffect, useState } from 'react'
import Todos from './components/Todos'

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then(res => res.json())
      .then(res => setTodos(res))
  }, [])
  return (
    <Todos todos={todos}/>
  )
}

export default App
