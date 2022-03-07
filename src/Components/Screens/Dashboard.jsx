import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, Route, Routes ,BrowserRouter as Router, Outlet} from 'react-router-dom'
import Profile from './Dashboard Components/Profile'
import Todo from './Dashboard Components/Todo'



const Dashboard = () => {
  function Profile() {
    return <h1>Profile</h1>
  }
  return (

  

    <div className='container-fluid'>
      
      <Row>
        <h1>Dashboard</h1>
      </Row>
      <Row className='sidebar'>
        <Col className='col-lg-2 col-md-3 h-100  border border-1'>
          <Col className='dashboard-option my-5'>
            <Link to="/profile">Profile</Link>
              </Col>
          <Col className='dashboard-option my-5'>Todo</Col>
          <Col className='dashboard-option my-5'>Other</Col>
          <Col className='dashboard-option my-5'>
          <button className='btn btn-dark w-75 my-5'>
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
