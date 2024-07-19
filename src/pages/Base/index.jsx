import React from 'react'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'

const BasePage = () => {
  return (
    <main>
        <Header/>
        <div>
            <Outlet/>   
        </div>
    </main>
  )
}

export default BasePage