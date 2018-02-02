import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ToDoItem from './item';
import Pagination from 'components/Pagination';
import './style.scss';
import {todoInputArray} from "helpers/helpers";
import {getTodoList} from "actions/todoListAction";

const mapStateToProps = state => ({
  todoList: state.todoList.listItems
});

const dispatchMapToProps = dispatch => ({
  getTodoList: (data) => dispatch(getTodoList(data))
});

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);

@connect(mapStateToProps, dispatchMapToProps)
class ToDoList extends Component {
  componentWillMount() {
    const {getTodoList} = this.props;
    getTodoList(todoInputArray);
  }
  
  render() {
    const {todoList} = this.props;
    return (
      <div className='todo-list-wrap'>
        {todoList &&
        <TransitionGroup className='todo-list'>
          {
            todoList.map((array, index) => {
              return (
                <Fade key={index}>
                    <ToDoItem
                      className='todo-item-wrap'
                      itemHeading={array.heading}
                      itemContent={array.content}
                      itemDate={array.date}
                      dataIndex={array.id}
                    />
                </Fade>
              );
            })
          }
        </TransitionGroup>
        }
        {todoList && todoList.length > 16 &&
        <Pagination/>
        }
      </div>
    );
  };
}

ToDoList.propTypes = {
  getTodoList: PropTypes.func,
  todoList: PropTypes.array
};

export default ToDoList;
