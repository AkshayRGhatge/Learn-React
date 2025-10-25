import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import './index.css'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import {githubInfoLoader} from './components/Github/Github.jsx'

const router= createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="user/:userid" element={<User/>} />
          <Route path="github" 
                loader={githubInfoLoader}
                element={<Github/>} />
      </Route>
    )
  );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)


