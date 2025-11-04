import {createSlice, nanoid} from '@reduxjs/toolkit';


//starting state of store
const initialState={
    todos:[{id:1,text: "Hello WOrld"}]
}

//slice version of reducer 
//name , initial state and reducers 
//reducers do have property and function
//  get 2 access 1. state and 2. action
//  1. 'state' indicate current state for instance see the initalState which value we are on it
//  2. 'action' indicate value use for the function
export const todoSlice=createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text: action.payload
            }

            state.todos.push(todo)
        },

        removeTodo:(state,action)=>{
            const id=action.payload;
            state.todos= state.todos.filter((item)=> item.id !== id)
        },

        updateTodo:(state,action)=>{
            const { id, text } = action.payload;
            state.todos= state.todos.map((item)=> item.id === id ? {...item,text} : item)
        }
    }

})
