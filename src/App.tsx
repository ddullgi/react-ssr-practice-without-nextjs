import { useEffect } from 'react'
import './App.css'
import { TodoResponse } from './fetch'
import { Todo } from './components/Todo'

export default function App({ todos }: { todos: Array<TodoResponse> }) {
  useEffect(() => {
    console.log("하이!")
  }, [])

  return (
    <>
      <h1>나의 할 일!</h1>
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </ul>
    </>
  )
}


