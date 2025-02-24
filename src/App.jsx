import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import AdminPortal from './components/Admin/AdminPortal'
import UserPortal from './components/User/UserPortal'
// import Books from './components/Books'

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route element={<LandingPage />} path='/' />
          <Route element={<AdminPortal />} path='/adminportal/*' />
          <Route element={<UserPortal />} path='/userportal/*' />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
