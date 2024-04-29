import React, { useEffect, useState } from 'react'
import Footer from './Components/Common/Footer'
import {Outlet} from 'react-router-dom'
import { ThemeProvider } from './contexts/themeMode'
import Header from './Components/Common/Header'

const Layout = () => {

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