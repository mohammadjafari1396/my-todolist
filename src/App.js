import React,{ useState } from 'react'
import AddTodo from './components/AddTodo/AddTodo'
import Todos from './components/Todos/Todos';
import './App.css'

function App() {
  
  const [todos,setTodos] = useState([])
  const [valInput,setValInput] = useState('')

    const submitHandler = (event) => {
      event.preventDefault()
      todos.push({
          id: Math.floor(Math.random() * 1000),
          title: valInput,
          checked : false,
        })
      setValInput('')

    }

    const removeHandler = (itemId) => {
      const prevTodos = [...todos]
      const findItem = prevTodos.findIndex((item) => {
        return item.id == itemId
      })
      prevTodos.splice(findItem,1)
      setTodos(prevTodos)
    }

  return (
    <div className='app'>
      <AddTodo valInput={valInput} 
       setVal={(event) => setValInput(event.target.value)}
       addTodo={submitHandler} />
      <Todos datas={todos} removeHandler={removeHandler} />
    </div>
  );
}

export default App;
