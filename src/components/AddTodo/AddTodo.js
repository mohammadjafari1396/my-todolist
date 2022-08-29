import React from 'react'
import './AddTodo.css'

const AddTodo = (props) => {

  return (
    <form className='add-task'>
        <input type='text' placeholder='Write your task...' value={props.valInput} 
        onChange={props.setVal}  />
        <button type='button' onClick={props.addTodo}>Add Task</button>
    </form>
  )
}

export default AddTodo