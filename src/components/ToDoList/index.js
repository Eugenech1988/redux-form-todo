import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import ToDoItem from './item';
import Pagination from 'components/Pagination';
import './style.scss';
import {getTodoList} from "actions/todoListAction";

const todoInputArray = [
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 1:00 AM'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 1:00 AM'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 1:00 AM'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 1:00 AM'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 1:00 AM'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 1:00 AM'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 1:00 AM'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 1:00 AM'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 1:00 AM'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 1:00 AM'
  }, {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 1:00 AM'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 1:00 AM'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 1:00 AM'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 1:00 AM'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 1:00 AM'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 1:00 AM'
  },
];

const mapStateToProps = state => ({
  todoList: state.todoList.listItems
});

const dispatchMapToProps = dispatch => ({
  getTodoList: (data) => dispatch(getTodoList(data))
});

@connect(mapStateToProps, dispatchMapToProps)
class ToDoList extends Component {
  componentWillMount() {
    const {getTodoList} = this.props;
    getTodoList(todoInputArray);
  }
  
  render() {
    const {todoList} = this.props;
    console.log(todoList);
    return (
      <div className='todo-list-wrap'>
        {todoList &&
        <div className='todo-list'>
          {
            todoList.map((array, index) => {
              return (
                <ToDoItem
                  itemHeading={array.heading}
                  itemContent={array.content}
                  itemDate={array.date}
                  key={index}
                />
              );
            })
          }
        </div>
        }
        <Pagination/>
      </div>
    );
  };
}

ToDoList.propTypes = {
  getTodoList: PropTypes.func,
  todoList: PropTypes.array
};

export default ToDoList;
