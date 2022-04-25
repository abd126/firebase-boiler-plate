import ActionTypes from "../constant";

const INITIAL_STATE = {

    setLoading : false,
    setError : "",
    users : [],
    currentUser : {}

    
}


const usersReducer = (state = INITIAL_STATE , action) =>{
    // console.log(action.payload);

    switch(action.type){

            case ActionTypes.SET_LOADING:
                return{
                    ...state,
                    setLoading : true
                }

            case ActionTypes.ADD_USER:
                return{
                    ...state,
                    users :[action.payload],
                    setLoading : false,
                    setError : ""
                } 
                
            case ActionTypes.USER_LOGIN:
                return{
                    ...state,
                    currentUser:action.payload,
                    setLoading : false,
                    setError : ""
                }

                case ActionTypes.SET_ERROR:
                    return {
                        ...state,
                        setLoading : false,
                        setError : action.payload,
                        currentUser : {}

                    }
                default :
                return state
        }


    return state;
}


export {
    usersReducer
}