import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const useAuth = (props) =>{
    
    const user = {loggedIn : true}
    return user && user.loggedIn
}


const ProtectiveRoutes = () => {
    const isAuth = useAuth()
  return isAuth ? <Outlet /> : <Navigate to="/" />
}

export default ProtectiveRoutes
