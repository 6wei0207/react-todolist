import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'


function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([
    { text: '讀書', completed: false, id: 1 },
    { text: '看盤', completed: false, id: 2 },
    { text: '踢球', completed: false, id: 3 },
  ])

  const [tab, setTab] = useState('all')
  const [filterTodos, setFilterTodos] = useState([])

  const handleFilter = () => {
    switch (tab) {
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed))
        break
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => !todo.completed))
        break
      default:
        setFilterTodos(todos)
        break
    }
  }

  useEffect(() => {
    handleFilter()
  }, [tab, todos])


  return (
    <div className="App">
      <div className="container">
        <header>
          TodoList
        </header>

        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setTab={setTab}
        />

        <TodoList
          todos={filterTodos}
          setTodos={setTodos}
        />
      </div>
    </div>
  )
}

export default App
