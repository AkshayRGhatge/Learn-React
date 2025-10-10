import { useState } from "react"


function App() {
  const [color, setColor]= useState("Olive")

  return (
    <>
    <div className="w-100 h-screen duration-200" style={{backgroundColor: color}}>

    </div>
    </>
  )
}

export default App
