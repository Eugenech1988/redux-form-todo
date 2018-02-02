import {
  GET_TODO_LIST,
  SET_TODO_ITEM,
  DELETE_TODO_ITEM
} from "constants/todoListConst";

const initialListState = [
  todoItems = []
];

export const todoList = (state = initialListState, action = {}) => ({
  switch (action.type) {
    case GET_TODO_LIST:
      return {...state, action}
}
});
