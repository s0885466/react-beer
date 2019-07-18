import {BEERS_LOADED, BEERS_TOGGLE_FAVORITES} from "../actions/beersActions";

const initialState = {
    beers:[]
};


export const beersReducer = (state = initialState, action) => {
    switch (action.type) {
        case BEERS_LOADED:
            return {
                beers: action.payload
            };

        case BEERS_TOGGLE_FAVORITES:
            const idBeer = + action.payload;
            const index = state.beers.findIndex(beer => beer.id === idBeer);
            const beer = state.beers[index];
            beer.favorite = (beer.favorite) ? false : true;


            return {
                beers: [...state.beers.slice(0, index), beer, ...state.beers.slice(index + 1)]
            };

        default:
            return state;
    }
};