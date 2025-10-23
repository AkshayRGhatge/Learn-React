import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './component/About/About.jsx'
import Home from './component/Home/Home.jsx'
import Contact from './component/Contact/Contact.jsx'
import User from './component/User/User.jsx'
import Github,{githubInfoLoader} from './component/Github/Github.jsx'

/*
const router = createBrowserRouter ([
  {
    path:'/',
    element:<Layout/>,
    children: [
      {
        path:"",
        element: <Home />
      },
      {
        path: "about",
        element:<About />
      },
      {
        path:"contact",
        element:<Contact />
      }
    ]
  }
])
*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route
          loader={githubInfoLoader}
          path="github"
          element={<Github />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
