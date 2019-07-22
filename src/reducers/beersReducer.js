import {
    BEERS_LOADED,
    BEERS_TOGGLE_FAVORITES,
    BEERS_SORT
} from "../actions/beersActions";

const initialState = {
    beers: []
};


export const beersReducer = (state = initialState, action) => {
    switch (action.type) {
        case BEERS_LOADED:
            return {
                beers: action.payload
            };

        case BEERS_TOGGLE_FAVORITES:
            const idBeer = +action.payload;
            const index = state.beers.findIndex(beer => beer.id === idBeer);
            const beer = state.beers[index];
            beer.favorite = (beer.favorite) ? false : true;

            return {
                beers: [...state.beers.slice(0, index), beer, ...state.beers.slice(index + 1)]
            };

        case BEERS_SORT: {
            const {param, isUp} = action.payload;
            const newBeers = [...state.beers].sort((a, b) => {

                return isUp
                    ? b[param] - a[param]
                    : a[param] - b[param]
            });

            return {
                beers: newBeers
            }
        }

        default:
            return state;
    }
};