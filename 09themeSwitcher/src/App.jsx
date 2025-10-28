import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import { useEffect } from 'react';
import ThemeBtn from './components/ThemeButton';
import Card from './components/Card';

function App() {

  const [theme,setTheme]=useState("light");

  const darkTheme=()=>{
    setTheme("dark")
  }

  const lightTheme=()=>{
    setTheme("light")
  }

  //actual change in theme
  useEffect(()=>{
    const html=document.querySelector('html');
     html.classList.remove("dark","light");
     html.classList.add(theme);
  },[theme])

  return (
    <ThemeProvider value={{theme,darkTheme,lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn/>
                </div>

                <div className="w-full max-w-sm mx-auto">
                     <Card/>
                </div>
            </div>
        </div>
    </ThemeProvider>
  )
}

export default App
