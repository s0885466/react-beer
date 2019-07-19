export const PAGE_UP = 'PAGE_UP';
export const PAGE_DOWN = 'PAGE_DOWN';
export const SET_LAST_PAGE = 'SET_LAST_PAGE';


export function nextPage() {
    return {
        type: PAGE_UP
    }
}

export function prevPage() {
    return {
        type: PAGE_DOWN
    }
}

export function setLastPage(page) {
    return {
        type: SET_LAST_PAGE,
        payload: page
    }
}