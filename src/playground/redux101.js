import { createStore } from 'redux';

// Action Generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: "RESET"
});

const setCount = ({count} = {}) => ({
    type: "SET",
    count
});

// REDUCERS
// 1. Reducers are pure functions.
// 2. Never change state or action.

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
            break;
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
            break;
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
            break;
        default:
            return state;
    }
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount());

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'SET',
    count: 101
});

store.dispatch(resetCount());

store.dispatch(setCount({ count: 4 }));