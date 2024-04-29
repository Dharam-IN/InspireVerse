import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './Pages/Home/Home.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import PrivacyPolicy from './Pages/Privacy-Policy/PrivacyPolicy.jsx'
import Signup from './Components/Signup.jsx'
import Login from './Components/Login.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
