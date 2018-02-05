import {
	GET_TODO_LIST,
	SET_TODO_ITEM,
	DELETE_TODO_ITEM,
	SORT_TODO_LIST_BY_TITLE,
  SORT_TODO_LIST_BY_DATE
} from "constants/todoListConst";

export const getTodoList = listItems => ({
	type: GET_TODO_LIST,
	listItems
});

export const setTodoItem = addedItem => ({
	type: SET_TODO_ITEM,
	addedItem
});

export const deleteTodoItem = payload => ({
	type: DELETE_TODO_ITEM,
	payload
});

export const sortByTitleValue = payload => ({
  type: SORT_TODO_LIST_BY_TITLE,
  payload
});

export const sortByDateValue = payload => ({
  type: SORT_TODO_LIST_BY_DATE,
  payload
});
