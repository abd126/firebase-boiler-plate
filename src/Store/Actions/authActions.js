import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import { auth, db } from "../../Config/Firebase"
import ActionTypes from "../constant"



const signUpAction =  ({email,password,name}) =>{
    return(dispatch) => {
        dispatch({
            type : ActionTypes.SET_LOADING
        })
        createUserWithEmailAndPassword(auth,email,password)
        .then( async (result) => {
            const dbRef = collection(db,"Users")
            let user = {
                name:name,
                UID : result.user.uid,
                email:email   
            }
            const addUser = await addDoc(dbRef,{
                UID : user.UID,
                Name : user.name,
                email : user.email

            })
            dispatch({
                type : ActionTypes.ADD_USER,
                payload : user
            })
        })
        .catch((error)=>{
            dispatch({
                type:ActionTypes.SET_ERROR,
                payload:error.message,
            })
        })
    }

}



const loginAction = ({ email, password }) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.SET_LOADING
        })
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = {
                    email: result.user.email,
                    UID: result.user.uid
                }
                localStorage.setItem("currentUser", result.user.uid)
                dispatch({
                    type: ActionTypes.USER_LOGIN,
                    payload: user
                })
            })
            .catch((error) => {
                // console.log(error)
                dispatch({
                    type: ActionTypes.SET_ERROR,
                    payload: error.message
                })

            })


    }
}


export {
    loginAction,
    signUpAction
}