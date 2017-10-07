import React from 'react';

const Jumbotron = ({ title }) => {
  return (
    <div className="jumbotron">
      <div className="general-info">
        <span>Munich</span>
      </div>
      <div className="section-info">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Jumbotron;
