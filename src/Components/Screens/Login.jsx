import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from '../../Config/Firebase'
import Loader from '../Loader'
const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, isLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState({})

    const navigate = useNavigate()


    const LoginHandler = (e) => {
        e.preventDefault();
        isLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result
                setCurrentUser(user)
                isLoading(false)
                navigate("/dashboard")
            })
            .catch((error) => {
                console.log(error)

            })
    }


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


                {loading ?
                    <Loader />
                    :

                    <button className='btn btn-info w-75 my-3' setUser={currentUser} >Submit</button>
                }
                <div>
                    Don't Register<Link to='/signup'> Signup</Link>
                </div>
            </form>



        </div>

    )
}

export default Login
