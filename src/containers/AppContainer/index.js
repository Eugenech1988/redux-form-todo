import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import ToDoList from 'components/ToDoList';
import SideBar from 'components/SideBar';
import AddTodoItem from 'components/AddTodoItem';

const mapStateToProps = state => ({

});

const dispatchMapToProps = dispatch => ({

});

@connect(mapStateToProps, dispatchMapToProps)
class AppContainer extends Component {
  render() {
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
  };
}

AppContainer.propTypes = {

};

export default AppContainer;
