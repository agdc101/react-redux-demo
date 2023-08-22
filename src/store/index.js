
import { createStore } from 'redux';

const reducer = (state = { counter: 0, showCounter: true }, action) => {

    switch (action.type) {
        case 'increment':
            return {
                ...state,
                counter: state.counter + 1, 
                showCounter: state.showCounter
            };
        case 'increase':
            return {
                ...state,
                counter: state.counter + action.amount,
                showCounter: state.showCounter
            };
        case 'decrement':
            return {
                ...state,
                counter: state.counter - 1,
                showCounter: state.showCounter
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
