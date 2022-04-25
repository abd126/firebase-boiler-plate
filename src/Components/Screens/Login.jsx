import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginAction } from '../../Store/Actions/authActions'
import Loader from '../Loader'
const Login = () => {

    //Variables
    const distpatch = useDispatch()
    const navigate = useNavigate()
    const user = localStorage.getItem("currentUser")
    const {setLoading , setError} = useSelector(state => state.usersReducer)
    console.log(setLoading,setError)
    
    
    //States
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [refresh , setRefresh] = useState(false)


    //Functions
    const LoginHandler = (e) => {
        e.preventDefault();
        
        distpatch(
            loginAction({ email, password }),
        )
        navigate("/dashboard")
        setRefresh(!refresh)
    }

    //UseEffects
    useEffect(() => {
        if (user) {
            // setRefresh(!refresh)
            navigate("/dashboard")
        }
    }, [refresh])

    return (
        <div className='form-component d-flex'>

            <form onSubmit={LoginHandler} className="container mt-5"  >
                <h1>Login</h1>

                <input type="email"

                    value={email}
                    placeholder="abc@gmail.com"
                    className='form-control mt-3 input-group'
                    onChange={(e) => setEmail(e.target.value)} />



                <input type="password"
                    required
                    value={password}
                    placeholder="Enter Password"
                    className='form-control mt-3 input-group'
                    onChange={(e) => setPassword(e.target.value)} />


                {setLoading ?
                    <Loader />
                    :

                    <button className='btn btn-info w-75 my-3' >Submit</button>
                }
                <div>
                    Don't Register<Link to='/signup'> Signup</Link>
                </div>
            </form>



        </div>

    )
}

export default Login
