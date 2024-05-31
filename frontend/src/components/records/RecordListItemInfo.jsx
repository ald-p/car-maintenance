import React from 'react';

const RecordListItemInfo = ({ IconComponent, label, data }) => {
  return (
    <div className="flex gap-2 items-center mt-2">
      <span>
        <IconComponent className="text-xl" />
      </span>
      <span className="font-bold">{label} </span>
      {data && <span>{data} </span>}
    </div>
  );
};

export default RecordListItemInfo;
