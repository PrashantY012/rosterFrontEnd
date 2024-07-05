import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone';
function AttendanceComp({name,email,img,date}) {
  const [datenew,setDatenew]=useState(date)
  useEffect(()=>{
    const datetimeFromMongoDB = date; // Replace with your actual datetime

// Convert the datetime from IST to a readable format
const datetimeIST = moment.tz(datetimeFromMongoDB, 'Asia/Kolkata');
const readableFormat = datetimeIST.format('YYYY-MM-DD hh:mm A ')
  setDatenew(readableFormat)
  },[])
    return (
        <div className="grid grid-cols-4 gap-2 p-1 bg-white rounded-lg shadow-md w-full mb-2">
          <div className="flex items-center justify-center">
            <p className="text-xl ">{name}</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xl">{email}</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xl">{datenew}</p>
          </div>
          <div className="flex items-center justify-center">
            <img src={img} alt="User" className="w-18 h-5/6 object-cover rounded-lg" />
          </div>
        </div>
      );
}

export default AttendanceComp



