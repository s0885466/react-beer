import {BEERS_LOADED} from "../actions/beersActions";

const initialState = {
    beers:[]
};


export const beersReducer = (state = initialState, action) => {
    switch (action.type) {
        case BEERS_LOADED:
            return {
                beers: action.payload
            };
        default:
            return state;
    }
};