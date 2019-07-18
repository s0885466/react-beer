import {PAGE_UP, PAGE_DOWN, SET_LAST_PAGE} from "../actions/pageActions";

const initialState = {
    page: 1,
    amountOnPage: 6,
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

        default:
            return state;
    }
};