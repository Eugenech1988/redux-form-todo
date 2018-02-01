import { combineReducers } from 'redux';
import loading from './loaderReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  loading,
  form: formReducer
});
