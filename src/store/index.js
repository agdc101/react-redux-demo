
import { createStore } from 'redux';

const reducer = (state = { counter: 0 }, action) => {

    switch (action.type) {
        case 'increment':
            return {
                ...state,
                counter: state.counter + 1, 
            };
        case 'decrement':
            return {
                ...state,
                counter: state.counter - 1,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
