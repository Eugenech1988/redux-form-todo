import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import PropTypes from 'prop-types';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import './style.scss';

class AddTodoItem extends Component {
  state = {
    startDate: moment()
  };
  render() {
    const {handleSubmit} = this.props;
    const {startDate} = this.state;
    console.log(startDate);
    return (
      <div className='add-item'>
        <h2 className='add-item-heading'>
          Add new ToDo Item
        </h2>
        <div className='add-item-wrap'>
          <form onSubmit={handleSubmit}>
            <div className='add-todo-input-wrap'>
              <label className='add-item-label' htmlFor='title'>Title:</label>
              <Field className='add-item-input' name='title' component='input' type='text'/>
            </div>
            <div className='add-todo-input-wrap'>
              <label className='add-item-label' htmlFor='description'>Description:</label>
              <Field  className='add-item-input' name='description' component='input' type='text'/>
            </div>
            <div className='hidden-div'>
              <label htmlFor="submit-date"/>
              <Field name='submit-date' component='input' type='text' value={startDate._d}/>
            </div>
            <button className='add-todo-item-btn' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    );
  };
}

AddTodoItem.propTypes = {
  handleSubmit: PropTypes.func
};

AddTodoItem = reduxForm({
  form: 'addItem' // a unique identifier for this form
})(AddTodoItem);

export default AddTodoItem;
