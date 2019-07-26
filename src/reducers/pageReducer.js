import {PAGE_UP, PAGE_DOWN, SET_LAST_PAGE, SET_AMOUNT_PAGE} from "../actions/pageActions";

const initialState = {
    page: 1,
    amountOnPage: 100,
    lastPage: 1
};

export const pageReducer = (state = initialState, action) => {
    switch (action.type) {
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