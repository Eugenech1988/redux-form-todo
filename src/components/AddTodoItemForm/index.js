import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import moment from "moment";

const thisMoment =  moment().format('0D.0M.YYYY h:mm A');
class AddTodoItemForm extends Component {
  render() {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className='add-todo-input-wrap'>
          <label className='add-item-label' htmlFor='heading'>Title:</label>
          <Field className='add-item-input' name='heading' component='input' type='text'/>
        </div>
        <div className='add-todo-input-wrap'>
          <label className='add-item-label' htmlFor='content'>Description:</label>
          <Field  className='add-item-input' name='content' component='input' type='text'/>
        </div>
        <div className='hidden-div'>
          <label htmlFor="submit-date"/>
          <Field name='date' component='input' type='text'/>
        </div>
        <button className='add-todo-item-btn' type='submit'>Submit</button>
      </form>
    );
  };
}

AddTodoItemForm = reduxForm({
  form: 'addItem', // a unique identifier for this form
  initialValues: {
    'heading': '',
    'content': '',
    'date': `${thisMoment}`
  }
})(AddTodoItemForm);

AddTodoItemForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default AddTodoItemForm;
