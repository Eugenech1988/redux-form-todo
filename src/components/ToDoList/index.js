import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import ToDoItem from './item';
import './style.scss';
import {todoInputArray} from 'helpers/helpers';
import {getTodoList} from 'actions/todoListAction';

const mapStateToProps = state => ({
  todoList: state.todoList
});

const dispatchMapToProps = dispatch => ({
  getTodoList: (data) => dispatch(getTodoList(data))
});

const Fade = ({children, ...props}) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames='fade'
  >
    {children}
  </CSSTransition>
);

@connect(mapStateToProps, dispatchMapToProps)
class ToDoList extends Component {
  state = {
    todosPerPage: 16,
    currentPage: 1,
  };
  
  handlePaginationClick(e) {
    this.setState({
      currentPage: Number(e.target.id)
    });
  }
  
  handleNextClick(e) {
    e.preventDefault();
    const paginationLength = document.getElementsByClassName('pagination-page-numbers-item').length;
    const {currentPage} = this.state;
    if (currentPage < paginationLength) {
      const nextPage = Number(currentPage + 1);
      this.setState({
        currentPage: nextPage
      });
    }
  }
  
  handlePrevClick(e) {
    e.preventDefault();
    const {currentPage} = this.state;
    const prevPage = Number(currentPage - 1);
    if (currentPage > 1) {
      this.setState({
        currentPage: prevPage
      });
    }
  }
  
  componentWillMount() {
    const {getTodoList} = this.props;
    getTodoList(todoInputArray);
  }
  
  render() {
    const {currentPage, todosPerPage} = this.state;
    const {todoList} = this.props;
    let List = todoList.listItems;
    const TitleValue = todoList.titleValue;
    const DateValue = todoList.dateValue;
    if (TitleValue && DateValue) {
      List = List.filter(elem => (elem.heading.toLowerCase() === TitleValue.toLowerCase() && elem.date.substr(0, 11) === DateValue.substr(0, 11)))
    } else if (TitleValue) {
      List = List.filter(elem => (elem.heading.toLowerCase() === TitleValue.toLowerCase()));
    } else if (DateValue) {
      List = List.filter(elem => (elem.date.substr(0, 11) === DateValue.substr(0, 11)));
    }
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const pageNumbers = [];
    let currentTodos;
    if (List) {
      currentTodos = List.slice(indexOfFirstTodo, indexOfLastTodo);
      for (let i = 1; i <= Math.ceil(List.length / todosPerPage); i++) {
        pageNumbers.push(i);
      }
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={::this.handlePaginationClick}
          className={`pagination-page-numbers-item ${number === currentPage && 'active'}`}
        >
          {number}
        </li>
      );
    });
    return (
      <div className='todo-list-wrap'>
        {currentTodos &&
        <TransitionGroup className='todo-list'>
          {
            currentTodos.map((array, index) => {
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
        {pageNumbers.length > 1 &&
        <div className='pagination-wrapp' id='page-numbers'>
          <span className='pagination-left' onClick={::this.handlePrevClick}>
            {'<'}
          </span>
          <ul className='pagination-page-numbers-list'>
            {renderPageNumbers}
          </ul>
          <span className='pagination-right' onClick={::this.handleNextClick}>
            {'>'}
          </span>
        </div>
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
