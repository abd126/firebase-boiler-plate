import React, { useState } from 'react'
import { auth ,db} from '../../Config/Firebase'
import { collection, addDoc } from "firebase/firestore"; 
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Signup = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user , setUser] = useState([])


    
    const signUpHandler = async (e) => {
        e.preventDefault();
        console.log(name, email, password)
        createUserWithEmailAndPassword(auth ,email ,password)
        .then((result)=>{
            console.log(result)
            console.log(result.user.uid)
            const dbRef = collection(db,"Users")
            let user =[]
            try {
                const addUser = addDoc(dbRef,{
                    Name : name,
                    id:result.user.uid
                })
            } catch (error) {
                console.log(error)
            }
        }).catch((err)=>{
            console.log(err)
        })

    }

    return (
        <div>

            <h1>Signup</h1>
            <form onSubmit={signUpHandler} className="container mt-5">
                <input type="text"
                    value={name}
                    placeholder="Enter Name"
                    className='form-control mt-3 input-group'
                    onChange={(e) => setName(e.target.value)} />

                <input type="email"
                    value={email}
                    placeholder="Enter Email"
                    className='form-control mt-3 input-group'
                    onChange={(e) => setEmail(e.target.value)} />

                <input type="password"
                    value={password}
                    placeholder="Enter Password"
                    className='form-control mt-3 input-group'
                    onChange={(e) => setPassword(e.target.value)} />

                <button>Submit</button>
            </form>



        </div>
    )
}

export default Signup
