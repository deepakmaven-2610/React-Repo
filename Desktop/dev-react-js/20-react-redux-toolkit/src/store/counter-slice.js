import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {counter: 0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers:{
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }             //4 methods as we have 4 different if cases, these method will be called by redux
    }
})

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
