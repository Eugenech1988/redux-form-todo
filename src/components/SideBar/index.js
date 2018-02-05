import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import {sortByTitleValue, sortByDateValue} from 'actions/todoListAction';
import 'react-datepicker/dist/react-datepicker.css';
import './style.scss';

const mapStateToProps = state => ({
});

const dispatchMapToProps = dispatch => ({
  sortByTitleValue: (data) => dispatch(sortByTitleValue(data)),
  sortByDateValue: (data) => dispatch(sortByDateValue(data))
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
    const {sortByDateValue} = this.props;
    this.setState({
      startDate: date
    });
    sortByDateValue(date.format('DD.MM.YYYY h:mm A'));
  }
  
  handleTitleChange(e) {
    e.preventDefault();
    const {sortByTitleValue} = this.props;
    const targetValue = e.target.value;
    sortByTitleValue(targetValue);
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
                          onChange={::this.handleChange}
                          dateFormat='DD.MM.YYYY h:mm A'
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
}

SideBar.propTypes = {
  sortByTitleValue: PropTypes.func,
  sortByDateValue: PropTypes.func
};

export default SideBar;
