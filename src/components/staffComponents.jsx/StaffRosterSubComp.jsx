import React from 'react'

function StaffRosterSubComp({date,day,shift}) {
  return (
    <div className="grid grid-cols-3 gap-2 p-1 bg-white rounded-lg shadow-md w-full mb-2">
      
      <div className="flex items-center justify-center">
        <p className="text-xl">{date}</p>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-xl">{day}</p>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-xl">{shift}</p>
      </div>
    </div>
  );
}

export default StaffRosterSubComp