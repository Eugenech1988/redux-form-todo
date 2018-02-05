import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import sort from 'fast-sort';

import ToDoItem from './item';
import Pagination from 'components/Pagination';
import './style.scss';
import {todoInputArray} from "helpers/helpers";
import {getTodoList} from "actions/todoListAction";

const mapStateToProps = state => ({
  todoList: state.todoList
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
    let List = todoList.listItems;
    const TitleValue = todoList.titleValue;
    const DateValue = todoList.dateValue;
    if (TitleValue && DateValue) {
      console.log(TitleValue, DateValue);
      List = List.filter(elem => (elem.heading.toLowerCase() === TitleValue.toLowerCase() && elem.date === DateValue))
    } else if (TitleValue) {
      List = List.filter(elem => (elem.heading.toLowerCase() === TitleValue.toLowerCase()));
    } else if (DateValue) {
      List = List.filter(elem => (elem.date === DateValue));
    }
    return (
      <div className='todo-list-wrap'>
        {List &&
        <TransitionGroup className='todo-list'>
          {
            List.map((array, index) => {
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
