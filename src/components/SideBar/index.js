import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import {sortByTitleValue} from 'actions/todoListAction';
import 'react-datepicker/dist/react-datepicker.css';
import './style.scss';

const mapStateToProps = state => ({
  listItems: state.todoList.listItems
});

const dispatchMapToProps = dispatch => ({
  sortByTitleValue: (data) => dispatch(sortByTitleValue())
});

@connect(mapStateToProps, dispatchMapToProps)
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    }
  }
  
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  
  handleTitleChange(e) {
    const {sortByTitleValue} = this.props;
    e.preventDefault();
    sortByTitleValue(e.target);
  }
  render() {
    const {startDate} = this.state;
    return (
      <div className='sidebar'>
        <div className='sidebar-wrapper'>
          <div className='sidebar-heading'>
            Filtered by
          </div>
          <div className='sidebar-sort'>
            <div className='sidebar-input-wrap'>
              <label className='sidebar-title-label' htmlFor='title-input'>
                Title:
              </label>
              <input type='text' className='sidebar-title-input' name='title-input' id='title-input' onChange={::this.handleTitleChange}/>
            </div>
            <div className='sidebar-input-wrap'>
              <label className='sidebar-date-label'>
                Date:
              </label>
              <DatePicker className='sidebar-date-picker'
                          carret
                          selected={startDate}
                          onChange={::this.handleChange}/>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

SideBar.propTypes = {
  sortByTitleValue: PropTypes.func
};

export default SideBar;
