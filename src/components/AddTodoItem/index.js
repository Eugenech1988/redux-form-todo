import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './style.scss';
import AddTodoItemForm from '../AddTodoItemForm';
import {setTodoItem} from 'actions/todoListAction';


const mapStateToProps = state => ({
  listItems: state.todoList.listItems
});

const dispatchMapToProps = dispatch => ({
  setTodoItem: (data) => dispatch(setTodoItem(data))
});

@connect(mapStateToProps, dispatchMapToProps)
class AddTodoItem extends Component {
  submit = values => {
    const {setTodoItem, listItems} = this.props;
    const idArray = [];
    for (let i = 0; i < listItems.length; i++) {
      idArray.push(listItems[i].id);
    }
    const maxId = Math.max(...idArray);
    setTodoItem(Object.assign({}, values, {id: maxId + 1}));
  };
  render() {
    return (
      <div className='add-item'>
        <h2 className='add-item-heading'>
          {`Add new ToDo Item`}
        </h2>
        <div className='add-item-wrap'>
          <AddTodoItemForm  onSubmit={this.submit}/>
        </div>
      </div>
    );
  };
}

AddTodoItem.propTypes = {
  setTodoItem: PropTypes.func,
  id: PropTypes.number
};

export default AddTodoItem;
