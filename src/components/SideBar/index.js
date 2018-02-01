import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';
import './style.scss';

const mapStateToProps = state => ({});

const dispatchMapToProps = dispatch => ({});

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
    console.log('changed');
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
              <label className='sidebar-title-label'>
                Title
              </label>
              <input type='text' className='sidebar-title-input' name=''/>
            </div>
            <div className='sidebar-input-wrap'>
              <label className='sidebar-date-label'>
                Date
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

SideBar.propTypes = {};

export default SideBar;
