import { INCREMENT, DECREMENT } from './../actions.js/actions';
import { createStore } from 'redux'



export const incNumber = {
    type: INCREMENT,
}

export const decNumber = {
    type: DECREMENT,
}


export function reducer(state = 0, action) {
    switch (action.type) {
        case INCREMENT: 
            return state + 1;
        case DECREMENT:
            return state -1;
        default: 
            return state
    }
}

export const store = createStore(reducer);




