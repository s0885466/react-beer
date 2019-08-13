import {
    BEERS_LOADED,
    BEERS_TOGGLE_FAVORITES,
    BEERS_SORT,
    BEERS_FILTER,
    BEERS_ID_SELECTED
} from "../actions/beersActions";

export const initialState = {
    beers: [],
    filter: '',
    loading: true,
    selectedId: null
};

export const beersReducer = (state = initialState, action) => {
    switch (action.type) {
        case BEERS_LOADED:
            return {
                ...state, beers: action.payload, loading: false
            };
        case BEERS_ID_SELECTED:
            return {
                ...state, selectedId: +action.payload
            };

        case BEERS_TOGGLE_FAVORITES:
            const idBeer = +action.payload;
            const index = state.beers.findIndex(beer => beer.id === idBeer);
            if (index > -1) {
                const beer = state.beers[index];
                beer.favorite = !beer.favorite;

                return {
                    ...state, beers: [...state.beers.slice(0, index), beer, ...state.beers.slice(index + 1)]
                };
            }

        case BEERS_SORT: {
            const {param, isUp} = action.payload;
            const newBeers = [...state.beers].sort((a, b) => {

                return isUp
                    ? b[param] - a[param]
                    : a[param] - b[param]
            });

            return {
                ...state, beers: newBeers
            }
        }

        case BEERS_FILTER: {
            const filter = action.payload.toLowerCase();
            let newBeers = [...state.beers];

            if (!filter) {
                newBeers.forEach((beer) => {
                    beer.isVisible = true;
                });
            } else {
                newBeers.forEach((beer) => {
                    (beer.name.toLowerCase().indexOf(filter) > -1)
                        ? beer.isVisible = true
                        : beer.isVisible = false
                });
            }

            return {
                ...state, beers: newBeers, filter: filter
            }
        }

        default:
            return state;
    }
};