export const BEERS_LOADED = 'BEERS_LOADED';
export const BEERS_TOGGLE_FAVORITES = 'BEERS_TOGGLE_FAVORITES';
export const BEERS_SORT = 'BEER_SORT';

export function loadBeers(beers) {
    return {
        type: BEERS_LOADED,
        payload: beers
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