import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import ToDoItem from './item';
import Pagination from 'components/Pagination';
import './style.scss';

const mapStateToProps = state => ({});

const dispatchMapToProps = dispatch => ({});

@connect(mapStateToProps, dispatchMapToProps)
class ToDoList extends Component {
  render() {
    return (
      <div className='todo-list-wrap'>
        <div className='todo-list'>
          <ToDoItem
            itemHeading={'title-1'}
            itemContent={'some text in item'}
          />
          <ToDoItem
            itemHeading={'title-1'}
            itemContent={'some text in item'}
          />
          <ToDoItem
            itemHeading={'title-1'}
            itemContent={'some text in item'}
          />
          <ToDoItem
            itemHeading={'title-1'}
            itemContent={'some text in item'}
          />
          <ToDoItem
            itemHeading={'title-1'}
            itemContent={'some text in item'}
          />
          <ToDoItem
            itemHeading={'title-1'}
            itemContent={'some text in item'}
          />
          <ToDoItem
            itemHeading={'title-1'}
            itemContent={'some text in item'}
          />
          <ToDoItem
            itemHeading={'title-1'}
            itemContent={'some text in item'}
          />
          <ToDoItem
            itemHeading={'title-1'}
            itemContent={'some text in item'}
          />
          < ToDoItem
            itemHeading={'title-1'}
            itemContent={'some text in item'}
          />
          <ToDoItem
            itemHeading={'title-1'}
            itemContent={'some text in item'}
          />
          < ToDoItem
            itemHeading={'title-1'}
            itemContent={'some text in item'}
          />
        </div>
        <Pagination />
      </div>
    );
  };
}

ToDoList.propTypes = {};

export default ToDoList;
