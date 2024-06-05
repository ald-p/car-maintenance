import React from 'react';

const Notes = ({ notes }) => {
  return (
    <div className="mb-2">
      <h1 className="text-l font-semibold mt-4 mb-1">Additional Notes</h1>
      <p className="text-sm text-gray-400">{notes}</p>
    </div>
  );
};

export default Notes;
