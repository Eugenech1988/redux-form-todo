import {
  GET_TODO_LIST,
  SET_TODO_ITEM,
  DELETE_TODO_ITEM
} from "constants/todoListConst";

export const todoList = (state = [], action) => {
  switch (action.type) {
    case GET_TODO_LIST:
      return {...state, listItems: action.listItems};
    default:
      return {...state};
  }
};
