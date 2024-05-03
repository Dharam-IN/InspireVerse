import React, { useContext, useEffect, useState } from 'react'
import Footer from './Components/Common/Footer'
import {Outlet} from 'react-router-dom'
import { ThemeProvider } from './contexts/themeMode'
import Header from './Components/Common/Header'
import axios from 'axios'
import { isAuthorizedContext } from './contexts/UserContext'

const Layout = () => {

  // THEME CODE
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark")
  }

  const lightTheme = () => {
    setThemeMode("light")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])


  // USER FETCH
  const {isAuthorized, setisAuthorized, user, setUser} = useContext(isAuthorizedContext);

  console.log(user, isAuthorized)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/api/v1/getuser`,{
          withCredentials: true
        });

        // console.log(response)
        setisAuthorized(true);
        setUser(response.data.user);

      } catch (error) {
        console.log(error)
      }
    }

    fetchUser()
  }, [isAuthorized, setisAuthorized])

  return (
    <>
        <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
          <Header/>
          <Outlet/>
          <Footer/>
        </ThemeProvider>
    </>
  )
}

export default Layout 