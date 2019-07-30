import {MODAL_TOGGLE_VISIBLE} from "../actions/modalActions";

const initialState = {
    isVisible: false
};

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case MODAL_TOGGLE_VISIBLE:
            return {
                ...state, isVisible: !state.isVisible
            };

        default:
            return state;
    }
};