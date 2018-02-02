import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import ToDoItem from './item';
import Pagination from 'components/Pagination';
import './style.scss';

const todoInputArray = [
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 13:00'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 13:00'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 13:00'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 13:00'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 13:00'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 13:00'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 13:00'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 13:00'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 13:00'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 13:00'
  },  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 13:00'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 13:00'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 13:00'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 13:00'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 13:00'
  },
  {
    heading: 'Title1',
    content: 'some content some content some content some content',
    date: '09.09.2017 13:00'
  },
];

const mapStateToProps = state => ({});

const dispatchMapToProps = dispatch => ({});

@connect(mapStateToProps, dispatchMapToProps)
class ToDoList extends Component {
  render() {
    return (
      <div className='todo-list-wrap'>
        <div className='todo-list'>
          {
            todoInputArray.map((array, index) => {
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
        <Pagination/>
      </div>
    );
  };
}

ToDoList.propTypes = {};

export default ToDoList;
