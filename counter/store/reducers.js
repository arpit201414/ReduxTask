import { ADD, SUBSTRACT } from "./actionTypes";

const initialValue = {
    counter: 0,
};

export const mainReducer = (state = initialValue, action) => {
    console.log("action>>>>", action, state.counter);
    switch (action.type) {
        case ADD:
            return { ...state, counter: state.counter + 1 }
        case SUBSTRACT:
            return { ...state, counter: state.counter - 1 }
        default:
            return state;
    }
}