import './App.css';
import Header from './Components/Header'
import { Footer } from './Components/Footer'
import { Contact } from './Components/Contact'
import { Todos } from './Components/Todos'
import { AddTodo } from './Components/AddTodo';
import { About } from './Components/About'
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") == null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (data) => {
    console.log('I Am OnDelete Function', data)

    setTodos(todos.filter((e) => {
      return e !== data;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = (title, desc) => {
    console.log('I am Adding This Todo', title, desc)

    let sno;

    if (todos.length === 0) { sno = 101; }
    else { sno = todos[todos.length - 1].sno + 1; }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([
      ...todos,
      myTodo
    ])
    console.log(myTodo)
    // if(localStorage.getItem("todos")){}
  }
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  // const [todos, setTodos] = useState([
  // {
  //   sno:101,
  //   title:"Java",
  //   desc:"This Is Java From todos List"
  // },
  // {
  //   sno:102,
  //   title:"Node Js",
  //   desc:"This Is Node Js From todos List"
  // },
  // {
  //   sno:103,
  //   title:"Python",
  //   desc:"This Is Python From todos List"
  // }
  // ]);

  return (
    <div>
      <Router>

        <Header title="Todos List" searchbar={false} />

        <Routes>

          <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          } />
           <Route exact path="/about" element={<About />} />  
           <Route exact path="/contact" element={<Contact />} />  

        </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
