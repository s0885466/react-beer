import {beersReducer as reducer, initialState} from './beersReducer'

import {
    BEERS_LOADED,
    BEERS_TOGGLE_FAVORITES,
    BEERS_SORT,
    BEERS_FILTER,
    BEERS_ID_SELECTED
} from "../actions/beersActions";

describe('action BEERS_ID_SELECTED', () => {
   it('payload is number', () => {

       const action = {
           type: BEERS_ID_SELECTED,
           payload: '3'
       };

       expect(reducer(initialState, action)).toEqual({
           ...initialState, selectedId: 3
       });
   });

    it('payload is string', () => {

        const action = {
            type: BEERS_ID_SELECTED,
            payload: 3
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState, selectedId: 3
        });
    })
});

describe('action BEERS_LOADED', () => {
    it('array beers are loaded and set loading: false', () => {

        const action = {
            type: BEERS_LOADED,
            payload: [1,2,3]
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState, beers: action.payload, loading: false
        });
    });
});

describe('action BEERS_TOGGLE_FAVORITES', () => {
    it('id is exist and number', () => {
        const state = {
            ...initialState,
            beers: [
                {id: 1, favorite: true},
                {id: 2, favorite: true},
                {id: 3, favorite: true}
            ]
        };

        const action = {
            type: BEERS_TOGGLE_FAVORITES,
            payload: 2
        };

        expect(reducer(state, action)).toEqual({
            ...state, beers: [
                {id: 1, favorite: true},
                {id: 2, favorite: false},
                {id: 3, favorite: true}
            ]
        });
    });

    it('id is exist and string', () => {
        const state = {
            ...initialState,
            beers: [
                {id: 1, favorite: true},
                {id: 2, favorite: true},
                {id: 3, favorite: true}
            ]
        };

        const action = {
            type: BEERS_TOGGLE_FAVORITES,
            payload: '1'
        };

        expect(reducer(state, action)).toEqual({
            ...state, beers: [
                {id: 1, favorite: false},
                {id: 2, favorite: true},
                {id: 3, favorite: true}
            ]
        });
    });

    it('id is number and outside the range ', () => {
        const state = {
            ...initialState,
            beers: [
                {id: 1, favorite: true},
                {id: 2, favorite: true},
                {id: 3, favorite: true}
            ]
        };

        const action = {
            type: BEERS_TOGGLE_FAVORITES,
            payload: 10
        };

        expect(reducer(state, action)).toEqual({
            ...state
        });
    });

});

describe('action BEERS_SORT', () => {
    const state = {...initialState, beers: [
            {id: 1, cost: 500},
            {id: 2, cost: 2000},
            {id: 3, cost: 1500}
        ]};

    it('sort field is exist', () => {
        const action = {
            type: BEERS_SORT,
            payload: {
                param: 'cost',
                isUp: false
            }
        };

        expect(reducer(state, action)).toEqual({
            ...state, beers: [
                {id: 1, cost: 500},
                {id: 3, cost: 1500},
                {id: 2, cost: 2000}
            ]
        })
    });

    it('sort field is not exist', () => {
        const action = {
            type: BEERS_SORT,
            payload: {
                param: 'fdsfewccsew32',
                isUp: false
            }
        };

        expect(reducer(state, action)).toEqual({
            ...state
        })
    });

});