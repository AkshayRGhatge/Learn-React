import './App.css'
import UserContextProvider from './contexts/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  
  return (
    <UserContextProvider>
      <h2>Context API</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
