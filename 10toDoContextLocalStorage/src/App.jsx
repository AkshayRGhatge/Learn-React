import React, { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {


  const [todos,setTodos] = useState([]);

  //Add new Todo
  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  //Update existing todo Item
  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((indItem)=> indItem.id === id ? todo: indItem) )
  }

  //Delete todo item
  const deleteTodo=(id)=>{
    setTodos((prev)=> prev.filter((prevTodo) => prevTodo.id !== id))
  }

  //Toggle if to complete
  const toggleComplete=(id)=>{
    setTodos((prev)=> prev.map((todo)=>todo.id === id ? {...todo, completed: !todo.completed}: todo))
  }

  //Local storage get item

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

   //Local storage set item
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                <div className="mb-4">
                     <TodoForm/>
                </div>
                <div className="flex flex-wrap gap-y-3">
                    {/*Loop and Add TodoItem here */}
                    {todos.map((todoItem)=>(
                      <div key={todoItem.id} className='w-full'>
                        <TodoItem todo={todoItem}/>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    </TodoProvider>
  )
}

export default App
