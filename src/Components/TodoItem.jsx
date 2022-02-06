import React from 'react';
import { Button } from 'react-bootstrap'

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <Button className="btn btn-sm btn-danger my-1" onClick={() => { onDelete(todo) }}>Delete</Button>
      <Button className="btn btn-sm btn-info mx-3 my-1" onClick={() => { onDelete(todo) }}>Edit</Button><hr/>
    </div>
  )
};

