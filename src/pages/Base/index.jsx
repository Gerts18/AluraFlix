import React from 'react'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'

const BasePage = () => {
  return (
    <main>
        <Header/>
        <div>
            <Outlet/>   
        </div>
        <Footer/>
    </main>
  )
}

export default BasePage