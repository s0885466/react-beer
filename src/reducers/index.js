import {combineReducers} from "redux";
import {beersReducer} from "./beersReducer";
import {pageReducer} from "./pageReducer";

const rootReducer = combineReducers({
    dataBeers: beersReducer,
    dataPages: pageReducer
});

export default rootReducer;
