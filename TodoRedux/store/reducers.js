import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "./actions";

const initialValue = {
    data: []
}

export const todoReducers = (state = initialValue, action) => {
    console.log("state>>>", state);
    switch (action.type) {
        case ADD_TODO:
            return { ...state, data: state.data.concat(action.payload) }

        case EDIT_TODO:
            return { ...state, data: state.data.concat(action.payload) }

        case DELETE_TODO:
            return { ...state, data: state.data.splice(action.payload, 1) }
        default:
            return state;
    }
}