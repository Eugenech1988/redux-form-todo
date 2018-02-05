import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {deleteTodoItem} from 'actions/todoListAction';

const mapStateToProps = state => ({

});

const dispatchMapToProps = dispatch => ({
  deleteTodoItem: (data) => dispatch(deleteTodoItem(data))
});

@connect(mapStateToProps, dispatchMapToProps)
class ToDoItem extends Component {
  handleClick(e) {
    const dataTarget = e.target.getAttribute('data-index');
    const {deleteTodoItem} = this.props;
    console.log('dataTarget:',dataTarget);
    deleteTodoItem(dataTarget)
  }
  render() {
  	const {itemHeading, itemContent, itemDate, dataIndex} = this.props;
    return (
      <div className='todo-item-wrap' >
	      <span className='todo-item-close-btn' data-index={dataIndex} onClick={::this.handleClick}>x</span>
        {itemHeading && <h3 className='todo-item-heading'>
		      {itemHeading}
	      </h3>}
        {itemContent && <p className='todo-item-content'>
		      {itemContent}
	      </p>}
        {itemDate && <p className="todo-item-date">
          {itemDate}
        </p>}
      </div>
    );
  };
}

ToDoItem.propTypes = {
	itemHeading: PropTypes.string,
	itemContent: PropTypes.string,
  itemDate: PropTypes.string,
  dataIndex: PropTypes.number,
  deleteTodoItem: PropTypes.func
};

export default ToDoItem;
