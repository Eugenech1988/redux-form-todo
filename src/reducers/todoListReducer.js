import {
  GET_TODO_LIST,
  SET_TODO_ITEM,
  DELETE_TODO_ITEM
} from "constants/todoListConst";

export const todoList = (state = [], action) => {
  switch (action.type) {
    case GET_TODO_LIST:
      return {...state, listItems: action.listItems};
    case SET_TODO_ITEM:
      return {
        ...state,
        listItems:[...state.listItems, action.addedItem]
      };
    case DELETE_TODO_ITEM:
      return {
        ...state,
        listItems: [...state.listItems.slice(0, action.payload),
        ...state.listItems.slice(action.payload + 1)]
      };
    default:
      return {...state};
  }
};
