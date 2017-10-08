import React from 'react';

const Jumbotron = ({ title }) => {
  return (
    <div className="jumbotron">
      <div className="container section-info">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Jumbotron;
