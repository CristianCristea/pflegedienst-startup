import React from 'react';
import PropTypes from 'prop-types';

const ShowDate = ({ weekday, day, month, year }) => {
  return (
    <div className="date">
      <span className="weekday">{weekday}</span>
      <span className="month">
        {month}
        <span className="day">
          {day}
          <span className="suffix">th</span>
        </span>
      </span>
    </div>
  );
};

export default ShowDate;
