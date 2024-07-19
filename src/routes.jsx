import {BrowserRouter, Route, Routes } from 'react-router-dom'
import BasePage from './pages/Base'
import Main from './pages/MainPage'
import LoadPage from './pages/Load'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<BasePage/>} >
            <Route index element={<Main/>} />
            <Route path='/load' element={<LoadPage/> } />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
