import { combineReducers } from "redux";
import { usersReducer } from "./authReducer";

const rootReducer = combineReducers({
    usersReducer, 
})
   

    export default rootReducer;