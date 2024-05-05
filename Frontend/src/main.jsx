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
import { IsAuthorizedContextProvider } from './contexts/UserContext.jsx'
import CreatePost from './Pages/CreatePost/CreatePost.jsx'
import MyProfile from './Components/Common/MyProfile.jsx'
import PostDetail from './Components/Common/PostDetail.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/create-post' element={<CreatePost/>}/>
      <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='/myprofile' element={<MyProfile/>}/>
      <Route path='/post-detail/:id' element={<PostDetail/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IsAuthorizedContextProvider>
      <RouterProvider router={router}>
        <Layout/>
      </RouterProvider>
    </IsAuthorizedContextProvider>
  </React.StrictMode>,
)
