
import { createContext, useContext } from "react";

//Create Context
export const TodoContext= createContext({});

//Make Context available to child components by creating provider
export const TodoProvider=TodoContext.Provider;

//Make custom hook to avail the context easily
export const useToDoContext=()=>{
    return useContext(TodoContext);
}


