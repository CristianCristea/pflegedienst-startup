import React, { Component } from 'react';
import ShowDate from './ShowDate';
import ShowTime from './ShowTime';

class InfoBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: null,
      minutes: null
    };

    this.createTime = this.createTime.bind(this);
  }

  formatDateMonth(month) {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mai',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dez'
    ];

    return months[Number(month) - 1];
  }
  formatDateWeekday(weekday) {
    const weekdays = [
      'Montag',
      'Dienstag',
      'Mittwoch',
      'Donnerstag',
      'Fritag',
      'Samstag',
      'Sonntag'
    ];

    return weekdays[Number(weekday) - 1];
  }

  createDate() {
    const date = new Date();
    const weekday = this.formatDateWeekday(date.getDay());
    const month = this.formatDateMonth(date.getMonth());
    const day = date.getDate();
    const year = date
      .getFullYear()
      .toString()
      .slice(2);

    return [weekday, day, month, year];
  }

  createTime() {
    const date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();

    this.setState({
      hours: hours,
      minutes: min
    });
  }

  /*
  create new date
  get month
  get day - getDate
  get weekday - getDay
  get hours
  get minutes
  format month and weekday
  */

  render() {
    const currentDate = this.createDate();
    let startTime = setInterval(this.createTime, 1000);

    return (
      <div className="info-bar">
        <div className="header-info">
          <ShowDate
            weekday={currentDate[0]}
            day={currentDate[1]}
            month={currentDate[2]}
            year={currentDate[3]}
          />
          <ShowTime hours={this.state.hours} minutes={this.state.minutes} />
        </div>
        <div className="weather-info">
          <p>
            Et vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi
          </p>
        </div>
        <div className="general-info">
          <p>
            Et vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi
          </p>
        </div>
      </div>
    );
  }
}

export default InfoBar;
