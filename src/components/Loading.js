import React from 'react';
import FontAwesome from 'react-fontawesome';

const Loading = () => {
  return (
    <div className="loading">
      <FontAwesome name="cog" size="3x" spin tag="i" />
    </div>
  );
};

export default Loading;
