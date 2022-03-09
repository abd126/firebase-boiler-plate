import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectiveRoutes from './ProtectiveRoutes'
import Dashboard from '../Components/Screens/Dashboard'
import Login from '../Components/Screens/Login'
import Signup from '../Components/Screens/Signup'
import Profile from '../Components/Screens/Dashboard Components/Profile'
import Todo from '../Components/Screens/Dashboard Components/Todo'
import Logout from '../Components/Screens/Dashboard Components/Logout'
import PageNotFound from '../Components/Screens/PageNotFound'




const Router = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/signup' element={<Signup />} />
            {/* <Route path='/dashboard' element={<Dashboard />}/> */}
          <Route element={<ProtectiveRoutes />}>
            <Route path='/dashboard' element={<Dashboard />}>
              <Route path='profile' element={<Profile />} />
              <Route path='todo' element={<Todo />} />
              <Route path='logout' element={<Logout />} />
            </Route>
          </Route>
          <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default Router
