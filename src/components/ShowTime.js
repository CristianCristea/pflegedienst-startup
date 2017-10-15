import React from 'react';
import PropTypes from 'prop-types';

const ShowTime = ({ hours, minutes }) => {
  return (
    <div className="time">
      <time>
        {hours}:{minutes}
      </time>
    </div>
  );
};

export default ShowTime;

ShowTime.propTypes = {
  hours: PropTypes.string,
  minutes: PropTypes.string
};
