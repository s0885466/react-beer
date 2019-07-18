export const PAGE_UP = 'PAGE_UP';
export const PAGE_DOWN = 'PAGE_DOWN';
export const SET_LAST_PAGE = 'SET_LAST_PAGE';


export function nextPage(beers) {
    return {
        type: PAGE_UP
    }
}

export function prevPage(beers) {
    return {
        type: PAGE_UP
    }
}

export function setLastPage(page) {
    return {
        type: SET_LAST_PAGE,
        payload: page
    }
}