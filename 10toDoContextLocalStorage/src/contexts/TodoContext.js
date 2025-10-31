
import { createContext, useContext } from "react";

//Create Context
export const TodoContext= createContext({
    todos:[
        {
            id:1,
            todo:"Learn React",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},
});

//Make Context available to child components by creating provider
export const TodoProvider=TodoContext.Provider;

//Make custom hook to avail the context easily
export const useToDoContext=()=>{
    return useContext(TodoContext);
}


