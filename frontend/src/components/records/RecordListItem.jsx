import React from 'react';
import { MdDateRange } from 'react-icons/md';
import { IoMdSpeedometer } from 'react-icons/io';
import { FaTools } from 'react-icons/fa';
import { FaMoneyBillWave } from 'react-icons/fa';
import RecordListItemInfo from './RecordListItemInfo';
import ServiceList from './ServiceList';
import Button from '../base/Button';

const RecordListItem = () => {
  return (
    <div className="collapse collapse-plus bg-base-300 my-1">
      <input type="radio" name="my-accordion-3" />
      <div className="collapse-title lg:text-xl text-l font-medium">
        <div className="flex">
          <div className="pr-6">
            <span className="font-light">Date: </span>
            <span className="">01/01/2024 </span>
          </div>
          <div className="border-l border-r px-6">
            <span className="font-light">Mileage: </span>
            <span className="">30,000 miles </span>
          </div>
          <div className="text-error pl-6">$100</div>
        </div>
      </div>
      <div className="collapse-content">
        <div className="font-light">
          <RecordListItemInfo
            IconComponent={MdDateRange}
            label={'Date:'}
            data={'01/01/2024'}
          />
          <RecordListItemInfo
            IconComponent={IoMdSpeedometer}
            label={'Mileage:'}
            data={'30,000 miles'}
          />
          <RecordListItemInfo
            IconComponent={FaMoneyBillWave}
            label={'Total Cost:'}
            data={'$100'}
          />
          <RecordListItemInfo IconComponent={FaTools} label={'Services:'} />
          <ServiceList />

          <div className="flex gap-2 mt-5">
            <button className="btn btn-sm btn-warning text-l font-bold">
              Edit
            </button>
            <button className="btn btn-sm btn-error text-l font-bold">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordListItem;
