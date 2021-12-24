export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const add_Todo = (todoTitle) => {
    return {
        type: ADD_TODO,
        payload: todoTitle
    }
}

export const edit_Todo = (editTodo) => ({
    type: EDIT_TODO,
    payload: editTodo
})

export const delete_Todo = (index) => ({
    type: DELETE_TODO,
    payload: index
})