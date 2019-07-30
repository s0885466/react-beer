import {combineReducers} from "redux";
import {beersReducer} from "./beersReducer";
import {pageReducer} from "./pageReducer";
import {modalReducer} from "./modalReducer";

const rootReducer = combineReducers({
    dataBeers: beersReducer,
    dataPages: pageReducer,
    dataModal: modalReducer
});

export default rootReducer;
