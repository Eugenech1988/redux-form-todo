import {
	GET_TODO_LIST,
	SET_TODO_ITEM,
	DELETE_TODO_ITEM
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
