import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './style.scss';
import AddTodoItemForm from "../AddTodoItemForm";
import {setTodoItem} from "actions/todoListAction";


const mapStateToProps = state => ({

});

const dispatchMapToProps = dispatch => ({
  setTodoItem: (data) => dispatch(setTodoItem(data))
});

@connect(mapStateToProps, dispatchMapToProps)
class AddTodoItem extends Component {
  submit = values => {
    const {setTodoItem} = this.props;
    setTodoItem(values);
  };
  render() {
    return (
      <div className='add-item'>
        <h2 className='add-item-heading'>
          Add new ToDo Item
        </h2>
        <div className='add-item-wrap'>
          <AddTodoItemForm  onSubmit={this.submit}/>
        </div>
      </div>
    );
  };
}

AddTodoItem.propTypes = {
  setTodoItem: PropTypes.func
};

export default AddTodoItem;
