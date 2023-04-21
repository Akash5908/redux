import changeTheNumber from "./Highlow";
import changeTheApi from "./Api";
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    changeTheNumber,
    changeTheApi,
})
 
export default rootReducer;