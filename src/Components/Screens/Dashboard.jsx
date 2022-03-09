
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link,  Outlet, useNavigate} from 'react-router-dom'
import Profile from './Dashboard Components/Profile'
import Todo from './Dashboard Components/Todo'



const Dashboard = () => {
 
  const user = localStorage.getItem("currentUser")
  const navigate = useNavigate()
  
  const [logout , setLogout] = useState(false)

  useEffect(()=>{
    if(!user) {
      navigate('/')
    }
  },[logout])

  const signOut = () =>{
    localStorage.removeItem("currentUser")
    setLogout(true)
  }

  return (

  

    <div className='container-fluid'>
      
      <Row>
        <h1>Dashboard</h1>
      </Row>
      <Row className='sidebar'>
        <Col className='col-lg-2 col-md-3 h-100  border border-1'>
          <Col className='dashboard-option my-5'>
            <Link to="/dashboard/profile">Profile</Link>
              </Col>
          <Col className='dashboard-option my-5'>
            <Link to='/dashboard/todo'>Todo</Link>
            </Col>
          <Col className='dashboard-option my-5'>
            
            <Link to='/dashboard/logout'>Other</Link>
            </Col>
          <Col className='dashboard-option my-5'>
          <button className='btn btn-dark w-75 my-5' onClick={signOut}>
            Logout
          </button>
          </Col>



        </Col>
        <Col className='col-lg-10 col-md-9 h-100  border border-1'>
            <Outlet />
          </Col>

      </Row>


      {/* <Routes>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='profile' element={<Profile/>}/>
          <Route path='todo' element={<Todo />} />
        </Route>
      </Routes> */}


    </div>
  )
}


export default Dashboard
