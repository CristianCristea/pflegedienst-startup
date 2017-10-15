import React from 'react';
import PropTypes from 'prop-types';

const ShowDate = ({ weekday, day, month, formatDateSuffix }) => {
  return (
    <div className="date">
      <span className="weekday">{weekday}</span>
      <span className="month">
        {month}
        <span className="day">
          {day}
          <span className="suffix">{formatDateSuffix(day)}</span>
        </span>
      </span>
    </div>
  );
};

export default ShowDate;

ShowDate.propTypes = {
  weekday: PropTypes.string.isRequired,
  day: PropTypes.number.isRequired,
  month: PropTypes.string.isRequired
};
