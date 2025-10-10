import { useState } from "react"


function App() {
  const [color, setColor]= useState("Olive")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
              <div className="flex flex-wrap justify-center gap-3 rounded-3xl bg-white px-3 py-2 shadow-lg">
                  <button onClick={()=>{setColor("Red")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "Red" }}>Red</button>
                  <button onClick={()=>{setColor("Green")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "Green" }}>Green</button>
                  <button onClick={()=>{setColor("Blue")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "Blue" }}>Blue</button>
                  <button onClick={()=>{setColor("Black")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "Black" }}>Black</button>
                  <button onClick={()=>{setColor("White")}} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{ backgroundColor: "White" }}>White</button>
              </div>
        </div>
    </div>
    </>
  )
}

export default App
