import { combineReducers } from 'redux';
import loading from './loaderReducer';
import {todoList} from './todoListReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  loading,
  todoList,
  form: formReducer
});
