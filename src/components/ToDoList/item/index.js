import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({

});

const dispatchMapToProps = dispatch => ({

});

@connect(mapStateToProps, dispatchMapToProps)
class ToDoItem extends Component {
  render() {
  	const {itemHeading, itemContent, itemDate} = this.props;
    return (
      <div className='todo-item-wrap'>
	      <span className='todo-item-close-btn'>x</span>
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
  itemDate: PropTypes.string
};

export default ToDoItem;
