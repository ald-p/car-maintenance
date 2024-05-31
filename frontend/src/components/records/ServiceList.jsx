import React from 'react';

const ServiceList = ({ services }) => {
  return (
    <ul className=" p-2 bg-base-200 rounded-box mt-2">
      <li className="flex gap-4 p-2 rounded-lg hover:bg-neutral">
        <div className="flex gap-2">
          <span className="font-semibold text-secondary ">Type:</span>
          <span>Oil Change</span>
        </div>
        <div className="flex gap-2  border-l border-r px-4">
          <span className="font-semibold text-secondary">Description:</span>
          <span>Changed oil for vehicle</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold text-secondary ">Cost:</span>
          <span>$32.52</span>
        </div>
      </li>
      <li className="flex gap-4 p-2 rounded-lg hover:bg-neutral">
        <div className="flex gap-2">
          <span className="font-semibold text-secondary ">Type:</span>
          <span>Oil Change</span>
        </div>
        <div className="flex gap-2  border-l border-r px-4">
          <span className="font-semibold text-secondary">Description:</span>
          <span>Changed oil for vehicle</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold text-secondary ">Cost:</span>
          <span>$32.52</span>
        </div>
      </li>
    </ul>
  );
};

export default ServiceList;
