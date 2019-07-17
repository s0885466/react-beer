export const BEERS_LOADED = 'BEERS_LOADED';

export function loadBeers(beers) {
    return {
        type: BEERS_LOADED,
        payload: beers
    }
}