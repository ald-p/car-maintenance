import React from 'react';

const RecordSubtitle = ({ Icon, data, color }) => {
  return (
    <div className="flex gap-2">
      <span className={`text-lg ${color}`}>
        <Icon />
      </span>
      <span>{data}</span>
    </div>
  );
};

export default RecordSubtitle;
