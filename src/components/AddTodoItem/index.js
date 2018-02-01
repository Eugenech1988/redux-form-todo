import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import PropTypes from 'prop-types';

class AddTodoItem extends Component {
  render() {
    const {handleSubmit} = this.props;
    return (
      <div className='add-item'>
        <div className="add-item-wrap">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <Field name="title" component="input" type="text"/>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <Field name="description" component="input" type="text"/>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  };
}

AddTodoItem.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'addItem' // a unique identifier for this form
})(AddTodoItem)
