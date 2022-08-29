import React,{useState} from 'react'

const Todo = ({item,removeHandler}) => {

  const [checked,setChecked] = useState(false)

  return (
    <div>
        <div className='todo'>
            <h4 className={checked ? 'line' : ''}>{item.title}</h4>
            <div>
            <input type="checkbox" value={checked} 
            onChange={(event) => setChecked(!checked) } />
            <button onClick={() =>  removeHandler(item.id)}>remove</button>
            </div>
         </div>
    </div>
  )
}

export default Todo