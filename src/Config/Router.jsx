import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectiveRoutes from '../Components/ProtectiveRoutes'
import Dashboard from '../Components/Screens/Dashboard'
import Login from '../Components/Screens/Login'
import Signup from '../Components/Screens/Signup'

const Router = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/signup' element={<Signup />} />
          <Route element={<ProtectiveRoutes />}>
            <Route path='/dashboard' element={<Dashboard />}/>
          </Route>
      </Routes>
    </div>
  )
}

export default Router
