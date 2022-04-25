import React, { useState } from 'react'
import Loader from '../Loader'
import { auth, db } from '../../Config/Firebase'
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpAction } from '../../Store/Actions/authActions';


const Signup = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number , setNumber] = useState("")
    const [password, setPassword] = useState("")
    const [loading , isLoading] = useState(false)
 

    const {setLoading , setError , } = useSelector( (state)=>state.usersReducer )
    console.log(setLoading ,  setError , "Reducer")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const signUpHandler = async (e) => {
        e.preventDefault();
        // isLoading(true)
        // // console.log(name, email, password)
        // createUserWithEmailAndPassword(auth, email, password)
        //     .then(async (result) => {
                
        //         const UID = result.user.uid
        //         const dbRef = collection(db,"Users")
        //         let user =[]
        //         try {
        //                 const addUser = addDoc(dbRef,{
        //                         Name : name,
        //                         id:result.user.uid
        //                     })
        //                 } catch (error) {
        //                         console.log(error)
        //                     }
        //                     // const docRef = await doc(db, "Users", UID)
        //                     // const userData = {
        //                     //     name, 
        //                     //     email,
        //                     //     number,
        //                     //     UID
        //                     // }
        //                     // setDoc(docRef, userData)
        //                     isLoading(false)
        //                     navigate('/')
                            
        //     }).catch((err) => {
        //         console.log(err)
        //     })
       await dispatch(
            
        signUpAction({
            email,
            name,
            password
        })
        )
       await navigate("/")

    }

    return (
        <div className='form-component d-flex'>

            <form onSubmit={signUpHandler} className="container mt-5">
            <h1>Signup</h1>
                <input type="text"
               
                    value={name}
                    placeholder="Enter Name"
                    className='form-control mt-3 input-group'
                    onChange={(e) => setName(e.target.value)} />

                <input type="email"
             
                    value={email}
                    placeholder="abc@gmail.com"
                    className='form-control mt-3 input-group'
                    onChange={(e) => setEmail(e.target.value)} />

                <input type="number"
                
                    value={number}
                    placeholder="Phone No"
                    className='form-control mt-3 input-group'
                    onChange={(e) => setNumber(e.target.value)} />


                <input type="password"
                    required
                    value={password}
                    placeholder="Enter Password"
                    className='form-control mt-3 input-group'
                    onChange={(e) => setPassword(e.target.value)} />


                { setLoading ? 
                <Loader />
                :
                
                <button className='btn btn-info w-75 my-3'>Submit</button>
            }
            <div>Already Account <Link to='/'>Login</Link></div>
            </form>



        </div>
    )
}

export default Signup
