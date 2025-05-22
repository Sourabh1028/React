import { useState } from 'react'
import { TodoWrapper } from './component/TodoWrapper'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoWrapper />
    </>
  )
}

export default App
