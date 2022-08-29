import React from 'react'
import './Todos.css'
import Todo from '../Todo/Todo'

const Todos = ({datas,removeHandler}) => {

  return (
    <div className='bg-todo'>
        {!datas.length ? <h3 className='title-none'>! هیچ تسکی وجود ندارد</h3> : 
         datas.map((item) => {
          return (<Todo item={item} key={item.id}
            removeHandler={removeHandler}  />)
         })
        }
    </div>
  )
}

export default Todos