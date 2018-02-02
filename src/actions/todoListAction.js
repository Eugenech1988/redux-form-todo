import {
	GET_TODO_LIST,
	SET_TODO_ITEM,
	DELETE_TODO_ITEM
} from "constants/todoListConst";

export const getTodoList = listItems => ({
	type: GET_TODO_LIST,
	listItems
});

export const setTodoItem = payload => ({
	type: SET_TODO_ITEM,
	payload
});

export const deleteTodoItem = payload => ({
	type: DELETE_TODO_ITEM,
	payload
});
