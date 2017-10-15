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

    return months[Number(month)];
  }

  formatDateWeekday(day) {
    const weekdays = [
      'Montag',
      'Dienstag',
      'Mittwoch',
      'Donnerstag',
      'Freitag',
      'Samstag',
      'Sonntag'
    ];

    return weekdays[Number(day)];
  }

  createDate() {
    const date = new Date();
    const weekday = this.formatDateWeekday(date.getDay());
    const month = this.formatDateMonth(date.getMonth());
    const day = date.getDate();

    return [weekday, day, month];
  }

  createTime() {
    const date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();

    this.setState({
      hours: hours < 10 ? `0${hours}` : `${hours}`,
      minutes: min < 10 ? `0${min}` : `${min}`
    });
  }

  formatDateSuffix(day) {
    if (day >= 11 && day <= 12) {
      return 'th';
    }
    switch (day % 10) {
      case 1:
        return 'st';
        break;
      case 2:
        return 'nd';
        break;
      case 3:
        return 'rd';
        break;
      default:
        return 'th';
    }
  }

  render() {
    const currentDate = this.createDate();
    setInterval(this.createTime, 1000);

    return (
      <div className="info-bar">
        <div className="header-info">
          <ShowDate
            weekday={currentDate[0]}
            day={currentDate[1]}
            month={currentDate[2]}
            formatDateSuffix={this.formatDateSuffix}
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
