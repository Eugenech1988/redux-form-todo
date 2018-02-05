import {
  GET_TODO_LIST,
  SET_TODO_ITEM,
  DELETE_TODO_ITEM,
  SET_TODO_ID
} from "constants/todoListConst";

export const todoList = (state = [], action) => {
  switch (action.type) {
    case GET_TODO_LIST:
      return {...state, listItems: action.listItems};
    case SET_TODO_ITEM:
      return {
        ...state,
        listItems:[action.addedItem, ...state.listItems]
      };
    case DELETE_TODO_ITEM:
      console.log('action:',action, 'list:', state.listItems);
      return {
        ...state,
        listItems:
          state.listItems.filter(elem => elem.id !== parseInt(action.payload))
          // [...state.listItems.slice(0, action.payload), ...state.listItems.slice(action.payload + 1)]
        
      };
    case SET_TODO_ID:
      return {...state, listItems: action.id};
    default:
      return {...state};
  }
};
