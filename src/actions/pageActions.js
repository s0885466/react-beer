export const PAGE_UP = 'PAGE_UP';
export const PAGE_DOWN = 'PAGE_DOWN';
export const SET_LAST_PAGE = 'SET_LAST_PAGE';
export const SET_AMOUNT_PAGE = 'SET_AMOUNT_PAGE';
export const SET_FIRST_PAGE = 'SET_AMOUNT_PAGE';

export function setFirstPage() {
    return {
        type: SET_FIRST_PAGE
    }
}

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

export function setAmountPage(page) {
    return {
        type: SET_AMOUNT_PAGE,
        payload: page
    }
}

