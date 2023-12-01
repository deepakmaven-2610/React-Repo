const redux = require('redux');

const counterReducer = (state = {counter: 0}, action) => {
    
    if(action.type === 'increment')
    {
        return {
            counter: state.counter + 1
        };
    }
    if(action.type === 'decrement')
    {
        return {
            counter: state.counter - 1
        };
    }
    return state;  
};

const store = redux.createStore(counterReducer);

console.log(store.getState());

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);  //action 1 which make redux to execute first time
store.dispatch({type: 'increment'}); //action 2 which make redux to execute second time
store.dispatch({type: 'decrement'});