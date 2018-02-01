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
  	const {itemHeading, itemContent} = this.props;
    return (
      <div className="todo-item-wrap">
	      <span className="todo-item-close-btn">x</span>
	      <h3 className="todo-item-heading">
		      {itemHeading}
	      </h3>
	      <p className="todo-item-content">
		      {itemContent}
	      </p>
      </div>
    );
  };
}

ToDoItem.propTypes = {
	itemHeading: PropTypes.string,
	itemContent: PropTypes.string
};

export default ToDoItem;
