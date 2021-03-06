export const BEERS_LOADED = 'BEERS_LOADED';
export const BEERS_TOGGLE_FAVORITES = 'BEERS_TOGGLE_FAVORITES';
export const BEERS_SORT = 'BEER_SORT';
export const BEERS_FILTER = 'BEERS_FILTER';
export const BEERS_ID_SELECTED = 'BEERS_ID_SELECTED';

export function loadBeers(beers) {
    return {
        type: BEERS_LOADED,
        payload: beers,
        loading: true
    }
}

export function toggleFavoriteInBeers(id) {
    return {
        type: BEERS_TOGGLE_FAVORITES,
        payload: id
    }
}

export function sortBeers(param) {
    return {
        type: BEERS_SORT,
        payload: param
    }
}

export function filterBeers(filter) {
    return {
        type: BEERS_FILTER,
        payload: filter
    }
}

export function selectedIdBeer(id) {
    return {
        type: BEERS_ID_SELECTED,
        payload: id
    }
}

