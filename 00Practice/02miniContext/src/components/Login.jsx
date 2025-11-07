import React from "react";
import { useContext } from "react";
import { useState } from "react";
import UserContext from '../contexts/UserContext'


function Login(){

const [username,setUsername] = useState('');
const {setUser} =  useContext(UserContext)

 const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username})
    }
   return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login;