import React from 'react';

import './style.scss';
import ToDoList from 'components/ToDoList';
import SideBar from 'components/SideBar';
import AddTodoItem from 'components/AddTodoItem';

const AppContainer = props => {
  return (
    <div className='content-wrapp'>
      <AddTodoItem/>
      <hr className='content-separator'/>
      <div className='bottom-wrap'>
        <SideBar/>
        <ToDoList/>
      </div>
    </div>
  );
}

export default AppContainer;
