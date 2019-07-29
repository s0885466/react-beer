import {
    PAGE_UP,
    PAGE_DOWN,
    SET_LAST_PAGE,
    SET_AMOUNT_PAGE,
    SET_FIRST_PAGE
} from "../actions/pageActions";

const initialState = {
    page: 1,
    amountOnPage: 10,
    lastPage: 0
};

export const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FIRST_PAGE:
            return {
                ...state, page: 1
            };
        case PAGE_UP:
            return {
                ...state, page: state.page + 1
            };

        case PAGE_DOWN:
            return {
                ...state, page: state.page - 1
            };

        case SET_LAST_PAGE:
            return {
                ...state, lastPage: action.payload
            };

        case SET_AMOUNT_PAGE:
            return {
                ...state, amountOnPage: action.payload
            };

        default:
            return state;
    }
};