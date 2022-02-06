import React from 'react';
import { TodoItem } from './TodoItem'

export const Todos = (props) => {

  let myStyle= {
    minHeight:"60vh"
  }

  return (
    <div className='container my-3' style={myStyle}>

      <h2 className='text-center my-3'>Todos List</h2>
      {props.todos.length === 0 ? 'No Todos To Display !!!' :
        props.todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        })
      }
    </div>

  )
}
