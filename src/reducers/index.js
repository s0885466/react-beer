import {combineReducers} from "redux";
import {beersReducer} from "./beersReducer";

const rootReducer = combineReducers({
    beers: beersReducer
});

export default rootReducer;
